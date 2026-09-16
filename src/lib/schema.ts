/**
 * Shared JSON-LD builders.
 *
 * One @id per entity so every page references the same Organization node
 * instead of redeclaring it — that is what lets Google consolidate the pages
 * into a single entity rather than treating each as an unrelated business.
 */

export const SITE_URL = "https://saffronmorocco.com";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Reference to the Organization declared on the homepage. */
export const orgRef = { "@id": ORG_ID };

type Crumb = { name: string; path: string };

export function breadcrumbs(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.path}`,
    })),
  };
}

/**
 * A listing page (products, tea, bundles, bulk, blog index).
 * ItemList tells Google the page is a curated collection, not thin content.
 */
export function collectionPage(opts: {
  path: string;
  name: string;
  description: string;
  items?: { name: string; path: string }[];
  crumbs: Crumb[];
}) {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}${opts.path}#page`,
      url: `${SITE_URL}${opts.path}`,
      name: opts.name,
      description: opts.description,
      isPartOf: { "@id": WEBSITE_ID },
      about: orgRef,
      publisher: orgRef,
    },
  ];

  if (opts.items?.length) {
    graph.push({
      "@type": "ItemList",
      "@id": `${SITE_URL}${opts.path}#itemlist`,
      numberOfItems: opts.items.length,
      itemListElement: opts.items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        url: `${SITE_URL}${it.path}`,
      })),
    });
  }

  graph.push(breadcrumbs(opts.crumbs));
  return { "@context": "https://schema.org", "@graph": graph };
}

/** A standalone informational page (about, contact, legal). */
export function webPage(opts: {
  path: string;
  name: string;
  description: string;
  type?: "AboutPage" | "ContactPage" | "WebPage";
  crumbs: Crumb[];
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": opts.type ?? "WebPage",
        "@id": `${SITE_URL}${opts.path}#page`,
        url: `${SITE_URL}${opts.path}`,
        name: opts.name,
        description: opts.description,
        isPartOf: { "@id": WEBSITE_ID },
        about: orgRef,
        publisher: orgRef,
      },
      breadcrumbs(opts.crumbs),
    ],
  };
}

/** Serialise for <script type="application/ld+json">. */
export function ld(data: unknown) {
  return { __html: JSON.stringify(data) };
}

/**
 * Decode the HTML entities WordPress leaves in titles and excerpts.
 *
 * React escapes whatever it renders, so a stored "&#038;" became "&amp;#038;"
 * in the markup and Google displayed a literal "&#038;" in the result snippet.
 * Decoding before handing the string to Next's metadata fixes the SERP text.
 */
export function decodeEntities(input: string): string {
  return input
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(parseInt(code, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

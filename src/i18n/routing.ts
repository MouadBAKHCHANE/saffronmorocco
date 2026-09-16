import type { Locale } from "./dictionaries";

export const SITE_URL = "https://saffronmorocco.com";

/** English is served from the root; only these carry a URL prefix. */
export const PREFIXED_LOCALES = ["fr", "es"] as const;
export type PrefixedLocale = (typeof PREFIXED_LOCALES)[number];

export function isPrefixedLocale(v: string): v is PrefixedLocale {
  return (PREFIXED_LOCALES as readonly string[]).includes(v);
}

/**
 * Routes that exist in all three languages.
 *
 * Deliberately excludes /blog/* and /products/*: those carry article and
 * product copy that has never been translated (posts.json and products.json
 * have no *_fr / *_es fields), so publishing them under /fr would serve English
 * text on a French URL — duplicate content, not localisation.
 */
export const LOCALIZED_ROUTES = [
  "",
  "/about",
  "/heritage",
  "/products",
  "/tea",
  "/bundles",
  "/bulk",
  "/contact",
  "/privacy",
  "/terms",
  "/shipping",
] as const;

export type LocalizedRoute = (typeof LOCALIZED_ROUTES)[number];

export function isLocalizedRoute(path: string): path is LocalizedRoute {
  return (LOCALIZED_ROUTES as readonly string[]).includes(path);
}

/** Path for a route in a locale: "" for en, "/fr/about" for fr. */
export function localePath(route: string, locale: Locale): string {
  const clean = route === "/" ? "" : route;
  if (locale === "en") return clean || "/";
  return `/${locale}${clean}`;
}

/**
 * hreflang cluster for a route, for Next's `alternates`.
 * Every page in the cluster lists every other plus x-default, which is what
 * makes the annotations reciprocal — Google ignores one-way hreflang.
 */
export function alternatesFor(route: string) {
  if (!isLocalizedRoute(route)) {
    // English-only page: canonical only, no language alternates to claim.
    return { canonical: localePath(route, "en") };
  }
  return {
    canonical: localePath(route, "en"),
    languages: {
      "en": `${SITE_URL}${localePath(route, "en")}`,
      "fr": `${SITE_URL}${localePath(route, "fr")}`,
      "es": `${SITE_URL}${localePath(route, "es")}`,
      "x-default": `${SITE_URL}${localePath(route, "en")}`,
    },
  };
}

/** Same cluster, but canonical points at the localized URL. */
export function alternatesForLocale(route: string, locale: PrefixedLocale) {
  const base = alternatesFor(route);
  return { ...base, canonical: `${SITE_URL}${localePath(route, locale)}` };
}

/** Rewrite an internal href into the active locale. */
export function withLocale(href: string, locale: Locale): string {
  if (locale === "en") return href;
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  // query strings live on localized routes too (/fr/blog?category=…)
  const [path, query] = href.split("?");
  const normalized = path === "/" ? "" : path.replace(/\/$/, "");
  if (!isLocalizedRoute(normalized)) return href; // untranslated: stay English
  return `/${locale}${normalized}${query ? `?${query}` : ""}` || `/${locale}`;
}

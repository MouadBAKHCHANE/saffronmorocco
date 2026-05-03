import type { Metadata } from "next";
import { SITE_NAME, CONTACT_INFO, IMAGE_URLS } from "@/lib/constants";
import HeritagePageContent from "@/components/heritage/HeritagePageContent";

export const metadata: Metadata = {
  title: "How Moroccan Saffron is Made — Harvest, Drying & AOP Heritage",
  description:
    "From Crocus Sativus flower to crimson thread — see how Taliouine saffron is hand-harvested, separated, and cured by the women of the Bakhchane Cooperative. Centuries of Moroccan tradition.",
  keywords: [
    "how saffron is made",
    "moroccan saffron harvest",
    "taliouine saffron heritage",
    "crocus sativus harvest",
    "saffron drying process",
    "AOP saffron tradition",
  ],
  alternates: { canonical: "/heritage" },
  openGraph: {
    title: "How Moroccan Saffron is Made — Harvest, Drying & AOP Heritage",
    description:
      "See how Taliouine saffron is hand-harvested and cured by the women of the Bakhchane Cooperative.",
    type: "website",
    url: "https://saffronmorocco.com/heritage",
  },
};

export default function HeritagePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: "https://saffronmorocco.com",
    logo: IMAGE_URLS.logoColor,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT_INFO.address[0],
      addressLocality: "Taliouine",
      addressRegion: "Souss-Massa",
      addressCountry: "MA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT_INFO.phone,
      email: CONTACT_INFO.email,
      contactType: "customer service",
    },
    description:
      "Premium Moroccan saffron cooperative based in Taliouine, cultivated by women, rooted in tradition.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeritagePageContent />
    </>
  );
}

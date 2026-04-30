import type { Metadata } from "next";
import { getProducts } from "@/lib/wordpress";
import HeroVideo from "@/components/sections/HeroVideo";
import HeritageSection from "@/components/sections/HeritageSection";
import HarvestGrid from "@/components/sections/HarvestGrid";
import SustainabilityCards from "@/components/sections/SustainabilityCards";
import OriginMap from "@/components/sections/OriginMap";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import QuoteSection from "@/components/sections/QuoteSection";
import BlogSection from "@/components/sections/BlogSection";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://saffronmorocco.com/#organization",
      name: "iD BAKHCHANE — Bakhchane Saffron Cooperative",
      alternateName: "Bakhchane Cooperative",
      url: "https://saffronmorocco.com",
      logo: {
        "@type": "ImageObject",
        url: "https://saffronmorocco.com/images/logo-color.webp",
        width: 512,
        height: 512,
      },
      image: "https://saffronmorocco.com/images/hero-saffron-threads.webp",
      description:
        "Women-led saffron cooperative in Taliouine, Morocco, producing premium AOP-certified Moroccan saffron, hand-harvested from the Crocus Sativus.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Douar Ighri, Commune Sidi Hsaine",
        addressLocality: "Taliouine",
        addressRegion: "Souss-Massa",
        addressCountry: "MA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 30.4711324,
        longitude: -7.7170078,
      },
      telephone: "+212611714711",
      email: "contact@saffronmorocco.com",
      priceRange: "$$-$$$",
      sameAs: [
        "https://instagram.com/idbakhchane",
        "https://facebook.com/idbakhchane",
        "https://wa.me/212611714711",
      ],
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
      knowsAbout: [
        "Moroccan saffron",
        "Taliouine saffron",
        "AOP saffron",
        "ISO 3632 saffron",
        "Crocus Sativus cultivation",
        "Saffron harvesting",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://saffronmorocco.com/#website",
      url: "https://saffronmorocco.com",
      name: "iD BAKHCHANE Moroccan Saffron",
      description:
        "Buy premium AOP-certified Moroccan saffron direct from the Bakhchane Cooperative in Taliouine.",
      publisher: { "@id": "https://saffronmorocco.com/#organization" },
      inLanguage: "en-US",
    },
  ],
};

export default async function HomePage() {
  const allProducts = await getProducts();

  const featuredProducts = (allProducts ?? []).slice(0, 3).map((p) => ({
    title: p.title.rendered,
    slug: p.slug,
    excerpt: p.excerpt.rendered.replace(/<[^>]+>/g, ""),
    featuredImage: p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "",
  }));

  void featuredProducts;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
      />
      <HeroVideo />
      <HeritageSection />
      <HarvestGrid />
      <SustainabilityCards />
      <BenefitsSection />
      <OriginMap />
      <BlogSection />
      <QuoteSection />
    </>
  );
}

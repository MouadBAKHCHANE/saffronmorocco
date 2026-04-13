import { getProducts } from "@/lib/wordpress";
import HeroVideo from "@/components/sections/HeroVideo";
import HeritageSection from "@/components/sections/HeritageSection";
import HarvestGrid from "@/components/sections/HarvestGrid";
import SustainabilityCards from "@/components/sections/SustainabilityCards";
import OriginMap from "@/components/sections/OriginMap";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import QuoteSection from "@/components/sections/QuoteSection";

export default async function HomePage() {
  const allProducts = await getProducts();

  const featuredProducts = (allProducts ?? []).slice(0, 3).map((p) => ({
    title: p.title.rendered,
    slug: p.slug,
    excerpt: p.excerpt.rendered.replace(/<[^>]+>/g, ""),
    featuredImage: p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "",
  }));

  void featuredProducts; // available for future product sections

  return (
    <>
      <HeroVideo />
      <HeritageSection />
      <HarvestGrid />
      <SustainabilityCards />
      <BenefitsSection />
      <OriginMap />
      <QuoteSection />
    </>
  );
}

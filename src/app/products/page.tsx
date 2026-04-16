import type { Metadata } from "next";
import Image from "next/image";
import { getProducts, getProductCategories } from "@/lib/wordpress";
import { IMAGE_URLS } from "@/lib/constants";
import ProductGrid from "@/components/products/ProductGrid";
import FadeUp from "@/components/animations/FadeUp";

export const metadata: Metadata = {
  title: "The Collection | Premium Moroccan Saffron",
  description:
    "Discover iD BAKHCHANE's curated saffron collection. Hand-harvested in Taliouine, AOP certified, ISO 3632 Category I.",
  openGraph: {
    title: "The Collection | Premium Moroccan Saffron",
    description:
      "Explore our range of premium Moroccan saffron products from Bakhchane Cooperative.",
    type: "website",
  },
};

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getProductCategories(),
  ]);

  return (
    <main className="min-h-screen bg-surface selection:bg-primary/30">
      {/* ── Editorial Hero ── */}
      <section className="relative min-h-[50vh] flex items-center pt-28 pb-10 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={IMAGE_URLS.productsHero}
            alt="iD BAKHCHANE saffron collection"
            fill
            priority
            className="object-cover opacity-80"
          />
          <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-black/70 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-surface/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-surface to-transparent" />
          <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-surface/70 via-surface/30 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 w-full">
          <FadeUp>
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="h-[1px] w-10 bg-primary/60" />
              <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">
                The Collection
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl font-light text-off-white leading-[0.95] tracking-tight max-w-5xl">
              Curated Saffron,<br />
              <span className="italic text-primary">By the Gram.</span>
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* ── Collection ── */}
      <section className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 pb-32">
        <ProductGrid products={products} categories={categories} />
      </section>
    </main>
  );
}

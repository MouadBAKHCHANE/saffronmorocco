import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
      <section className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 pb-16 md:pb-32">
        <ProductGrid products={products} categories={categories} />
      </section>

      {/* ── Additional Collections ── */}
      <section className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 pb-24 md:pb-32">
        <FadeUp>
          <Link
            href="/tea"
            className="group block relative aspect-[16/9] rounded-sm overflow-hidden border border-outline-variant/10 shadow-xl"
          >
            <Image
              src={IMAGE_URLS.teaCollection}
              alt="Tea collection"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-1">
                New Collection
              </p>
              <h3 className="font-headline text-2xl text-off-white italic">
                Saffron Tea <span className="not-italic">Infusions</span>
              </h3>
            </div>
          </Link>
        </FadeUp>
      </section>

      {/* ── Bulk CTA ── */}
      <section className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 pb-24 md:pb-32">
        <FadeUp>
          <Link
            href="/bulk"
            className="group flex flex-col md:flex-row items-center gap-6 md:gap-12 bg-surface-container-low/20 border border-outline-variant/10 rounded-sm p-6 md:p-10 hover:border-primary/30 transition-colors"
          >
            <div className="relative w-40 h-40 md:w-64 md:h-64 shrink-0 rounded-sm overflow-hidden">
              <Image
                src="/images/bulk-selection.png"
                alt="Bulk saffron"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left flex-1 space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                Wholesale
              </p>
              <h3 className="font-headline text-2xl md:text-3xl text-on-surface italic">
                Need Larger Quantities?
              </h3>
              <p className="text-stone-500 text-sm font-light max-w-lg">
                From 50g to 500g — explore our bulk selection for restaurants, retailers, and distributors.
              </p>
            </div>
            <span className="material-icons-outlined text-primary text-2xl group-hover:translate-x-2 transition-transform hidden md:block">
              east
            </span>
          </Link>
        </FadeUp>
      </section>
    </main>
  );
}

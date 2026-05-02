import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProducts, getProductCategories } from "@/lib/wordpress";
import { IMAGE_URLS } from "@/lib/constants";
import ProductGrid from "@/components/products/ProductGrid";
import FadeUp from "@/components/animations/FadeUp";

export const metadata: Metadata = {
  title: "Buy Moroccan Saffron Online — Threads, Powder, Tea & Bundles",
  description:
    "Shop premium Moroccan saffron direct from Taliouine. AOP certified threads, powders, tea infusions, and gift bundles. Hand-harvested, ISO 3632 Cat I, worldwide shipping.",
  keywords: [
    "buy moroccan saffron",
    "saffron threads online",
    "premium saffron",
    "taliouine saffron shop",
    "saffron powder",
    "saffron tea",
    "AOP saffron",
  ],
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Buy Moroccan Saffron Online — Threads, Powder, Tea & Bundles",
    description:
      "Premium AOP saffron from Taliouine, Morocco. Direct from the Bakhchane Cooperative. Worldwide shipping.",
    type: "website",
    url: "https://saffronmorocco.com/products",
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

      {/* ── Additional Collections — Saffron Tea Atelier ── */}
      <section className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 pb-24 md:pb-32">
        <FadeUp>
          <Link
            href="/tea"
            className="group relative flex flex-col md:flex-row items-stretch gap-0 rounded-sm overflow-hidden border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-2xl bg-gradient-to-br from-surface-container-low/40 via-surface-container/20 to-surface-container-low/40"
          >
            {/* Left — Image with overlay tag */}
            <div className="relative w-full md:w-2/5 aspect-[4/3] md:aspect-auto shrink-0 overflow-hidden">
              <Image
                src={IMAGE_URLS.teaCollection}
                alt="Saffron tea infusion collection"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Image gradient veil for legibility of overlay tag */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-surface/30 md:to-transparent" />
              {/* "New" badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white">
                  Just Launched
                </span>
              </div>
              {/* Decorative tin-count chip */}
              <div className="absolute bottom-4 left-4 hidden md:flex items-baseline gap-1.5 px-3 py-1.5 rounded-sm bg-surface/80 backdrop-blur-md border border-white/10">
                <span className="font-headline text-2xl text-primary italic leading-none">12</span>
                <span className="text-[9px] uppercase tracking-widest text-on-surface-variant font-medium">sachets / tin</span>
              </div>
            </div>

            {/* Right — Editorial content */}
            <div className="relative flex-1 flex flex-col justify-between p-8 md:p-12 lg:p-14">
              {/* Top — overline + headline + tasting note */}
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <div className="h-px w-8 bg-primary" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">
                    Tea Atelier
                  </p>
                </div>

                <h3 className="font-headline text-3xl md:text-4xl lg:text-5xl text-on-surface leading-[1.05] tracking-tight">
                  Saffron Tea
                  <br />
                  <span className="italic font-light text-primary">Infusions</span>
                </h3>

                <p className="text-on-surface-variant text-sm md:text-base font-light leading-relaxed max-w-md italic border-l-2 border-primary/20 pl-4">
                  &ldquo;A symphony of world-class tea leaves and the legendary saffron of Taliouine.&rdquo;
                </p>
              </div>

              {/* Middle — blend chips */}
              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  { name: "Sencha", note: "Green" },
                  { name: "Rooibos", note: "Caffeine-free" },
                  { name: "Chai", note: "Spiced" },
                ].map((blend) => (
                  <div
                    key={blend.name}
                    className="group/chip flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface-container-low/60 border border-outline-variant/15 hover:border-primary/40 transition-colors"
                  >
                    <span className="material-icons-outlined text-primary text-xs scale-90">local_cafe</span>
                    <span className="text-xs font-headline italic text-on-surface">{blend.name}</span>
                    <span className="text-[9px] uppercase tracking-wider text-stone-500 hidden sm:inline">· {blend.note}</span>
                  </div>
                ))}
              </div>

              {/* Bottom — CTA */}
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-headline text-lg text-primary font-bold">$35</span>
                  <span className="text-stone-500 text-xs">—</span>
                  <span className="font-headline text-lg text-primary font-bold">$38</span>
                  <span className="text-[9px] uppercase tracking-widest text-on-surface-variant ml-1">/ tin</span>
                </div>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-primary group-hover:gap-4 transition-all">
                  Discover the series
                  <span className="material-icons-outlined text-base group-hover:translate-x-1 transition-transform">east</span>
                </span>
              </div>

              {/* Decorative oversized initial */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 -right-2 select-none font-headline text-[10rem] leading-none text-primary/[0.04] italic"
              >
                T
              </div>
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

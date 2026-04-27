"use client";

import { useState } from "react";
import Link from "next/link";
import type { WPProduct, WPProductCategory } from "@/lib/types";
import ProductCard from "./ProductCard";
import { getProductImageForWeight } from "@/lib/product-images";
import FadeUp from "@/components/animations/FadeUp";

const STATIC_FILTERS = [
  { label: "Spice", slug: "spice" },
  { label: "Tea", slug: "tea" },
  { label: "Bundles", slug: "bundles" },
] as const;

// Map a filter slug to the WordPress category slugs it should include.
// "Bundles" rolls up bundle products and the tea collection.
const FILTER_CATEGORY_SLUGS: Record<string, string[]> = {
  bundles: ["bundles", "tea"],
};

interface ProductGridProps {
  products: WPProduct[];
  categories: WPProductCategory[];
}

export default function ProductGrid({
  products,
  categories,
}: ProductGridProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Match static filters to WP categories by slug.
  // null = "All Products"; every other filter maps to one or more WP category slugs.
  const filtered =
    activeFilter === null
      ? products
      : products.filter((p) => {
          const targetSlugs = FILTER_CATEGORY_SLUGS[activeFilter] ?? [activeFilter];
          const targetIds = categories
            .filter((c) => targetSlugs.includes(c.slug))
            .map((c) => c.id);
          return targetIds.some((id) => p.product_category.includes(id));
        });

  return (
    <div>
      {/* Editorial filter bar */}
      <div className="border-b border-outline-variant/10 pb-4 mb-10 md:mb-16 -mx-8 sm:-mx-12 lg:-mx-24 md:mx-0">
        <div className="relative">
          <div className="flex flex-nowrap md:flex-wrap gap-4 md:gap-10 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-8 sm:px-12 lg:px-24 md:px-0 pr-20 md:pr-0">
            <button
              type="button"
              onClick={() => setActiveFilter(null)}
              className={`shrink-0 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] py-1.5 px-3 md:px-0 md:py-0 pb-2 relative rounded-full md:rounded-none transition-colors ${
                activeFilter === null
                  ? "text-primary bg-primary/10 md:bg-transparent"
                  : "text-stone-400 hover:text-on-surface"
              }`}
            >
              All Products
              {activeFilter === null && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary hidden md:block" />
              )}
            </button>
            {STATIC_FILTERS.map((f) => (
              <button
                key={f.slug}
                type="button"
                onClick={() => setActiveFilter(activeFilter === f.slug ? null : f.slug)}
                className={`shrink-0 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] py-1.5 px-3 md:px-0 md:py-0 pb-2 relative rounded-full md:rounded-none transition-colors ${
                  activeFilter === f.slug
                    ? "text-primary bg-primary/10 md:bg-transparent"
                    : "text-stone-400 hover:text-on-surface"
                }`}
              >
                {f.label}
                {activeFilter === f.slug && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary hidden md:block" />
                )}
              </button>
            ))}
            <Link
              href="/bulk"
              className="shrink-0 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] py-1.5 px-3 md:px-0 md:py-0 pb-2 relative rounded-full md:rounded-none text-stone-400 hover:text-primary transition-colors"
            >
              Wholesale
            </Link>
          </div>
          {/* Scroll hint — mobile only */}
          <div className="absolute right-0 top-0 bottom-0 w-14 flex items-center justify-end bg-gradient-to-l from-surface via-surface/80 to-transparent pointer-events-none md:hidden">
            <span className="material-icons-outlined text-primary text-base mr-1 animate-[pulse_1.5s_ease-in-out_infinite]">
              chevron_right
            </span>
          </div>
        </div>
      </div>

      {/* Editorial product grid */}
      {filtered.length === 0 ? (
        <p className="py-24 text-center text-on-surface-variant font-light">
          No products found in this selection.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {filtered.map((product, i) => {
            const fallback =
              product._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "";
            const weight = product.meta?.weight;
            const image = getProductImageForWeight(weight, fallback);
            const excerpt = product.excerpt.rendered
              .replace(/<[^>]+>/g, "")
              .trim();

            return (
              <FadeUp key={product.id} delay={i * 0.05}>
                <ProductCard
                  title={product.title.rendered}
                  slug={product.slug}
                  image={image}
                  price={product.meta?.price}
                  weight={weight}
                  excerpt={excerpt}
                />
              </FadeUp>
            );
          })}
        </div>
      )}
    </div>
  );
}

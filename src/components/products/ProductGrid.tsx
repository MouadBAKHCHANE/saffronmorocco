"use client";

import { useState } from "react";
import type { WPProduct, WPProductCategory } from "@/lib/types";
import ProductCard from "./ProductCard";
import { getProductImageForWeight } from "@/lib/product-images";
import FadeUp from "@/components/animations/FadeUp";

interface ProductGridProps {
  products: WPProduct[];
  categories: WPProductCategory[];
}

export default function ProductGrid({
  products,
  categories,
}: ProductGridProps) {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const filtered =
    activeCategory === null
      ? products
      : products.filter((p) => p.product_category.includes(activeCategory));

  return (
    <div>
      {/* Editorial filter bar */}
      <div className="border-b border-outline-variant/10 pb-6 mb-16 -mx-8 sm:-mx-12 lg:-mx-24 md:mx-0">
        <div className="flex flex-nowrap md:flex-wrap gap-6 md:gap-10 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-8 sm:px-12 lg:px-24 md:px-0">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className={`shrink-0 text-[10px] font-bold uppercase tracking-[0.3em] pb-2 relative transition-colors ${
              activeCategory === null
                ? "text-primary"
                : "text-stone-400 hover:text-on-surface"
            }`}
          >
            All Weights
            {activeCategory === null && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
            )}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 text-[10px] font-bold uppercase tracking-[0.3em] pb-2 relative transition-colors ${
                activeCategory === cat.id
                  ? "text-primary"
                  : "text-stone-400 hover:text-on-surface"
              }`}
            >
              {cat.name}
              {activeCategory === cat.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
              )}
            </button>
          ))}
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

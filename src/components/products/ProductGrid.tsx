"use client";

import { useState } from "react";
import type { WPProduct, WPProductCategory } from "@/lib/types";
import ProductCard from "./ProductCard";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";

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
      {/* Category filter buttons */}
      <div className="mb-12 flex flex-wrap gap-3">
        <button
          onClick={() => setActiveCategory(null)}
          className={`rounded-button px-5 py-2 text-small font-medium tracking-button transition-colors ${
            activeCategory === null
              ? "bg-burgundy text-off-white"
              : "bg-warm-gray-light text-text-secondary hover:bg-warm-gray"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`rounded-button px-5 py-2 text-small font-medium tracking-button transition-colors ${
              activeCategory === cat.id
                ? "bg-burgundy text-off-white"
                : "bg-warm-gray-light text-text-secondary hover:bg-warm-gray"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <StaggerChildren className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => {
          const image =
            product._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "";
          const excerpt = product.excerpt.rendered.replace(/<[^>]+>/g, "").trim();

          return (
            <StaggerItem key={product.id}>
              <ProductCard
                title={product.title.rendered}
                slug={product.slug}
                image={image}
                price={product.meta?.price}
                excerpt={excerpt}
              />
            </StaggerItem>
          );
        })}
      </StaggerChildren>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-text-secondary">
          No products found in this category.
        </p>
      )}
    </div>
  );
}

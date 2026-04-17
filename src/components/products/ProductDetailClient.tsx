"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import ProductGallery from "./ProductGallery";
import { VIAL_IMAGES, GALLERY_LIFESTYLE } from "@/lib/product-images";

interface ProductDetailClientProps {
  title: string;
  titleHtml: string;
  excerptHtml: string;
  price?: string;
  weight?: string;
  isVial: boolean;
  initialGallery: string[];
}

const VIAL_KEYS = Object.keys(VIAL_IMAGES) as (keyof typeof VIAL_IMAGES)[];

export default function ProductDetailClient({
  title,
  titleHtml,
  excerptHtml,
  price,
  weight,
  isVial,
  initialGallery,
}: ProductDetailClientProps) {
  const defaultVariant = (weight?.toLowerCase().replace(/\s+/g, "") || "1g") as keyof typeof VIAL_IMAGES;
  const [selectedVariant, setSelectedVariant] = useState<keyof typeof VIAL_IMAGES>(
    VIAL_KEYS.includes(defaultVariant) ? defaultVariant : "1g"
  );
  const [qty, setQty] = useState(1);

  const gallery = useMemo(() => {
    if (!isVial) return initialGallery;
    const main = VIAL_IMAGES[selectedVariant] || VIAL_IMAGES["1g"];
    return [main, "/images/pdt1.webp", ...GALLERY_LIFESTYLE.slice(0, 2)];
  }, [isVial, selectedVariant, initialGallery]);

  return (
    <div className="grid gap-6 md:gap-10 lg:grid-cols-2 items-start">
      {/* Left — Gallery */}
      <div>
        <ProductGallery images={gallery} alt={title} />
      </div>

      {/* Right — Details */}
      <div className="lg:sticky lg:top-28 space-y-5 md:space-y-8">
        <div className="space-y-3">
          <p className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">
            {weight ? `${weight} Selection` : "Premium Selection"}
          </p>
          <h1
            className="font-headline text-3xl md:text-5xl text-on-surface leading-[1.1] italic"
            dangerouslySetInnerHTML={{ __html: titleHtml }}
          />

          {price && (
            <div className="flex items-baseline gap-3 mt-3">
              <span className="font-headline text-2xl md:text-3xl text-primary font-bold">
                {price}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium">
                Incl. Tax
              </span>
            </div>
          )}
        </div>

        {excerptHtml && (
          <div
            className="text-on-surface-variant text-xs md:text-sm leading-relaxed font-light border-l-2 border-primary/20 pl-4 md:pl-6 italic"
            dangerouslySetInnerHTML={{ __html: excerptHtml }}
          />
        )}

        {/* Weight variants — vial products only */}
        {isVial && (
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500 mb-3">
              Weight
            </p>
            <div className="flex flex-wrap gap-2">
              {VIAL_KEYS.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setSelectedVariant(v)}
                  className={`px-4 py-2 text-xs uppercase tracking-widest font-bold border rounded-sm transition-all duration-300 ${
                    selectedVariant === v
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-outline-variant/20 text-stone-400 hover:border-primary/40 hover:text-stone-200"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quantity counter */}
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500 mb-3">
            Quantity
          </p>
          <div className="inline-flex items-center border border-outline-variant/20 rounded-sm">
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="w-11 h-11 flex items-center justify-center text-stone-400 hover:text-primary transition-colors"
            >
              <span className="material-icons-outlined text-lg">remove</span>
            </button>
            <span className="w-12 text-center text-on-surface text-sm font-bold tabular-nums">
              {qty}
            </span>
            <button
              type="button"
              onClick={() => setQty((q) => q + 1)}
              className="w-11 h-11 flex items-center justify-center text-stone-400 hover:text-primary transition-colors"
            >
              <span className="material-icons-outlined text-lg">add</span>
            </button>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/contact?product=${encodeURIComponent(title)}${isVial ? `&weight=${selectedVariant}` : ""}&qty=${qty}`}
          className="btn-primary w-full !py-3.5 md:!py-4 shadow-xl hover:shadow-primary/20"
        >
          <span className="material-icons-outlined text-sm">shopping_bag</span>
          Inquire Now
        </Link>

        {/* Product details */}
        <div className="border-t border-outline-variant/10 pt-4 md:pt-6 space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500 mb-2">
            Product Details
          </p>
          <div className="grid grid-cols-[auto_1fr] gap-x-4 md:gap-x-8 gap-y-2.5 text-xs md:text-sm">
            <span className="text-stone-500 font-light">Ingredients</span>
            <span className="text-on-surface">100% Pure Moroccan Saffron</span>
            <span className="text-stone-500 font-light">Origins</span>
            <span className="text-on-surface">Taliouine, Morocco</span>
            <span className="text-stone-500 font-light">Net Weight</span>
            <span className="text-on-surface">{isVial ? selectedVariant : weight || "—"}</span>
            <span className="text-stone-500 font-light">Grade</span>
            <span className="text-on-surface">ISO 3632-1 Category I</span>
            <span className="text-stone-500 font-light">Certification</span>
            <span className="text-on-surface">AOP Certified</span>
          </div>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-4 gap-2 pt-4 border-t border-outline-variant/10 text-on-surface-variant/40">
          <div className="flex flex-col items-center gap-1">
            <span className="material-icons-outlined text-base md:text-lg">verified</span>
            <span className="text-[8px] md:text-[9px] uppercase tracking-tight text-center">Lab Tested</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="material-icons-outlined text-base md:text-lg">psychology</span>
            <span className="text-[8px] md:text-[9px] uppercase tracking-tight text-center">Grade I ISO</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="material-icons-outlined text-base md:text-lg">eco</span>
            <span className="text-[8px] md:text-[9px] uppercase tracking-tight text-center">100% Organic</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="material-icons-outlined text-base md:text-lg">public</span>
            <span className="text-[8px] md:text-[9px] uppercase tracking-tight text-center">Global Ship</span>
          </div>
        </div>
      </div>
    </div>
  );
}

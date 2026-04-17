"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";

const variants = [
  { id: "1g", label: "1g", price: 12, image: "/images/pdt2.webp", description: "The Standard" },
  { id: "2g", label: "2g", price: 22, image: "/images/pdt-2g.png", description: "The Gift" },
  { id: "5g", label: "5g", price: 49, image: "/images/pdt-5g.png", description: "Family Share" },
  { id: "10g", label: "10g", price: 89, image: "/images/pdt-10g.png", description: "Chef's Choice" },
];

export default function SelectionPage() {
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  return (
    <main className="min-h-screen bg-surface pt-20 md:pt-32 pb-16 md:pb-24 selection:bg-primary/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Product Image */}
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-square rounded-sm overflow-hidden bg-surface-container-low shadow-2xl group">
                <Image
                  src={selectedVariant.image}
                  alt={`Premium Saffron Tin - ${selectedVariant.label}`}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="glass-effect px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface border border-white/10 rounded-sm">
                    AOP Certified
                  </span>
                  <span className="glass-effect px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface border border-white/10 rounded-sm">
                    ISO 3632 Cat I
                  </span>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-3">
                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">
                  The Collection
                </p>
                <h1 className="font-headline text-3xl md:text-5xl text-on-surface leading-[1.1] italic text-balance">
                  iD BAKHCHANE <span className="text-primary not-italic">Tin Selection</span>
                </h1>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed font-light border-l-2 border-primary/20 pl-4 md:pl-6 mt-4">
                  Our signature collector's tins from Taliouine. Each metallic tin preserves the delicate aromas and essential oils of our Grade A saffron threads, ensuring a culinary experience of unmatched purity and potency.
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4">
                <span className="font-headline text-2xl md:text-3xl text-primary font-bold">
                  ${selectedVariant.price}
                </span>
                {selectedVariant.id !== "1g" && (
                  <span className="text-stone-500 line-through text-sm">
                    ${Math.round(selectedVariant.price * 1.15)}
                  </span>
                )}
                {selectedVariant.id !== "1g" && (
                  <span className="text-[10px] font-bold uppercase tracking-widest text-green-500 bg-green-500/10 px-3 py-1 rounded-sm border border-green-500/20">
                    Save {selectedVariant.id === "10g" ? "25%" : selectedVariant.id === "5g" ? "18%" : "8%"}
                  </span>
                )}
              </div>

              {/* Weight selector */}
              <div className="border-t border-outline-variant/10 pt-6 space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500">
                  Select Net Weight
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {variants.map((variant) => (
                    <button
                      key={variant.id}
                      type="button"
                      onClick={() => setSelectedVariant(variant)}
                      className={`relative flex flex-col items-center justify-center py-4 px-2 rounded-sm border transition-all duration-300 ${
                        selectedVariant.id === variant.id
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-outline-variant/20 text-stone-400 hover:border-primary/40"
                      }`}
                    >
                      <span className="font-headline text-xl md:text-2xl">
                        {variant.label}
                      </span>
                      <span className="text-[9px] uppercase tracking-tight text-stone-500 mt-1">
                        {variant.description}
                      </span>
                      {selectedVariant.id === variant.id && (
                        <div className="absolute -top-1.5 -right-1.5 bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-surface">
                          <span className="material-icons-outlined text-[10px]">check</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Link
                href={`/contact?product=Individual+Saffron+Tin+${selectedVariant.label}`}
                className="btn-primary w-full !py-4 shadow-xl hover:shadow-primary/20"
              >
                <span className="material-icons-outlined text-sm">shopping_bag</span>
                Order Now
              </Link>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-4 p-4 md:p-5 bg-surface-container-low/30 border border-outline-variant/10 rounded-sm">
                  <span className="material-icons-outlined text-primary text-xl mt-0.5">verified_user</span>
                  <div>
                    <h4 className="text-on-surface text-sm font-bold">Aromatic Seal</h4>
                    <p className="text-stone-500 text-xs font-light">Double-sealed for maximum freshness.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 md:p-5 bg-surface-container-low/30 border border-outline-variant/10 rounded-sm">
                  <span className="material-icons-outlined text-primary text-xl mt-0.5">card_giftcard</span>
                  <div>
                    <h4 className="text-on-surface text-sm font-bold">Premium Gifting</h4>
                    <p className="text-stone-500 text-xs font-light">Elegantly packaged for any occasion.</p>
                  </div>
                </div>
              </div>

              {/* Specs */}
              <div className="border-t border-outline-variant/10 pt-6 space-y-4">
                <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-xs md:text-sm">
                  {[
                    "Grade 1 (Negin)",
                    "100% Traceable",
                    "AOP Certified",
                    "Metallic Preservation",
                    "Moisture < 12%",
                    "Pure Threads",
                  ].map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-on-surface-variant font-light">
                      <span className="material-icons-outlined text-primary text-xs">check_circle</span>
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}

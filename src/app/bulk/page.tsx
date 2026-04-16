"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";

const quantities = [
  { id: "50g", label: "50g", price: 249, description: "Personal Reserva" },
  { id: "100g", label: "100g", price: 449, description: "Culinary Professional" },
  { id: "250g", label: "250g", price: 999, description: "Restaurant Bulk" },
  { id: "500g", label: "500g", price: 1849, description: "Wholesale Partner" },
];

export default function BulkProductPage() {
  const [selectedQty, setSelectedQty] = useState(quantities[0]);

  return (
    <main className="min-h-screen bg-surface pt-20 md:pt-32 pb-16 md:pb-24 selection:bg-primary/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Product Image */}
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-square rounded-sm overflow-hidden bg-surface-container-low shadow-2xl group">
                <Image
                  src="/images/bulk-saffron.png"
                  alt="Premium Bulk Saffron Pouch"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
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
                  Cooperative Collection
                </p>
                <h1 className="font-headline text-3xl md:text-5xl text-on-surface leading-[1.1] italic">
                  iD BAKHCHANE <span className="text-primary not-italic">Bulk Selection</span>
                </h1>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed font-light border-l-2 border-primary/20 pl-4 md:pl-6 mt-4">
                  Directly from our family cooperative in Taliouine. Premium Grade A saffron threads, hand-harvested and dried to preserve intense aroma and deep crimson hue.
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4">
                <span className="font-headline text-2xl md:text-3xl text-primary font-bold">
                  ${selectedQty.price}
                </span>
                <span className="text-stone-500 line-through text-sm">
                  ${Math.round(selectedQty.price * 1.2)}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-green-500 bg-green-500/10 px-3 py-1 rounded-sm border border-green-500/20">
                  Save 20%
                </span>
              </div>

              {/* Quantity selector */}
              <div className="border-t border-outline-variant/10 pt-6 space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500">
                  Select Quantity
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {quantities.map((qty) => (
                    <button
                      key={qty.id}
                      type="button"
                      onClick={() => setSelectedQty(qty)}
                      className={`relative flex flex-col items-center justify-center py-4 px-2 rounded-sm border transition-all duration-300 ${
                        selectedQty.id === qty.id
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-outline-variant/20 text-stone-400 hover:border-primary/40"
                      }`}
                    >
                      <span className="font-headline text-xl md:text-2xl">
                        {qty.label}
                      </span>
                      <span className="text-[9px] uppercase tracking-tight text-stone-500 mt-1">
                        {qty.description}
                      </span>
                      {selectedQty.id === qty.id && (
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
                href={`/contact?product=Bulk+Saffron+${selectedQty.label}`}
                className="btn-primary w-full !py-4 shadow-xl hover:shadow-primary/20"
              >
                <span className="material-icons-outlined text-sm">shopping_bag</span>
                Request Wholesale Quote
              </Link>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-4 p-4 md:p-5 bg-surface-container-low/30 border border-outline-variant/10 rounded-sm">
                  <span className="material-icons-outlined text-primary text-xl mt-0.5">local_shipping</span>
                  <div>
                    <h4 className="text-on-surface text-sm font-bold">Global DHL Express</h4>
                    <p className="text-stone-500 text-xs font-light">Secure shipping to 200+ countries.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 md:p-5 bg-surface-container-low/30 border border-outline-variant/10 rounded-sm">
                  <span className="material-icons-outlined text-primary text-xl mt-0.5">workspace_premium</span>
                  <div>
                    <h4 className="text-on-surface text-sm font-bold">Quality Certified</h4>
                    <p className="text-stone-500 text-xs font-light">Batch ISO 3632 certification included.</p>
                  </div>
                </div>
              </div>

              {/* Specs */}
              <div className="border-t border-outline-variant/10 pt-6 space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500">
                  Technical Specifications
                </p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-xs md:text-sm">
                  {[
                    "Grade 1 (Negin)",
                    "100% Traceable",
                    "Latest 2025 Harvest",
                    "Taliouine Origin",
                    "Moisture < 12%",
                    "Purity Verified",
                  ].map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-on-surface-variant font-light">
                      <span className="material-icons-outlined text-primary text-xs">check_circle</span>
                      {spec}
                    </div>
                  ))}
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
        </FadeUp>
      </div>
    </main>
  );
}

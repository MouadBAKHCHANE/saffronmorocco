"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";

const teaVariants = [
  { 
    id: "sencha", 
    label: "Saffron Sencha", 
    type: "Green Tea Blend", 
    price: 35, 
    color: "bg-emerald-900/40",
    description: "Anti-oxidant rich green tea fused with Taliouine saffron for a refreshing, floral finish." 
  },
  { 
    id: "rooibos", 
    label: "Saffron Rooibos", 
    type: "Herbal Tea Blend", 
    price: 35, 
    color: "bg-red-900/40",
    description: "Caffeine-free South African Rooibos enhanced with the warm, earthy notes of pure saffron." 
  },
  { 
    id: "chai", 
    label: "Saffron Chai", 
    type: "Black Tea Blend", 
    price: 38, 
    color: "bg-blue-900/40",
    description: "A bold black tea mixed with traditional spices and our premium Grade A saffron threads." 
  },
];

export default function TeaPage() {
  const [selectedTea, setSelectedTea] = useState(teaVariants[0]);

  return (
    <main className="min-h-screen bg-surface pt-20 md:pt-32 pb-16 md:pb-24 selection:bg-primary/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Product Image Section */}
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-square rounded-sm overflow-hidden bg-surface-container-low shadow-2xl group">
                <Image
                  src="/images/tea-collection.png"
                  alt="Premium Saffron Tea Collection"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                {/* Variant Indicator Overlay */}
                <div className={`absolute inset-0 transition-opacity duration-500 opacity-20 ${selectedTea.color}`} />
                
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="glass-effect px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface border border-white/10 rounded-sm">
                    Hand-Blended
                  </span>
                  <span className="glass-effect px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface border border-white/10 rounded-sm">
                    Grade A Saffron
                  </span>
                </div>
              </div>
              
              {/* Detail View Thumbnail */}
              <div className="mt-4 grid grid-cols-4 gap-4">
                 <div className="relative aspect-square rounded-sm overflow-hidden border border-outline-variant/10 bg-surface-container-low">
                    <Image src="/images/tea-bag-detail.png" alt="Tea bag detail" fill className="object-cover" />
                 </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-3">
                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">
                  The Infusion Series
                </p>
                <h1 className="font-headline text-3xl md:text-5xl text-on-surface leading-[1.1] italic">
                  Saffron <span className="text-primary not-italic">Infusion Collection</span>
                </h1>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed font-light border-l-2 border-primary/20 pl-4 md:pl-6 mt-4 italic">
                  "A symphony of world-class tea leaves and the legendary saffron of Taliouine."
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4">
                <span className="font-headline text-2xl md:text-3xl text-primary font-bold">
                  ${selectedTea.price}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant font-medium">
                  Per 12-Sachet Tin
                </span>
              </div>

              {/* Variant selector */}
              <div className="border-t border-outline-variant/10 pt-6 space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500">
                  Select Your Blend
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {teaVariants.map((tea) => (
                    <button
                      key={tea.id}
                      type="button"
                      onClick={() => setSelectedTea(tea)}
                      className={`relative flex flex-col items-center justify-center py-4 px-2 rounded-sm border transition-all duration-300 ${
                        selectedTea.id === tea.id
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-outline-variant/20 text-stone-400 hover:border-primary/40"
                      }`}
                    >
                      <span className="font-headline text-lg md:text-xl text-center leading-tight">
                        {tea.label}
                      </span>
                      <span className="text-[9px] uppercase tracking-tight text-stone-500 mt-1">
                        {tea.type}
                      </span>
                      {selectedTea.id === tea.id && (
                        <div className="absolute -top-1.5 -right-1.5 bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-surface">
                          <span className="material-icons-outlined text-[10px]">check</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed font-light">
                  {selectedTea.description} Our pyramid tea bags allow for full leaf expansion, ensuring a deep extraction of both the tea and the saffron threads.
                </p>
              </div>

              {/* CTA */}
              <Link
                href={`/contact?product=Saffron+Tea+${selectedTea.label}`}
                className="btn-primary w-full !py-4 shadow-xl hover:shadow-primary/20"
              >
                <span className="material-icons-outlined text-sm">shopping_bag</span>
                Request Availability
              </Link>

              {/* Specs */}
              <div className="border-t border-outline-variant/10 pt-6 space-y-4">
                <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-xs md:text-sm">
                  {[
                    "Organic Leaf Tea",
                    "Grade A Saffron",
                    "Eco-friendly Bags",
                    "Artisanal Blends",
                    "Resealable Tin",
                    "Pure Aroma",
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

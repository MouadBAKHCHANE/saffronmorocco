"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";

const bundles = [
  { 
    id: "gourmet", 
    label: "Gourmet Discovery", 
    price: 120,
    original: 155, 
    items: ["3 Pure Saffron Tins (1g, 2g, 5g)", "Assorted Tea Sample", "Recipe Book"],
    description: "The complete introduction to our cooperative's heritage. Perfect for the home chef looking to master saffron." 
  },
  { 
    id: "connoisseur", 
    label: "Tea Connoisseur", 
    price: 85,
    original: 105, 
    items: ["Full Tea Collection (3 Tins)", "Custom Saffron Honey", "Ceramic Infuser"],
    description: "A curated set for the ultimate tea ritual, featuring all three of our signature saffron infusions." 
  },
  { 
    id: "heritage", 
    label: "Heritage Gift Set", 
    price: 195,
    original: 250, 
    items: ["Bulk Saffron Pouch (50g)", "Full Tea Collection", "Luxury Wooden Storage Box"],
    description: "Our most prestigious bundle. A comprehensive collection of our finest harvests, packaged in a master-crafted gift box." 
  },
];

export default function BundlesPage() {
  const [selectedBundle, setSelectedBundle] = useState(bundles[0]);

  return (
    <main className="min-h-screen bg-surface pt-20 md:pt-32 pb-16 md:pb-24 selection:bg-primary/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Image Gallery */}
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-square rounded-sm overflow-hidden bg-surface-container-low shadow-2xl group">
                <Image
                  src="/images/gift-bundle.png"
                  alt="Premium Saffron Gift Bundle"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="glass-effect px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface border border-white/10 rounded-sm">
                    Luxury Gifting
                  </span>
                  <span className="glass-effect px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface border border-white/10 rounded-sm">
                    Bundle Savings
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-3">
                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">
                  Curated Collections
                </p>
                <h1 className="font-headline text-3xl md:text-5xl text-on-surface leading-[1.1] italic">
                  Premium Saffron <span className="text-primary not-italic">Gift Bundles</span>
                </h1>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed font-light border-l-2 border-primary/20 pl-4 md:pl-6 mt-4">
                  Elevate your culinary journey or surprise a loved one with our meticulously assembled gift sets, bringing the best of our Moroccan cooperative to your door.
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline flex-wrap gap-3">
                <span className="font-headline text-2xl md:text-3xl text-primary font-bold">
                  ${selectedBundle.price}
                </span>
                <span className="text-stone-500 line-through text-sm">
                  ${selectedBundle.original}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-green-500 bg-green-500/10 px-3 py-1 rounded-sm border border-green-500/20">
                  Save {Math.round(((selectedBundle.original - selectedBundle.price) / selectedBundle.original) * 100)}%
                </span>
              </div>

              {/* Bundle selector */}
              <div className="border-t border-outline-variant/10 pt-6 space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500">
                  Choose Your Collection
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {bundles.map((bundle) => (
                    <button
                      key={bundle.id}
                      type="button"
                      onClick={() => setSelectedBundle(bundle)}
                      className={`relative flex flex-col items-start justify-center py-4 px-6 rounded-sm border transition-all duration-300 ${
                        selectedBundle.id === bundle.id
                          ? "border-primary bg-primary/10"
                          : "border-outline-variant/20 text-stone-400 hover:border-primary/40"
                      }`}
                    >
                      <div className="flex justify-between w-full items-center">
                        <span className={`font-headline text-xl ${selectedBundle.id === bundle.id ? "text-primary" : "text-on-surface"}`}>
                          {bundle.label}
                        </span>
                        <span className="text-xs font-bold">${bundle.price}</span>
                      </div>
                      
                      {selectedBundle.id === bundle.id && (
                        <div className="absolute -top-1.5 -right-1.5 bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-surface">
                          <span className="material-icons-outlined text-[10px]">check</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bundle Contents */}
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500">
                  What's Inside
                </p>
                <ul className="space-y-2">
                   {selectedBundle.items.map(item => (
                     <li key={item} className="flex items-center gap-2 text-on-surface-variant text-sm font-light">
                        <span className="material-icons-outlined text-primary text-xs">auto_awesome</span>
                        {item}
                     </li>
                   ))}
                </ul>
                <p className="text-stone-500 text-xs leading-relaxed font-light italic mt-2">
                  {selectedBundle.description}
                </p>
              </div>

              {/* CTA */}
              <Link
                href={`/contact?product=${encodeURIComponent(selectedBundle.label)}`}
                className="btn-primary w-full !py-4 shadow-xl hover:shadow-primary/20"
              >
                <span className="material-icons-outlined text-sm">card_giftcard</span>
                Reserve Gift Bundle
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}

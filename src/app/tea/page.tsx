"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";
import { IMAGE_URLS } from "@/lib/constants";

export default function TeaPage() {
  return (
    <main className="min-h-screen bg-surface pt-20 md:pt-32 pb-16 md:pb-24 selection:bg-primary/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Product Image Section */}
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-square rounded-sm overflow-hidden bg-surface-container-low shadow-2xl group">
                <Image
                  src={IMAGE_URLS.teaCollection}
                  alt="Premium Saffron Tea Collection"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                
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
              <div className="flex items-baseline gap-4 border-b border-outline-variant/10 pb-6">
                <span className="font-headline text-2xl md:text-3xl text-primary font-bold">
                  $35 — $38
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant font-medium">
                  Per 12-Sachet Tin
                </span>
              </div>

              {/* Blends List */}
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500">
                  Available Blends
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { label: "Saffron Sencha", type: "Premium Green Tea Blend" },
                    { label: "Saffron Rooibos", type: "Organic Herbal Blend (Caffeine-Free)" },
                    { label: "Saffron Chai", type: "Spiced Black Tea Blend" },
                  ].map((blend) => (
                    <div key={blend.label} className="p-4 bg-surface-container-low/40 border border-outline-variant/5 rounded-sm flex justify-between items-center group hover:border-primary/20 transition-colors">
                      <div>
                        <h4 className="text-on-surface font-headline italic text-lg">{blend.label}</h4>
                        <p className="text-stone-500 text-[10px] uppercase tracking-wider">{blend.type}</p>
                      </div>
                      <span className="material-icons-outlined text-primary/40 group-hover:text-primary transition-colors">check_circle</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed font-light mt-4">
                   Our pyramid tea bags allow for full leaf expansion, ensuring a deep extraction of both the tea and the saffron threads. Each blend is carefully balanced to highlight the aromatic complexity of our cooperative's saffron.
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/contact?product=Saffron+Tea+Collection"
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

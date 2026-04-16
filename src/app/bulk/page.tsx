"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ChevronRight, ShoppingCart, ShieldCheck, Truck, Award } from "lucide-react";

const quantities = [
  { id: "50g", label: "50g", price: 249, description: "Personal Reserva" },
  { id: "100g", label: "100g", price: 449, description: "Culinary Professional" },
  { id: "250g", label: "250g", price: 999, description: "Restaurant Bulk" },
  { id: "500g", label: "500g", price: 1849, description: "Wholesale Partner" },
];

export default function BulkProductPage() {
  const [selectedQty, setSelectedQty] = useState(quantities[0]);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-surface text-on-surface font-body">
      <div className="container mx-auto px-4 max-w-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Product Gallery */}
          <div className="space-y-6 sticky top-32">
            <div className="relative aspect-square rounded-card overflow-hidden bg-surface-container border border-outline/10 shadow-2xl group">
              <Image
                src="/images/bulk-saffron.png"
                alt="Premium Bulk Saffron Pouch"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute top-6 left-6 flex flex-col gap-2">
                <span className="bg-primary px-4 py-1.5 rounded-full text-caption font-semibold text-on-surface shadow-lg border border-primary/20 backdrop-blur-md">
                  AOP Certified
                </span>
                <span className="bg-surface/80 px-4 py-1.5 rounded-full text-caption font-semibold text-on-surface shadow-lg border border-outline/10 backdrop-blur-md">
                  ISO 3632 Cat I
                </span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y- sub-gap lg:pl-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-medium tracking-overline uppercase text-caption">
                <Award className="w-4 h-4" />
                Cooperative Collection
              </div>
              <h1 className="text-h1 font-headline leading-tight text-balance">
                iD BAKHCHANE <span className="text-secondary italic">Cooperative Selection</span>
              </h1>
              <p className="text-body-lg text-on-surface/80 max-w-readable leading-relaxed">
                Directly from our family cooperative in Taliouine, iD BAKHCHANE premium Grade A saffron threads are meticulously hand-harvested and dried to preserve their intense aroma and deep crimson hue. 
              </p>
            </div>

            <div className="space-y-6 pb-8 border-b border-outline/20">
              <div className="flex items-baseline gap-4">
                <span className="text-h2 font-headline text-primary">${selectedQty.price}</span>
                <span className="text-on-surface/50 line-through text-base">${Math.round(selectedQty.price * 1.2)}</span>
                <span className="text-green-500 font-medium text-caption px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20">Save 20%</span>
              </div>
              
              <div className="space-y-4">
                <label className="text-caption font-bold uppercase tracking-overline text-on-surface/60">Select Quantity</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {quantities.map((qty) => (
                    <button
                      key={qty.id}
                      onClick={() => setSelectedQty(qty)}
                      className={`relative flex flex-col items-center justify-center py-4 px-2 rounded-card border transition-all duration-300 ${
                        selectedQty.id === qty.id
                          ? "border-primary bg-primary/5 shadow-inner shadow-primary/10"
                          : "border-outline/20 hover:border-outline bg-surface-container"
                      }`}
                    >
                      <span className={`text-h4 font-headline ${selectedQty.id === qty.id ? "text-primary" : "text-on-surface"}`}>
                        {qty.label}
                      </span>
                      <span className="text-[10px] uppercase tracking-tighter text-on-surface/50 font-medium mt-1">
                        {qty.description}
                      </span>
                      {selectedQty.id === qty.id && (
                        <div className="absolute -top-2 -right-2 bg-primary text-on-surface p-1 rounded-full ring-4 ring-surface">
                          <Check className="w-3 h-3" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-primary text-on-surface py-5 px-8 rounded-full font-bold text-body-lg hover:shadow-2xl hover:bg-primary/90 transition-all flex items-center justify-center gap-3">
                  <ShoppingCart className="w-5 h-5" />
                  Request Wholesale Quote
                </button>
                <button className="sm:w-16 h-16 rounded-full border border-outline/30 flex items-center justify-center hover:bg-on-surface/5 transition-colors">
                  <ShieldCheck className="w-6 h-6 text-on-surface" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-4 p-5 rounded-card bg-surface-container border border-outline/10">
                  <div className="bg-primary/10 p-2.5 rounded-lg text-primary">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base">Global DHL Express</h4>
                    <p className="text-small text-on-surface/60">Secure shipping to over 200 countries.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-card bg-surface-container border border-outline/10">
                  <div className="bg-secondary/10 p-2.5 rounded-lg text-secondary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base">Quality Certified</h4>
                    <p className="text-small text-on-surface/60">Batch ISO 3632 certification included.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 space-y-6">
              <h3 className="font-headline text-h3">Technical Specifications</h3>
              <ul className="grid grid-cols-2 gap-y-4 gap-x-8 text-base text-on-surface/70">
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Grade 1 (Negin)</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> 100% Traceable</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Latest 2025 Harvest</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Taliouine Origin</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Moisture {"<"} 12%</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 text-primary" /> Purity Verified</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";
import { useT } from "@/i18n/LocaleProvider";

const quantities = [
  { id: "50g", label: "50g", price: 249, original: 320, descKey: "bulk.qty50Desc" },
  { id: "100g", label: "100g", price: 449, original: 600, descKey: "bulk.qty100Desc" },
  { id: "250g", label: "250g", price: 999, original: 1400, descKey: "bulk.qty250Desc" },
  { id: "500g", label: "500g", price: 1849, original: 2700, descKey: "bulk.qty500Desc" },
];

const SPEC_KEYS = [
  "bulk.spec1",
  "bulk.spec2",
  "bulk.spec3",
  "bulk.spec4",
  "bulk.spec5",
  "bulk.spec6",
];

export default function BulkProductPage() {
  const [selectedQty, setSelectedQty] = useState(quantities[0]);
  const t = useT();

  return (
    <main className="min-h-screen bg-surface pt-20 md:pt-32 pb-16 md:pb-24 selection:bg-primary/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Product Image */}
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-square rounded-sm overflow-hidden bg-surface-container-low shadow-2xl group">
                <Image
                  src="/images/bulk-selection.png"
                  alt="Premium Saffron Cooperative Bulk Pouch"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  <span className="bg-surface/60 backdrop-blur-md px-2.5 py-1 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-on-surface border border-white/10 rounded-full flex items-center gap-2 shadow-sm">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    {t("trust.aopCertified")}
                  </span>
                  <span className="bg-surface/60 backdrop-blur-md px-2.5 py-1 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] text-on-surface border border-white/10 rounded-full flex items-center gap-2 shadow-sm">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    {t("trust.iso3632")}
                  </span>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-3">
                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">
                  {t("bulk.overline")}
                </p>
                <h1 className="font-headline text-3xl md:text-5xl text-on-surface leading-[1.1] italic">
                  {t("bulk.titleBrand")} <span className="text-primary not-italic">{t("bulk.titleAccent")}</span>
                </h1>
              </div>

              {/* Price */}
              <div className="flex items-baseline flex-wrap gap-3">
                <span className="font-headline text-2xl md:text-3xl text-primary font-bold">
                  ${selectedQty.price}
                </span>
                <span className="text-stone-500 line-through text-sm">
                  ${selectedQty.original}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-green-500 bg-green-500/10 px-3 py-1 rounded-sm border border-green-500/20">
                  {t("bulk.save")} {Math.round(((selectedQty.original - selectedQty.price) / selectedQty.original) * 100)}%
                </span>
              </div>

              {/* Quantity selector */}
              <div className="border-t border-outline-variant/10 pt-6 space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500">
                  {t("bulk.selectQuantity")}
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
                        {t(qty.descKey)}
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
                {t("bulk.requestQuote")}
              </Link>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-4 p-4 md:p-5 bg-surface-container-low/30 border border-outline-variant/10 rounded-sm">
                  <span className="material-icons-outlined text-primary text-xl mt-0.5">local_shipping</span>
                  <div>
                    <h4 className="text-on-surface text-sm font-bold">{t("bulk.feature1Title")}</h4>
                    <p className="text-stone-500 text-xs font-light">{t("bulk.feature1Desc")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 md:p-5 bg-surface-container-low/30 border border-outline-variant/10 rounded-sm">
                  <span className="material-icons-outlined text-primary text-xl mt-0.5">workspace_premium</span>
                  <div>
                    <h4 className="text-on-surface text-sm font-bold">{t("bulk.feature2Title")}</h4>
                    <p className="text-stone-500 text-xs font-light">{t("bulk.feature2Desc")}</p>
                  </div>
                </div>
              </div>

              {/* Specs */}
              <div className="border-t border-outline-variant/10 pt-6 space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500">
                  {t("bulk.technicalSpecs")}
                </p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-xs md:text-sm">
                  {SPEC_KEYS.map((key) => (
                    <div key={key} className="flex items-center gap-2 text-on-surface-variant font-light">
                      <span className="material-icons-outlined text-primary text-xs">check_circle</span>
                      {t(key)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-on-surface-variant text-sm md:text-base leading-relaxed font-light border-l-2 border-primary/20 pl-4 md:pl-6">
                {t("bulk.description")}
              </p>

              {/* Trust badges */}
              <div className="grid grid-cols-4 gap-2 pt-4 border-t border-outline-variant/10 text-on-surface-variant/40">
                <div className="flex flex-col items-center gap-1">
                  <span className="material-icons-outlined text-base md:text-lg">verified</span>
                  <span className="text-[8px] md:text-[9px] uppercase tracking-tight text-center">{t("trust.labTested")}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="material-icons-outlined text-base md:text-lg">psychology</span>
                  <span className="text-[8px] md:text-[9px] uppercase tracking-tight text-center">{t("trust.gradeIso")}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="material-icons-outlined text-base md:text-lg">eco</span>
                  <span className="text-[8px] md:text-[9px] uppercase tracking-tight text-center">{t("trust.organic")}</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <span className="material-icons-outlined text-base md:text-lg">public</span>
                  <span className="text-[8px] md:text-[9px] uppercase tracking-tight text-center">{t("trust.globalShip")}</span>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}

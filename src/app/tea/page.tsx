"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";
import { IMAGE_URLS } from "@/lib/constants";
import { useT } from "@/i18n/LocaleProvider";

const TEA_IMAGES = [
  { src: IMAGE_URLS.teaCollection, alt: "Premium Saffron Tea Collection" },
  { src: "/images/tea-bag-detail.png", alt: "Tea bag detail" },
];

const BLENDS = [
  { nameKey: "teaPage.senchaName", typeKey: "teaPage.senchaType" },
  { nameKey: "teaPage.rooibosName", typeKey: "teaPage.rooibosType" },
  { nameKey: "teaPage.chaiName", typeKey: "teaPage.chaiType" },
];

const SPEC_KEYS = [
  "teaPage.spec1",
  "teaPage.spec2",
  "teaPage.spec3",
  "teaPage.spec4",
  "teaPage.spec5",
  "teaPage.spec6",
];

export default function TeaPage() {
  const [activeImage, setActiveImage] = useState(0);
  const t = useT();

  return (
    <main className="min-h-screen bg-surface pt-20 md:pt-32 pb-16 md:pb-24 selection:bg-primary/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-24">
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Product Image Section */}
            <div className="lg:sticky lg:top-28">
              <div className="relative aspect-square rounded-sm overflow-hidden bg-surface-container-low shadow-2xl group">
                <Image
                  src={TEA_IMAGES[activeImage].src}
                  alt={TEA_IMAGES[activeImage].alt}
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Thumbnails — hover to switch */}
              <div className="mt-4 grid grid-cols-4 gap-4">
                {TEA_IMAGES.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    onMouseEnter={() => setActiveImage(i)}
                    onFocus={() => setActiveImage(i)}
                    onClick={() => setActiveImage(i)}
                    className={`relative aspect-square rounded-sm overflow-hidden border bg-surface-container-low transition-all duration-300 ${
                      activeImage === i
                        ? "border-primary"
                        : "border-outline-variant/10 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img.src} alt={img.alt} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-3">
                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">
                  {t("teaPage.overline")}
                </p>
                <h1 className="font-headline text-3xl md:text-5xl text-on-surface leading-[1.1] italic">
                  {t("teaPage.titleLine1")} <span className="text-primary not-italic">{t("teaPage.titleAccent")}</span>
                </h1>
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed font-light border-l-2 border-primary/20 pl-4 md:pl-6 mt-4 italic">
                  {t("teaPage.quote")}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4 border-b border-outline-variant/10 pb-6">
                <span className="font-headline text-2xl md:text-3xl text-primary font-bold">
                  $35 — $38
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant font-medium">
                  {t("teaPage.perTin")}
                </span>
              </div>

              {/* Blends List */}
              <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500">
                  {t("teaPage.availableBlends")}
                </p>
                <div className="grid grid-cols-1 gap-3">
                  {BLENDS.map((blend) => (
                    <div key={blend.nameKey} className="p-4 bg-surface-container-low/40 border border-outline-variant/5 rounded-sm flex justify-between items-center group hover:border-primary/20 transition-colors">
                      <div>
                        <h4 className="text-on-surface font-headline italic text-lg">{t(blend.nameKey)}</h4>
                        <p className="text-stone-500 text-[10px] uppercase tracking-wider">{t(blend.typeKey)}</p>
                      </div>
                      <span className="material-icons-outlined text-primary/40 group-hover:text-primary transition-colors">check_circle</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-on-surface-variant text-sm md:text-base leading-relaxed font-light mt-4">
                  {t("teaPage.description")}
                </p>
              </div>

              {/* CTA */}
              <Link
                href="/contact?product=Saffron+Tea+Collection"
                className="btn-primary w-full !py-4 shadow-xl hover:shadow-primary/20"
              >
                <span className="material-icons-outlined text-sm">shopping_bag</span>
                {t("cta.requestAvailability")}
              </Link>

              {/* Specs */}
              <div className="border-t border-outline-variant/10 pt-6 space-y-4">
                <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-xs md:text-sm">
                  {SPEC_KEYS.map((key) => (
                    <div key={key} className="flex items-center gap-2 text-on-surface-variant font-light">
                      <span className="material-icons-outlined text-primary text-xs">check_circle</span>
                      {t(key)}
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

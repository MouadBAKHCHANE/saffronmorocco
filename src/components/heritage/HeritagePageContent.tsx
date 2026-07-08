"use client";

import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/animations/FadeUp";
import FadeIn from "@/components/animations/FadeIn";
import { useT } from "@/i18n/LocaleProvider";

export default function HeritagePageContent() {
  const t = useT();

  const cultivationSteps = [
    { num: "01", title: t("heritagePage.rotationTitle"),       text: t("heritagePage.rotationDesc") },
    { num: "02", title: t("heritagePage.soilTitle"),           text: t("heritagePage.soilDesc") },
    { num: "03", title: t("heritagePage.plantationTitle"),     text: t("heritagePage.plantationDesc") },
    { num: "04", title: t("heritagePage.irrigationTitle"),     text: t("heritagePage.irrigationDesc") },
    { num: "05", title: t("heritagePage.fertilizationTitle"),  text: t("heritagePage.fertilizationDesc") },
    { num: "06", title: t("heritagePage.cultivationStepTitle"),text: t("heritagePage.cultivationStepDesc") },
  ];

  const purityCards = [
    { label: t("heritagePage.purityCard1Label"), title: t("heritagePage.purityCard1Title"), text: t("heritagePage.purityCard1Desc") },
    { label: t("heritagePage.purityCard2Label"), title: t("heritagePage.purityCard2Title"), text: t("heritagePage.purityCard2Desc") },
    { label: t("heritagePage.purityCard3Label"), title: t("heritagePage.purityCard3Title"), text: t("heritagePage.purityCard3Desc") },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heritage-hero-mountains.webp"
            alt="Cinematic wide shot of the Taliouine mountains at dawn"
            fill
            priority
            className="object-cover brightness-110 transition-all duration-1000"
          />
          <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.45)_0%,_transparent_60%)] opacity-80" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-surface via-surface/40 to-transparent pointer-events-none" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <FadeUp>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white mb-6">
              {t("heritagePage.heroOverline")}
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <h1 className="font-headline text-6xl md:text-8xl lg:text-9xl text-on-surface tracking-tighter italic leading-none">
              {t("heritagePage.heroTitle")} <span className="text-primary not-italic">{t("heritagePage.heroAccent")}</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="mt-12 flex justify-center">
              <span aria-hidden="true" className="material-icons-outlined text-primary text-4xl animate-bounce scale-[0.7] opacity-60">
                keyboard_double_arrow_down
              </span>
            </div>
          </FadeUp>
        </div>
      </section>

      <div className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 -translate-x-1/2 hidden lg:block z-0" />

        {/* Phases 01-06 */}
        <section className="relative min-h-screen flex items-center py-12 px-8 md:px-24 bg-surface z-10">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-center text-center mb-6">
              <FadeUp>
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-3 bg-surface ring-8 ring-surface z-20">
                  <span className="font-headline text-xl text-primary italic">01&nbsp;—&nbsp;06</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-2">{t("heritagePage.cultivationStages")}</p>
                <h2 className="font-headline text-4xl md:text-5xl mb-3 leading-tight text-on-surface">
                  {t("heritagePage.cultivationTitle")} <span className="italic">{t("heritagePage.cultivationAccent")}</span>
                </h2>
                <p className="text-on-surface-variant text-sm md:text-base max-w-2xl leading-relaxed font-light">
                  {t("heritagePage.cultivationIntro")}
                </p>
              </FadeUp>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline-variant/10 border border-outline-variant/10 rounded-sm overflow-hidden">
              {cultivationSteps.map((step, i) => (
                <FadeUp key={step.num} delay={0.05 * i}>
                  <div className="bg-surface hover:bg-surface-container-low transition-colors duration-700 p-5 md:p-6 h-full flex flex-col group">
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="font-headline text-3xl text-primary/80 italic transition-transform duration-500 group-hover:scale-110 origin-left">
                        {step.num}
                      </span>
                      <div className="h-px flex-1 bg-outline-variant/20" />
                    </div>
                    <h3 className="font-headline text-xl md:text-2xl text-on-surface mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed font-light">
                      {step.text}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Phase 07 */}
        <section className="relative md:min-h-screen flex items-center py-6 md:py-12 px-8 md:px-24 bg-surface z-10">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-center text-center mb-6">
              <FadeUp>
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-3 bg-surface ring-8 ring-surface z-20">
                  <span className="font-headline text-xl text-primary italic">07</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-2">{t("heritagePage.stage07")}</p>
                <h2 className="font-headline text-4xl md:text-5xl mb-2 leading-tight text-on-surface">
                  {t("heritagePage.gatheringTitle")} <span className="italic">{t("heritagePage.gatheringAccent")}</span>
                </h2>
              </FadeUp>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <FadeUp className="order-2 lg:order-1">
                <div className="max-w-xl">
                  <p className="text-on-surface-variant text-base leading-relaxed mb-6">
                    {t("heritagePage.gatheringDesc")}
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="h-px w-12 bg-primary/40" />
                    <p className="font-headline italic text-xl text-primary opacity-80">
                      {t("heritagePage.gatheringQuote")}
                    </p>
                  </div>
                </div>
              </FadeUp>

              <FadeIn className="order-1 lg:order-2">
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-2xl">
                    <Image
                      src="/images/gathering.webp"
                      alt="Close up of hands gently picking a purple crocus flower at early dawn"
                      fill
                      className="object-cover transition-all duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 md:bottom-8 md:left-8 z-20 overflow-hidden rounded-sm shadow-2xl max-w-[180px] md:max-w-[200px]">
                    <div className="glass-effect p-5 md:p-8 border border-white/20 backdrop-blur-md">
                      <div className="relative text-center">
                        <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2 md:mb-3">{t("heritagePage.gatheringWindow")}</p>
                        <p className="font-headline text-3xl md:text-4xl text-on-surface italic mb-3">{t("heritagePage.gatheringWindowValue")}</p>
                        <p className="text-[9px] md:text-[10px] tracking-[0.1em] uppercase text-on-surface/90 leading-relaxed font-light">
                          {t("heritagePage.gatheringWindowDesc")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Phase 08 */}
        <section className="relative md:min-h-screen flex items-center py-6 md:py-12 px-8 md:px-24 bg-surface z-10">
          <div className="max-w-7xl mx-auto w-full">
            <div className="flex flex-col items-center text-center mb-6">
              <FadeUp>
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-3 bg-surface ring-8 ring-surface z-20">
                  <span className="font-headline text-xl text-primary italic">08</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-2">{t("heritagePage.stage08")}</p>
                <h2 className="font-headline text-4xl md:text-5xl mb-2 leading-tight text-on-surface">
                  {t("heritagePage.separationTitle")} <span className="italic">{t("heritagePage.separationAccent")}</span>
                </h2>
              </FadeUp>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <FadeIn className="md:col-span-12">
                <div className="flex flex-col md:block relative md:aspect-[21/9] overflow-hidden rounded-sm group shadow-2xl">
                  <div className="relative aspect-video md:aspect-auto md:absolute md:inset-0">
                    <Image
                      src="/images/heritage-separation.webp"
                      alt="Artisanal separation process"
                      fill
                      className="object-cover brightness-90 md:brightness-75 md:group-hover:scale-[1.02] transition-transform duration-[3000ms]"
                    />
                  </div>
                  <div className="relative md:absolute md:inset-0 bg-surface md:bg-black/40 md:bg-gradient-to-r md:from-black/60 md:to-transparent flex items-center p-6 md:p-20">
                    <div className="max-w-xl md:glass-effect p-0 md:p-12 md:border md:border-white/10 rounded-sm heritage-quote">
                      <p className="text-on-surface md:text-white text-lg md:text-xl leading-relaxed italic font-headline mb-4 md:mb-6">
                        {t("heritagePage.quoteTradition")}
                      </p>
                      <p className="text-on-surface-variant md:text-white/85 text-sm md:text-base leading-relaxed font-light">
                        {t("heritagePage.quoteExtraction")}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Phase 09 */}
        <section className="relative md:min-h-screen flex items-center py-6 md:py-12 bg-surface z-10">
          <div className="max-w-7xl mx-auto px-8 w-full">
            <div className="flex flex-col items-center text-center mb-6">
              <FadeUp>
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-3 bg-surface ring-8 ring-surface z-20">
                  <span className="font-headline text-xl text-primary italic">09</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-2">{t("heritagePage.stage09")}</p>
                <h2 className="font-headline text-4xl md:text-5xl mb-2 leading-tight text-on-surface">
                  {t("heritagePage.dryingTitle")} <span className="italic">{t("heritagePage.dryingAccent")}</span>
                </h2>
              </FadeUp>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch overflow-hidden rounded-sm shadow-2xl border border-outline-variant/10">
              <FadeUp>
                <div className="bg-surface-container-highest p-8 md:p-12 flex flex-col justify-center h-full">
                  <div className="space-y-6 max-w-xl">
                    <div className="flex gap-6 group/item">
                      <div className="shrink-0 font-headline text-4xl text-primary/80 transition-transform duration-500 group-hover/item:scale-110">01</div>
                      <p className="text-on-surface-variant text-sm md:text-base leading-relaxed pt-1">
                        {t("heritagePage.dryingStep1")}
                      </p>
                    </div>
                    <div className="flex gap-6 group/item">
                      <div className="shrink-0 font-headline text-4xl text-primary/80 transition-transform duration-500 group-hover/item:scale-110">02</div>
                      <p className="text-on-surface-variant text-sm md:text-base leading-relaxed pt-1">
                        {t("heritagePage.dryingStep2")}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
              <FadeIn delay={0.2}>
                <div className="relative min-h-[280px] h-full">
                  <Image
                    src="/images/heritage-drying-premium.webp"
                    alt="Premium red saffron threads drying"
                    fill
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Phase 10 */}
        <section className="relative md:min-h-screen flex items-center py-6 md:py-12 bg-surface z-10">
          <div className="max-w-7xl mx-auto px-8 w-full">
            <div className="flex flex-col items-center text-center mb-6">
              <FadeUp>
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-3 bg-surface ring-8 ring-surface z-20">
                  <span className="font-headline text-xl text-primary italic">10</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-2">{t("heritagePage.stage10")}</p>
                <h2 className="font-headline text-4xl md:text-5xl mb-2 leading-tight text-on-surface">
                  {t("heritagePage.purityTitle")} <span className="italic">{t("heritagePage.purityAccent")}</span>
                </h2>
              </FadeUp>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/10 border-y border-outline-variant/10 bg-surface-container-lowest/30 backdrop-blur-sm">
              {purityCards.map((card, i) => (
                <FadeUp key={card.label} delay={0.1 * i}>
                  <div className="p-8 md:p-10 flex flex-col items-center text-center hover:bg-surface-container-low transition-colors duration-700 h-full group">
                    <span className="font-headline text-primary text-2xl italic mb-3 block transform group-hover:scale-110 transition-transform duration-700">
                      {card.label}
                    </span>
                    <h4 className="text-on-surface text-[10px] uppercase tracking-[0.2em] mb-3 font-bold">
                      {card.title}
                    </h4>
                    <p className="text-on-surface-variant text-sm leading-relaxed font-light px-2">
                      {card.text}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* Phase 11 */}
        <section className="relative md:min-h-screen flex items-center py-6 md:py-12 bg-surface z-10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 w-full">
            <div className="flex flex-col items-center text-center mb-6">
              <FadeUp>
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center mb-3 bg-surface ring-8 ring-surface z-20">
                  <span className="font-headline text-xl text-primary italic">11</span>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary/60 mb-2">{t("heritagePage.stage11")}</p>
                <h2 className="font-headline text-4xl md:text-5xl mb-2 leading-tight text-on-surface">
                  {t("heritagePage.precisionTitle")} <span className="italic">{t("heritagePage.precisionAccent")}</span>
                </h2>
              </FadeUp>
            </div>

            <div className="space-y-6">
              <FadeUp delay={0.1}>
                <div className="max-w-3xl mx-auto">
                  <p className="text-on-surface-variant text-lg md:text-xl font-light leading-relaxed italic border-l-2 border-primary/20 pl-8">
                    {t("heritagePage.precisionQuote")}
                  </p>
                </div>
              </FadeUp>

              <FadeIn className="relative">
                <div className="flex flex-col md:block relative md:aspect-[21/9] overflow-hidden rounded-sm shadow-2xl group">
                  <div className="relative aspect-video md:aspect-auto md:absolute md:inset-0">
                    <Image
                      src="/images/pdt-page-hero.png"
                      alt="Hand sealing a saffron vial"
                      fill
                      className="object-cover md:transition-transform md:duration-[2000ms] md:group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 md:bg-gradient-to-t md:from-black/80 md:via-black/40 md:to-transparent" />
                  </div>

                  <div className="relative md:absolute md:inset-x-0 md:bottom-0 p-6 md:p-16 bg-surface md:bg-transparent">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 max-w-5xl mx-auto">
                      <div>
                        <h4 className="text-[10px] md:text-base uppercase tracking-widest font-bold text-primary mb-2 md:mb-3">{t("heritagePage.vialSelection")}</h4>
                        <p className="text-xs md:text-lg text-on-surface-variant md:text-white/90 leading-snug md:leading-relaxed font-light">
                          {t("heritagePage.vialSelectionDesc")}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-[10px] md:text-base uppercase tracking-widest font-bold text-primary mb-2 md:mb-3">{t("heritagePage.sealedLegacy")}</h4>
                        <p className="text-xs md:text-lg text-on-surface-variant md:text-white/90 leading-snug md:leading-relaxed font-light">
                          {t("heritagePage.sealedLegacyDesc")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </div>

      {/* Final CTA */}
      <section className="py-24 bg-surface-container-lowest border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-8 text-center pt-12">
          <FadeUp>
            <p className="text-primary uppercase tracking-[0.4em] text-[10px] mb-8 font-bold">
              {t("heritagePage.journeyComplete")}
            </p>
            <div className="flex justify-center">
              <Link
                href="/products"
                className="btn-primary group !px-10 !py-4 shadow-2xl hover:shadow-primary/30 transition-all duration-700 hover:-translate-y-1 scale-100"
              >
                <span className="uppercase tracking-[0.4em] text-[11px] text-white font-bold">
                  {t("heritagePage.enterCollection")}
                </span>
                <span aria-hidden="true" className="material-icons-outlined text-white group-hover:translate-x-3 transition-transform duration-500">
                  trending_flat
                </span>
              </Link>
            </div>
            <p className="mt-16 text-on-surface-variant/40 text-[9px] uppercase tracking-[0.5em] font-light">
              {t("heritagePage.journeyTagline")}
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

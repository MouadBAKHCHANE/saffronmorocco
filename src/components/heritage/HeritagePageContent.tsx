"use client";

import { useRef, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import FadeUp from "@/components/animations/FadeUp";
import { useT } from "@/i18n/LocaleProvider";

/* ------------------------------------------------------------------ */
/* Roadmap primitives                                                   */
/*                                                                      */
/* The page is one road: a spine down the centre (left edge on mobile)  */
/* with a burgundy progress line that draws as the reader scrolls, and  */
/* a numbered node per stage that fills in when it comes into view.     */
/* Half-width milestones alternate sides; the image-heavy ones span the */
/* full width so the rhythm breathes.                                   */
/* ------------------------------------------------------------------ */

type Side = "left" | "right" | "full";

function Node({ num, filled = false }: { num: string; filled?: boolean }) {
  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border ring-8 ring-surface lg:h-14 lg:w-14 ${
        filled ? "border-primary bg-primary text-white" : "border-primary bg-surface text-primary"
      }`}
    >
      {filled ? (
        <span aria-hidden="true" className="material-icons-outlined text-xl">check</span>
      ) : (
        <span className="font-headline text-sm italic lg:text-lg">{num}</span>
      )}
    </motion.div>
  );
}

function Milestone({
  num,
  label,
  title,
  accent,
  side,
  children,
}: {
  num: string;
  label: string;
  title: string;
  accent: string;
  side: Side;
  children?: ReactNode;
}) {
  // mobile: node column + content column. desktop: content | spine | content
  const card =
    side === "full"
      ? "col-start-2 row-start-1 lg:col-start-1 lg:col-span-3 lg:row-start-2 lg:mt-8"
      : side === "left"
      ? "col-start-2 row-start-1 lg:col-start-1 lg:justify-self-end lg:max-w-[34rem] lg:w-full"
      : "col-start-2 row-start-1 lg:col-start-3 lg:max-w-[34rem] lg:w-full";

  return (
    <li className="relative grid grid-cols-[2.5rem_1fr] gap-x-5 py-8 lg:grid-cols-[1fr_4rem_1fr] lg:gap-x-10 lg:py-12">
      <div className="col-start-1 row-start-1 flex justify-center lg:col-start-2">
        <Node num={num} />
      </div>

      <div className={card}>
        <FadeUp>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-primary">{label}</p>
          <h2 className="font-headline text-3xl leading-tight text-on-surface md:text-4xl">
            {title} <span className="italic">{accent}</span>
          </h2>
        </FadeUp>
        <div className="mt-5">{children}</div>
      </div>
    </li>
  );
}

/* ------------------------------------------------------------------ */

export default function HeritagePageContent() {
  const t = useT();
  const road = useRef<HTMLOListElement | null>(null);
  const { scrollYProgress } = useScroll({ target: road, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 });

  const cultivationSteps = [
    { num: "01", title: t("heritagePage.rotationTitle"), text: t("heritagePage.rotationDesc") },
    { num: "02", title: t("heritagePage.soilTitle"), text: t("heritagePage.soilDesc") },
    { num: "03", title: t("heritagePage.plantationTitle"), text: t("heritagePage.plantationDesc") },
    { num: "04", title: t("heritagePage.irrigationTitle"), text: t("heritagePage.irrigationDesc") },
    { num: "05", title: t("heritagePage.fertilizationTitle"), text: t("heritagePage.fertilizationDesc") },
    { num: "06", title: t("heritagePage.cultivationStepTitle"), text: t("heritagePage.cultivationStepDesc") },
  ];

  const purityCards = [
    { label: t("heritagePage.purityCard1Label"), title: t("heritagePage.purityCard1Title"), text: t("heritagePage.purityCard1Desc") },
    { label: t("heritagePage.purityCard2Label"), title: t("heritagePage.purityCard2Title"), text: t("heritagePage.purityCard2Desc") },
    { label: t("heritagePage.purityCard3Label"), title: t("heritagePage.purityCard3Title"), text: t("heritagePage.purityCard3Desc") },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heritage-hero-mountains.webp"
            alt="Cinematic wide shot of the Taliouine mountains at dawn"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-110"
          />
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-48 bg-gradient-to-b from-black/80 via-black/30 to-transparent" />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[120%] w-[120%] bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.45)_0%,_transparent_60%)] opacity-80" />
          </div>
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl px-gutter text-center">
          <FadeUp>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
              {t("heritagePage.heroOverline")}
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <h1 className="font-headline text-6xl italic leading-none tracking-tighter text-on-surface md:text-8xl lg:text-9xl">
              {t("heritagePage.heroTitle")}{" "}
              <span className="not-italic text-primary">{t("heritagePage.heroAccent")}</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.3}>
            {/* the road begins here: a thin line that runs into the spine below */}
            <div aria-hidden="true" className="mx-auto mt-12 h-20 w-px bg-gradient-to-b from-primary to-primary/0" />
          </FadeUp>
        </div>
      </section>

      {/* ── Roadmap ── */}
      <section className="relative bg-surface px-gutter pb-12 pt-4">
        <div className="relative mx-auto max-w-7xl">
          {/* spine: track + scroll-driven progress */}
          <div aria-hidden="true" className="absolute bottom-0 left-5 top-0 w-px bg-outline-variant lg:left-1/2 lg:-translate-x-1/2">
            <motion.div style={{ scaleY: progress }} className="absolute inset-0 origin-top bg-primary" />
          </div>

          <ol ref={road} className="relative m-0 list-none p-0">
            {/* 01–06 · Cultivation */}
            <Milestone
              num="01–06"
              label={t("heritagePage.cultivationStages")}
              title={t("heritagePage.cultivationTitle")}
              accent={t("heritagePage.cultivationAccent")}
              side="full"
            >
              <FadeUp>
                <p className="max-w-2xl text-sm font-light leading-relaxed text-on-surface-variant md:text-base">
                  {t("heritagePage.cultivationIntro")}
                </p>
              </FadeUp>
              <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-outline-variant bg-outline-variant sm:grid-cols-2 lg:grid-cols-3">
                {cultivationSteps.map((step, i) => (
                  <FadeUp key={step.num} delay={0.05 * i}>
                    <div className="group flex h-full flex-col bg-surface p-5 transition-colors duration-500 hover:bg-surface-container-low md:p-6">
                      <div className="mb-3 flex items-baseline gap-3">
                        <span className="font-headline text-3xl italic text-primary">{step.num}</span>
                        <div className="h-px flex-1 bg-outline-variant" />
                      </div>
                      <h3 className="mb-2 font-headline text-xl leading-tight text-on-surface md:text-2xl">{step.title}</h3>
                      <p className="text-sm font-light leading-relaxed text-on-surface-variant">{step.text}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </Milestone>

            {/* 07 · Gathering */}
            <Milestone
              num="07"
              label={t("heritagePage.stage07")}
              title={t("heritagePage.gatheringTitle")}
              accent={t("heritagePage.gatheringAccent")}
              side="right"
            >
              <FadeUp>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-xl">
                  <Image
                    src="/images/gathering.webp"
                    alt="Close up of hands gently picking a purple crocus flower at early dawn"
                    fill
                    sizes="(max-width: 1024px) 100vw, 34rem"
                    className="object-cover"
                  />
                </div>
                <p className="mt-5 text-base leading-relaxed text-on-surface-variant">{t("heritagePage.gatheringDesc")}</p>
                <div className="mt-4 flex items-center gap-4">
                  <div className="h-px w-10 bg-primary/40" />
                  <p className="font-headline text-lg italic text-primary">{t("heritagePage.gatheringQuote")}</p>
                </div>
                {/* the harvest window, the one number this stage turns on */}
                <div className="mt-5 flex items-baseline gap-4 border-t border-outline-variant pt-4">
                  <span className="font-headline text-4xl italic text-on-surface">{t("heritagePage.gatheringWindowValue")}</span>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">{t("heritagePage.gatheringWindow")}</p>
                    <p className="text-xs font-light leading-relaxed text-on-surface-variant">{t("heritagePage.gatheringWindowDesc")}</p>
                  </div>
                </div>
              </FadeUp>
            </Milestone>

            {/* 08 · Separation */}
            <Milestone
              num="08"
              label={t("heritagePage.stage08")}
              title={t("heritagePage.separationTitle")}
              accent={t("heritagePage.separationAccent")}
              side="left"
            >
              <FadeUp>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-xl">
                  <Image
                    src="/images/heritage-separation.webp"
                    alt="Artisanal separation process"
                    fill
                    sizes="(max-width: 1024px) 100vw, 34rem"
                    className="object-cover"
                  />
                </div>
                <div className="mt-5 flex items-center gap-4">
                  <div className="h-px w-10 bg-primary/40" />
                  <p className="font-headline text-lg italic text-primary">{t("heritagePage.quoteTradition")}</p>
                </div>
                <p className="mt-4 text-base leading-relaxed text-on-surface-variant">{t("heritagePage.quoteExtraction")}</p>
              </FadeUp>
            </Milestone>

            {/* 09 · Drying */}
            <Milestone
              num="09"
              label={t("heritagePage.stage09")}
              title={t("heritagePage.dryingTitle")}
              accent={t("heritagePage.dryingAccent")}
              side="right"
            >
              <FadeUp>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm shadow-xl">
                  <Image
                    src="/images/heritage-drying-premium.webp"
                    alt="Premium red saffron threads drying"
                    fill
                    sizes="(max-width: 1024px) 100vw, 34rem"
                    className="object-cover"
                  />
                </div>
                <ol className="mt-5 m-0 list-none space-y-4 p-0">
                  {[t("heritagePage.dryingStep1"), t("heritagePage.dryingStep2")].map((step, i) => (
                    <li key={i} className="flex gap-5">
                      <span className="shrink-0 font-headline text-3xl italic text-primary">0{i + 1}</span>
                      <p className="pt-1 text-sm leading-relaxed text-on-surface-variant md:text-base">{step}</p>
                    </li>
                  ))}
                </ol>
              </FadeUp>
            </Milestone>

            {/* 10 · Purity */}
            <Milestone
              num="10"
              label={t("heritagePage.stage10")}
              title={t("heritagePage.purityTitle")}
              accent={t("heritagePage.purityAccent")}
              side="full"
            >
              <div className="grid grid-cols-1 divide-y divide-outline-variant overflow-hidden rounded-sm border border-outline-variant bg-surface-container-lowest md:grid-cols-3 md:divide-x md:divide-y-0">
                {purityCards.map((card, i) => (
                  <FadeUp key={card.label} delay={0.1 * i}>
                    <div className="flex h-full flex-col items-center p-8 text-center transition-colors duration-500 hover:bg-surface-container-low md:p-10">
                      <span className="mb-3 block font-headline text-3xl italic text-primary">{card.label}</span>
                      <h4 className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface">{card.title}</h4>
                      <p className="text-sm font-light leading-relaxed text-on-surface-variant">{card.text}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </Milestone>

            {/* 11 · Precision */}
            <Milestone
              num="11"
              label={t("heritagePage.stage11")}
              title={t("heritagePage.precisionTitle")}
              accent={t("heritagePage.precisionAccent")}
              side="left"
            >
              <FadeUp>
                <p className="border-l-2 border-primary/30 pl-6 text-base font-light italic leading-relaxed text-on-surface-variant md:text-lg">
                  {t("heritagePage.precisionQuote")}
                </p>
                <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-sm shadow-xl">
                  <Image
                    src="/images/pdt-page-hero.png"
                    alt="Hand sealing a saffron vial"
                    fill
                    sizes="(max-width: 1024px) 100vw, 34rem"
                    className="object-cover"
                  />
                </div>
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {[
                    [t("heritagePage.vialSelection"), t("heritagePage.vialSelectionDesc")],
                    [t("heritagePage.sealedLegacy"), t("heritagePage.sealedLegacyDesc")],
                  ].map(([head, body]) => (
                    <div key={head}>
                      <h4 className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">{head}</h4>
                      <p className="text-sm font-light leading-relaxed text-on-surface-variant">{body}</p>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </Milestone>

            {/* Journey complete */}
            <li className="relative grid grid-cols-[2.5rem_1fr] gap-x-5 py-10 lg:grid-cols-[1fr_4rem_1fr] lg:gap-x-10 lg:py-14">
              <div className="col-start-1 row-start-1 flex justify-center lg:col-start-2">
                <Node num="" filled />
              </div>
              <div className="col-start-2 row-start-1 lg:col-span-3 lg:col-start-1 lg:row-start-2 lg:mt-8 lg:text-center">
                <FadeUp>
                  <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.4em] text-primary">{t("heritagePage.journeyComplete")}</p>
                  <div className="flex lg:justify-center">
                    <Link
                      href="/products"
                      className="group inline-flex items-center gap-3 rounded-md bg-primary px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white shadow-xl transition-all duration-500 hover:-translate-y-0.5 hover:bg-primary-container"
                    >
                      {t("heritagePage.enterCollection")}
                      <span aria-hidden="true" className="material-icons-outlined transition-transform duration-500 group-hover:translate-x-2">trending_flat</span>
                    </Link>
                  </div>
                  <p className="mt-10 text-[9px] font-light uppercase tracking-[0.5em] text-on-surface-variant">{t("heritagePage.journeyTagline")}</p>
                </FadeUp>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}

"use client";

import FadeUp from "@/components/animations/FadeUp";
import { useT } from "@/i18n/LocaleProvider";

export default function ProductsPageHero() {
  const t = useT();
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 w-full">
      <FadeUp>
        <div className="inline-flex items-center gap-4 mb-4">
          <div className="h-[1px] w-10 bg-primary/60" />
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">
            {t("productsPage.overline")}
          </p>
        </div>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h1 className="font-headline text-5xl sm:text-7xl lg:text-8xl font-light text-off-white leading-[0.95] tracking-tight max-w-5xl">
          {t("productsPage.titleLine1")}<br />
          <span className="italic text-primary">{t("productsPage.titleLine2")}</span>
        </h1>
      </FadeUp>
    </div>
  );
}

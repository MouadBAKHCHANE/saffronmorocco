"use client";

import FadeUp from "@/components/animations/FadeUp";
import { useT } from "@/i18n/LocaleProvider";

export default function BlogPageHero() {
  const t = useT();
  return (
    <FadeUp>
      <span className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">
        {t("blogPage.overline")}
      </span>
      <h1 className="font-headline text-6xl sm:text-8xl text-on-surface mb-12 leading-[1.1]">
        {t("blogPage.titleLine1")}{" "}
        <span className="italic text-primary ml-4 md:ml-8">{t("blogPage.titleAccent")}</span>
      </h1>
    </FadeUp>
  );
}

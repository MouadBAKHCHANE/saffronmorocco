"use client";

import FadeUp from "@/components/animations/FadeUp";
import { useT } from "@/i18n/LocaleProvider";

export default function BlogNewsletter() {
  const t = useT();
  return (
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <FadeUp>
        <span className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-8 block">
          {t("footer.newsletter")}
        </span>
        <h2 className="font-headline text-5xl sm:text-6xl text-white mb-8 italic">
          {t("blogPage.titleLine1")}{" "}
          <span className="text-primary not-italic">{t("footer.newsletter")}</span>
        </h2>
        <p className="text-stone-400 font-light mb-12 max-w-xl mx-auto leading-relaxed text-lg">
          {t("footer.newsletterDesc")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder={t("footer.emailPlaceholder")}
            className="flex-grow bg-white/5 border border-primary rounded-full px-8 py-5 text-white text-xs tracking-widest focus:outline-none focus:border-red-500 transition-colors uppercase placeholder:text-stone-600"
          />
          <button className="bg-primary text-white px-10 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
            {t("footer.subscribe")}
          </button>
        </div>
      </FadeUp>
    </div>
  );
}

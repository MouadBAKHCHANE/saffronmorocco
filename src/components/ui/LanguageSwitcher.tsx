"use client";

import { useEffect, useRef, useState } from "react";
import { LOCALES, LOCALE_FLAG, LOCALE_LABEL } from "@/i18n/dictionaries";
import { useLocale } from "@/i18n/LocaleProvider";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label="Select language"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex h-10 min-w-10 items-center justify-center gap-1 rounded-full border border-outline-variant px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
      >
        {LOCALE_FLAG[locale]}
        <span className="material-icons-outlined text-sm font-light scale-[0.7] opacity-70">
          expand_more
        </span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 top-full mt-2 min-w-[140px] rounded-sm border border-outline-variant/30 bg-surface/95 backdrop-blur-xl shadow-2xl py-2 z-50"
        >
          {LOCALES.map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={locale === l}
                onClick={() => {
                  setLocale(l);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors ${
                  locale === l
                    ? "text-primary bg-primary/5"
                    : "text-stone-400 hover:text-primary hover:bg-white/5"
                }`}
              >
                <span>{LOCALE_LABEL[l]}</span>
                <span className="text-[9px] font-bold opacity-60">{LOCALE_FLAG[l]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

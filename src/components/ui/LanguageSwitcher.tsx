"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LOCALES, LOCALE_FLAG, LOCALE_LABEL } from "@/i18n/dictionaries";
import { useLocale } from "@/i18n/LocaleProvider";
import { localePath, isPrefixedLocale, isLocalizedRoute } from "@/i18n/routing";

export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const { locale, setLocale } = useLocale();
  const router = useRouter();
  const pathname = usePathname() || "/";

  /**
   * Switching language is a navigation, not a state flip: each language has
   * its own URL, so the address bar has to change or the choice is invisible
   * to search engines and unshareable.
   */
  const switchTo = (next: typeof locale) => {
    const seg = pathname.split("/").filter(Boolean);
    const bare = "/" + (isPrefixedLocale(seg[0] ?? "") ? seg.slice(1) : seg).join("");
    const route = bare === "/" ? "" : bare;
    if (isLocalizedRoute(route)) {
      router.push(localePath(route, next));
    } else {
      // untranslated page (blog post, product): stay put, just set the UI language
      setLocale(next);
    }
    setLocale(next);
  };
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
        className={`flex h-10 w-10 items-center justify-center transition-colors ${dark ? 'text-white hover:text-primary' : 'text-on-surface hover:text-primary'}`}
      >
        <span aria-hidden="true" className="material-icons-outlined text-2xl font-light">language</span>
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
                  switchTo(l);
                  setOpen(false);
                }}
                className={`flex w-full items-center justify-between px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors ${
                  locale === l
                    ? "text-primary bg-primary/5"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container"
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

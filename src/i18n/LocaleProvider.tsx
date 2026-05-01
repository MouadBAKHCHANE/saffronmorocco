"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import {
  DICTIONARIES,
  LOCALES,
  lookup,
  type Locale,
} from "./dictionaries";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  t: (key: string) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "locale";

function detectInitialLocale(): Locale {
  if (typeof window === "undefined") return "en";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && LOCALES.includes(stored)) return stored;
  } catch {
    /* ignore */
  }
  const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
  if (browser === "fr") return "fr";
  if (browser === "es") return "es";
  return "en";
}

export default function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const initial = detectInitialLocale();
    setLocaleState(initial);
    document.documentElement.lang = initial;
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = next;
  }, []);

  const t = useCallback(
    (key: string) => lookup(DICTIONARIES[locale], key),
    [locale]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    // Safe fallback if a component rendered outside the provider —
    // returns English with a no-op setter.
    return {
      locale: "en",
      setLocale: () => {},
      t: (key: string) => lookup(DICTIONARIES.en, key),
    };
  }
  return ctx;
}

/** Convenience hook for translation only. */
export function useT() {
  return useLocale().t;
}

"use client";

import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

/**
 * Read the current theme from the <html> class. Listens for class
 * changes so components re-render when ThemeToggle flips the theme.
 *
 * SSR-safe: returns 'dark' (the default) until mounted, then syncs.
 */
export function useTheme(): Theme {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const read = (): Theme =>
      document.documentElement.classList.contains("light") ? "light" : "dark";
    setTheme(read());

    const observer = new MutationObserver(() => setTheme(read()));
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return theme;
}

"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    const root = document.documentElement;
    root.classList.toggle("light", next === "light");
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore quota / private mode */
    }
  };

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant text-on-surface-variant"
      >
        <span className="material-icons-outlined text-xl font-light scale-[0.8] opacity-70">
          dark_mode
        </span>
      </button>
    );
  }

  const isDark = theme === "dark";
  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
    >
      <span className="material-icons-outlined text-xl font-light scale-[0.8] opacity-70 transition-all">
        {isDark ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
}

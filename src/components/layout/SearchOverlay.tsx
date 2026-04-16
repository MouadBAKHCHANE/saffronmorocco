"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface SearchResult {
  title: string;
  href: string;
  type: string;
}

const STATIC_PAGES: SearchResult[] = [
  { title: "Home", href: "/", type: "Page" },
  { title: "About Saffron", href: "/about", type: "Page" },
  { title: "Heritage — The Artisanal Journey", href: "/heritage", type: "Page" },
  { title: "Products — The Collection", href: "/products", type: "Page" },
  { title: "Blog", href: "/blog", type: "Page" },
  { title: "Contact", href: "/contact", type: "Page" },
  { title: "In Cosmetics", href: "/blog?category=in-cosmetics", type: "Category" },
  { title: "In Medicine", href: "/blog?category=in-medicine", type: "Category" },
  { title: "In the Kitchen", href: "/blog?category=in-the-kitchen", type: "Category" },
  { title: "Saffron Knowledge", href: "/blog?category=saffron-knowledge", type: "Category" },
];

interface SearchOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ open, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
      setResults([]);
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  const search = useCallback((q: string) => {
    setQuery(q);
    if (!q.trim()) {
      setResults([]);
      return;
    }
    const lower = q.toLowerCase();
    const matched = STATIC_PAGES.filter(
      (p) => p.title.toLowerCase().includes(lower)
    );
    setResults(matched);
  }, []);

  const handleNavigate = (href: string) => {
    onClose();
    router.push(href);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-20 md:pt-32"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Search panel */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-2xl mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-surface border border-outline-variant/20 rounded-sm shadow-2xl overflow-hidden">
              {/* Input */}
              <div className="flex items-center gap-4 px-6 py-5 border-b border-outline-variant/10">
                <span className="material-icons-outlined text-xl text-stone-500">
                  search
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => search(e.target.value)}
                  placeholder="Search pages, categories..."
                  className="flex-1 bg-transparent text-on-surface text-base font-light tracking-wide outline-none placeholder:text-stone-600"
                />
                <button
                  type="button"
                  onClick={onClose}
                  className="text-[10px] uppercase tracking-widest text-stone-500 border border-outline-variant/20 px-2 py-1 rounded-sm hover:text-primary transition-colors"
                >
                  ESC
                </button>
              </div>

              {/* Results */}
              {query.trim() && (
                <div className="max-h-80 overflow-y-auto">
                  {results.length === 0 ? (
                    <p className="px-6 py-8 text-center text-stone-500 text-sm font-light">
                      No results for &ldquo;{query}&rdquo;
                    </p>
                  ) : (
                    <div className="py-2">
                      {results.map((r) => (
                        <button
                          key={r.href}
                          type="button"
                          onClick={() => handleNavigate(r.href)}
                          className="w-full flex items-center justify-between px-6 py-3.5 hover:bg-white/5 transition-colors text-left group"
                        >
                          <div className="flex items-center gap-3">
                            <span className="material-icons-outlined text-base text-stone-600 group-hover:text-primary transition-colors">
                              {r.type === "Category" ? "label" : "article"}
                            </span>
                            <span className="text-on-surface text-sm font-light group-hover:text-primary transition-colors">
                              {r.title}
                            </span>
                          </div>
                          <span className="text-[9px] uppercase tracking-widest text-stone-600">
                            {r.type}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Quick links when empty */}
              {!query.trim() && (
                <div className="px-6 py-5">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-stone-600 font-bold mb-4">
                    Quick Links
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Products", "Heritage", "Blog", "Contact"].map((label) => {
                      const href = `/${label.toLowerCase()}`;
                      return (
                        <button
                          key={label}
                          type="button"
                          onClick={() => handleNavigate(href)}
                          className="px-4 py-2 text-xs uppercase tracking-[0.2em] text-stone-400 border border-outline-variant/20 rounded-sm hover:border-primary hover:text-primary transition-colors"
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

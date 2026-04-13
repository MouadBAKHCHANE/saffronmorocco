'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import useScrollDirection from '@/hooks/useScrollDirection';
import { NAV_LINKS, SITE_NAME, IMAGE_URLS, SOCIAL_LINKS } from '@/lib/constants';
import { SOCIAL_ICONS_MAP } from '@/components/ui/SocialIcons';

export default function Header() {
  const pathname = usePathname();
  const { isScrolled } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-[400ms] ease-in-out ${
        mobileOpen
          ? 'bg-surface'
          : isScrolled
          ? 'bg-surface/80 backdrop-blur-xl shadow-[0px_24px_48px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-wide items-center justify-between px-[clamp(1.25rem,5vw,6rem)]">
        {/* Logo */}
        <Link href="/" className="relative z-[60] flex-shrink-0">
          <Image
            src={IMAGE_URLS.logoWhite}
            alt={SITE_NAME}
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Right – nav + icons */}
        <div className="hidden items-center gap-12 lg:flex">
          <nav className="flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-headline text-base tracking-widest font-light transition-colors duration-300 ${
                    isActive
                      ? 'text-primary border-b border-primary pb-1'
                      : 'text-stone-400 hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Search"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
            >
              <span className="material-icons-outlined text-xl font-light scale-[0.8] opacity-70 transition-all">search</span>
            </button>
            <button
              type="button"
              aria-label="Shopping bag"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
            >
              <span className="material-icons-outlined text-xl font-light scale-[0.8] opacity-70 transition-all">shopping_bag</span>
            </button>
          </div>
        </div>

        {/* Mobile Hamburger/Close */}
        <div className="flex items-center gap-4 lg:hidden">
          <AnimatePresence mode="wait">
            {mobileOpen && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                key="close-label"
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary"
              >
                Close
              </motion.span>
            )}
          </AnimatePresence>
          <button
            type="button"
            className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-[6px]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1.5px] w-6 transition-all duration-300 ${
                mobileOpen
                  ? 'translate-y-[7.5px] rotate-45 bg-primary'
                  : 'bg-white'
              }`}
            />
            <span
              className={`block h-[1.5px] w-4 ml-auto transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : 'bg-white'
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 transition-all duration-300 ${
                mobileOpen
                  ? '-translate-y-[7.5px] -rotate-45 bg-primary'
                  : 'bg-white'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[55] flex flex-col bg-surface px-8 py-32 lg:hidden overflow-y-auto"
          >
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col gap-6 pt-12">
              {NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`font-headline text-5xl md:text-7xl italic transition-colors leading-tight ${
                        isActive ? 'text-primary' : 'text-stone-200 hover:text-primary'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-auto pt-16 border-t border-outline-variant/10">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500 mb-8 text-center sm:text-left">
                Connect With Us
              </p>
              <div className="flex justify-center sm:justify-start gap-12">
                {SOCIAL_LINKS.map((social, i) => {
                  const Icon = SOCIAL_ICONS_MAP[social.platform as keyof typeof SOCIAL_ICONS_MAP];
                  return (
                    <motion.a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="text-stone-400 hover:text-primary transition-colors flex flex-col items-center gap-3 group"
                    >
                      <div className="w-14 h-14 rounded-full border border-outline-variant/30 flex items-center justify-center group-hover:border-primary transition-colors">
                        {Icon && <Icon className="w-6 h-6" />}
                      </div>
                      <span className="text-[10px] uppercase tracking-widest font-bold opacity-60 group-hover:opacity-100 transition-opacity">
                        {social.label}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

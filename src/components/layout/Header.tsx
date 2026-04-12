'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollDirection from '@/hooks/useScrollDirection';
import { NAV_LINKS, SITE_NAME, IMAGE_URLS } from '@/lib/constants';

export default function Header() {
  const pathname = usePathname();
  const { isScrolled } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-[400ms] ease-in-out ${
        isScrolled
          ? 'bg-[#161310]/60 backdrop-blur-xl shadow-[0px_24px_48px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-wide items-center justify-between px-[clamp(1.25rem,5vw,6rem)]">
        {/* Logo */}
        <Link href="/" className="relative z-10 flex-shrink-0">
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
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-headline text-sm font-light transition-colors duration-300 ${
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
              <span className="material-icons-outlined text-xl">search</span>
            </button>
            <button
              type="button"
              aria-label="Shopping bag"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
            >
              <span className="material-icons-outlined text-xl">shopping_bag</span>
            </button>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] w-6 transition-all duration-300 ${
              mobileOpen
                ? 'translate-y-[7px] rotate-45 bg-white'
                : 'bg-white'
            }`}
          />
          <span
            className={`block h-[2px] w-6 transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : 'bg-white'
            }`}
          />
          <span
            className={`block h-[2px] w-6 transition-all duration-300 ${
              mobileOpen
                ? '-translate-y-[7px] -rotate-45 bg-white'
                : 'bg-white'
            }`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-[49] flex flex-col items-center justify-center gap-8 bg-surface md:hidden"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-headline text-h3 transition-colors ${
                    isActive ? 'text-primary' : 'text-on-surface hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

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
import SearchOverlay from './SearchOverlay';
import ThemeToggle from '@/components/ui/ThemeToggle';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { useT } from '@/i18n/LocaleProvider';
import { useTheme } from '@/hooks/useTheme';

// Map nav hrefs to translation keys.
const NAV_TRANSLATION_KEYS: Record<string, string> = {
  '/': 'nav.home',
  '/about': 'nav.about',
  '/heritage': 'nav.heritage',
  '/products': 'nav.products',
  '/blog': 'nav.blog',
  '/contact': 'nav.contact',
};

const BLOG_CHILD_KEYS: Record<string, string> = {
  '/blog?category=in-cosmetics': 'blogChildren.inCosmetics',
  '/blog?category=in-medicine': 'blogChildren.inMedicine',
  '/blog?category=in-the-kitchen': 'blogChildren.inTheKitchen',
  '/blog?category=saffron-knowledge': 'blogChildren.saffronKnowledge',
};

export default function Header() {
  const pathname = usePathname();
  const { isScrolled } = useScrollDirection();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const t = useT();
  const theme = useTheme();
  const isLight = theme === 'light';
  // The header is fixed over the hero video at top of page.
  // The hero is always cinematic-dark, so over the hero we keep white treatment
  // regardless of theme. Once scrolled into the page body we follow the theme.
  const overDarkHero = !isScrolled && !mobileOpen;
  const useDarkText = isLight && !overDarkHero; // dark text on light page body
  const navLabel = (link: { href: string; label: string }) => {
    const key = NAV_TRANSLATION_KEYS[link.href];
    return key ? t(key) : link.label;
  };
  const childLabel = (child: { href: string; label: string }) => {
    const key = BLOG_CHILD_KEYS[child.href];
    return key ? t(key) : child.label;
  };

  const toggleExpand = (href: string) => {
    setExpandedItems(prev => 
      prev.includes(href) ? prev.filter(h => h !== href) : [...prev, href]
    );
  };

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
      <div className="mx-auto flex h-16 lg:h-20 max-w-wide items-center justify-between px-[clamp(1.25rem,5vw,6rem)]">
        {/* Logo — sfBranding only when in light mode AND scrolled past the hero;
            otherwise the white wordmark for dark/cinematic contexts. */}
        <Link href="/" className="relative z-[60] flex-shrink-0">
          <Image
            src={useDarkText ? IMAGE_URLS.logoBranding : IMAGE_URLS.logoWhite}
            alt={SITE_NAME}
            width={120}
            height={30}
            className={`h-8 lg:h-10 w-auto filter transition-all ${
              useDarkText
                ? 'drop-shadow-[0_1px_2px_rgba(26,23,20,0.10)]'
                : 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]'
            }`}
            priority
          />
        </Link>

        {/* Right – nav + icons */}
        <div className="hidden items-center gap-12 lg:flex">
          <nav className="flex items-center gap-10">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const hasChildren = !!link.children?.length;
              return (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`font-headline text-base tracking-widest font-light transition-colors duration-300 inline-flex items-center gap-1 ${
                      isActive
                        ? 'text-primary border-b border-primary pb-1'
                        : overDarkHero
                          ? 'text-white/85 hover:text-primary'
                          : 'text-stone-400 hover:text-primary'
                    }`}
                  >
                    {navLabel(link)}
                    {hasChildren && (
                      <span className="material-icons-outlined text-base scale-75 opacity-70 transition-transform group-hover:rotate-180">
                        expand_more
                      </span>
                    )}
                  </Link>
                  {hasChildren && (
                    <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <div className="min-w-[220px] rounded-sm border border-outline-variant/20 bg-surface/95 backdrop-blur-xl shadow-2xl py-3">
                        {link.children!.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-2.5 text-xs tracking-[0.15em] uppercase text-stone-400 hover:text-primary hover:bg-white/5 transition-colors"
                          >
                            {childLabel(child)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className={`flex items-center gap-3 ${overDarkHero ? 'header-over-hero' : ''}`}>
            <button
              type="button"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-primary hover:text-primary ${
                overDarkHero
                  ? 'border-white/30 text-white/85'
                  : 'border-outline-variant text-on-surface-variant'
              }`}
            >
              <span className="material-icons-outlined text-xl font-light scale-[0.8] opacity-70 transition-all">search</span>
            </button>
            <ThemeToggle />
            <LanguageSwitcher />
            <button
              type="button"
              aria-label="Shopping bag"
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-primary hover:text-primary ${
                overDarkHero
                  ? 'border-white/30 text-white/85'
                  : 'border-outline-variant text-on-surface-variant'
              }`}
            >
              <span className="material-icons-outlined text-xl font-light scale-[0.8] opacity-70 transition-all">shopping_bag</span>
            </button>
          </div>
        </div>

        {/* Mobile Hamburger/Close */}
        <div className="flex items-center gap-4 lg:hidden">
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
                  : useDarkText ? 'bg-on-surface' : 'bg-white'
              }`}
            />
            <span
              className={`block h-[1.5px] w-4 ml-auto transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : useDarkText ? 'bg-on-surface' : 'bg-white'
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 transition-all duration-300 ${
                mobileOpen
                  ? '-translate-y-[7.5px] -rotate-45 bg-primary'
                  : useDarkText ? 'bg-on-surface' : 'bg-white'
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
            className="fixed inset-0 z-[55] flex flex-col bg-surface px-8 pt-16 pb-12 lg:hidden overflow-y-auto"
          >
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col">
              {NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.href;
                const hasChildren = !!link.children?.length;
                const isExpanded = expandedItems.includes(link.href);

                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, ease: "easeOut" }}
                    className="border-b border-outline-variant/10 py-3.5 first:pt-0"
                  >
                    <div className="flex items-center gap-4">
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`font-headline text-3xl md:text-4xl italic transition-colors leading-tight ${
                          isActive ? 'text-primary' : 'text-stone-200 hover:text-primary'
                        }`}
                      >
                        {navLabel(link)}
                      </Link>
                      {hasChildren && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleExpand(link.href);
                          }}
                          className={`transition-all duration-300 hover:text-primary ${
                            isExpanded ? 'text-primary rotate-180' : 'text-stone-400'
                          }`}
                        >
                          <span className="material-icons-outlined text-2xl font-light">
                            expand_more
                          </span>
                        </button>
                      )}
                    </div>

                    <AnimatePresence>
                      {hasChildren && isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 flex flex-col gap-3 pl-4 border-l border-primary/20">
                            {link.children!.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="text-sm tracking-[0.2em] uppercase text-stone-400 hover:text-primary transition-colors py-1"
                              >
                                {childLabel(child)}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-outline-variant/10 flex items-center justify-center sm:justify-start gap-4">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>

            <div className="mt-8 pt-8 border-t border-outline-variant/10">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-stone-500 mb-6 text-center sm:text-left">
                Connect With Us
              </p>
              <div className="flex justify-center sm:justify-start gap-8 md:gap-12">
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
                      <span className="text-xs uppercase tracking-widest font-bold opacity-60 group-hover:opacity-100 transition-opacity">
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

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}

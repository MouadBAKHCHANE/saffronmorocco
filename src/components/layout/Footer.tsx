'use client';

import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS, SITE_NAME, IMAGE_URLS, CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { SOCIAL_ICONS_MAP } from '@/components/ui/SocialIcons';
import { useT } from '@/i18n/LocaleProvider';
import { useTheme } from '@/hooks/useTheme';

const NAV_KEYS: Record<string, string> = {
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

export default function Footer() {
  const t = useT();
  const theme = useTheme();
  const isLight = theme === 'light';
  const navLabel = (l: { href: string; label: string }) =>
    NAV_KEYS[l.href] ? t(NAV_KEYS[l.href]) : l.label;
  const childLabel = (c: { href: string; label: string }) =>
    BLOG_CHILD_KEYS[c.href] ? t(BLOG_CHILD_KEYS[c.href]) : c.label;
  return (
    <footer className="bg-[#181512]">
      <div className="mx-auto max-w-content px-[clamp(1.25rem,5vw,6rem)] py-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo + description + Socials */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left space-y-8">
            <Image
              src={isLight ? IMAGE_URLS.logoBranding : IMAGE_URLS.logoWhite}
              alt={SITE_NAME}
              width={180}
              height={45}
              className="h-11 w-auto"
            />
            <p className="max-w-xs text-sm tracking-[0.2em] leading-relaxed text-stone-500">
              {t('footer.tagline')}
            </p>

            <div className="flex flex-col gap-4">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-600 font-bold">{t('footer.connect')}</p>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = SOCIAL_ICONS_MAP[link.platform as keyof typeof SOCIAL_ICONS_MAP];
                  return (
                    <a
                      key={link.platform}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full border border-outline-variant/20 text-stone-500 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                      aria-label={link.label}
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Menu - CENTERED ON MOBILE */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left md:pl-8 lg:pl-16 gap-4">
            <p className="text-sm font-semibold tracking-[0.3em] text-stone-400 mb-2">
              {t('footer.quickLinks')}
            </p>
            {NAV_LINKS.map((link) => (
              <div key={link.href} className="flex flex-col items-center md:items-start gap-2">
                <Link
                  href={link.href}
                  className="text-sm tracking-[0.2em] text-stone-500 transition-colors hover:text-primary"
                >
                  {navLabel(link)}
                </Link>
                {link.children && link.children.length > 0 && (
                  <div className="flex flex-col items-center md:items-start gap-2 pl-0 md:pl-3 md:border-l md:border-outline-variant/15">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="text-xs tracking-[0.2em] uppercase text-stone-600 transition-colors hover:text-primary"
                      >
                        {childLabel(child)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact with icons - CENTERED ON MOBILE */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-400 mb-2">
              {t('nav.contact')}
            </p>
            <a
              href={CONTACT_INFO.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start md:items-start gap-3 transition-colors hover:text-primary group"
            >
              <span className="material-icons-outlined text-base text-stone-600 mt-0.5 group-hover:text-primary">location_on</span>
              <p className="text-sm leading-relaxed text-stone-500 group-hover:text-primary">
                {CONTACT_INFO.address[0]}
                <br />
                {CONTACT_INFO.address[1]}
              </p>
            </a>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-3 text-sm text-stone-500 transition-colors hover:text-primary"
            >
              <span className="material-icons-outlined text-base text-stone-600">phone</span>
              {CONTACT_INFO.phone}
            </a>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-3 text-sm text-stone-500 transition-colors hover:text-primary group/footer-mail"
            >
              <span className="material-icons-outlined text-base text-stone-600 group-hover/footer-mail:text-primary">mail</span>
              {CONTACT_INFO.email}
            </a>
          </div>

          {/* Newsletter - CENTERED ON MOBILE */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-400 mb-2">
              {t('footer.newsletter')}
            </p>
            <p className="text-sm leading-relaxed text-stone-500">
              {t('footer.newsletterDesc')}
            </p>
            <form className="flex w-full max-w-sm gap-0 mt-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="flex-1 bg-surface-container-lowest px-4 py-3 text-sm text-on-surface placeholder:text-stone-600 outline-none border border-outline-variant/20 border-r-0 rounded-l-sm focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-primary-container to-primary px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white rounded-r-sm hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                {t('footer.subscribe')}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar - CENTERED ON MOBILE */}
      <div className="border-t border-outline-variant/10">
        <div className="mx-auto max-w-content px-[clamp(1.25rem,5vw,6rem)] py-8 flex flex-col gap-6 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <Link href="/privacy" className="text-xs uppercase tracking-[0.2em] text-stone-500 transition-colors hover:text-primary">
              {t('footer.privacy')}
            </Link>
            <Link href="/terms" className="text-xs uppercase tracking-[0.2em] text-stone-500 transition-colors hover:text-primary">
              {t('footer.terms')}
            </Link>
            <Link href="/shipping" className="text-xs uppercase tracking-[0.2em] text-stone-500 transition-colors hover:text-primary">
              {t('footer.shipping')}
            </Link>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-stone-600">
            &copy; 2026 {SITE_NAME}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}

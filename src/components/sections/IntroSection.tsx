'use client';

import Link from 'next/link';
import FadeUp from '@/components/animations/FadeUp';
import { useT, useLocale } from '@/i18n/LocaleProvider';
import { withLocale } from '@/i18n/routing';

/**
 * Crawlable editorial intro below the hero — the homepage's primary
 * on-page copy for "Moroccan saffron" (terroir, AOP, ISO 3632, harvest).
 */
export default function IntroSection() {
  const t = useT();
  const { locale } = useLocale();
  return (
    <section className="py-20 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <FadeUp>
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">
                {t('homeIntro.overline')}
              </span>
              <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-[1.1]">
                {t('homeIntro.title')}{' '}
                <span className="italic text-primary">{t('homeIntro.titleAccent')}</span>
              </h2>
            </FadeUp>
          </div>
          <div className="lg:col-span-7 max-w-2xl">
            <FadeUp delay={0.15}>
              <div className="space-y-6 text-stone-500 text-base font-light leading-relaxed">
                <p>{t('homeIntro.p1')}</p>
                <p>{t('homeIntro.p2')}</p>
                <p>{t('homeIntro.p3')}</p>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-8">
                <Link
                  href={withLocale("/heritage", locale)}
                  className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-primary hover:text-on-surface transition-colors"
                >
                  {t('homeIntro.ctaHeritage')}
                  <span aria-hidden="true" className="material-icons-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>
                </Link>
                <Link
                  href={withLocale("/products", locale)}
                  className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors"
                >
                  {t('homeIntro.ctaProducts')}
                  <span aria-hidden="true" className="material-icons-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

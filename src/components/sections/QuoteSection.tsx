'use client';

import Link from 'next/link';
import FadeUp from '@/components/animations/FadeUp';
import { useT, useLocale } from '@/i18n/LocaleProvider';
import { withLocale } from '@/i18n/routing';

export default function QuoteSection() {
  const t = useT();
  const { locale } = useLocale();
  return (
    <section className="relative overflow-hidden bg-surface flex items-center py-20 md:py-24">
      {/* Giant decorative quote mark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-headline text-[14rem] leading-none text-on-surface opacity-5"
      >
        &ldquo;
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <FadeUp>
          <blockquote className="font-headline text-3xl font-light italic leading-snug text-on-surface md:text-4xl">
            {t('quote.text')}
          </blockquote>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {t('quote.attribution')}
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link href={withLocale("/heritage", locale)} className="btn-secondary rounded-md">
              {t('homeIntro.ctaHeritage')}
            </Link>
            <Link href={withLocale("/products", locale)} className="btn-primary rounded-md">
              {t('homeIntro.ctaProducts')}
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

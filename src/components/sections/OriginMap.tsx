'use client';

import Image from 'next/image';
import FadeUp from '@/components/animations/FadeUp';
import FadeIn from '@/components/animations/FadeIn';
import Container from '@/components/layout/Container';
import { IMAGE_URLS } from '@/lib/constants';
import { useT } from '@/i18n/LocaleProvider';

export default function OriginMap() {
  const t = useT();
  return (
    <section className="bg-surface min-h-[90vh] flex items-center py-24 md:py-32 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-16 items-center">
          {/* Map Left */}
          <FadeIn className="relative aspect-square lg:aspect-auto lg:h-[70vh]">
            <Image
              src={IMAGE_URLS.moroccoPremium}
              alt="Premium 3D Map of Morocco highlighting Taliouine"
              fill
              priority
              className="object-contain transform scale-110 transition-transform duration-1000 hover:scale-115"
            />
            {/* Legend/Location Label */}
            <div className="absolute bottom-10 right-10 text-right border-r border-primary/40 pr-4 py-2">
              <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">{t('origin.originPoint')}</p>
              <h4 className="font-headline text-xl text-off-white italic">Taliouine</h4>
              <p className="text-[10px] text-warm-gray mt-1 opacity-60">30.5284° N, 7.8920° W</p>
            </div>
          </FadeIn>

          {/* Text Right - Editorial Layout */}
          <div className="space-y-5 max-w-2xl">
            <div className="space-y-3">
              <FadeUp>
                <div className="inline-flex items-center gap-4">
                  <div className="h-[1px] w-8 bg-primary/40" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary brightness-150">
                    {t('origin.overline')}
                  </p>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h2 className="font-headline text-4xl md:text-6xl font-light text-off-white leading-[0.9] tracking-tight whitespace-nowrap">
                  {t('origin.titleCity')} <span className="italic font-light text-primary">{t('origin.titleCountry')}</span>
                </h2>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="font-light leading-relaxed text-warm-gray text-sm md:text-base opacity-90 border-l border-primary/20 pl-6">
                  {t('origin.description')}
                </p>
              </FadeUp>
            </div>

            {/* Scientific Data Strip */}
            <FadeUp delay={0.3}>
              <div className="grid grid-cols-2 gap-4 border-y border-outline-variant/10 py-4">
                <div className="group/metric">
                  <h5 className="text-sm text-primary uppercase tracking-[0.3em] font-bold mb-1.5 group-hover/metric:translate-x-1 transition-transform">{t('origin.crocineTitle')}</h5>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">{t('origin.crocineSub')}</p>
                  <p className="text-sm text-stone-500 leading-snug font-light">
                    {t('origin.crocineDesc')}
                  </p>
                </div>
                <div className="group/metric">
                  <h5 className="text-sm text-primary uppercase tracking-[0.3em] font-bold mb-1.5 group-hover/metric:translate-x-1 transition-transform">{t('origin.safranalTitle')}</h5>
                  <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">{t('origin.safranalSub')}</p>
                  <p className="text-sm text-stone-500 leading-snug font-light">
                    {t('origin.safranalDesc')}
                  </p>
                </div>
              </div>
            </FadeUp>

            {/* Terroir Feature Card */}
            <FadeUp delay={0.4}>
              <div className="relative group overflow-hidden bg-surface-container-low/30 backdrop-blur-md border border-outline-variant/20 p-5 rounded-sm">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -mr-24 -mt-24 transition-all duration-1000 group-hover:bg-primary/10 group-hover:scale-125" />

                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-headline text-xl md:text-2xl italic mb-2">{t('origin.terroirTitle')}</h4>
                    <p className="text-stone-400 text-xs md:text-sm leading-relaxed font-light max-w-sm">
                      {t('origin.terroirDesc')}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}

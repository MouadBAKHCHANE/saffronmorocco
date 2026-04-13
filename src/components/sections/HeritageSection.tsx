'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeUp from '@/components/animations/FadeUp';
import FadeIn from '@/components/animations/FadeIn';
import { IMAGE_URLS } from '@/lib/constants';

export default function HeritageSection() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-content px-[clamp(1.25rem,5vw,6rem)]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          {/* Text – 5 columns */}
          <div className="lg:col-span-5">
            <FadeUp>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                The Heritage
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="font-headline text-h2 font-light text-on-surface">
                The Origin
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="my-8 h-px w-20 bg-primary-container" />
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="mb-6 font-light leading-relaxed text-on-surface-variant">
                Nestled between the High-Atlas and the Anti-Atlas
                mountains, Taliouine is the heart of Moroccan saffron.
                Here, the altitude and unique volcanic composition of
                the soil create a terroir unlike any other in the world.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <p className="mb-8 font-headline italic leading-relaxed text-on-surface-variant">
                &ldquo;iD BAKHCHANE is more than a cooperative; it is a lineage of
                stewards protecting a 1,000-year-old tradition.&rdquo;
              </p>
            </FadeUp>

            <FadeUp delay={0.5}>
              <Link
                href="/heritage"
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition-colors hover:text-primary/80"
              >
                Explore the Terroir
                <span className="material-icons-outlined text-sm transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </FadeUp>
          </div>

          {/* Image – 7 columns */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.2}>
              <div className="relative aspect-video overflow-hidden shadow-2xl">
                <Image
                  src={IMAGE_URLS.taliouinePanorama}
                  alt="Panoramic view of Taliouine and the Anti-Atlas mountains"
                  fill
                  className="object-cover transition-all duration-700 hover:scale-105"
                />

                {/* Glass overlay card */}
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 glass-effect rounded-sm px-4 py-3 md:px-6 md:py-4 max-w-[150px] md:max-w-[200px]">
                  <p className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
                    Altitude
                  </p>
                  <p className="mt-1 font-headline text-xl md:text-2xl font-light text-on-surface">
                    1,500m
                  </p>
                  <p className="mt-1 text-[10px] md:text-xs font-light text-on-surface-variant leading-relaxed">
                    The ideal altitude for the Crocus
                    sativus to develop its most potent
                    essential oils.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

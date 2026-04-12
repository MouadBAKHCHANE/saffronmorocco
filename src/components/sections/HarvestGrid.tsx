'use client';

import Image from 'next/image';
import FadeUp from '@/components/animations/FadeUp';
import FadeIn from '@/components/animations/FadeIn';
import { IMAGE_URLS } from '@/lib/constants';

export default function HarvestGrid() {
  return (
    <section className="bg-surface-container-low min-h-screen flex items-center py-32">
      <div className="mx-auto max-w-content px-[clamp(1.25rem,5vw,6rem)]">
        {/* Header */}
        <div className="mb-16 text-center">
          <FadeUp>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
              The Process
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-headline text-h2 font-light text-on-surface">
              The Art of the Harvest
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-4 max-w-lg font-headline italic text-on-surface-variant">
              A race against the sun
            </p>
          </FadeUp>
        </div>

        {/* Bento grid – 4 cols, 2 rows */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2">
          {/* Large card – col-span-2 row-span-2 */}
          <FadeIn className="md:col-span-2 md:row-span-2">
            <div className="group relative h-full min-h-[400px] overflow-hidden rounded-sm md:min-h-0">
              <Image
                src={IMAGE_URLS.harvestHands}
                alt="The dawn gathering of saffron"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  October
                </p>
                <h3 className="mt-2 font-headline text-2xl font-light text-on-surface">
                  The Dawn Gathering
                </h3>
                <p className="mt-2 text-sm font-light text-stone-400">
                  Flowers that are picked before the sun fully opens them to
                  the saffron-scented morning air.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Top right – flower macro */}
          <FadeIn delay={0.1} className="md:col-span-2">
            <div className="group relative flex min-h-[240px] items-center justify-center overflow-hidden rounded-sm">
              <Image
                src={IMAGE_URLS.bowlDark}
                alt="Saffron flower macro"
                fill
                className="object-cover opacity-60 transition-all duration-700 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="relative z-10 flex flex-col items-center p-8 text-center">
                <span className="material-icons-outlined text-primary text-4xl mb-3">
                  filter_vintage
                </span>
                <p className="font-headline text-3xl font-light text-on-surface">
                  150,000
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
                  Flowers
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-stone-500">
                  Required for 1kg of Saffron
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Bottom left – stigma separation */}
          <FadeIn delay={0.2}>
            <div className="relative min-h-[240px] overflow-hidden rounded-sm">
              <Image
                src={IMAGE_URLS.qualityLab}
                alt="Stigma separation process"
                fill
                className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
                  Quality Control
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Bottom right – solid card */}
          <FadeIn delay={0.3}>
            <div className="flex min-h-[240px] flex-col items-center justify-center rounded-sm bg-primary-container p-8 text-center">
              <span className="material-icons-outlined text-primary text-3xl mb-4">
                precision_manufacturing
              </span>
              <h4 className="font-headline text-xl font-light text-on-surface">
                Manual Precision
              </h4>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] leading-relaxed text-on-surface-variant">
                No machinery can replicate the
                gentle touch of our community&apos;s
                artisans. Every thread is handled
                with reverence.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

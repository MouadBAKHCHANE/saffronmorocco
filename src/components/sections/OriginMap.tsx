'use client';

import FadeUp from '@/components/animations/FadeUp';
import FadeIn from '@/components/animations/FadeIn';
import { IMAGE_URLS } from '@/lib/constants';

export default function OriginMap() {
  return (
    <section className="bg-surface-container-lowest min-h-screen flex items-center py-32">
      <div className="mx-auto max-w-content px-[clamp(1.25rem,5vw,6rem)]">
        <div className="flex flex-col items-center text-center">
          {/* Text */}
          <div className="max-w-3xl">
            <FadeUp>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-secondary">
                The Dawn
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-h2 font-light text-on-surface">
                Taliouine, <em className="italic">Morocco</em>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-8 font-light leading-relaxed text-on-surface-variant text-lg">
                Our saffron is cultivated in the mountainous heart of the Souss-Massa region.
                The extreme temperature fluctuations from frost-driven nights to sun-
                drenched days force the plant to concentrate its precious essential oils.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="mt-6 font-light leading-relaxed text-on-surface-variant text-lg">
                Our cooperative ensures every gram of saffron is traceable to
                its origin, from the specific plot where the crocus bloomed to
                the farmer who harvested it at dawn.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

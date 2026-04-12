'use client';

import FadeUp from '@/components/animations/FadeUp';
import FadeIn from '@/components/animations/FadeIn';
import { IMAGE_URLS } from '@/lib/constants';

export default function OriginMap() {
  return (
    <section className="bg-surface-container-lowest min-h-screen flex items-center py-32">
      <div className="mx-auto max-w-content px-[clamp(1.25rem,5vw,6rem)]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left – full-width map visualization */}
          <FadeIn className="w-full">
            <div className="relative aspect-square w-full">
              {/* Map background (Custom Taliouine Map) */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${IMAGE_URLS.taliouineMap})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                }}
              />
            </div>
          </FadeIn>

          {/* Right – text */}
          <div>
            <FadeUp>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-secondary">
                The Dawn
              </p>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="font-headline text-h2 font-light text-on-surface">
                Taliouine, <em className="italic">Morocco</em>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-6 font-light leading-relaxed text-on-surface-variant">
                Our saffron is cultivated in the mountainous heart of the Souss-Massa region.
                The extreme temperature fluctuations from frost-driven nights to sun-
                drenched days force the plant to concentrate its precious essential oils.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="mt-4 font-light leading-relaxed text-on-surface-variant">
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

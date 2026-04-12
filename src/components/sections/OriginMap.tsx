'use client';

import FadeUp from '@/components/animations/FadeUp';
import FadeIn from '@/components/animations/FadeIn';

export default function OriginMap() {
  return (
    <section className="bg-surface-container-lowest min-h-screen flex items-center py-32">
      <div className="mx-auto max-w-content px-[clamp(1.25rem,5vw,6rem)]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left – circular map visualization */}
          <FadeIn>
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full bg-surface-container">
              {/* Map background (Morocco silhouette approximation via gradient/pattern) */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    'url("/images/taliouine-village.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'grayscale(1) contrast(0.5)',
                }}
              />
              <div className="absolute inset-0 bg-surface-container/60" />

              {/* Glowing red dot – center */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* Ping ring */}
                <div className="absolute -inset-4 rounded-full bg-primary-container/40 animate-ping-slow" />
                {/* Core dot */}
                <div className="relative h-4 w-4 rounded-full bg-primary shadow-[0_0_20px_rgba(163,28,54,0.8)]" />
              </div>

              {/* Coordinate text */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
                  30.5325&deg; N, 7.9266&deg; W
                </p>
              </div>
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
                The extreme temperature fluctuations&mdash;from frost-driven nights to sun-
                drenched days&mdash;force the plant to concentrate its precious essential oils.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="mt-4 font-light leading-relaxed text-on-surface-variant">
                Our cooperative ensures every gram of saffron is traceable to
                its origin, from the specific plot where the crocus bloomed to
                the farmer who harvested it at dawn.
              </p>
            </FadeUp>

            {/* Tag badges */}
            <FadeUp delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-sm border border-outline-variant px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
                  Sargol Saffron
                </span>
                <span className="rounded-sm border border-outline-variant px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-on-surface-variant">
                  Pure Origin
                </span>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

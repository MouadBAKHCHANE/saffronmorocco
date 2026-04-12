'use client';

import FadeUp from '@/components/animations/FadeUp';

export default function QuoteSection() {
  return (
    <section className="relative overflow-hidden bg-surface min-h-screen flex items-center py-40">
      {/* Giant decorative quote mark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-headline text-[20rem] leading-none text-on-surface opacity-5"
      >
        &ldquo;
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <FadeUp>
          <blockquote className="font-headline text-3xl font-light italic leading-snug text-on-surface md:text-4xl">
&ldquo;We do not just harvest saffron; we preserve the
            light of our ancestors and the fragrance of our
            mountains.&rdquo;
          </blockquote>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            &mdash; ID BAKHCHANE COOPERATIVE MEMBERS
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

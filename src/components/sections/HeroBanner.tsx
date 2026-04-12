'use client';

import Image from 'next/image';
import FadeUp from '@/components/animations/FadeUp';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  overline?: string;
  backgroundImage?: string;
}

export default function HeroBanner({
  title,
  subtitle,
  overline,
  backgroundImage,
}: HeroBannerProps) {
  return (
    <section className="relative flex min-h-[50vh] items-center justify-center bg-near-black">
      {/* Optional background image */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-near-black/60" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 px-6 py-24 text-center">
        <FadeUp>
          {overline && (
            <p className="overline mb-4 text-mauve">{overline}</p>
          )}
          <h1 className="font-heading text-h1 text-off-white">{title}</h1>
          {subtitle && (
            <p className="mx-auto mt-4 max-w-lg text-body-lg leading-relaxed text-warm-gray">
              {subtitle}
            </p>
          )}
        </FadeUp>
      </div>
    </section>
  );
}

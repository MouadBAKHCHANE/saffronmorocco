'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import FadeUp from '@/components/animations/FadeUp';
import { IMAGE_URLS } from '@/lib/constants';

const slides = [
  {
    src: IMAGE_URLS.heroPoster,
    alt: 'Saffron threads on a dark surface',
    isGif: false,
  },
  {
    src: '/images/hero-crocus.gif',
    alt: 'Crocus sativus flower blooming',
    isGif: true,
  },
];

export default function HeroVideo() {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1)),
    [],
  );
  const next = useCallback(
    () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1)),
    [],
  );
  // Automatic switch
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) =>
        slide.isGif ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === current ? 'opacity-90' : 'opacity-0'
            }`}
          />
        ) : (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority
            className={`object-cover transition-opacity duration-1000 ${
              i === current ? 'opacity-90' : 'opacity-0'
            }`}
          />
        ),
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-surface/60 via-transparent to-transparent" />

      {/* Bottom-left content */}
      <div className="absolute inset-0 z-10 flex items-end">
        <div className="w-full flex items-end justify-between px-[clamp(1.25rem,5vw,6rem)] pb-16 md:pb-20">
          <div className="max-w-2xl">
            <FadeUp delay={0}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
                Moroccan
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <h1 className="font-headline leading-[0.9] text-on-surface">
                <span className="block text-5xl font-light md:text-7xl lg:text-8xl">
                  Premium
                </span>
                <span className="block text-6xl font-bold uppercase tracking-tight md:text-8xl lg:text-9xl">
                  Saffron
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="mt-6 max-w-md font-headline text-lg italic leading-relaxed text-on-surface-variant">
                We provide what the world&apos;s finest kitchens desire.
              </p>
            </FadeUp>
          </div>

          {/* Carousel arrows */}
          <FadeUp delay={0.4}>
            <div className="hidden items-center gap-3 md:flex">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous slide"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-on-surface-variant/30 text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
              >
                <span className="material-icons-outlined text-xl">
                  chevron_left
                </span>
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-on-surface-variant/30 text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
              >
                <span className="material-icons-outlined text-xl">
                  chevron_right
                </span>
              </button>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-[2px] rounded-full transition-all duration-500 ${
              i === current
                ? 'w-8 bg-primary'
                : 'w-4 bg-on-surface-variant/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

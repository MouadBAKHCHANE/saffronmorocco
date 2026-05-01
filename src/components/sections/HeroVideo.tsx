'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import Image from 'next/image';
import FadeUp from '@/components/animations/FadeUp';
import { IMAGE_URLS } from '@/lib/constants';
import { useT } from '@/i18n/LocaleProvider';

const slides = [
  {
    src: IMAGE_URLS.heroVideo,
    alt: 'Crocus sativus flower blooming',
    type: 'video',
  },
  {
    src: IMAGE_URLS.heroPoster,
    alt: 'Saffron threads on a dark surface',
    type: 'image',
  },
];

export default function HeroVideo() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const t = useT();

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

  // Ensure video plays
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback or silent fail for blocked autoplay
      });
    }
  }, [current]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, i) =>
        slide.type === 'video' ? (
          <video
            key={slide.src}
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 brightness-110 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={slide.src} type="video/mp4" />
          </video>
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

      {/* Gradient overlays — cocoa-tinted, always dark to keep hero text legible.
          The hero is a cinematic island: same treatment in dark + light modes. */}
      <div className={`absolute inset-0 bg-gradient-to-t from-[#1a0f08] via-[#1a0f08]/45 to-transparent transition-opacity duration-1000 ${current === 1 ? 'opacity-70' : 'opacity-95'}`} />
      <div className={`absolute inset-0 bg-gradient-to-r from-[#1a0f08]/75 via-transparent to-transparent transition-opacity duration-1000 ${current === 1 ? 'opacity-70' : 'opacity-95'}`} />

      {/* Top Protection (Header visibility) */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none z-20" />

      {/* Bottom-left content */}
      <div className="absolute inset-0 z-10 flex items-end">
        <div className="w-full flex items-end justify-between px-[clamp(1.25rem,5vw,6rem)] pb-16 md:pb-20">
          <div className="max-w-2xl">
            <FadeUp delay={0}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-primary drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                {t('hero.overline')}
              </p>
            </FadeUp>

            <FadeUp delay={0.15}>
              <h1 className="font-headline leading-[0.9] text-[#FAF7F2] drop-shadow-[0_4px_18px_rgba(0,0,0,0.5)]">
                <span className="block text-5xl font-light md:text-7xl lg:text-8xl">
                  {t('hero.titleLine1')}
                </span>
                <span className="block text-6xl font-bold uppercase tracking-tight md:text-8xl lg:text-9xl">
                  {t('hero.titleLine2')}
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="mt-6 max-w-md font-headline text-lg italic leading-relaxed text-[#E8DDC8] drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                {t('hero.subtitle')}
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
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:border-primary hover:text-primary"
              >
                <span className="material-icons-outlined text-xl font-light scale-[0.85]">
                  chevron_left
                </span>
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white/80 transition-colors hover:border-primary hover:text-primary"
              >
                <span className="material-icons-outlined text-xl font-light scale-[0.85]">
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
                : 'w-4 bg-white/40'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

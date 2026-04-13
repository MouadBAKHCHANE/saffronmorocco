'use client';

import Image from 'next/image';
import FadeUp from '@/components/animations/FadeUp';
import Container from '@/components/layout/Container';

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  overline?: string;
  backgroundImage?: string;
  overlayOpacity?: number;
  align?: 'left' | 'center' | 'right';
}

export default function HeroBanner({
  title,
  subtitle,
  overline,
  backgroundImage,
  overlayOpacity = 80,
  align = 'center',
}: HeroBannerProps) {
  const alignmentClasses = {
    left: 'text-left items-start mr-auto',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto pr-0',
  };

  return (
    <section className="relative flex min-h-[75vh] items-center justify-center bg-near-black overflow-hidden">
      {/* Background image */}
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover brightness-[0.4]"
            priority
          />
          <div 
            className="absolute inset-0 bg-black/60" 
            style={{ opacity: overlayOpacity / 100 }}
          />
        </>
      )}

      {/* Content */}
      <div className={`relative z-10 py-24 w-full h-full flex items-center justify-end px-[clamp(1.25rem,5vw,6rem)]`}>
        <div className={`w-full flex ${align === 'right' ? 'justify-end' : 'justify-center'}`}>
          <FadeUp>
            <div className={`space-y-6 max-w-5xl ${align === 'right' ? 'flex flex-col items-end' : 'flex flex-col items-center'}`}>
              {overline && (
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-[1px] w-8 bg-primary/40" />
                  <p className="overline text-primary brightness-150 font-bold tracking-[0.6em] text-[10px]">{overline}</p>
                </div>
              )}
              <h1 className="font-headline text-7xl md:text-[8rem] text-off-white tracking-tighter leading-[0.8] drop-shadow-2xl">
                {title.split(' ').map((word, i) => (
                  word.toLowerCase() === 'us' || word.toLowerCase() === 'reach' || word.toLowerCase() === 'contact' ? 
                  <span key={i} className="italic font-light text-primary"> {word}</span> : 
                  <span key={i}> {word}</span>
                ))}
              </h1>
              {subtitle && (
                <p className="text-body-lg md:text-xl leading-relaxed text-warm-gray font-light opacity-90 text-right max-w-lg">
                  {subtitle}
                </p>
              )}
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Seamless bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
}

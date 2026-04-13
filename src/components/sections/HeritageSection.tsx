'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeUp from '@/components/animations/FadeUp';
import FadeIn from '@/components/animations/FadeIn';
import { IMAGE_URLS } from '@/lib/constants';

export default function HeritageSection() {
  return (
    <section className="relative bg-surface py-32 md:py-48 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 -right-64 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-content px-[clamp(1.25rem,5vw,6rem)]">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-24">
          
          {/* Text Content – Asymmetrical Left */}
          <div className="order-2 lg:order-1 lg:col-span-4 relative z-10">
            <FadeUp>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-8 bg-primary/40" />
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                  The Heritage
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[0.85] tracking-tighter">
                The <span className="italic font-light text-primary">Origin</span>
              </h2>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-12 space-y-8">
                <p className="text-base md:text-lg font-light leading-relaxed text-on-surface-variant max-w-sm">
                  Nestled between the High-Atlas and the Anti-Atlas
                  mountains, Taliouine is the heart of Moroccan saffron.
                  Here, the altitude and unique volcanic soil create a terroir unlike any other.
                </p>
                
                <div className="relative pl-8 border-l border-primary/20 py-2">
                  <p className="font-headline italic text-lg md:text-xl text-on-surface leading-snug">
                    iD BAKHCHANE is more than a cooperative; it is a lineage of
                    stewards protecting a 1,000-year-old tradition.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="mt-12">
                <Link
                  href="/heritage"
                  className="group relative inline-flex items-center gap-8 py-4 px-2"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
                    Explore
                  </span>
                  <div className="relative">
                    <div className="w-12 h-px bg-primary/40 group-hover:w-20 transition-all duration-500" />
                    <span className="absolute -right-2 -top-[10px] material-icons-outlined text-sm text-primary group-hover:translate-x-8 transition-transform duration-500">
                      arrow_forward
                    </span>
                  </div>
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* Visual Showcase – Asymmetrical Right */}
          <div className="order-1 lg:order-2 lg:col-span-8">
            <FadeIn delay={0.3}>
              <div className="relative group">
                {/* Image Frame with Offset Shadow */}
                <div className="absolute -inset-4 border border-outline-variant/10 rounded-sm translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-1000" />
                
                <div className="relative aspect-video overflow-hidden rounded-sm shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
                  <Image
                    src={IMAGE_URLS.heritageOrigin2}
                    alt="Saffron fields with the Anti-Atlas mountains"
                    fill
                    className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                    priority
                  />
                  
                  {/* Internal Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                  
                  {/* Floating Stat Card */}
                  <div className="absolute top-8 right-8 md:top-12 md:right-12 z-20 overflow-hidden rounded-sm shadow-2xl">
                    <div className="glass-effect p-6 md:p-8 border border-white/10">
                      <div className="relative text-center">
                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-2">Terroir</p>
                        <p className="font-headline text-3xl md:text-5xl text-on-surface italic">1,500<span className="text-sm align-top ml-1 not-italic">m</span></p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Label */}
                <div className="absolute -bottom-8 -right-8 hidden xl:block pointer-events-none">
                  <span className="text-[120px] font-headline text-white/[0.03] italic leading-none select-none">Taliouine</span>
                </div>
              </div>
            </FadeIn>
          </div>
          
        </div>
      </div>
    </section>
  );
}

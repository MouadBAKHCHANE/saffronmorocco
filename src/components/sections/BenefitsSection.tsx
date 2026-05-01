'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeUp from '@/components/animations/FadeUp';
import FadeIn from '@/components/animations/FadeIn';
import { useT } from '@/i18n/LocaleProvider';

const benefitKeys = [
  'benefits.depression',
  'benefits.immune',
  'benefits.acne',
  'benefits.pms',
  'benefits.bloodPressure',
];

export const BenefitsSection = () => {
  const t = useT();
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-24 min-h-[80vh]">
      {/* Background with parallax effect */}
      <div className="absolute inset-0">
        <Image
          src="/images/benefits-bg.webp"
          alt="Field of saffron flowers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <FadeUp>
          {/* Brand Mark (Three Red Lines) */}
          <div className="flex justify-center mb-10">
            <svg width="32" height="48" viewBox="0 0 40 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 10V50" stroke="#C21807" strokeWidth="3" strokeLinecap="round" />
              <path d="M20 5V55" stroke="#C21807" strokeWidth="3" strokeLinecap="round" />
              <path d="M28 10V50" stroke="#C21807" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <h2 className="font-headline text-3xl md:text-5xl text-white leading-tight mb-10 max-w-3xl mx-auto">
            {t('benefits.intro')}
          </h2>
        </FadeUp>

        <div className="space-y-4 mb-14">
          {benefitKeys.map((key, index) => (
            <FadeUp key={key} delay={0.1 * index + 0.3}>
              <div className="flex items-center justify-center space-x-4 group">
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  className="text-primary transform group-hover:scale-110 transition-transform duration-500"
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="text-white/80 text-xs md:text-sm uppercase tracking-[0.25em] font-medium group-hover:text-white transition-colors duration-500">
                  {t(key)}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.8}>
          <Link
            href="/about"
            className="group relative inline-flex items-center gap-8 py-4 px-2"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">
              {t('cta.learnAboutSaffron')}
            </span>
            <div className="relative">
              <div className="w-16 h-px bg-primary group-hover:w-24 transition-all duration-700" />
              <span className="absolute -right-2 -top-[10px] material-icons-outlined text-sm text-primary group-hover:translate-x-8 transition-transform duration-700">
                arrow_forward
              </span>
            </div>
          </Link>
        </FadeUp>
      </div>

    </section>
  );
};

'use client';

import Link from 'next/link';
import FadeUp from '@/components/animations/FadeUp';

export default function CTASection() {
  return (
    <section className="bg-off-white py-section-gap">
      <div className="mx-auto max-w-[600px] px-6 text-center">
        <FadeUp>
          <h2 className="font-heading text-h2 text-text-primary">
            Let&apos;s Work Together
          </h2>
          <p className="mt-6 text-base leading-relaxed text-text-secondary">
            Whether you&apos;re a chef, retailer, or saffron enthusiast, we
            would love to connect. Discover wholesale opportunities or simply
            learn more about our cooperative and the saffron we produce.
          </p>
          <Link href="/contact" className="btn-primary mt-8 inline-flex">
            Get in Touch
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}

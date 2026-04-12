'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/animations/FadeIn';
import FadeUp from '@/components/animations/FadeUp';
import Container from '@/components/layout/Container';
import { IMAGE_URLS } from '@/lib/constants';

export default function StoryTeaser() {
  return (
    <section className="bg-off-white py-section-gap">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[58%_42%]">
          {/* Image */}
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-card">
              <Image
                src={IMAGE_URLS.harvestHands}
                alt="Saffron harvest in Taliouine"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
            </div>
          </FadeIn>

          {/* Text */}
          <FadeUp delay={0.2}>
            <div className="space-y-6">
              <p className="overline">Our Story</p>
              <h2 className="font-heading text-h2 text-text-primary">
                Rooted in Taliouine
              </h2>
              <p className="text-base leading-relaxed text-text-secondary">
                Nestled in the Anti-Atlas mountains of Morocco, the village of
                Taliouine has been the heartland of saffron cultivation for
                centuries. Our cooperative was founded to preserve this ancient
                tradition while empowering the women who tend these precious
                fields.
              </p>
              <p className="text-base leading-relaxed text-text-secondary">
                Every autumn, our members rise before dawn to hand-pick the
                delicate crocus flowers, carefully extracting the crimson
                threads that make Taliouine saffron renowned across the globe.
              </p>
              <Link
                href="/heritage"
                className="group inline-flex items-center gap-2 text-small font-medium uppercase tracking-button text-primary transition-colors hover:text-primary/80"
              >
                Learn Our Story
                <span className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}

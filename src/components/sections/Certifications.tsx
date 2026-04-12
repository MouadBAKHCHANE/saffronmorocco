'use client';

import FadeIn from '@/components/animations/FadeIn';
import Container from '@/components/layout/Container';

const certifications = [
  'AOP Taliouine',
  'ONSSA EC.28.33.16',
  'ISO 3632 Cat. I',
  '100% Organic',
];

export default function Certifications() {
  return (
    <section className="bg-warm-gray-light py-12">
      <Container>
        <FadeIn>
          <p className="overline mb-8 text-center">Certified Quality</p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="text-small font-medium uppercase tracking-nav text-text-primary"
              >
                {cert}
              </span>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

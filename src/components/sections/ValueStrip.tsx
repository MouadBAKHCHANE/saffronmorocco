'use client';

import StaggerChildren, {
  StaggerItem,
} from '@/components/animations/StaggerChildren';
import Container from '@/components/layout/Container';

const values = [
  {
    title: 'Hand-Harvested',
    description:
      'Each crocus flower is carefully picked by hand at dawn, preserving the delicate saffron threads at their peak potency.',
  },
  {
    title: 'AOP Certified',
    description:
      'Protected Designation of Origin from Taliouine guarantees the authenticity and superior quality of our saffron.',
  },
  {
    title: 'Direct from Cooperative',
    description:
      'By purchasing directly from our women-led cooperative, you support sustainable livelihoods in rural Morocco.',
  },
];

export default function ValueStrip() {
  return (
    <section className="bg-off-white py-section-gap">
      <Container>
        <StaggerChildren className="grid grid-cols-1 divide-warm-gray-light md:grid-cols-3 md:divide-x">
          {values.map((value) => (
            <StaggerItem key={value.title} className="px-8 py-6 text-center">
              <h4 className="font-heading text-h4 text-text-primary">
                {value.title}
              </h4>
              <p className="mx-auto mt-3 max-w-xs text-base leading-relaxed text-text-secondary">
                {value.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}

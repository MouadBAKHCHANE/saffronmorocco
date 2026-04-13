'use client';

import Image from 'next/image';
import Link from 'next/link';
import StaggerChildren, {
  StaggerItem,
} from '@/components/animations/StaggerChildren';
import Container from '@/components/layout/Container';
import { IMAGE_URLS } from '@/lib/constants';

interface Product {
  title: string;
  slug: string;
  featuredImage: string;
  excerpt: string;
}

interface ProductHighlightProps {
  products: Product[];
}

export default function ProductHighlight({ products }: ProductHighlightProps) {
  return (
    <section className="bg-near-black py-section-gap">
      <Container>
        <div className="mb-sub-gap text-center">
          <p className="overline mb-4 text-primary">Our Saffron</p>
          <h2 className="font-heading text-h2 text-off-white">
            The World&apos;s Most Precious Spice
          </h2>
        </div>

        <StaggerChildren className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {products.map((product) => (
            <StaggerItem key={product.slug} className="group">
              <Link href={`/products/${product.slug}`} className="block">
                <div className="relative aspect-[4/5] overflow-hidden rounded-card">
                  <Image
                    src={product.featuredImage}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Subtle Background Icon Watermark */}
                  <div className="absolute -top-1 -right-1 w-20 h-20 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-500">
                    <img src={IMAGE_URLS.iconQuality} alt="" className="w-full h-full object-contain filter brightness-0 invert" />
                  </div>
                </div>
                <h4 className="mt-5 font-heading text-h4 text-off-white">
                  {product.title}
                </h4>
                <p className="mt-2 text-small leading-relaxed text-warm-gray">
                  {product.excerpt}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-small font-medium text-primary transition-colors group-hover:text-off-white">
                  Discover <span>&rarr;</span>
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}

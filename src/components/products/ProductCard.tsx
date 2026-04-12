"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  slug: string;
  image: string;
  price?: string;
  excerpt: string;
}

export default function ProductCard({
  title,
  slug,
  image,
  price,
  excerpt,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group block overflow-hidden rounded-card bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-warm-gray-light">
            <span className="text-warm-gray">No image</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-heading text-h4 tracking-heading text-text-primary">
          {title}
        </h3>
        {price && (
          <p className="mt-2 font-heading text-body-lg font-semibold text-primary">
            {price}
          </p>
        )}
        {excerpt && (
          <p className="mt-2 line-clamp-2 text-small text-text-secondary">
            {excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  slug: string;
  image: string;
  price?: string;
  weight?: string;
  excerpt: string;
}

export default function ProductCard({
  title,
  slug,
  image,
  price,
  weight,
  excerpt,
}: ProductCardProps) {
  return (
    <Link
      href={`/products/${slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low rounded-sm mb-6 shadow-xl">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-surface-container-high">
            <span className="text-on-surface-variant/40 font-headline italic text-sm">
              iD BAKHCHANE
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {weight && (
          <span className="absolute top-4 left-4 glass-effect px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface border border-white/10 rounded-sm">
            {weight}
          </span>
        )}
      </div>

      <div className="space-y-3">
        <h3
          className="font-headline text-xl md:text-2xl text-on-surface leading-snug italic group-hover:text-primary transition-colors"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        {excerpt && (
          <p className="text-stone-500 text-sm font-light leading-relaxed line-clamp-2">
            {excerpt}
          </p>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
          {price ? (
            <span className="font-headline text-primary text-lg">{price}</span>
          ) : (
            <span className="text-stone-500 text-xs uppercase tracking-[0.3em] font-light">
              On Request
            </span>
          )}
          <span className="text-primary text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-500">
            Discover →
          </span>
        </div>
      </div>
    </Link>
  );
}

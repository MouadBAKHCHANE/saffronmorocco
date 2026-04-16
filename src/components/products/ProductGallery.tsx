"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  alt: string;
}

export default function ProductGallery({ images, alt }: ProductGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="relative aspect-square overflow-hidden rounded-sm bg-surface-container-low">
        <Image
          src={images[active]}
          alt={alt}
          fill
          className="object-cover transition-all duration-500"
          sizes="(max-width: 1024px) 100vw, 55vw"
          priority
        />
      </div>

      {/* Thumbnails row */}
      <div className="flex gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {images.map((src, i) => (
          <button
            key={src + i}
            type="button"
            onClick={() => setActive(i)}
            className={`relative shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-sm overflow-hidden border-2 transition-all duration-300 ${
              active === i
                ? "border-primary"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={src}
              alt={`${alt} thumbnail ${i + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

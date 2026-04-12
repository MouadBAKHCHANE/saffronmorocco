"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  image: string;
  categoryName?: string;
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogCard({
  title,
  slug,
  excerpt,
  date,
  image,
  categoryName,
}: BlogCardProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block overflow-hidden rounded-card bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-warm-gray-light">
            <span className="text-warm-gray">No image</span>
          </div>
        )}
        {categoryName && (
          <span className="absolute left-4 top-4 rounded-button bg-mauve px-3 py-1 text-caption font-medium text-off-white">
            {categoryName}
          </span>
        )}
      </div>
      <div className="p-6">
        <time
          dateTime={date}
          className="text-caption uppercase tracking-overline text-warm-gray"
        >
          {formatDate(date)}
        </time>
        <h3 className="mt-2 font-heading text-h4 tracking-heading text-text-primary">
          {title}
        </h3>
        {excerpt && (
          <p className="mt-2 line-clamp-3 text-small text-text-secondary">
            {excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}

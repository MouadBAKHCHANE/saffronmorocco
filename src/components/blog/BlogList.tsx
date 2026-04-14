"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import FadeUp from "@/components/animations/FadeUp";
import type { WPPost, WPCategory } from "@/lib/types";

interface BlogListProps {
  posts: WPPost[];
  categories: WPCategory[];
}

export default function BlogList({ posts, categories }: BlogListProps) {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<number | "all">("all");

  // Sync initial filter from ?category=<slug>
  useEffect(() => {
    const slug = searchParams.get("category");
    if (!slug) {
      setActiveCategory("all");
      return;
    }
    const match = categories.find((c) => c.slug === slug);
    setActiveCategory(match ? match.id : "all");
  }, [searchParams, categories]);

  const filteredPosts = useMemo(() => {
    if (activeCategory === "all") return posts;
    return posts.filter((post) =>
      post.categories?.includes(activeCategory as number)
    );
  }, [posts, activeCategory]);

  return (
    <>
      {/* Categories - horizontal scroll on mobile */}
      <div className="border-b border-outline-variant/10 pb-8 mt-16 -mx-8 sm:-mx-12 lg:-mx-24 md:mx-0">
        <div className="flex flex-nowrap md:flex-wrap gap-6 md:gap-8 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-8 sm:px-12 lg:px-24 md:px-0">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] pb-2 relative transition-colors ${
              activeCategory === "all"
                ? "text-primary"
                : "text-stone-400 hover:text-on-surface"
            }`}
          >
            All
            {activeCategory === "all" && (
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
            )}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`shrink-0 text-[10px] font-bold uppercase tracking-[0.2em] pb-2 relative transition-colors ${
                activeCategory === cat.id
                  ? "text-primary"
                  : "text-stone-400 hover:text-on-surface"
              }`}
            >
              {cat.name}
              {activeCategory === cat.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <section className="max-w-7xl mx-auto px-0 mt-16">
        {filteredPosts.length === 0 ? (
          <p className="text-center text-on-surface-variant py-20">
            No articles in this category yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
            {filteredPosts.map((post, i) => {
              const featuredImage =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "";
              const category =
                post._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "";
              const excerpt = post.excerpt.rendered
                .replace(/<[^>]+>/g, "")
                .trim();
              const date = new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });
              const wordCount = post.content.rendered
                .replace(/<[^>]+>/g, "")
                .split(/\s+/).length;
              const readingTime = `${Math.max(1, Math.round(wordCount / 200))} min read`;

              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <FadeUp delay={i * 0.1}>
                    <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-8 shadow-2xl">
                      {featuredImage ? (
                        <Image
                          src={featuredImage}
                          alt={post.title.rendered}
                          fill
                          className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-surface-container-high" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      {category && (
                        <>
                          <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase">
                            {category}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-stone-300" />
                        </>
                      )}
                      <span className="text-stone-400 text-[10px] font-medium tracking-tight">
                        {readingTime}
                      </span>
                    </div>

                    <h2
                      className="font-headline text-2xl text-on-surface mb-4 group-hover:text-primary transition-colors leading-snug"
                      dangerouslySetInnerHTML={{
                        __html: post.title.rendered,
                      }}
                    />
                    <p className="text-stone-500 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                      {excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
                      <span className="text-stone-400 text-[10px] font-medium tracking-tight">
                        {date}
                      </span>
                      <span className="text-primary text-[10px] font-bold uppercase tracking-widest translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                        Read Article
                      </span>
                    </div>
                  </FadeUp>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}

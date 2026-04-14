import Image from "next/image";
import Link from "next/link";
import { getPosts, getCategories } from "@/lib/wordpress";
import { IMAGE_URLS } from "@/lib/constants";
import FadeUp from "@/components/animations/FadeUp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal — The Saffron Letters",
  description:
    "Explore articles about saffron recipes, health benefits, Moroccan heritage, and the cooperative's story.",
};

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getPosts(1, 20),
    getCategories(),
  ]);

  // Filter out "Uncategorized"
  const displayCategories = categories.filter(
    (c) => c.slug !== "uncategorized" && c.count > 0
  );

  return (
    <main className="min-h-screen bg-surface pt-32 pb-24 selection:bg-primary/30">
      {/* ── Header ── */}
      <section className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 mb-24">
        <FadeUp>
          <span className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">
            The Journal
          </span>
          <h1 className="font-headline text-6xl sm:text-8xl text-on-surface mb-12 leading-[1.1]">
            Editorial{" "}
            <span className="italic text-primary ml-4 md:ml-8">Magazine</span>
          </h1>
        </FadeUp>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 md:gap-8 border-b border-outline-variant/10 pb-8 mt-16">
          <Link
            href="/blog"
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary relative pb-2"
          >
            All
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
          </Link>
          {displayCategories.map((cat) => (
            <span
              key={cat.id}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 pb-2"
            >
              {cat.name}
            </span>
          ))}
        </div>
      </section>

      {/* ── Posts Grid ── */}
      <section className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24">
        {posts.length === 0 ? (
          <p className="text-center text-on-surface-variant py-20">
            No articles published yet. Check back soon.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
            {posts.map((post, i) => {
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

      {/* ── Newsletter Section ── */}
      <section className="mt-40 bg-on-surface py-32 px-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Image
            src={IMAGE_URLS.aboutBotany}
            alt=""
            fill
            className="object-cover grayscale"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeUp>
            <span className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-8 block">
              Newsletter
            </span>
            <h2 className="font-headline text-5xl sm:text-6xl text-white mb-8 italic">
              Subscribe to the{" "}
              <span className="text-primary not-italic">Saffron Letters</span>
            </h2>
            <p className="text-stone-400 font-light mb-12 max-w-xl mx-auto leading-relaxed text-lg">
              Receive exclusive ancestral recipes, medical insights, and beauty
              rituals directly from our fields.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="YOUR EMAIL ADDRESS"
                className="flex-grow bg-white/5 border border-white/10 rounded-full px-8 py-5 text-white text-xs tracking-widest focus:outline-none focus:border-primary/50 transition-colors uppercase placeholder:text-stone-600"
              />
              <button className="bg-primary text-white px-10 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                Join Us
              </button>
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}

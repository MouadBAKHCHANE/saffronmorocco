import { Suspense } from "react";
import Image from "next/image";
import { getPosts, getCategories } from "@/lib/wordpress";
import { IMAGE_URLS } from "@/lib/constants";
import FadeUp from "@/components/animations/FadeUp";
import BlogList from "@/components/blog/BlogList";
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

        {/* Categories + Posts (client-side filtering) */}
        <Suspense fallback={null}>
          <BlogList posts={posts} categories={displayCategories} />
        </Suspense>
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

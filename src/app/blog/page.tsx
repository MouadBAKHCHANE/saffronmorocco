import { Suspense } from "react";
import Image from "next/image";
import { getPosts, getCategories } from "@/lib/wordpress";
import { IMAGE_URLS } from "@/lib/constants";
import BlogList from "@/components/blog/BlogList";
import BlogPageHero from "@/components/blog/BlogPageHero";
import BlogNewsletter from "@/components/blog/BlogNewsletter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saffron Blog — Recipes, Health Benefits & How-To Guides",
  description:
    "Learn how to use saffron, identify real saffron, cook with it, and benefit from its medicinal properties. Recipes, dosage guides, and Moroccan heritage stories from iD BAKHCHANE.",
  keywords: [
    "saffron blog",
    "how to use saffron",
    "saffron recipes",
    "saffron health benefits",
    "saffron cooking guide",
    "real vs fake saffron",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Saffron Blog — Recipes, Health Benefits & How-To Guides",
    description:
      "Learn how to use saffron, identify real saffron, and benefit from its medicinal properties.",
    type: "website",
    url: "https://saffronmorocco.com/blog",
  },
};

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getPosts(1, 20),
    getCategories(),
  ]);

  const displayCategories = categories.filter(
    (c) => c.slug !== "uncategorized" && c.count > 0
  );

  return (
    <main className="min-h-screen bg-surface pt-32 pb-24 selection:bg-primary/30">
      {/* ── Header ── */}
      <section className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 mb-24">
        <BlogPageHero />

        <Suspense fallback={null}>
          <BlogList posts={posts} categories={displayCategories} />
        </Suspense>
      </section>

      {/* ── Newsletter ── */}
      <section className="mt-40 bg-on-surface py-32 px-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Image
            src={IMAGE_URLS.aboutBotany}
            alt=""
            fill
            className="object-cover grayscale"
          />
        </div>
        <BlogNewsletter />
      </section>
    </main>
  );
}

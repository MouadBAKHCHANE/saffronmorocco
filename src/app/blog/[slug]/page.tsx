import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";
import WPContent from "@/components/ui/WPContent";
import { getPost, getPosts, getAllPostSlugs } from "@/lib/wordpress";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post Not Found" };

  const description = post.excerpt.rendered
    .replace(/<[^>]+>/g, "")
    .trim()
    .slice(0, 160);

  return {
    title: post.title.rendered.replace(/&#8217;/g, "'"),
    description,
    openGraph: {
      title: post.title.rendered.replace(/&#8217;/g, "'"),
      description,
      type: "article",
      images: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url
        ? [{ url: post._embedded["wp:featuredmedia"][0].source_url }]
        : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const [post, recentPosts] = await Promise.all([
    getPost(slug),
    getPosts(1, 4),
  ]);

  if (!post) {
    notFound();
  }

  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "";
  const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "";
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const wordCount = post.content.rendered
    .replace(/<[^>]+>/g, "")
    .split(/\s+/).length;
  const readingTime = `${Math.max(1, Math.round(wordCount / 200))} min read`;

  const relatedPosts = recentPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-surface">
      {/* ── Hero ── */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        {featuredImage ? (
          <Image
            src={featuredImage}
            alt={post.title.rendered}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="w-full h-full bg-surface-container-high" />
        )}
        <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center text-white">
          <FadeUp>
            {category && (
              <span className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-8 block">
                {category}
              </span>
            )}
            <h1
              className="font-headline text-5xl sm:text-7xl leading-tight mb-8"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <div className="flex items-center justify-center gap-6 text-[10px] font-bold tracking-widest uppercase text-stone-300">
              <span>{date}</span>
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span>{readingTime}</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Content ── */}
      <Container className="py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Sidebar */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-40 space-y-12">
              <div>
                <h4 className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-6">
                  Share Story
                </h4>
                <div className="flex flex-col gap-4 text-on-surface/60">
                  <span className="text-xs hover:text-primary cursor-pointer transition-colors uppercase font-medium tracking-tight">
                    Instagram
                  </span>
                  <span className="text-xs hover:text-primary cursor-pointer transition-colors uppercase font-medium tracking-tight">
                    Facebook
                  </span>
                  <span className="text-xs hover:text-primary cursor-pointer transition-colors uppercase font-medium tracking-tight">
                    Pinterest
                  </span>
                </div>
              </div>
              <div>
                <h4 className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-6">
                  Editorial
                </h4>
                <p className="text-xs text-stone-500 font-light leading-relaxed">
                  Insights from the heart of Taliouine, harvested and curated by
                  Bakhchane.
                </p>
              </div>
            </div>
          </aside>

          {/* Article Body */}
          <article className="lg:col-span-7">
              <WPContent
                html={post.content.rendered}
                className="wp-content"
              />

              {/* Back link */}
              <div className="mt-20 pt-12 border-t border-outline-variant/10">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface hover:text-primary transition-all group"
                >
                  <span className="material-icons-outlined text-sm group-hover:-translate-x-2 transition-transform">
                    west
                  </span>
                  Back to Journal
                </Link>
              </div>
          </article>
        </div>
      </Container>

      {/* ── More Articles ── */}
      {relatedPosts.length > 0 && (
        <section className="bg-surface-container-low py-32 px-8 border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-headline text-3xl text-on-surface mb-16 italic text-center">
              Continue{" "}
              <span className="text-primary not-italic">Reading</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {relatedPosts.map((p) => {
                const img =
                  p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "";
                const cat =
                  p._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "";
                return (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-video rounded-sm overflow-hidden mb-6">
                      {img ? (
                        <Image
                          src={img}
                          alt={p.title.rendered}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-surface-container-high" />
                      )}
                    </div>
                    {cat && (
                      <span className="text-primary text-[10px] font-bold tracking-widest uppercase mb-2 block">
                        {cat}
                      </span>
                    )}
                    <h4
                      className="font-headline text-xl text-on-surface group-hover:text-primary transition-colors"
                      dangerouslySetInnerHTML={{ __html: p.title.rendered }}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

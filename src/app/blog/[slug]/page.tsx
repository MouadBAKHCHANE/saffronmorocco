import { notFound } from "next/navigation";
import Image from "next/image";
import Link from 'next/link';
import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";
import { BLOG_POSTS } from "@/lib/blog-data";
import { IMAGE_URLS } from "@/lib/constants";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-surface">
      {/* ── Progress Bar ── */}
      <div className="fixed top-0 left-0 w-full h-1 bg-outline-variant/10 z-50">
        <div className="h-full bg-primary w-1/3" /> {/* Mock progress */}
      </div>

      {/* ── Hero ── */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center text-white">
          <FadeUp>
            <span className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-8 block">
              {post.category}
            </span>
            <h1 className="font-headline text-5xl sm:text-7xl leading-tight mb-8">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-[10px] font-bold tracking-widest uppercase text-stone-300">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-primary" />
              <span>{post.readingTime}</span>
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
                <h4 className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-6">Share Story</h4>
                <div className="flex flex-col gap-4 text-on-surface/60">
                  <span className="text-xs hover:text-primary cursor-pointer transition-colors uppercase font-medium tracking-tight">Instagram</span>
                  <span className="text-xs hover:text-primary cursor-pointer transition-colors uppercase font-medium tracking-tight">Facebook</span>
                  <span className="text-xs hover:text-primary cursor-pointer transition-colors uppercase font-medium tracking-tight">Pinterest</span>
                </div>
              </div>
              <div>
                <h4 className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-6">Editorial</h4>
                <p className="text-xs text-stone-500 font-light leading-relaxed">
                  Insights from the heart of Taliouine, harvested and curated by Bakhchane.
                </p>
              </div>
            </div>
          </aside>

          {/* ArticleBody */}
          <article className="lg:col-span-7">
            <FadeUp>
              <div className="prose prose-stone lg:prose-xl selection:bg-primary/20">
                <p className="text-2xl font-light text-on-surface/80 leading-relaxed mb-12 italic border-l-4 border-primary pl-8">
                  {post.excerpt}
                </p>
                <div className="text-lg text-stone-600 font-light leading-loose whitespace-pre-line">
                  {post.content}
                </div>
              </div>

              {/* Related Posts Link */}
              <div className="mt-20 pt-12 border-t border-outline-variant/10">
                <Link 
                  href="/blog"
                  className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface hover:text-primary transition-all group"
                >
                  <span className="material-icons-outlined text-sm group-hover:-translate-x-2 transition-transform">west</span>
                  Back to Journal
                </Link>
              </div>
            </FadeUp>
          </article>
        </div>
      </Container>

      {/* ── More Articles ── */}
      <section className="bg-surface-variant/5 py-32 px-8 border-t border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-headline text-3xl text-on-surface mb-16 italic text-center">Continuer la <span className="text-primary not-italic">Lecture</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {BLOG_POSTS.filter(p => p.slug !== post.slug).slice(0, 3).map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-6">
                  <Image src={p.image} alt={p.title} fill className="object-cover transition-transform group-hover:scale-105" />
                </div>
                <span className="text-primary text-[10px] font-bold tracking-widest uppercase mb-2 block">{p.category}</span>
                <h4 className="font-headline text-xl text-on-surface group-hover:text-primary transition-colors">{p.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

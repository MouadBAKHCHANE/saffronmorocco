'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FadeUp from '@/components/animations/FadeUp';
import ScaleIn from '@/components/animations/ScaleIn';
import { BLOG_POSTS } from '@/lib/blog-data';
import { IMAGE_URLS } from '@/lib/constants';

const CATEGORIES = ["All", "In the Kitchen", "In Medicine", "In Cosmetics"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <main className="min-h-screen bg-surface pt-32 pb-24 selection:bg-primary/30">
      {/* ── Header ── */}
      <section className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24 mb-24">
        <FadeUp>
          <span className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">
            The Journal
          </span>
          <h1 className="font-headline text-6xl sm:text-8xl text-on-surface mb-12 leading-[1.1]">
            Editorial <br/><span className="italic text-primary">Magazine</span>
          </h1>
        </FadeUp>

        {/* Categories */}
        <div className="flex flex-wrap gap-4 md:gap-8 border-b border-outline-variant/10 pb-8 mt-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative pb-2 ${
                activeCategory === cat ? 'text-primary' : 'text-stone-400 hover:text-on-surface'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ── Main Grid ── */}
      <section className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-20">
          {filteredPosts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <FadeUp delay={i * 0.1}>
                <ScaleIn>
                  <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden mb-8 shadow-2xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </ScaleIn>
                
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-stone-300" />
                  <span className="text-stone-400 text-[10px] font-medium tracking-tight">
                    {post.readingTime}
                  </span>
                </div>

                <h2 className="font-headline text-2xl text-on-surface mb-4 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-stone-500 text-sm font-light leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
                  <span className="text-stone-400 text-[10px] font-medium tracking-tight">
                    {post.date}
                  </span>
                  <span className="text-primary text-[10px] font-bold uppercase tracking-widest translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                    Read Article
                  </span>
                </div>
              </FadeUp>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Newsletter Section ── */}
      <section className="mt-40 bg-on-surface py-32 px-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Image src={IMAGE_URLS.aboutBotany} alt="" fill className="object-cover grayscale" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeUp>
            <span className="text-primary text-[10px] font-bold tracking-[0.5em] uppercase mb-8 block">Newsletter</span>
            <h2 className="font-headline text-5xl sm:text-6xl text-white mb-8 italic">
              Subscribe to the <span className="text-primary not-italic">Saffron Letters</span>
            </h2>
            <p className="text-stone-400 font-light mb-12 max-w-xl mx-auto leading-relaxed text-lg">
              Receive exclusive ancestral recipes, medical insights, and beauty rituals directly from our fields.
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

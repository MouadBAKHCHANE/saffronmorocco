'use client';

import Link from 'next/link';
import Image from 'next/image';
import FadeUp from '@/components/animations/FadeUp';
import ScaleIn from '@/components/animations/ScaleIn';
import { BLOG_POSTS } from '@/lib/blog-data';
import { useT } from '@/i18n/LocaleProvider';

export default function BlogSection() {
  const t = useT();
  return (
    <section className="py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <FadeUp>
              <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase mb-6 block">
                {t('blogSection.overline')}
              </span>
              <h2 className="font-headline text-5xl sm:text-7xl text-on-surface leading-[1.1]">
                {t('blogSection.titleLine1')} <br/>
                <span className="italic text-primary">{t('blogSection.titleAccent')}</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <Link 
              href="/blog" 
              className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors pb-2 border-b border-transparent hover:border-primary"
            >
              {t('blogSection.viewAll')}
              <span className="material-icons-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>
            </Link>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {BLOG_POSTS.map((post, i) => (
            <Link key={post.title} href={`/blog/${post.slug}`} className="group block">
              <FadeUp delay={i * 0.1}>
                <ScaleIn>
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-8 shadow-xl">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </ScaleIn>
                
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase">
                    {post.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-stone-300" />
                  <span className="text-stone-400 text-[10px] font-medium tracking-tight">
                    {post.readingTime}
                  </span>
                </div>

                <h3 className="font-headline text-2xl text-on-surface mb-4 group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-stone-500 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-stone-400 text-[10px] font-medium tracking-tight">
                    {post.date}
                  </span>
                  <span className="text-primary text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    {t('cta.readMore')}
                  </span>
                </div>
              </FadeUp>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

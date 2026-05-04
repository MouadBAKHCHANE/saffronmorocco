"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import FadeUp from "@/components/animations/FadeUp";
import WPContent from "@/components/ui/WPContent";
import type { WPPost } from "@/lib/types";
import { useLocale, useT } from "@/i18n/LocaleProvider";
import { localizedTitle, localizedExcerpt, localizedContent } from "@/lib/post-i18n";

const LOCALE_TO_DATE: Record<string, string> = {
  en: "en-US",
  fr: "fr-FR",
  es: "es-ES",
};

interface Props {
  post: WPPost;
  relatedPosts: WPPost[];
}

export default function BlogPostView({ post, relatedPosts }: Props) {
  const t = useT();
  const { locale } = useLocale();

  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "";
  const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "";

  const title = localizedTitle(post, locale);
  const content = localizedContent(post, locale);

  const date = new Date(post.date).toLocaleDateString(LOCALE_TO_DATE[locale] ?? "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const wordCount = content.replace(/<[^>]+>/g, "").split(/\s+/).length;
  const readingTime = `${Math.max(1, Math.round(wordCount / 200))} ${t("blogList.minRead")}`;

  return (
    <main className="min-h-screen bg-surface">
      {/* ── Hero ── */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        {featuredImage ? (
          <Image
            src={featuredImage}
            alt={title}
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
              dangerouslySetInnerHTML={{ __html: title }}
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
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-40 space-y-12">
              <div>
                <h4 className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-6">
                  {t("footer.connect")}
                </h4>
                <div className="flex flex-col gap-4 text-on-surface/60">
                  <span className="text-xs hover:text-primary cursor-pointer transition-colors uppercase font-medium tracking-tight">Instagram</span>
                  <span className="text-xs hover:text-primary cursor-pointer transition-colors uppercase font-medium tracking-tight">Facebook</span>
                  <span className="text-xs hover:text-primary cursor-pointer transition-colors uppercase font-medium tracking-tight">Pinterest</span>
                </div>
              </div>
            </div>
          </aside>

          <article className="lg:col-span-7">
            <WPContent html={content} className="wp-content" />

            <div className="mt-20 pt-12 border-t border-outline-variant/10">
              <Link
                href="/blog"
                className="inline-flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface hover:text-primary transition-all group"
              >
                <span className="material-icons-outlined text-sm group-hover:-translate-x-2 transition-transform">
                  west
                </span>
                {t("cta.backToBlog")}
              </Link>
            </div>
          </article>
        </div>
      </Container>

      {/* ── Related ── */}
      {relatedPosts.length > 0 && (
        <section className="bg-surface-container-low py-32 px-8 border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto">
            <h3 className="font-headline text-3xl text-on-surface mb-16 italic text-center">
              {t("blogSection.titleLine1")}{" "}
              <span className="text-primary not-italic">{t("cta.readMore")}</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {relatedPosts.map((p) => {
                const img = p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "";
                const cat = p._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "";
                const pTitle = localizedTitle(p, locale);
                const pExcerpt = localizedExcerpt(p, locale).replace(/<[^>]+>/g, "").trim();
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
                          alt={pTitle}
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
                      className="font-headline text-xl text-on-surface group-hover:text-primary transition-colors mb-2"
                      dangerouslySetInnerHTML={{ __html: pTitle }}
                    />
                    <p className="text-stone-500 text-xs font-light leading-relaxed line-clamp-2">
                      {pExcerpt}
                    </p>
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

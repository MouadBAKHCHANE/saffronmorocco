import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getPost, getAllPostSlugs } from "@/lib/wordpress";
import { SITE_NAME } from "@/lib/constants";
import Container from "@/components/layout/Container";
import WPContent from "@/components/ui/WPContent";
import FadeUp from "@/components/animations/FadeUp";

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

  if (!post) {
    return { title: "Post Not Found" };
  }

  const description = post.excerpt.rendered.replace(/<[^>]+>/g, "").trim();
  const image =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? undefined;

  return {
    title: post.title.rendered,
    description,
    openGraph: {
      title: post.title.rendered,
      description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      images: image ? [{ url: image }] : undefined,
    },
  };
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const featuredImage =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "";
  const featuredAlt =
    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ?? post.title.rendered;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]+>/g, "").trim(),
    image: featuredImage || undefined,
    datePublished: post.date,
    dateModified: post.modified,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: "https://saffronmorocco.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Featured image hero */}
      {featuredImage && (
        <section className="relative flex min-h-[50vh] items-center justify-center bg-near-black">
          <Image
            src={featuredImage}
            alt={featuredAlt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-near-black/50" />
        </section>
      )}

      <Container className="py-section-gap">
        <FadeUp>
          <article className="mx-auto max-w-readable">
            {/* Post header */}
            <header className="mb-12">
              <p className="overline mb-4 text-mauve">Blog</p>
              <h1 className="font-heading text-h1 tracking-heading text-text-primary">
                {post.title.rendered}
              </h1>
              <time
                dateTime={post.date}
                className="mt-4 block text-small text-text-secondary"
              >
                {formatDate(post.date)}
              </time>
            </header>

            {/* Post content */}
            <WPContent html={post.content.rendered} />
          </article>
        </FadeUp>
      </Container>
    </>
  );
}

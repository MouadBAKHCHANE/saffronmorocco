import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPost, getPosts, getAllPostSlugs } from "@/lib/wordpress";
import BlogPostView from "@/components/blog/BlogPostView";

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
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title.rendered.replace(/&#8217;/g, "'"),
      description,
      type: "article",
      url: `https://saffronmorocco.com/blog/${slug}`,
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

  const relatedPosts = recentPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const postUrl = `https://saffronmorocco.com/blog/${slug}`;
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  const cleanTitle = post.title.rendered.replace(/&#8217;/g, "'");
  const cleanExcerpt = post.excerpt.rendered.replace(/<[^>]+>/g, "").trim();
  const category = post._embedded?.["wp:term"]?.[0]?.[0]?.name;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${postUrl}#article`,
        headline: cleanTitle,
        description: cleanExcerpt,
        ...(featuredImage && {
          image: featuredImage.startsWith("http")
            ? featuredImage
            : `https://saffronmorocco.com${featuredImage}`,
        }),
        datePublished: post.date,
        dateModified: post.modified,
        ...(category && { articleSection: category }),
        inLanguage: "en-US",
        mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
        author: {
          "@type": "Organization",
          name: "iD BAKHCHANE — Bakhchane Saffron Cooperative",
          url: "https://saffronmorocco.com",
        },
        publisher: { "@id": "https://saffronmorocco.com/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://saffronmorocco.com" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://saffronmorocco.com/blog" },
          { "@type": "ListItem", position: 3, name: cleanTitle, item: postUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostView post={post} relatedPosts={relatedPosts} />
    </>
  );
}

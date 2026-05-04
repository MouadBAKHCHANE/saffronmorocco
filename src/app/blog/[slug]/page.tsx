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

  return <BlogPostView post={post} relatedPosts={relatedPosts} />;
}

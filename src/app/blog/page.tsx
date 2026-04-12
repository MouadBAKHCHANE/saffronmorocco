import type { Metadata } from "next";
import { getPosts, getCategories } from "@/lib/wordpress";
import HeroBanner from "@/components/sections/HeroBanner";
import Container from "@/components/layout/Container";
import BlogCard from "@/components/blog/BlogCard";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import type { WPCategory } from "@/lib/types";

export const metadata: Metadata = {
  title: "Our Journal",
  description:
    "Stories from the saffron fields of Taliouine. Recipes, harvest updates, and insights from Bakhchane Cooperative.",
  openGraph: {
    title: "Our Journal",
    description:
      "Stories from the saffron fields of Taliouine. Recipes, harvest updates, and insights from Bakhchane Cooperative.",
    type: "website",
  },
};

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getPosts(),
    getCategories(),
  ]);

  const categoryMap = new Map<number, WPCategory>(
    categories.map((cat) => [cat.id, cat])
  );

  return (
    <>
      <HeroBanner title="Our Journal" overline="Blog" />
      <Container className="py-section-gap">
        <StaggerChildren className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => {
            const image =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "";
            const excerpt = post.excerpt.rendered
              .replace(/<[^>]+>/g, "")
              .trim();
            const firstCategoryId = post.categories?.[0];
            const categoryName = firstCategoryId
              ? categoryMap.get(firstCategoryId)?.name
              : undefined;

            return (
              <StaggerItem key={post.id}>
                <BlogCard
                  title={post.title.rendered}
                  slug={post.slug}
                  excerpt={excerpt}
                  date={post.date}
                  image={image}
                  categoryName={categoryName}
                />
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        {posts.length === 0 && (
          <p className="py-12 text-center text-text-secondary">
            No posts available yet. Check back soon.
          </p>
        )}
      </Container>
    </>
  );
}

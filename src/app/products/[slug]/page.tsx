import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProduct, getProducts, getAllProductSlugs, getPosts } from "@/lib/wordpress";
import { SITE_NAME } from "@/lib/constants";
import Container from "@/components/layout/Container";
import WPContent from "@/components/ui/WPContent";
import FadeUp from "@/components/animations/FadeUp";
import FadeIn from "@/components/animations/FadeIn";
import { getProductImageForWeight, getProductGallery, isPouchWeight } from "@/lib/product-images";
import ProductDetailClient from "@/components/products/ProductDetailClient";
import ReviewsSection from "@/components/products/ReviewsSection";
import ProductCard from "@/components/products/ProductCard";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  const description = product.excerpt.rendered
    .replace(/<[^>]+>/g, "")
    .trim();

  return {
    title: product.title.rendered,
    description,
    alternates: {
      canonical: `/products/${slug}`,
    },
    openGraph: {
      title: product.title.rendered,
      description,
      type: "website",
      url: `https://saffronmorocco.com/products/${slug}`,
      images: product._embedded?.["wp:featuredmedia"]?.[0]?.source_url
        ? [{ url: product._embedded["wp:featuredmedia"][0].source_url }]
        : undefined,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const [product, allProducts, posts] = await Promise.all([
    getProduct(slug),
    getProducts(),
    getPosts(1, 3),
  ]);

  if (!product) {
    notFound();
  }

  const wpFeatured =
    product._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "";
  const price = product.meta?.price;
  const weight = product.meta?.weight;
  const featuredImage = getProductImageForWeight(weight, wpFeatured);
  const galleryImages = getProductGallery(weight, wpFeatured);

  // Similar products (exclude current)
  const similarProducts = allProducts
    .filter((p) => p.slug !== slug)
    .slice(0, 4);

  // Latest blog post
  const latestPost = posts[0] ?? null;
  const postImage =
    latestPost?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "";
  const postCategory =
    latestPost?._embedded?.["wp:term"]?.[0]?.[0]?.name ?? "";
  const postExcerpt = latestPost?.excerpt.rendered
    .replace(/<[^>]+>/g, "")
    .trim();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title.rendered,
    description: product.excerpt.rendered.replace(/<[^>]+>/g, "").trim(),
    image: featuredImage || undefined,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    ...(price && {
      offers: {
        "@type": "Offer",
        price: price.replace(/[^0-9.]/g, ""),
        priceCurrency: "MAD",
        availability: "https://schema.org/InStock",
      },
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-surface pt-20 md:pt-32 pb-0 selection:bg-primary/30">
        {/* ── Product Hero ── */}
        <Container>
          <FadeUp>
            <ProductDetailClient
              title={product.title.rendered}
              titleHtml={product.title.rendered}
              excerptHtml={product.excerpt.rendered}
              price={price}
              weight={weight}
              isVial={!isPouchWeight(weight)}
              initialGallery={galleryImages}
            />
          </FadeUp>
        </Container>

        {/* ── Reviews ── */}
        <Container className="mt-16 md:mt-32">
          <ReviewsSection />
        </Container>

        {/* ── You May Also Like ── */}
        {similarProducts.length > 0 && (
          <section className="mt-16 md:mt-32">
            <Container>
              <FadeUp>
                <div className="mb-8 md:mb-12">
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-2">
                    More From The Collection
                  </p>
                  <h3 className="font-headline text-2xl md:text-4xl text-on-surface italic">
                    You May Also Like
                  </h3>
                </div>
              </FadeUp>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
                {similarProducts.map((p, i) => {
                  const img = getProductImageForWeight(
                    p.meta?.weight,
                    p._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? ""
                  );
                  const excerpt = p.excerpt.rendered
                    .replace(/<[^>]+>/g, "")
                    .trim();
                  return (
                    <FadeUp key={p.id} delay={i * 0.05}>
                      <ProductCard
                        title={p.title.rendered}
                        slug={p.slug}
                        image={img}
                        price={p.meta?.price}
                        weight={p.meta?.weight}
                        excerpt={excerpt}
                      />
                    </FadeUp>
                  );
                })}
              </div>
            </Container>
          </section>
        )}

        {/* ── From The Blog ── */}
        {latestPost && (
          <section className="mt-16 md:mt-32 pb-16 md:pb-32">
            <Container>
              <FadeUp>
                <div className="mb-8 md:mb-12">
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-2">
                    From Our Blog
                  </p>
                  <h3 className="font-headline text-2xl md:text-4xl text-on-surface italic">
                    Latest Article
                  </h3>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <Link
                  href={`/blog/${latestPost.slug}`}
                  className="group grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-center bg-surface-container-low/20 border border-outline-variant/10 rounded-sm overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {postImage ? (
                      <Image
                        src={postImage}
                        alt={latestPost.title.rendered}
                        fill
                        className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-surface-container-high" />
                    )}
                  </div>
                  <div className="p-5 md:p-12 space-y-3 md:space-y-4">
                    {postCategory && (
                      <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase">
                        {postCategory}
                      </span>
                    )}
                    <h4
                      className="font-headline text-2xl md:text-3xl text-on-surface leading-snug italic group-hover:text-primary transition-colors"
                      dangerouslySetInnerHTML={{
                        __html: latestPost.title.rendered,
                      }}
                    />
                    {postExcerpt && (
                      <p className="text-stone-500 text-sm font-light leading-relaxed line-clamp-3">
                        {postExcerpt}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-2 text-primary text-[10px] font-bold uppercase tracking-widest pt-2">
                      Read Article
                      <span className="material-icons-outlined text-sm group-hover:translate-x-2 transition-transform">
                        east
                      </span>
                    </span>
                  </div>
                </Link>
              </FadeUp>
            </Container>
          </section>
        )}
      </main>
    </>
  );
}

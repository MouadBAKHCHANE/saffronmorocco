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
import { getProductImageForWeight, getProductGallery } from "@/lib/product-images";
import ProductGallery from "@/components/products/ProductGallery";
import QuantitySelector from "@/components/products/QuantitySelector";
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
    openGraph: {
      title: product.title.rendered,
      description,
      type: "website",
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
            <div className="grid gap-6 md:gap-10 lg:grid-cols-2 items-start">
              {/* Left — Gallery */}
              <div>
                <ProductGallery images={galleryImages} alt={product.title.rendered} />
              </div>

              {/* Right — Details */}
              <div className="lg:sticky lg:top-28 space-y-5 md:space-y-8">
                <div className="space-y-3">
                  <p className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">
                    {weight ? `${weight} Selection` : "Premium Selection"}
                  </p>
                  <h1
                    className="font-headline text-3xl md:text-5xl text-on-surface leading-[1.1] italic"
                    dangerouslySetInnerHTML={{ __html: product.title.rendered }}
                  />

                  {price && (
                    <div className="flex items-baseline gap-3 mt-3">
                      <span className="font-headline text-2xl md:text-3xl text-primary font-bold">
                        {price}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium">
                        Incl. Tax
                      </span>
                    </div>
                  )}
                </div>

                {product.excerpt.rendered && (
                  <div
                    className="text-on-surface-variant text-xs md:text-sm leading-relaxed font-light border-l-2 border-primary/20 pl-4 md:pl-6 italic"
                    dangerouslySetInnerHTML={{
                      __html: product.excerpt.rendered,
                    }}
                  />
                )}

                {/* Quantity selector */}
                <QuantitySelector />

                {/* CTA */}
                <Link
                  href={`/contact?product=${encodeURIComponent(product.title.rendered)}`}
                  className="btn-primary w-full !py-3.5 md:!py-4 shadow-xl hover:shadow-primary/20"
                >
                  <span className="material-icons-outlined text-sm">
                    shopping_bag
                  </span>
                  Inquire Now
                </Link>

                {/* Product details */}
                <div className="border-t border-outline-variant/10 pt-4 md:pt-6 space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-500 mb-2">
                    Product Details
                  </p>
                  <div className="grid grid-cols-[auto_1fr] gap-x-4 md:gap-x-8 gap-y-2.5 text-xs md:text-sm">
                    <span className="text-stone-500 font-light">Ingredients</span>
                    <span className="text-on-surface">100% Pure Moroccan Saffron</span>
                    <span className="text-stone-500 font-light">Origins</span>
                    <span className="text-on-surface">Taliouine, Morocco</span>
                    <span className="text-stone-500 font-light">Net Weight</span>
                    <span className="text-on-surface">{weight || "—"}</span>
                    <span className="text-stone-500 font-light">Grade</span>
                    <span className="text-on-surface">ISO 3632-1 Category I</span>
                    <span className="text-stone-500 font-light">Certification</span>
                    <span className="text-on-surface">AOP Certified</span>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="grid grid-cols-4 gap-2 pt-4 border-t border-outline-variant/10 text-on-surface-variant/40">
                  <div className="flex flex-col items-center gap-1">
                    <span className="material-icons-outlined text-base md:text-lg">verified</span>
                    <span className="text-[8px] md:text-[9px] uppercase tracking-tight text-center">Lab Tested</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="material-icons-outlined text-base md:text-lg">psychology</span>
                    <span className="text-[8px] md:text-[9px] uppercase tracking-tight text-center">Grade I ISO</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="material-icons-outlined text-base md:text-lg">eco</span>
                    <span className="text-[8px] md:text-[9px] uppercase tracking-tight text-center">100% Organic</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="material-icons-outlined text-base md:text-lg">public</span>
                    <span className="text-[8px] md:text-[9px] uppercase tracking-tight text-center">Global Ship</span>
                  </div>
                </div>
              </div>
            </div>
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

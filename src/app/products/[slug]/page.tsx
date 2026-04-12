import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getProduct, getAllProductSlugs } from "@/lib/wordpress";
import { SITE_NAME } from "@/lib/constants";
import Container from "@/components/layout/Container";
import WPContent from "@/components/ui/WPContent";
import FadeUp from "@/components/animations/FadeUp";

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
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  const featuredImage =
    product._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? "";
  const price = product.meta?.price;
  const weight = product.meta?.weight;

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
      <Container className="py-section-gap">
        <FadeUp>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Product image */}
            <div className="relative aspect-square overflow-hidden rounded-card bg-warm-gray-light">
              {featuredImage ? (
                <Image
                  src={featuredImage}
                  alt={product.title.rendered}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span className="text-warm-gray">No image available</span>
                </div>
              )}
            </div>

            {/* Product details */}
            <div className="flex flex-col justify-center">
              <p className="overline mb-4 text-mauve">Product</p>
              <h1 className="font-heading text-h1 tracking-heading text-text-primary">
                {product.title.rendered}
              </h1>

              {price && (
                <p className="mt-4 font-heading text-h3 font-semibold text-burgundy">
                  {price}
                </p>
              )}

              {weight && (
                <p className="mt-2 text-body-lg text-text-secondary">
                  Weight: {weight}
                </p>
              )}

              {product.excerpt.rendered && (
                <div
                  className="mt-6 text-body-lg leading-relaxed text-text-secondary"
                  dangerouslySetInnerHTML={{
                    __html: product.excerpt.rendered,
                  }}
                />
              )}
            </div>
          </div>
        </FadeUp>

        {/* Full description */}
        {product.content.rendered && (
          <div className="mt-section-gap">
            <WPContent
              html={product.content.rendered}
              className="mx-auto max-w-readable"
            />
          </div>
        )}
      </Container>
    </>
  );
}

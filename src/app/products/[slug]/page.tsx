import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
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
      <Container className="py-24 md:py-32">
        <FadeUp>
          <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* Product Image Gallery Placeholder / Main Image */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-surface-container shadow-2xl group">
                {featuredImage ? (
                  <Image
                    src={featuredImage}
                    alt={product.title.rendered}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="text-on-surface-variant/40 font-headline italic">The Essence of Taliouine</span>
                  </div>
                )}
                {/* Image Overlay Label */}
                <div className="absolute top-6 left-6">
                  <span className="glass-effect px-4 py-2 text-[10px] font-bold uppercase tracking-[0.3em] text-on-surface border border-white/10 rounded-sm">
                    AOP Certified
                  </span>
                </div>
              </div>
            </div>

            {/* Product Purchase / Details */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
              <div className="space-y-4">
                <p className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">
                  {weight ? `${weight} Selection` : 'Premium Selection'}
                </p>
                <h1 className="font-headline text-5xl md:text-6xl text-on-surface leading-[1.1] italic">
                  {product.title.rendered}
                </h1>
                
                {price && (
                  <div className="flex items-baseline gap-4 mt-6">
                    <span className="font-headline text-3xl text-primary font-bold">
                      {price}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-medium">Incl. Tax</span>
                  </div>
                )}
              </div>

              {product.excerpt.rendered && (
                <div
                  className="text-on-surface-variant text-base leading-relaxed font-light border-l-2 border-primary/20 pl-6 italic"
                  dangerouslySetInnerHTML={{
                    __html: product.excerpt.rendered,
                  }}
                />
              )}

              {/* Action Area */}
              <div className="pt-4 space-y-4">
                <Link 
                  href={`/contact?product=${encodeURIComponent(product.title.rendered)}`}
                  className="btn-primary w-full !py-4 shadow-xl hover:shadow-primary/20"
                >
                  <span className="material-icons-outlined text-sm">shopping_bag</span>
                  Inquire Now
                </Link>
                <div className="flex items-center justify-center gap-6 pt-4 text-on-surface-variant/40">
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-icons-outlined text-xl">verified</span>
                    <span className="text-[9px] uppercase tracking-tighter">Lab Tested</span>
                  </div>
                  <div className="w-px h-8 bg-outline-variant/20" />
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-icons-outlined text-xl">psychology</span>
                    <span className="text-[9px] uppercase tracking-tighter">Grade I ISO</span>
                  </div>
                  <div className="w-px h-8 bg-outline-variant/20" />
                  <div className="flex flex-col items-center gap-2">
                    <span className="material-icons-outlined text-xl">public</span>
                    <span className="text-[9px] uppercase tracking-tighter">Global Shipping</span>
                  </div>
                </div>
              </div>

              {/* Trust Features */}
              <div className="bg-surface-container-low p-6 rounded-sm border border-outline-variant/10">
                <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] mb-4 text-on-surface">The iD BAKHCHANE Standard</h4>
                <ul className="space-y-3">
                  {[
                    'Hand-harvested at 1,500m altitude',
                    'Zero chemical treatments or dyes',
                    'Airtight medical-grade glass protection',
                    'Direct support for local cooperatives'
                  ].map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-[11px] text-on-surface-variant font-light">
                      <span className="material-icons-outlined text-primary text-xs">check_circle</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Detailed Narrative / Full Description */}
        {product.content.rendered && (
          <div className="mt-32 pt-24 border-t border-outline-variant/10">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <h2 className="font-headline text-4xl text-on-surface sticky top-32">
                  Full Product <br /><span className="italic text-primary">Narrative</span>
                </h2>
              </div>
              <div className="lg:col-span-8">
                <WPContent
                  html={product.content.rendered}
                  className="max-w-none prose-lg prose-invert"
                />
              </div>
            </div>
          </div>
        )}
      </Container>
    </>
  );
}

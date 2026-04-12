import type { Metadata } from "next";
import { getProducts, getProductCategories } from "@/lib/wordpress";
import { IMAGE_URLS } from "@/lib/constants";
import HeroBanner from "@/components/sections/HeroBanner";
import Container from "@/components/layout/Container";
import ProductGrid from "@/components/products/ProductGrid";

export const metadata: Metadata = {
  title: "Our Saffron Products",
  description:
    "Explore our range of premium Moroccan saffron products. Hand-harvested in Taliouine, AOP certified, ISO 3632 Category I.",
  openGraph: {
    title: "Our Saffron Products",
    description:
      "Explore our range of premium Moroccan saffron products from Bakhchane Cooperative.",
    type: "website",
  },
};

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getProductCategories(),
  ]);

  return (
    <>
      <HeroBanner
        title="Our Saffron"
        overline="Products"
        backgroundImage={IMAGE_URLS.bowlDark}
      />
      <Container className="py-section-gap">
        <ProductGrid products={products} categories={categories} />
      </Container>
    </>
  );
}

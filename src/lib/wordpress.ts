import type {
  WPPost,
  WPProduct,
  WPProductCategory,
  WPCategory,
} from "./types";

import postsData from "@/content/posts.json";
import productsData from "@/content/products.json";
import categoriesData from "@/content/categories.json";
import productCategoriesData from "@/content/product-categories.json";

/* ------------------------------------------------------------------ */
/* Local content store                                                  */
/*                                                                      */
/* Content was migrated from the headless WordPress backend into        */
/* src/content/*.json (see git history for the WP-backed version).      */
/* The function signatures are unchanged so pages/components need no    */
/* edits. Everything resolves locally — no network, no runtime 404s.    */
/* ------------------------------------------------------------------ */

const POSTS = postsData as unknown as WPPost[];
const PRODUCTS = productsData as unknown as WPProduct[];
const CATEGORIES = categoriesData as unknown as WPCategory[];
const PRODUCT_CATEGORIES =
  productCategoriesData as unknown as WPProductCategory[];

/** Posts sorted newest-first, matching the WP REST default order. */
const SORTED_POSTS = [...POSTS].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

/* ------------------------------------------------------------------ */
/* Posts                                                                */
/* ------------------------------------------------------------------ */

export async function getPosts(
  page: number = 1,
  perPage: number = 10
): Promise<WPPost[]> {
  const start = (page - 1) * perPage;
  return SORTED_POSTS.slice(start, start + perPage);
}

export async function getPost(slug: string): Promise<WPPost | null> {
  return SORTED_POSTS.find((p) => p.slug === slug) ?? null;
}

export async function getAllPostSlugs(): Promise<string[]> {
  return SORTED_POSTS.map((p) => p.slug);
}

/* ------------------------------------------------------------------ */
/* Products                                                             */
/* ------------------------------------------------------------------ */

/** Slugs of variant products that should not appear as separate pages */
const HIDDEN_VARIANT_SLUGS = [
  "saffron-threads-2g",
  "saffron-threads-5g",
  "saffron-threads-10g",
];

export async function getProducts(): Promise<WPProduct[]> {
  return PRODUCTS.filter((p) => !HIDDEN_VARIANT_SLUGS.includes(p.slug));
}

export async function getProduct(slug: string): Promise<WPProduct | null> {
  return PRODUCTS.find((p) => p.slug === slug) ?? null;
}

export async function getAllProductSlugs(): Promise<string[]> {
  return PRODUCTS.map((p) => p.slug).filter(
    (s) => !HIDDEN_VARIANT_SLUGS.includes(s)
  );
}

/* ------------------------------------------------------------------ */
/* Categories                                                           */
/* ------------------------------------------------------------------ */

export async function getProductCategories(): Promise<WPProductCategory[]> {
  return PRODUCT_CATEGORIES;
}

export async function getCategories(): Promise<WPCategory[]> {
  return CATEGORIES;
}

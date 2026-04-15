import type {
  WPPage,
  WPPost,
  WPProduct,
  WPProductCategory,
  WPCategory,
} from "./types";

/* ------------------------------------------------------------------ */
/* WordPress REST API client                                           */
/* ------------------------------------------------------------------ */

const WP_URL = process.env.NEXT_PUBLIC_WP_URL;
const API_BASE = `${WP_URL}/wp-json/wp/v2`;

/** Shared fetch options for ISR (revalidate every 60 seconds) */
const fetchOptions: RequestInit = {
  next: { revalidate: 60 },
};

/**
 * Generic fetcher. Returns parsed JSON or `null` on 404 / network error.
 */
async function apiFetch<T>(endpoint: string): Promise<T | null> {
  if (!WP_URL) {
    console.warn("NEXT_PUBLIC_WP_URL is not set — skipping API call");
    return null;
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10_000);

    const url = `${API_BASE}${endpoint}`;
    const res = await fetch(url, {
      ...fetchOptions,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
        'Accept': 'application/json',
      },
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!res.ok) {
      // 403 Forbidden often happens if the User-Agent is blocked or if REST is disabled
      // We log it as a warning instead of a full error to reduce console noise during transition
      if (res.status === 403) {
        console.warn(`WP API Forbidden (403): Are you sure the NEXT_PUBLIC_WP_URL is correct? Current: ${url}`);
        return null;
      }
      if (res.status === 404) return null;
      console.error(`WP API error ${res.status}: ${url}`);
      return null;
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error("WP API fetch failed:", error);
    return null;
  }
}

/* ------------------------------------------------------------------ */
/* Pages                                                               */
/* ------------------------------------------------------------------ */

export async function getPage(slug: string): Promise<WPPage | null> {
  const pages = await apiFetch<WPPage[]>(
    `/pages?slug=${encodeURIComponent(slug)}&_embed`
  );
  return pages && pages.length > 0 ? pages[0] : null;
}

/* ------------------------------------------------------------------ */
/* Posts                                                                */
/* ------------------------------------------------------------------ */

export async function getPosts(
  page: number = 1,
  perPage: number = 10
): Promise<WPPost[]> {
  const posts = await apiFetch<WPPost[]>(
    `/posts?page=${page}&per_page=${perPage}&_embed`
  );
  return posts ?? [];
}

export async function getPost(slug: string): Promise<WPPost | null> {
  const posts = await apiFetch<WPPost[]>(
    `/posts?slug=${encodeURIComponent(slug)}&_embed`
  );
  return posts && posts.length > 0 ? posts[0] : null;
}

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await apiFetch<WPPost[]>(
    `/posts?per_page=100&_fields=slug`
  );
  return posts ? posts.map((p) => p.slug) : [];
}

/* ------------------------------------------------------------------ */
/* Products (custom post type)                                         */
/* ------------------------------------------------------------------ */

export async function getProducts(): Promise<WPProduct[]> {
  const products = await apiFetch<WPProduct[]>(
    `/bk_product?per_page=100&_embed`
  );
  return products ?? [];
}

export async function getProduct(slug: string): Promise<WPProduct | null> {
  const products = await apiFetch<WPProduct[]>(
    `/bk_product?slug=${encodeURIComponent(slug)}&_embed`
  );
  return products && products.length > 0 ? products[0] : null;
}

export async function getAllProductSlugs(): Promise<string[]> {
  const products = await apiFetch<WPProduct[]>(
    `/bk_product?per_page=100&_fields=slug`
  );
  return products ? products.map((p) => p.slug) : [];
}

/* ------------------------------------------------------------------ */
/* Product categories (custom taxonomy)                                */
/* ------------------------------------------------------------------ */

export async function getProductCategories(): Promise<WPProductCategory[]> {
  const categories = await apiFetch<WPProductCategory[]>(
    `/product_category?per_page=100`
  );
  return categories ?? [];
}

/* ------------------------------------------------------------------ */
/* Categories                                                          */
/* ------------------------------------------------------------------ */

export async function getCategories(): Promise<WPCategory[]> {
  const categories = await apiFetch<WPCategory[]>(
    `/categories?per_page=100`
  );
  return categories ?? [];
}

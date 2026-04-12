/* ------------------------------------------------------------------ */
/* WordPress REST API entity types                                     */
/* ------------------------------------------------------------------ */

/** Featured media object from ?_embed response */
export interface WPFeaturedMedia {
  id: number;
  source_url: string;
  alt_text: string;
  media_details: {
    width: number;
    height: number;
    sizes: {
      thumbnail?: { source_url: string; width: number; height: number };
      medium?: { source_url: string; width: number; height: number };
      medium_large?: { source_url: string; width: number; height: number };
      large?: { source_url: string; width: number; height: number };
      full?: { source_url: string; width: number; height: number };
      [key: string]: { source_url: string; width: number; height: number } | undefined;
    };
  };
}

/** WordPress media attachment */
export interface WPMedia {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  alt_text: string;
  source_url: string;
  media_details: {
    width: number;
    height: number;
    sizes: {
      thumbnail?: { source_url: string; width: number; height: number };
      medium?: { source_url: string; width: number; height: number };
      large?: { source_url: string; width: number; height: number };
      full?: { source_url: string; width: number; height: number };
      [key: string]: { source_url: string; width: number; height: number } | undefined;
    };
  };
}

/** WordPress page */
export interface WPPage {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  title: { rendered: string };
  content: { rendered: string; protected: boolean };
  excerpt: { rendered: string; protected: boolean };
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: WPFeaturedMedia[];
  };
}

/** WordPress post */
export interface WPPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  title: { rendered: string };
  content: { rendered: string; protected: boolean };
  excerpt: { rendered: string; protected: boolean };
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    "wp:featuredmedia"?: WPFeaturedMedia[];
  };
}

/** WordPress category */
export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
  parent: number;
}

/** WordPress product (custom post type) */
export interface WPProduct {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  title: { rendered: string };
  content: { rendered: string; protected: boolean };
  excerpt: { rendered: string; protected: boolean };
  featured_media: number;
  product_category: number[];
  meta: {
    price: string;
    weight: string;
    [key: string]: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: WPFeaturedMedia[];
  };
}

/** WordPress product category (custom taxonomy) */
export interface WPProductCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
  parent: number;
}

import type { WPPost } from "./types";
import type { Locale } from "@/i18n/dictionaries";

/**
 * Pick the localized title for a post. Falls back to the English
 * rendered title when no translation exists.
 */
export function localizedTitle(post: WPPost, locale: Locale): string {
  const meta = post.meta;
  if (meta) {
    if (locale === "fr" && meta.title_fr) return meta.title_fr;
    if (locale === "es" && meta.title_es) return meta.title_es;
  }
  return post.title.rendered;
}

/** Localized excerpt with fallback. */
export function localizedExcerpt(post: WPPost, locale: Locale): string {
  const meta = post.meta;
  if (meta) {
    if (locale === "fr" && meta.excerpt_fr) return meta.excerpt_fr;
    if (locale === "es" && meta.excerpt_es) return meta.excerpt_es;
  }
  return post.excerpt.rendered;
}

/** Localized full content (Gutenberg HTML) with fallback. */
export function localizedContent(post: WPPost, locale: Locale): string {
  const meta = post.meta;
  if (meta) {
    if (locale === "fr" && meta.content_fr) return meta.content_fr;
    if (locale === "es" && meta.content_es) return meta.content_es;
  }
  return post.content.rendered;
}

import type { Metadata } from "next";
import Page from "@/app/(site)/tea/page";
import { seoFor, OG_LOCALE } from "@/i18n/seo";
import { alternatesForLocale, isPrefixedLocale } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) return {};
  const meta = seoFor("/tea", locale);
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: alternatesForLocale("/tea", locale),
    openGraph: {
      title: meta.title,
      description: meta.description,
      locale: OG_LOCALE[locale],
      type: "website",
    },
  };
}

export default Page;

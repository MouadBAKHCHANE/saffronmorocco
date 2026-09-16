import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/ui/FloatingActions";
import LocaleProvider from "@/i18n/LocaleProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

import { notFound } from "next/navigation";
import { isPrefixedLocale, alternatesForLocale } from "@/i18n/routing";
import { seoFor, OG_LOCALE } from "@/i18n/seo";

/** Only /fr and /es exist; anything else in this slot is a 404, not a locale. */
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "es" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) return {};
  const meta = seoFor("", locale);
  return {
    metadataBase: new URL("https://saffronmorocco.com"),
    title: { absolute: meta.title },
    description: meta.description,
    alternates: alternatesForLocale("", locale),
    openGraph: {
      title: meta.title,
      description: meta.description,
      siteName: "iD BAKHCHANE",
      locale: OG_LOCALE[locale],
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isPrefixedLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      className={`dark ${cormorant.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-surface text-on-surface font-body">
        {/* routeLocale makes the URL authoritative, so the tree is rendered in
            this language at build time rather than flipping after hydration */}
        <LocaleProvider routeLocale={locale}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingActions />
        </LocaleProvider>
      </body>
    </html>
  );
}

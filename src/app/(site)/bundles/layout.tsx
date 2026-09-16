import { alternatesFor } from "@/i18n/routing";
import { ld, collectionPage } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saffron Gift Sets & Gourmet Bundles",
  description:
    "Luxury saffron gift bundles featuring premium Moroccan threads, tea infusions, and artisanal accessories. Perfect gifts for chefs, foodies, and connoisseurs. Beautifully packaged.",
  keywords: [
    "saffron gift",
    "saffron gift set",
    "luxury saffron gift",
    "saffron bundle",
    "gourmet gift basket",
    "moroccan food gift",
    "chef gift saffron",
  ],
  alternates: alternatesFor("/bundles"),
  openGraph: {
    title: "Saffron Gift Sets & Gourmet Bundles",
    description:
      "Luxury saffron gift bundles with premium Taliouine threads, tea, and accessories.",
    type: "website",
    url: "https://saffronmorocco.com/bundles",
  },
};

export default function BundlesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ld(collectionPage({
        path: "/bundles",
        name: "Saffron Gift Sets & Bundles",
        description:
          "Curated gift sets of AOP-certified Moroccan saffron from Taliouine.",
        crumbs: [{ name: "Home", path: "" }, { name: "Saffron Gift Sets & Bundles", path: "/bundles" }],
      }))} />
      {children}
    </>
  );
}

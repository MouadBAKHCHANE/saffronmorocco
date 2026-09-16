import { ld, collectionPage } from "@/lib/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wholesale Moroccan Saffron | Bulk 50g-500g",
  description:
    "Buy bulk Moroccan saffron at wholesale prices. 50g to 500g pouches direct from Taliouine. AOP certified, ISO 3632 Cat I, lab-tested. Restaurants, retailers, distributors welcome.",
  keywords: [
    "bulk saffron",
    "wholesale saffron",
    "wholesale moroccan saffron",
    "buy saffron 100g",
    "buy saffron 500g",
    "restaurant saffron supply",
    "saffron distributor",
  ],
  alternates: { canonical: "/bulk" },
  openGraph: {
    title: "Wholesale Moroccan Saffron | Bulk 50g-500g",
    description:
      "Premium bulk Moroccan saffron at wholesale prices. Direct from the Bakhchane Cooperative in Taliouine.",
    type: "website",
    url: "https://saffronmorocco.com/bulk",
  },
};

export default function BulkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={ld(collectionPage({
        path: "/bulk",
        name: "Wholesale & Bulk Moroccan Saffron",
        description:
          "Bulk saffron from 50g to 500g for chefs, brands and distributors.",
        crumbs: [{ name: "Home", path: "" }, { name: "Wholesale & Bulk Moroccan Saffron", path: "/bulk" }],
      }))} />
      {children}
    </>
  );
}

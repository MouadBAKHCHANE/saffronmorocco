import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bulk & Wholesale Saffron",
  description:
    "Premium bulk Moroccan saffron from 50g to 500g. Direct from the Bakhchane Cooperative in Taliouine. AOP-certified, ISO 3632 Cat I, lab-tested.",
  alternates: { canonical: "/bulk" },
  openGraph: {
    title: "Bulk & Wholesale Saffron",
    description:
      "Premium bulk Moroccan saffron from 50g to 500g. Direct from the cooperative.",
    type: "website",
    url: "https://saffronmorocco.com/bulk",
  },
};

export default function BulkLayout({ children }: { children: React.ReactNode }) {
  return children;
}

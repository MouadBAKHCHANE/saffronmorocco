import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saffron Gift Sets & Gourmet Bundles — Premium Moroccan Saffron",
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
  alternates: { canonical: "/bundles" },
  openGraph: {
    title: "Saffron Gift Sets & Gourmet Bundles — Premium Moroccan Saffron",
    description:
      "Luxury saffron gift bundles with premium Taliouine threads, tea, and accessories.",
    type: "website",
    url: "https://saffronmorocco.com/bundles",
  },
};

export default function BundlesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

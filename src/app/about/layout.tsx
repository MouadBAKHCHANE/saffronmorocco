import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About iD BAKHCHANE — Women's Saffron Cooperative in Taliouine",
  description:
    "The Bakhchane Cooperative is a women-led saffron producer in Taliouine, Morocco. Hand-harvesting AOP-certified Crocus Sativus since [year]. Fair trade, organic, traceable.",
  keywords: [
    "moroccan saffron cooperative",
    "taliouine saffron farmers",
    "women saffron cooperative",
    "fair trade saffron",
    "bakhchane cooperative",
    "saffron producer morocco",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About iD BAKHCHANE — Women's Saffron Cooperative in Taliouine",
    description:
      "The story of the Bakhchane Cooperative — women hand-harvesting AOP-certified saffron in Taliouine, Morocco.",
    type: "website",
    url: "https://saffronmorocco.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

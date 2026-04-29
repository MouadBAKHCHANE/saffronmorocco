import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | The Bakhchane Cooperative",
  description:
    "The story of iD BAKHCHANE — a women's cooperative in Taliouine producing AOP-certified Moroccan saffron, hand-harvested from the Crocus Sativus.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About | The Bakhchane Cooperative",
    description:
      "The story of iD BAKHCHANE — a women's cooperative in Taliouine producing AOP-certified Moroccan saffron.",
    type: "website",
    url: "https://saffronmorocco.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

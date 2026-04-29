import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Saffron Gift Bundles",
  description:
    "Curated saffron gift bundles from iD BAKHCHANE — beautifully packaged gourmet sets featuring threads, tea infusions, and artisanal accessories.",
  alternates: { canonical: "/bundles" },
  openGraph: {
    title: "Saffron Gift Bundles",
    description:
      "Curated saffron gift bundles from iD BAKHCHANE — gourmet sets with threads, tea, and accessories.",
    type: "website",
    url: "https://saffronmorocco.com/bundles",
  },
};

export default function BundlesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

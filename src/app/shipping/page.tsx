import { ld, webPage } from "@/lib/schema";
import type { Metadata } from "next";
import LegalPageContent from "@/components/legal/LegalPageContent";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Shipping, delivery times, and customs information from iD BAKHCHANE, Taliouine to your door.",
  alternates: { canonical: "/shipping" },
};

export default function ShippingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={ld(
          webPage({
            path: "/shipping",
            name: "Shipping Policy",
            description: "Shipping Policy for iD BAKHCHANE — saffronmorocco.com.",
            crumbs: [{ name: "Home", path: "" }, { name: "Shipping Policy", path: "/shipping" }],
          })
        )}
      />
      <LegalPageContent kind="shipping" />
    </>
  );
}

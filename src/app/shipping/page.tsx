import type { Metadata } from "next";
import LegalPageContent from "@/components/legal/LegalPageContent";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Shipping, delivery times, and customs information from iD BAKHCHANE — Taliouine to your door.",
  alternates: { canonical: "/shipping" },
};

export default function ShippingPage() {
  return <LegalPageContent kind="shipping" />;
}

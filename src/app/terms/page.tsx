import type { Metadata } from "next";
import LegalPageContent from "@/components/legal/LegalPageContent";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Conditions of use for iD BAKHCHANE platform and artisanal services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return <LegalPageContent kind="terms" />;
}

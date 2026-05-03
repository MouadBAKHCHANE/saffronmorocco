import type { Metadata } from "next";
import LegalPageContent from "@/components/legal/LegalPageContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How iD BAKHCHANE collects, uses, and safeguards your personal data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return <LegalPageContent kind="privacy" />;
}

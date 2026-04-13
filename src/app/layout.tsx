import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/ui/FloatingActions";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://saffronmorocco.com"),
  title: {
    default:
      "iD BAKHCHANE – Premium Moroccan Saffron from Taliouine",
    template: "%s | iD BAKHCHANE",
  },
  description:
    "Premium Moroccan Saffron from the heart of Taliouine. Hand-harvested by the Bakhchane Cooperative of local farmers. AOP certified, ISO 3632 Category I.",
  openGraph: {
    siteName: "iD BAKHCHANE",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-saffron-threads.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${cormorant.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-surface text-on-surface font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}

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
      "Buy Premium Moroccan Saffron Online | AOP Taliouine | iD BAKHCHANE",
    template: "%s | iD BAKHCHANE Moroccan Saffron",
  },
  description:
    "Premium Moroccan saffron from Taliouine, Morocco. AOP certified, ISO 3632 Category I. Hand-harvested threads, lab-tested, shipped worldwide. Buy direct from the Bakhchane women's cooperative.",
  keywords: [
    "moroccan saffron",
    "premium saffron",
    "buy saffron online",
    "taliouine saffron",
    "AOP saffron",
    "ISO 3632 saffron",
    "saffron threads",
    "bulk saffron wholesale",
    "saffron morocco",
    "real saffron",
    "Bakhchane Cooperative",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "iD BAKHCHANE",
    locale: "en_US",
    type: "website",
    url: "https://saffronmorocco.com",
    images: [
      {
        url: "/images/hero-saffron-threads.webp",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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

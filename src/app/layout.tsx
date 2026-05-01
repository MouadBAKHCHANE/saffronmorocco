import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/ui/FloatingActions";
import LocaleProvider from "@/i18n/LocaleProvider";

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

// Runs before React hydrates — prevents flash of wrong theme.
const themeInitScript = `
(function(){try{
  var s=localStorage.getItem('theme');
  var sys=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';
  var t=s||sys;
  var c=document.documentElement.classList;
  c.toggle('light',t==='light');
  c.toggle('dark',t==='dark');
}catch(e){document.documentElement.classList.add('dark');}})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen flex flex-col bg-surface text-on-surface font-body">
        <LocaleProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingActions />
        </LocaleProvider>
      </body>
    </html>
  );
}

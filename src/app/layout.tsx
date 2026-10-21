import type { Metadata } from "next";
import { Nunito_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/layout/BackToTop";
import { MobileBottomMenu } from "@/components/layout/MobileBottomMenu";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800", "900"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shivaroadlines.co.in"),
  title: {
    default: "Shiva Petroleum Transportation",
    template: "%s | Shiva Petroleum Transportation",
  },
  description:
    "Shiva Road Lines - GSTIN 27AMAPR6367F2ZS - Transport & Logistics Services by Proprietor A. Rai.",
  keywords: [
    "Shiva Road Lines",
    "GSTIN 27AMAPR6367F2ZS",
    "A Rai Transport",
    "Logistics Services",
    "Transport Company",
    "Petroleum Transportation",
    "Lube Oil Transportation",
    "Coal Tar Transportation",
    "Ethanol Transportation",
  ],
  authors: [{ name: "A. Rai" }],
  icons: {
    icon: "/images/favicon2.webp",
    shortcut: "/images/favicon2.webp",
    apple: "/images/favicon2.webp",
  },
  openGraph: {
    title: "Shiva Petroleum Transportation",
    description:
      "Shiva Road Lines - GSTIN 27AMAPR6367F2ZS - Transport & Logistics Services by Proprietor A. Rai.",
    url: "https://www.shivaroadlines.co.in",
    siteName: "Shiva Roadlines",
    images: [
      {
        url: "/images/logonew.webp",
        width: 600,
        height: 200,
        alt: "Shiva Petroleum Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Shiva Road Lines",
  url: "https://www.shivaroadlines.co.in",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "GSTIN",
    value: "27AMAPR6367F2ZS",
  },
  description:
    "Transport & Logistics company owned by A. Rai. GSTIN: 27AMAPR6367F2ZS.",
  founder: "A. Rai",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${nunito.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="preload"
          href="/images/hero-3.webp"
          as="image"
          type="image/webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-white text-[#4d4d4d]"
        suppressHydrationWarning
      >
        <Header />
        <main className="grow">{children}</main>
        <Footer />
        <BackToTop />
        <WhatsAppFloat />
        <MobileBottomMenu />
      </body>
    </html>
  );
}

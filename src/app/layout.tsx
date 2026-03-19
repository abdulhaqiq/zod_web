import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://zod.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Zod — The AI Dating App",
    template: "Zod — %s",
  },
  description:
    "Zod is the AI dating app that matches you on real compatibility — not swipes. Built in 2026 by an AI-first team. Free on iOS & Android.",
  keywords: [
    "Zod",
    "Zod app",
    "Zod dating app",
    "Zod dating",
    "AI dating app",
    "best dating app 2026",
    "dating app",
    "online dating",
    "find love",
    "meet singles",
    "relationship app",
    "compatibility matching",
    "AI matchmaking",
    "verified dating app",
    "safe dating app",
    "free dating app",
    "dating app download",
    "Zod download",
    "Zevello",
  ],
  authors: [{ name: "Zevello, Inc.", url: BASE_URL }],
  creator: "Zevello, Inc.",
  publisher: "Zevello, Inc.",
  applicationName: "Zod",
  category: "Dating",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Zod",
    title: "Zod — The AI Dating App",
    description:
      "The AI dating app built for real compatibility — not endless swiping. Free on iOS and Android.",
    images: [
      {
        url: "/favicon.png",
        width: 1024,
        height: 1024,
        alt: "Zod — AI Dating App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@zodapp",
    creator: "@zodapp",
    title: "Zod — The AI Dating App",
    description: "AI-powered dating built for real compatibility. Free on iOS & Android.",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "Zod",
  legalName: "Zevello, Inc.",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/favicon.png`,
    width: 1024,
    height: 1024,
  },
  image: `${BASE_URL}/favicon.png`,
  description:
    "Zod is the AI-powered dating app that matches people on deep compatibility — not swiping. Built by an AI-first team, launched in 2026.",
  foundingDate: "2026",
  foundingLocation: {
    "@type": "Place",
    name: "London, United Kingdom",
  },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "15 Finsbury Square",
      addressLocality: "London",
      postalCode: "EC2A 1BT",
      addressCountry: "GB",
    },
    {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "support@dhabli.com",
      contactType: "customer support",
      availableLanguage: ["English", "Arabic"],
    },
    {
      "@type": "ContactPoint",
      email: "press@dhabli.com",
      contactType: "press",
    },
    {
      "@type": "ContactPoint",
      email: "investors@dhabli.com",
      contactType: "investor relations",
    },
  ],
  sameAs: [
    "https://twitter.com/zodapp",
    "https://www.instagram.com/zodapp",
    "https://www.tiktok.com/@zodapp",
    "https://www.linkedin.com/company/zodapp",
    "https://www.youtube.com/@zodapp",
    "https://apps.apple.com/app/zod",
    "https://play.google.com/store/apps/details?id=app.zod",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  name: "Zod",
  url: BASE_URL,
  description: "The AI dating app built for real compatibility.",
  publisher: { "@id": `${BASE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/help-centre?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "@id": `${BASE_URL}/#app`,
  name: "Zod",
  operatingSystem: "iOS, Android",
  applicationCategory: "LifestyleApplication",
  applicationSubCategory: "Dating",
  downloadUrl: [
    "https://apps.apple.com/app/zod",
    "https://play.google.com/store/apps/details?id=app.zod",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Zod is an AI dating app launched in 2026 that uses deep compatibility signals to match you with the right person — not just the nearest swipe.",
  url: BASE_URL,
  author: { "@id": `${BASE_URL}/#organization` },
  screenshot: `${BASE_URL}/favicon.png`,
  releaseNotes: "Initial launch — 2026",
  softwareVersion: "1.0",
  datePublished: "2026-01-01",
  inLanguage: ["en", "ar"],
  countriesSupported: "Worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

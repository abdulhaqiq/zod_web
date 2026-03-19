import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zod — The AI Dating App | Find Your Perfect Match",
    template: "%s | Zod Dating App",
  },
  description:
    "Zod is a new AI-powered dating app launched in 2026. Built by an AI-first team to match people on real compatibility — not swipes. Free on iOS & Android.",
  keywords: [
    "dating app",
    "best dating app 2025",
    "AI dating app",
    "online dating",
    "find love",
    "meet singles",
    "relationship app",
    "compatibility matching",
    "verified dating",
    "safe dating app",
    "Zod app",
    "dating app download",
  ],
  authors: [{ name: "Zevello, Inc." }],
  creator: "Zevello, Inc.",
  publisher: "Zevello, Inc.",
  applicationName: "Zod",
  category: "Dating",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zod.app",
    siteName: "Zod",
    title: "Zod — The last dating app you'll ever need",
    description:
      "A new AI-powered dating app launched in 2026. Built for real compatibility — not endless swiping. Free on iOS and Android.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Zod — AI Dating App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zod — The AI Dating App",
    description: "AI-powered dating built for real compatibility. Launched 2026. Free on iOS & Android.",
    images: ["https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=1200&q=85"],
    creator: "@zodapp",
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
    canonical: "https://zod.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "Zod",
              operatingSystem: "iOS, Android",
              applicationCategory: "LifestyleApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "142000",
                bestRating: "5",
                worstRating: "1",
              },
              description:
                "Zod is an AI-powered dating app launched in 2026 that uses deep compatibility signals to match you with the right person — not just the nearest swipe.",
              url: "https://zod.app",
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

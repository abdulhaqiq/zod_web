import type { Metadata } from "next";
import Header from "@/components/landing/Header";

export const metadata: Metadata = {
  title: { absolute: "Zod — The AI Dating App" },
  description:
    "Zod is the AI dating app that matches you on real compatibility — not swipes. Download free on iOS & Android. Built in 2026.",
  keywords: ["Zod", "Zod app", "Zod dating app", "AI dating app", "best dating app 2026", "free dating app", "find love", "meet singles"],
  alternates: { canonical: "https://zod.app" },
  openGraph: {
    title: "Zod — The AI Dating App",
    description: "AI-powered matching built for real relationships. Free on iOS & Android.",
    url: "https://zod.app",
    type: "website",
  },
};

import Hero from "@/components/landing/Hero";
import LiveStats from "@/components/landing/LiveStats";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import AISection from "@/components/landing/AISection";
import Comparison from "@/components/landing/Comparison";
import Safety from "@/components/landing/Safety";
import Stories from "@/components/landing/Stories";
import Press from "@/components/landing/Press";
import Pricing from "@/components/landing/Pricing";
import Blog from "@/components/landing/Blog";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Zod?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zod is an AI-powered dating app launched in 2026 that matches people based on deep compatibility signals — not just swiping. It's free to download on iOS and Android.",
        },
      },
      {
        "@type": "Question",
        name: "How does Zod's AI matching work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zod's compatibility engine analyses your communication style, values, and preferences to surface people who are genuinely compatible with you — not just people who are nearby.",
        },
      },
      {
        "@type": "Question",
        name: "Is Zod free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Zod is free to download and use. An optional premium subscription unlocks additional features, but the core matching experience is completely free.",
        },
      },
      {
        "@type": "Question",
        name: "Is Zod safe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Zod includes ID verification, end-to-end encrypted messaging, AI moderation, instant blocking, and one-tap reporting. Safety is built into every layer of the product.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I download Zod?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zod is available on the App Store for iOS and Google Play for Android. You can also use the web app at zod.app.",
        },
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <Hero />
      <LiveStats />
      <Features />
      <HowItWorks />
      <AISection />
      <Comparison />
      <Safety />
      <Stories />
      <Press />
      <Pricing />
      <Blog />
      <FAQ />
      <Footer />
    </main>
  );
}

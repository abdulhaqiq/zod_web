import Header from "@/components/landing/Header";
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
  return (
    <main>
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

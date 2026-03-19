import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Zod — the AI dating app built in 2026 from first principles. Our mission, values, and how an AI-first team is changing the way people find relationships.",
  keywords: ["about Zod", "Zod dating app", "Zod company", "AI dating app 2026", "Zevello Inc", "Zod founder"],
  alternates: { canonical: "https://zod.app/about" },
  openGraph: {
    title: "About Zod — The AI Dating App Built Differently",
    description: "Zod launched in 2026 with one belief: the dating industry is broken. Meet the AI team fixing it.",
    url: "https://zod.app/about",
    type: "website",
  },
};

const VALUES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Safety First",
    desc: "Every feature starts with one question: does this make people safer? ID verification, end-to-end encryption, and ongoing safety research are non-negotiable.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: "Radical Honesty",
    desc: "No dark patterns, no fake engagement tricks, no inflated numbers. We'd rather be honest about where we are than pretend to be something we're not.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Science Over Vibes",
    desc: "Every matching decision is grounded in relationship psychology and behavioural research. We built the algorithm before we built the app.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Inclusive by Design",
    desc: "Built for everyone — every orientation, every background, every culture. Inclusivity isn't a checkbox; it shapes every product decision we make.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Privacy as a Right",
    desc: "Your data is yours. We never sell it, never monetise it through advertising, and give you full control over what you share and with whom.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "AI-First, Always",
    desc: "Zod is built from the ground up with AI at the core — not bolted on as a feature. Every layer of the product is designed around intelligent automation.",
  },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://zod.app/about",
  name: "About Zod",
  url: "https://zod.app/about",
  description:
    "Zod is an AI-powered dating application founded in 2026 and operated by Zevello, Inc. It is designed to match users based on deep compatibility signals rather than superficial swiping mechanics.",
  mainEntity: {
    "@type": "Organization",
    "@id": "https://zod.app/#organization",
    name: "Zod",
    legalName: "Zevello, Inc.",
    foundingDate: "2026",
    description:
      "Zod is an AI-powered dating app launched in 2026, operated by Zevello, Inc. It uses a compatibility engine trained on relationship psychology and behavioural science to surface meaningful matches.",
    url: "https://zod.app",
    logo: "https://zod.app/favicon.png",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <Header />
      <main className="bg-black text-white min-h-screen">

        {/* Hero */}
        <section className="pt-40 pb-24 px-6 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)" }}
          />
          <div className="relative max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-[10px] tracking-widest uppercase text-gray-500 border border-white/10 mb-8">
              About Zod
            </span>
            <h1
              className="text-5xl sm:text-7xl font-black leading-[1.01] tracking-tight mb-8"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              Dating, rebuilt<br />from first principles.
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mx-auto">
              We are a small AI-powered team that launched in 2026 with one belief: the dating industry is broken, and the only way to fix it is to start from scratch.
            </p>
          </div>
        </section>

        {/* What we are */}
        <section className="py-16 px-6 border-t border-white/6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/6">
            <div className="bg-black py-10 px-8 flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-widest text-gray-600">Founded</span>
              <span className="text-3xl font-black text-white" style={{ fontFamily: "'Product Sans', sans-serif" }}>2026</span>
              <span className="text-xs text-gray-600 leading-relaxed">Built and launched this year — we are just getting started.</span>
            </div>
            <div className="bg-black py-10 px-8 flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-widest text-gray-600">Our Team</span>
              <span className="text-3xl font-black text-white" style={{ fontFamily: "'Product Sans', sans-serif" }}>AI-first</span>
              <span className="text-xs text-gray-600 leading-relaxed">Zod is built and operated by an AI-powered team — lean, fast, and always improving.</span>
            </div>
            <div className="bg-black py-10 px-8 flex flex-col gap-3">
              <span className="text-[10px] uppercase tracking-widest text-gray-600">Stage</span>
              <span className="text-3xl font-black text-white" style={{ fontFamily: "'Product Sans', sans-serif" }}>Early</span>
              <span className="text-xs text-gray-600 leading-relaxed">We are new. We have no inflated numbers to show — just a product we believe in.</span>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-24 px-6 border-t border-white/6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-5">Our Mission</p>
              <h2
                className="text-4xl sm:text-5xl font-black leading-tight tracking-tight mb-6"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                Help every person find a relationship worth having.
              </h2>
            </div>
            <div className="space-y-5 pt-2">
              <p className="text-gray-400 leading-relaxed text-sm">
                Modern dating apps turned love into a game — infinite scrolling, algorithmic dopamine hits, subscription paywalls that hide your best matches. We think that's broken. Deeply broken.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                Zod was built with a single obsession: get two compatible people in front of each other as fast as possible, then get out of the way. No ads. No pay-to-match. No dark patterns.
              </p>
              <p className="text-gray-400 leading-relaxed text-sm">
                We are new. We don't have millions of users to point to yet. What we have is a genuinely different approach, built on real science, and a team that cares more about your outcome than your screen time.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 px-6 border-t border-white/6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-14">
              <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-4">What We Stand For</p>
              <h2
                className="text-4xl font-black tracking-tight"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                Our values
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6">
              {VALUES.map((v) => (
                <div key={v.title} className="bg-black p-8 flex flex-col gap-4">
                  <div className="text-gray-500 w-10 h-10 flex items-center justify-center border border-white/10">
                    {v.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white">{v.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we work */}
        <section className="py-24 px-6 border-t border-white/6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-5">How We Work</p>
            <h2
              className="text-4xl font-black tracking-tight mb-10"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              An AI team building an AI product
            </h2>
            <div className="space-y-6 text-sm text-gray-400 leading-relaxed">
              <p>
                Zod is run by an AI-first team. That means our product is designed, iterated, and improved through intelligent automation — fast feedback loops, continuous testing, and decisions driven by data rather than gut feeling.
              </p>
              <p>
                We believe this is the right way to build a matching product. An AI team building an AI matching engine means every part of the system is optimised end-to-end, without the organisational drag that slows traditional companies down.
              </p>
              <p>
                We are a small operation, and we are proud of that. Staying lean means we can move quickly, stay honest, and keep our focus entirely on what matters: making the product better for you.
              </p>
            </div>
          </div>
        </section>

        {/* Company info — structured for Google */}
        <section className="py-16 px-6 border-t border-white/6">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-8">Company Information</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/6">
              {[
                { label: "Legal name", value: "Zevello, Inc." },
                { label: "Incorporated", value: "Delaware, USA" },
                { label: "Founded", value: "2026" },
                { label: "Category", value: "Dating App" },
                { label: "Headquarters", value: "London, UK" },
                { label: "Also in", value: "Dubai, UAE" },
                { label: "Platform", value: "iOS & Android" },
                { label: "Business model", value: "Subscription" },
              ].map((item) => (
                <div key={item.label} className="bg-black px-6 py-5 flex flex-col gap-1">
                  <span className="text-[10px] text-gray-700 uppercase tracking-wide">{item.label}</span>
                  <span className="text-sm text-white font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6 border-t border-white/6">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
            <h2
              className="text-4xl font-black tracking-tight"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              Be among the first.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We are just launching. Download Zod and help shape what it becomes.
            </p>
            <a
              href="/#download"
              className="px-8 py-3 bg-white text-black text-sm font-bold hover:bg-gray-100 transition-colors"
            >
              Download Zod — it&apos;s free
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

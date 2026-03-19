import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Help Centre",
  description:
    "Zod Help Centre — answers for account, matching, messaging, billing, safety and privacy questions.",
  keywords: ["Zod help", "Zod support", "Zod FAQ", "Zod help centre", "Zod account help"],
  alternates: { canonical: "https://zod.app/help-centre" },
  openGraph: {
    title: "Zod Help Centre — Find Your Answer",
    description: "Everything you need to know about using Zod.",
    url: "https://zod.app/help-centre",
    type: "website",
  },
};

const CATEGORIES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "Account & Profile",
    articles: ["How to create your account", "Editing your profile", "Changing your email or password", "Deleting your account", "Profile verification"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Matching & AI",
    articles: ["How our matching works", "Why you received a particular match", "Improving your match quality", "Pausing matches", "Understanding compatibility scores"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Messaging",
    articles: ["Sending your first message", "Message requests", "Blocking and unmatching", "Reporting a conversation", "Voice and video calls"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: "Billing & Subscriptions",
    articles: ["Zod subscription plans", "How to upgrade or downgrade", "Cancelling your subscription", "Refund policy", "Payment methods accepted"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Safety & Privacy",
    articles: ["How to report someone", "Blocking a user", "Privacy settings", "What data we store", "ID verification process"],
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
    title: "Technical Issues",
    articles: ["App not loading", "Notifications not working", "Login problems", "Photo upload issues", "Supported devices and OS versions"],
  },
];

const FAQS = [
  {
    q: "Is Zod free to use?",
    a: "Yes — you can download Zod and start matching for free. We offer an optional premium subscription with additional features, but the core experience is free with no card required.",
  },
  {
    q: "How does the AI matching work?",
    a: "Our compatibility engine analyses your communication style, values, preferences, and behavioural patterns to surface people who are genuinely compatible with you — not just people who are nearby or recently active.",
  },
  {
    q: "Can I delete my account and all my data?",
    a: "Yes, completely. Go to Settings → Account → Delete Account. Your profile, matches, and messages are permanently deleted. You can also submit a formal data deletion request via our privacy page.",
  },
  {
    q: "How do I report someone who made me feel unsafe?",
    a: "Tap the three-dot menu on any profile or conversation and select 'Report'. You can also email safety@dhabli.com directly. All reports are reviewed by our safety systems within hours.",
  },
  {
    q: "Is my data sold to third parties?",
    a: "Never. We have no advertising model. Your data is used solely to improve your experience on Zod and is never sold, shared, or monetised through third-party advertising.",
  },
];

export default function HelpCentrePage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white min-h-screen">

        {/* Hero */}
        <section className="pt-40 pb-20 px-6 border-b border-white/6 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px" }}
          />
          <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center gap-6">
            <span className="inline-block px-3 py-1 text-[10px] tracking-widest uppercase text-gray-500 border border-white/10">
              Help Centre
            </span>
            <h1
              className="text-5xl sm:text-6xl font-black leading-tight tracking-tight"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              How can we help?
            </h1>
            <div className="w-full max-w-lg flex gap-0">
              <input
                type="text"
                placeholder="Search for an answer..."
                className="flex-1 bg-transparent border border-white/15 border-r-0 px-5 py-3.5 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-white/30 transition-colors"
              />
              <button className="px-5 py-3.5 bg-white text-black text-xs font-bold hover:bg-gray-100 transition-colors border border-white">
                Search
              </button>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-20 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto">
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-8">Browse by topic</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6">
              {CATEGORIES.map((cat) => (
                <div key={cat.title} className="bg-black p-8 flex flex-col gap-5 group hover:bg-white/[0.02] transition-colors cursor-pointer">
                  <div className="text-gray-500 w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-white/25 transition-colors">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-3">{cat.title}</h3>
                    <ul className="space-y-2">
                      {cat.articles.map((a) => (
                        <li key={a}>
                          <a href="#" className="text-xs text-gray-600 hover:text-gray-300 transition-colors flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                            {a}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 px-6 border-b border-white/6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-8">Common questions</p>
            <h2 className="text-4xl font-black tracking-tight mb-10" style={{ fontFamily: "'Product Sans', sans-serif" }}>
              Quick answers
            </h2>
            <div className="flex flex-col divide-y divide-white/6 border-t border-white/6">
              {FAQS.map((faq) => (
                <div key={faq.q} className="py-7 flex flex-col gap-3">
                  <h3 className="text-sm font-bold text-white">{faq.q}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact support */}
        <section className="py-24 px-6">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-6">
            <h2 className="text-4xl font-black tracking-tight" style={{ fontFamily: "'Product Sans', sans-serif" }}>
              Still need help?
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our support team reads every message. We aim to respond within 24 hours.
            </p>
            <a
              href="mailto:support@dhabli.com"
              className="px-10 py-3 bg-white text-black text-sm font-bold hover:bg-gray-100 transition-colors"
            >
              Contact support
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

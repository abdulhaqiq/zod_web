import type { Metadata } from "next";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on AI, dating, relationships, and building Zod — coming soon.",
};

const UPCOMING = [
  {
    category: "Company",
    title: "Why we built Zod the way we built it",
    teaser: "The decisions that shaped the product — and the mistakes that made us smarter.",
  },
  {
    category: "Science",
    title: "What compatibility actually means, according to the research",
    teaser: "We spent months reading relationship science before writing a line of code. Here is what we found.",
  },
  {
    category: "Product",
    title: "Building a dating app without a human team",
    teaser: "What it actually looks like to run a consumer product entirely through AI systems.",
  },
  {
    category: "Opinion",
    title: "Dating apps are broken. Here is exactly why.",
    teaser: "A honest breakdown of the incentive structures that make most apps work against their own users.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="bg-black text-white min-h-screen">

        {/* Header */}
        <section className="pt-40 pb-20 px-6 border-b border-white/6 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.05]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative max-w-5xl mx-auto">
            <span className="inline-block px-3 py-1 text-[10px] tracking-widest uppercase text-gray-500 border border-white/10 mb-8">
              The Zod Journal
            </span>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
              <h1
                className="text-5xl sm:text-6xl font-black leading-tight tracking-tight"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                Writing about<br />what we&apos;re building.
              </h1>
              <div className="flex flex-col gap-2 sm:items-end">
                <span className="inline-flex items-center gap-2 text-[10px] px-3 py-1.5 border border-amber-900/60 bg-amber-950 text-amber-500 uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
                  Coming soon
                </span>
                <p className="text-xs text-gray-600 max-w-[200px] sm:text-right leading-relaxed">
                  We launched in 2026. The blog is next.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* No posts yet */}
        <section className="py-24 px-6 border-b border-white/6">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
            <div className="w-16 h-16 flex items-center justify-center border border-white/10 text-gray-700">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <h2
              className="text-3xl font-black tracking-tight"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              No posts yet.
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-md">
              We only launched in 2026. The first articles are being written now. Check back soon — or subscribe below to get notified when we publish.
            </p>
            <form className="flex gap-0 w-full max-w-sm">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent border border-white/15 border-r-0 px-4 py-3 text-sm text-white placeholder:text-gray-700 focus:outline-none focus:border-white/30 transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-white text-black text-xs font-bold hover:bg-gray-100 transition-colors whitespace-nowrap border border-white"
              >
                Notify me
              </button>
            </form>
          </div>
        </section>

        {/* What's coming */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10">
              <p className="text-[10px] tracking-widest uppercase text-gray-600 mb-3">Coming Soon</p>
              <h2
                className="text-4xl font-black tracking-tight"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                What we&apos;re writing
              </h2>
            </div>
            <div className="flex flex-col divide-y divide-white/6 border-t border-white/6">
              {UPCOMING.map((post) => (
                <div
                  key={post.title}
                  className="py-8 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 opacity-50"
                >
                  <span className="text-[9px] px-2 py-0.5 border border-white/10 text-gray-600 uppercase tracking-wider self-start flex-shrink-0 mt-0.5">
                    {post.category}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-sm font-bold text-white leading-snug">{post.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{post.teaser}</p>
                  </div>
                  <span className="text-[10px] text-gray-700 sm:ml-auto flex-shrink-0 self-start">Draft</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

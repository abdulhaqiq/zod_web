import BorderGlow from "@/components/BorderGlow";

const POSTS = [
  {
    category: "Relationship Science",
    title: "Why 94% of Zod matches actually lead to conversations",
    excerpt: "Most dating apps optimise for time-on-app. We optimised for what happens after you match. Here is what the data shows.",
    image: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=700&q=80",
    date: "Mar 10, 2025",
    readTime: "5 min read",
  },
  {
    category: "Dating Tips",
    title: "The science of a first message that always gets a reply",
    excerpt: "We analysed 2 million opening messages. These are the patterns that consistently lead to long conversations.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80",
    date: "Feb 28, 2025",
    readTime: "4 min read",
  },
  {
    category: "Safety",
    title: "How Zod detects and removes fake profiles in under 3 minutes",
    excerpt: "A look inside our AI safety system and why it catches 99.3% of scam accounts before you ever see them.",
    image: "https://images.unsplash.com/photo-1502767089517-4cd95dfc8d25?w=700&q=80",
    date: "Feb 14, 2025",
    readTime: "6 min read",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 flex items-end justify-between">
          <div>
            <span className="inline-block mb-4 px-3 py-1 text-xs tracking-widest uppercase text-gray-500 border border-white/10">
              Blog
            </span>
            <h2
              className="text-4xl font-black text-white leading-tight"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              From our team.
            </h2>
          </div>
          <a
            href="#blog"
            className="hidden sm:flex items-center gap-1.5 text-sm text-gray-500 hover:text-white transition-colors"
          >
            View all articles
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/8">
          {POSTS.map((p, i) => (
            <BorderGlow key={i} animated backgroundColor="#0d0d0d" borderRadius={0} glowIntensity={0.9}>
              <article className="flex flex-col border-r border-white/8 last:border-r-0 h-full">
                <div className="w-full h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <span className="self-start px-2.5 py-0.5 text-[10px] text-gray-500 border border-white/8 uppercase tracking-wider">
                    {p.category}
                  </span>
                  <h3 className="text-sm font-bold text-white leading-snug">{p.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{p.excerpt}</p>
                  <div className="flex items-center justify-between pt-1 mt-auto">
                    <span className="text-xs text-gray-600">{p.date} &middot; {p.readTime}</span>
                    <a
                      href="#blog"
                      className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-white border border-white/10 hover:border-white/25 transition-colors"
                      aria-label={`Read: ${p.title}`}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}

import BorderGlow from "@/components/BorderGlow";

const STORIES = [
  {
    image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80",
    names: "Priya & Rajan",
    location: "Mumbai, India",
    matched: "March 2025",
    quote: "We matched on a Tuesday. By Saturday we had our first date. Eight months later we moved in together. Zod&apos;s score said 98% — I believe it.",
    status: "Engaged",
  },
  {
    image: "https://i.ibb.co/RG2VNfSg/2149488154.jpg",
    names: "Emma & Luca",
    location: "London, UK",
    matched: "January 2025",
    quote: "I had deleted three other apps before Zod. The difference? Every person I matched with actually wanted what I wanted. No games.",
    status: "Dating 10 months",
  },
  {
    image: "https://i.ibb.co/202kTQgn/2150890262.jpg",
    names: "Aisha & Omar",
    location: "Dubai, UAE",
    matched: "November 2024",
    quote: "Zod understood what mattered to us. The match felt right from the first conversation. We knew within weeks this was something real.",
    status: "Married",
  },
];

export default function Stories() {
  return (
    <section id="stories" className="py-24 px-6" style={{ background: "#080808" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="inline-block mb-4 px-3 py-1 text-xs tracking-widest uppercase text-gray-500 border border-white/10">
              Success Stories
            </span>
            <h2
              className="text-4xl font-black text-white leading-tight"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              Real couples.<br />Real connections.
            </h2>
          </div>
          <a
            href="#download"
            className="self-start sm:self-auto text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-1.5"
          >
            Read more stories
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/8">
          {STORIES.map((s, i) => (
            <BorderGlow key={i} animated backgroundColor="#0d0d0d" borderRadius={0} glowIntensity={0.85}>
              <div className="flex flex-col border-r border-white/8 last:border-r-0 h-full">
                {/* Image */}
                <div className="w-full h-48 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt={`${s.names} — couple who met on Zod`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-6 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-bold text-white">{s.names}</p>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                        </svg>
                        {s.location}
                      </p>
                    </div>
                    <span className="px-2 py-0.5 text-[10px] text-white bg-white/10 border border-white/12">
                      {s.status}
                    </span>
                  </div>

                  <p
                    className="text-sm text-gray-400 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: `"${s.quote}"` }}
                  />

                  <p className="text-xs text-gray-600 mt-auto">Matched {s.matched}</p>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Ic } from "./shared";

const FEATURES = [
  {
    num: "01",
    icon: <Ic.Brain s={22} />,
    title: "AI Compatibility Engine",
    body: "200+ signals — shared values, communication style, attachment type — analysed in milliseconds to surface your most compatible matches.",
    size: "large",
    accent: "text-white",
  },
  {
    num: "02",
    icon: <Ic.Shield s={22} />,
    title: "100% Verified Profiles",
    body: "Photo verification and optional ID check. Every profile you see belongs to a real person. Zero catfishing, guaranteed.",
    size: "medium",
    accent: "text-white",
  },
  {
    num: "03",
    icon: <Ic.Cards s={22} />,
    title: "Smart Swipe Cards",
    body: "Cards ranked by your compatibility score, not who paid to appear first. The best match is always at the top.",
    size: "medium",
    accent: "text-white",
  },
  {
    num: "04",
    icon: <Ic.Chat s={22} />,
    title: "Ice-Breaker AI",
    body: "Zod writes a personalised first message based on both profiles. Never stare at a blank text box again.",
    size: "medium",
    accent: "text-white",
  },
  {
    num: "05",
    icon: <Ic.Eye s={22} />,
    title: "Incognito Mode",
    body: "Browse invisibly. Only reveal yourself to people you choose to like. Full control over your visibility.",
    size: "medium",
    accent: "text-white",
  },
  {
    num: "06",
    icon: <Ic.Lock s={22} />,
    title: "End-to-End Encrypted Chats",
    body: "Your private messages are fully encrypted. Zod staff cannot read them. Not ever.",
    size: "medium",
    accent: "text-white",
  },
  {
    num: "07",
    icon: <Ic.Globe s={22} />,
    title: "Worldwide Dating",
    body: "Available worldwide. Whether you are travelling, relocating, or open to a long-distance connection.",
    size: "wide",
    accent: "text-white",
  },
];

export default function Features() {
  const [large, ...rest] = FEATURES;

  return (
    <section id="features" className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 border-b border-white/8 pb-10">
          <div className="flex flex-col gap-3">
            <span className="self-start px-3 py-1 text-xs tracking-widest uppercase text-gray-500 border border-white/10">
              Features
            </span>
            <h2
              className="text-4xl sm:text-5xl font-black text-white leading-tight"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              What makes Zod different.
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-[220px] leading-relaxed sm:text-right flex-shrink-0">
            Not built to keep you swiping — built to help you stop.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/6">

          {/* 01 — Large hero card (spans 2 cols on lg) */}
          <div className="group relative lg:col-span-2 bg-black p-8 sm:p-10 flex flex-col justify-between min-h-[280px] overflow-hidden hover:bg-white/[0.03] transition-colors cursor-default">
            <span
              className="absolute -right-4 -top-6 text-[160px] font-black text-white/[0.03] leading-none select-none pointer-events-none"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              {large.num}
            </span>
            <div className="flex items-start justify-between">
              <div className="w-11 h-11 flex items-center justify-center border border-white/10 text-gray-500 group-hover:text-white group-hover:border-white/25 transition-colors">
                {large.icon}
              </div>
              <span className="text-xs font-mono text-gray-700">{large.num}</span>
            </div>
            <div className="flex flex-col gap-2 mt-auto pt-10">
              <h3
                className="text-2xl font-black text-white"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                {large.title}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed max-w-sm">
                {large.body}
              </p>
            </div>
          </div>

          {/* 02 — Tall single col */}
          <FeatureCard feature={rest[0]} tall />

          {/* 03 & 04 — Standard cards */}
          <FeatureCard feature={rest[1]} />
          <FeatureCard feature={rest[2]} />

          {/* 05 — Standard */}
          <FeatureCard feature={rest[3]} />

          {/* 06 — Standard */}
          <FeatureCard feature={rest[4]} />

          {/* 07 — Wide card spans 2 cols on lg */}
          <div className="group relative lg:col-span-2 bg-black p-8 flex flex-col sm:flex-row sm:items-center gap-6 overflow-hidden hover:bg-white/[0.03] transition-colors cursor-default">
            <span
              className="absolute -right-4 -bottom-6 text-[140px] font-black text-white/[0.03] leading-none select-none pointer-events-none"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              {rest[5].num}
            </span>
            <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center border border-white/10 text-gray-500 group-hover:text-white group-hover:border-white/25 transition-colors">
              {rest[5].icon}
            </div>
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-mono text-gray-700">{rest[5].num}</span>
              <h3
                className="text-lg font-black text-white"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                {rest[5].title}
              </h3>
            </div>
            <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed sm:ml-auto sm:max-w-xs sm:text-right">
              {rest[5].body}
            </p>
          </div>


        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  tall,
}: {
  feature: (typeof FEATURES)[number];
  tall?: boolean;
}) {
  return (
    <div
      className={`group relative bg-black p-7 flex flex-col justify-between overflow-hidden hover:bg-white/[0.03] transition-colors cursor-default ${
        tall ? "min-h-[280px]" : "min-h-[200px]"
      }`}
    >
      <span
        className="absolute -right-3 -top-4 text-[130px] font-black text-white/[0.03] leading-none select-none pointer-events-none"
        style={{ fontFamily: "'Product Sans', sans-serif" }}
      >
        {feature.num}
      </span>
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 flex items-center justify-center border border-white/10 text-gray-500 group-hover:text-white group-hover:border-white/25 transition-colors">
          {feature.icon}
        </div>
        <span className="text-xs font-mono text-gray-700">{feature.num}</span>
      </div>
      <div className="flex flex-col gap-2 pt-8">
        <h3
          className="text-base font-black text-white leading-snug"
          style={{ fontFamily: "'Product Sans', sans-serif" }}
        >
          {feature.title}
        </h3>
        <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
          {feature.body}
        </p>
      </div>
    </div>
  );
}

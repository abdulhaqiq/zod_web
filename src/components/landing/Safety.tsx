import { Ic } from "./shared";
import BorderGlow from "@/components/BorderGlow";

const PILLARS = [
  {
    icon: <Ic.Camera s={20} />,
    title: "AI Photo Verification",
    body: "Every new profile is checked by our AI to confirm real, current photos. Blurred, stolen, or fake images are auto-rejected.",
    stat: "0 fake photos pass",
  },
  {
    icon: <Ic.Shield s={20} />,
    title: "ID Verification (Optional)",
    body: "Opt-in identity check powered by government ID. Adds a blue verified badge — trusted by your matches.",
    stat: "1k+ verified users",
  },
  {
    icon: <Ic.Eye s={20} />,
    title: "24/7 Human Moderation",
    body: "Our safety team operates around the clock. Reports are reviewed within minutes, not days.",
    stat: "< 5 min response time",
  },
  {
    icon: <Ic.Lock s={20} />,
    title: "End-to-End Encryption",
    body: "All messages are fully encrypted. Zod staff cannot read your conversations. Not ever.",
    stat: "Zero access policy",
  },
  {
    icon: <Ic.User s={20} />,
    title: "Block & Report — One Tap",
    body: "Feel unsafe? Block, report, or unmatch any user instantly. We act on every report.",
    stat: "100% action rate",
  },
  {
    icon: <Ic.Zap s={20} />,
    title: "Anti-Scam Engine",
    body: "Machine learning detects romance scam patterns — unusual message frequency, scripted language, and link sharing — in real time.",
    stat: "99.3% scam detection",
  },
];

export default function Safety() {
  return (
    <section id="safety" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="inline-block mb-4 px-3 py-1 text-xs tracking-widest uppercase text-gray-500 border border-white/10">
              Safety First
            </span>
            <h2
              className="text-4xl font-black text-white leading-tight max-w-sm"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              We take your safety seriously.
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
            Dating should feel exciting, not risky. Every Zod feature is built with your safety as the first requirement.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/8">
          {PILLARS.map((p, i) => (
            <BorderGlow key={i} backgroundColor="#0a0a0a" borderRadius={0} animated={false}>
              <div className="flex flex-col gap-4 p-6 border-r border-b border-white/6 group cursor-default h-full"
                style={{
                  borderRight: (i + 1) % 3 === 0 ? "none" : undefined,
                  borderBottom: i >= PILLARS.length - 3 ? "none" : undefined,
                }}
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 flex items-center justify-center text-gray-400 border border-white/10 group-hover:border-white/20 transition-colors">
                    {p.icon}
                  </div>
                  <span className="px-2.5 py-1 text-[10px] text-gray-500 border border-white/8">
                    {p.stat}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1.5">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.body}</p>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}

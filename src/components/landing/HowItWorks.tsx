import { Ic } from "./shared";
import BorderGlow from "@/components/BorderGlow";

const STEPS = [
  {
    num: "01",
    icon: <Ic.User s={22} />,
    title: "Build your profile",
    body: "Answer 12 quick questions about your personality, values, and what you are looking for. Takes under 3 minutes.",
  },
  {
    num: "02",
    icon: <Ic.Brain s={22} />,
    title: "AI finds your matches",
    body: "Our engine analyses 200+ compatibility dimensions and surfaces your top daily picks — no endless swiping needed.",
  },
  {
    num: "03",
    icon: <Ic.Heart s={22} />,
    title: "Start real conversations",
    body: "Zod's AI suggests a personalised ice-breaker for every match. Say hello, meet up, and build something real.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6" style={{ background: "#080808" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="inline-block mb-4 px-3 py-1 text-xs tracking-widest uppercase text-gray-500 border border-white/10">
              How It Works
            </span>
            <h2
              className="text-4xl font-black text-white leading-tight"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              From sign-up to<br />first date in days.
            </h2>
          </div>
          <a
            href="#download"
            className="self-start sm:self-auto flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white border border-white/15 hover:border-white/30 transition-colors"
          >
            Get started free
            <Ic.Arrow s={13} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/8">
          {STEPS.map((s, i) => (
            <BorderGlow key={i} backgroundColor="#0d0d0d" borderRadius={0} animated={false}>
              <div
                className="relative p-8 group cursor-default h-full border-r border-white/8 last:border-r-0"
              >
                {/* Step number — top-left corner badge */}
                <div
                  className="absolute top-0 left-0 w-9 h-9 flex items-center justify-center text-xs font-bold"
                  style={{
                    background: i === 0 ? "#fff" : i === 1 ? "#555" : "#333",
                    color: i === 0 ? "#000" : "#fff",
                  }}
                >
                  {s.num}
                </div>

                <div className="w-12 h-12 flex items-center justify-center text-gray-400 border border-white/10 mb-8 mt-4">
                  {s.icon}
                </div>

                <h3
                  className="text-lg font-bold text-white mb-3"
                  style={{ fontFamily: "'Product Sans', sans-serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
}

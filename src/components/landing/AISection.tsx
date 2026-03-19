import { Ic } from "./shared";
import BorderGlow from "@/components/BorderGlow";

const DIMENSIONS = [
  "Values alignment", "Love language", "Lifestyle pace", "Humor style",
  "Conflict resolution", "Family goals", "Communication mode", "Financial habits",
  "Ambition level", "Introvert/Extrovert", "Physical activity", "Spirituality",
];

export default function AISection() {
  return (
    <section id="ai-matching" className="py-24 px-6 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-0 border border-white/8">
          {/* Left — visual */}
          <BorderGlow backgroundColor="#0a0a0a" borderRadius={0} animated={false}>
            <div
              className="relative flex flex-col items-center justify-center gap-6 p-12 lg:w-80 xl:w-96 border-r border-white/8"
            >
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div
                  className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-5"
                  style={{ background: "radial-gradient(circle, white 0%, transparent 70%)" }}
                />
              </div>
              <p className="text-xs text-gray-500 tracking-widest uppercase">AI Match Score</p>
              <p
                className="text-8xl font-black text-white leading-none"
                style={{ fontFamily: "'Product Sans', sans-serif" }}
              >
                94<span className="text-gray-500 text-5xl">%</span>
              </p>
              <p className="text-sm text-gray-400 text-center max-w-[200px]">
                Average compatibility accuracy across verified couples
              </p>

              {/* Pill tags */}
              <div className="flex flex-wrap gap-2 justify-center">
                {DIMENSIONS.slice(0, 6).map((d) => (
                  <span
                    key={d}
                    className="px-2.5 py-1 text-xs text-gray-400 border border-white/10"
                  >
                    {d}
                  </span>
                ))}
                <span className="px-2.5 py-1 text-xs text-gray-600 border border-white/6">
                  +194 more
                </span>
              </div>
            </div>
          </BorderGlow>

          {/* Right — copy */}
          <div className="flex flex-col gap-7 p-10 flex-1 justify-center">
            <span className="self-start px-3 py-1 text-xs tracking-widest uppercase text-gray-500 border border-white/10">
              AI Matchmaking
            </span>
            <h2
              className="text-4xl font-black text-white leading-tight max-w-lg"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              We analyse 200+ signals so you don&apos;t have to guess.
            </h2>
            <p className="text-base text-gray-400 leading-relaxed max-w-md">
              Zod&apos;s compatibility engine draws from attachment theory, love languages,
              and behavioural psychology — refined on millions of verified real-world couples.
            </p>

            <div className="flex flex-col gap-0 border border-white/8">
              {[
                { icon: <Ic.Brain s={16} />, title: "Deep compatibility profiling", body: "Beyond hobbies — values, goals, communication style, and more." },
                { icon: <Ic.Zap s={16} />, title: "Instant match ranking", body: "Every profile you see is ranked by your personal compatibility score." },
                { icon: <Ic.Stars s={16} />, title: "Learns as you interact", body: "The AI improves with every like, skip, and conversation you have." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 border-b border-white/6 last:border-b-0">
                  <div className="w-9 h-9 flex items-center justify-center text-gray-400 border border-white/10 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-gray-500 mt-0.5">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

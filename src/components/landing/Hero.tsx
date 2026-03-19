import { Ic } from "./shared";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex flex-col" aria-label="Hero">
      {/* Dot grid bg */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-16 flex flex-col lg:flex-row items-center gap-12 flex-1 w-full">
        {/* Left — copy */}
        <div className="flex-1 flex flex-col gap-7 max-w-xl">
          <span className="self-start px-3.5 py-1 text-xs font-medium text-gray-300 border border-white/15 tracking-widest uppercase">
            #1 AI Dating App 2026
          </span>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.02] tracking-tight"
            style={{ fontFamily: "'Product Sans', sans-serif" }}
          >
            The last dating app<br />
            <span className="text-gray-400">you&apos;ll ever need.</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-md">
            Stop swiping strangers. Start meeting people who actually fit your life —
            matched by AI, verified by us, chosen by you.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#download"
              className="flex items-center gap-2.5 px-5 py-3 text-sm font-medium bg-white text-black hover:bg-gray-100 transition-colors"
            >
              <Ic.Apple s={14} />
              App Store
            </a>
            <a
              href="#download"
              className="flex items-center gap-2.5 px-5 py-3 text-sm font-medium bg-white/8 border border-white/12 text-white hover:bg-white/12 transition-colors"
            >
              <Ic.Play s={14} />
              Google Play
            </a>
          </div>

          {/* Inline trust signals */}
          <div className="flex flex-wrap items-center gap-5 pt-2">
            {[
              { value: "2k+", label: "Downloads" },
              { value: "200+", label: "Active users" },
              { value: "10+", label: "Nationalities" },
              { value: "1k+", label: "AI analyses" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col">
                <span className="text-xl font-black text-white" style={{ fontFamily: "'Product Sans', sans-serif" }}>
                  {s.value}
                </span>
                <span className="text-xs text-gray-500">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — editorial image grid */}
        <div className="flex-1 flex gap-3 h-[520px] max-w-xl w-full">
          {/* Tall image */}
          <div className="flex-[1.1] relative overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://i.ibb.co/rKrYRDZs/15003.jpg"
              alt="Happy couple who met on Zod dating app"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {/* Match card */}
            <div
              className="absolute bottom-5 left-4 right-4 flex items-center gap-3 px-4 py-3 border border-white/15"
              style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(14px)" }}
            >
              <div className="w-8 h-8 flex items-center justify-center bg-white/15 flex-shrink-0">
                <Ic.Heart s={14} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-white">New match!</p>
                <p className="text-xs text-gray-400 truncate">Sofia &amp; Marco — 97% compatible</p>
              </div>
            </div>
          </div>

          {/* Two stacked images */}
          <div className="flex flex-col gap-3 flex-1">
            <div className="flex-1 relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
              src="https://i.ibb.co/rfNB2yvP/5069.jpg"
              alt="Couple on a date connected through Zod"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
            </div>
            <div className="flex-1 relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
              src="https://i.ibb.co/7N6YZfW2/3559.jpg"
              alt="Real connection and relationship built on Zod"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
              {/* Rating badge */}
              <div
                className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-3 py-2 border border-white/12"
                style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(12px)" }}
              >
                <span className="text-xs text-gray-300">End-to-end encrypted</span>
                <div className="flex items-center gap-1">
                  <span className="text-xs font-bold text-white">Always</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

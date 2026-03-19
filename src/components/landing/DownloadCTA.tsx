import { Ic } from "./shared";
import BorderGlow from "@/components/BorderGlow";

export default function DownloadCTA() {
  return (
    <section
      id="download"
      className="py-32 px-6 bg-black relative overflow-hidden"
      aria-label="Download Zod"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Radial fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 40%, #000 100%)" }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
        <span className="px-3 py-1 text-xs tracking-widest uppercase text-gray-500 border border-white/10">
          Download Zod
        </span>

        <div className="flex flex-wrap justify-center gap-0 border border-white/15">
          <BorderGlow backgroundColor="#000000" borderRadius={0} animated>
            <a
              href="#"
              className="flex items-center gap-3 px-8 py-4 text-white hover:bg-white/5 transition-colors border-r border-white/10"
            >
              <Ic.Apple s={18} />
              <div className="text-left">
                <p className="text-[10px] opacity-60 leading-none">Download on the</p>
                <p className="text-sm font-bold leading-tight">App Store</p>
              </div>
            </a>
          </BorderGlow>
          <BorderGlow backgroundColor="#000000" borderRadius={0} animated>
            <a
              href="#"
              className="flex items-center gap-3 px-8 py-4 text-white hover:bg-white/5 transition-colors"
            >
              <Ic.Play s={18} />
              <div className="text-left">
                <p className="text-[10px] opacity-50 leading-none">Get it on</p>
                <p className="text-sm font-bold leading-tight">Google Play</p>
              </div>
            </a>
          </BorderGlow>
        </div>

        <div className="flex items-center gap-8 pt-2">
          {[
            { v: "4.9", l: "App Store" },
            { v: "4.8", l: "Google Play" },
            { v: "4M+", l: "Downloads" },
          ].map((s) => (
            <div key={s.l} className="flex flex-col items-center gap-0.5">
              <span className="text-base font-black text-white" style={{ fontFamily: "'Product Sans', sans-serif" }}>{s.v}</span>
              <span className="text-xs text-gray-600">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

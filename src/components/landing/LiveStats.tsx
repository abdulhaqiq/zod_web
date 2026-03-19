"use client";
import { useState, useEffect } from "react";
import { Ic } from "./shared";
import BorderGlow from "@/components/BorderGlow";

const TICKERS = [
  "Sofia & Marco matched in Milan",
  "Priya & Raj matched in Mumbai",
  "Emma & Luca matched in London",
  "Yuki & Kenji matched in Tokyo",
  "Aisha & Omar matched in Dubai",
  "Claire & Ethan matched in Paris",
  "Mia & Daniel matched in Berlin",
  "Zara & Arjun matched in Sydney",
  "Nora & Felix matched in Amsterdam",
  "Luna & Carlos matched in Barcelona",
  "Grace & James matched in New York",
  "Hana & David matched in Seoul",
];

const STATS = [
  { value: "2,847", label: "Matches today", icon: <Ic.Heart s={16} /> },
  { value: "120+", label: "Countries active", icon: <Ic.Globe s={16} /> },
  { value: "4M+", label: "Total downloads", icon: <Ic.User s={16} /> },
  { value: "94%", label: "Match accuracy", icon: <Ic.Zap s={16} /> },
];

export default function LiveStats() {
  const [count, setCount] = useState(2847);

  useEffect(() => {
    const iv = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3 + 1));
    }, 4000);
    return () => clearInterval(iv);
  }, []);

  return (
    <section className="bg-black border-y border-white/8">
      {/* Ticker */}
      <div className="overflow-hidden py-3 border-b border-white/6 relative">
        <div className="flex gap-0 animate-[marquee_40s_linear_infinite] whitespace-nowrap">
          {[...TICKERS, ...TICKERS].map((t, i) => (
            <span key={i} className="flex items-center gap-4 text-xs text-gray-500 px-8 shrink-0">
              <span
                className="w-1.5 h-1.5 rounded-full bg-white/40 inline-block shrink-0"
                style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
              />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-0 border-x border-white/4">
        {STATS.map((s, i) => (
          <BorderGlow key={i} backgroundColor="#000000" borderRadius={0} animated={false}>
            <div className="flex items-center gap-3 p-5 border-r border-white/6 last:border-r-0 group cursor-default h-full">
              <div className="w-9 h-9 flex items-center justify-center text-gray-400 border border-white/10 flex-shrink-0">
                {s.icon}
              </div>
              <div>
                <p
                  className="text-xl font-black text-white leading-none"
                  style={{ fontFamily: "'Product Sans', sans-serif" }}
                >
                  {i === 0 ? count.toLocaleString() : s.value}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
              </div>
            </div>
          </BorderGlow>
        ))}
      </div>
    </section>
  );
}

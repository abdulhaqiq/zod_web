"use client";
import { useState } from "react";
import { Ic } from "./shared";
import BorderGlow from "@/components/BorderGlow";

const FREE_FEATURES = [
  "Up to 10 daily AI picks",
  "Basic compatibility score",
  "Text messaging",
  "Photo verification",
  "Block & report",
];

const PRO_FEATURES = [
  "Unlimited daily AI picks",
  "Full 200-signal compatibility breakdown",
  "AI ice-breaker suggestions",
  "Incognito browse mode",
  "See who liked you",
  "Profile boost (1x weekly)",
  "Read receipts",
  "Priority support",
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="py-24 px-6" style={{ background: "#080808" }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="inline-block mb-4 px-3 py-1 text-xs tracking-widest uppercase text-gray-500 border border-white/10">
            Pricing
          </span>
          <h2
            className="text-4xl font-black text-white leading-tight"
            style={{ fontFamily: "'Product Sans', sans-serif" }}
          >
            Start free. Upgrade anytime.
          </h2>
          <p className="text-sm text-gray-500 mt-3">No hidden fees. Cancel any time.</p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm ${!annual ? "text-white" : "text-gray-600"}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-12 h-6 border border-white/15 transition-colors"
              style={{ background: annual ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.05)" }}
              aria-label="Toggle billing period"
            >
              <span
                className="absolute top-0.5 w-5 h-5 bg-white transition-all"
                style={{ left: annual ? "calc(100% - 22px)" : "2px" }}
              />
            </button>
            <span className={`text-sm flex items-center gap-1.5 ${annual ? "text-white" : "text-gray-600"}`}>
              Annual
              <span className="px-1.5 py-0.5 text-[10px] font-medium text-black bg-white">
                Save 40%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/8">
          {/* Free */}
          <BorderGlow backgroundColor="#0a0a0a" borderRadius={0}>
            <div className="flex flex-col gap-6 p-8 border-r border-white/8">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Free</p>
                <p className="text-4xl font-black text-white" style={{ fontFamily: "'Product Sans', sans-serif" }}>
                  $0
                </p>
                <p className="text-xs text-gray-600 mt-1">Forever free</p>
              </div>

              <a
                href="#download"
                className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-white border border-white/20 hover:border-white/40 transition-colors"
              >
                Get started
                <Ic.Arrow s={13} />
              </a>

              <ul className="flex flex-col gap-3">
                {FREE_FEATURES.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400">
                    <span className="mt-0.5 text-gray-500"><Ic.Check s={11} /></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </BorderGlow>

          {/* Pro */}
          <div className="flex flex-col gap-6 p-8 bg-white border border-white/20">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-black/50 uppercase tracking-widest mb-2">Pro</p>
                <p className="text-4xl font-black text-black" style={{ fontFamily: "'Product Sans', sans-serif" }}>
                  {annual ? "$9" : "$15"}
                  <span className="text-lg text-black/40 font-medium">/mo</span>
                </p>
                <p className="text-xs text-black/40 mt-1">{annual ? "Billed $109/year" : "Billed monthly"}</p>
              </div>
              <span className="px-2.5 py-1 text-xs font-medium text-white bg-black">
                Most popular
              </span>
            </div>

            <a
              href="#download"
              className="flex items-center justify-center gap-2 py-3 text-sm font-medium text-white bg-black hover:bg-gray-900 transition-colors"
            >
              Start 7-day free trial
              <Ic.Arrow s={13} />
            </a>

            <ul className="flex flex-col gap-3">
              {PRO_FEATURES.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-black/70">
                  <span className="mt-0.5 text-black/50"><Ic.Check s={11} /></span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-xs text-gray-600 mt-8">
          7-day free trial on Pro. No credit card required. Cancel anytime from your account settings.
        </p>
      </div>
    </section>
  );
}

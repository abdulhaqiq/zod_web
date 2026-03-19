"use client";

import React, { useEffect, useRef, useState, useMemo, CSSProperties } from "react";

/* ── curve functions ──────────────────────────────────────────────────────── */
const CURVE: Record<string, (p: number) => number> = {
  linear:      p => p,
  bezier:      p => p * p * (3 - 2 * p),
  "ease-in":   p => p * p,
  "ease-out":  p => 1 - Math.pow(1 - p, 2),
  "ease-in-out": p => p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2,
};

const DIR: Record<string, string> = {
  top: "to top", bottom: "to bottom", left: "to left", right: "to right",
};

/* ── types ────────────────────────────────────────────────────────────────── */
interface GradualBlurProps {
  /** Which edge the blur fades toward */
  position?: "top" | "bottom" | "left" | "right";
  /** Max blur amount in rem */
  strength?: number;
  /** Height (or width for left/right) of the blur band */
  size?: string;
  /** Number of blur slices — more = smoother */
  divCount?: number;
  /** Use exponential blur curve instead of linear */
  exponential?: boolean;
  /** Curve function for progress */
  curve?: keyof typeof CURVE;
  /** Overall opacity of the blur overlay */
  opacity?: number;
  /** CSS z-index */
  zIndex?: number;
  /** Extra class on the container */
  className?: string;
  style?: CSSProperties;
}

/* ── component ────────────────────────────────────────────────────────────── */
function GradualBlur({
  position  = "bottom",
  strength  = 2,
  size      = "6rem",
  divCount  = 8,
  exponential = false,
  curve     = "ease-out",
  opacity   = 1,
  zIndex    = 10,
  className = "",
  style,
}: GradualBlurProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const blurDivs = useMemo(() => {
    const divs: React.ReactNode[] = [];
    const increment = 100 / divCount;
    const curveFn = CURVE[curve] ?? CURVE.linear;
    const dir = DIR[position] ?? "to bottom";

    for (let i = 1; i <= divCount; i++) {
      const progress = curveFn(i / divCount);

      const blurValue = exponential
        ? Math.pow(2, progress * 4) * 0.0625 * strength
        : 0.0625 * (progress * divCount + 1) * strength;

      const p1 = Math.round((increment * i - increment) * 10) / 10;
      const p2 = Math.round(increment * i * 10) / 10;
      const p3 = Math.round((increment * i + increment) * 10) / 10;
      const p4 = Math.round((increment * i + increment * 2) * 10) / 10;

      let gradient = `transparent ${p1}%, black ${p2}%`;
      if (p3 <= 100) gradient += `, black ${p3}%`;
      if (p4 <= 100) gradient += `, transparent ${p4}%`;

      const mask = `linear-gradient(${dir}, ${gradient})`;

      divs.push(
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            maskImage: mask,
            WebkitMaskImage: mask,
            backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
            WebkitBackdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
            opacity,
          }}
        />
      );
    }
    return divs;
  }, [position, strength, divCount, exponential, curve, opacity]);

  const isVertical   = position === "top"  || position === "bottom";
  const isHorizontal = position === "left" || position === "right";

  const containerStyle: CSSProperties = {
    position: "absolute",
    pointerEvents: "none",
    zIndex,
    opacity: mounted ? 1 : 0,
    transition: "opacity 0.3s ease-out",
    ...(isVertical   ? { height: size, width: "100%", [position]: 0, left: 0, right: 0 }  : {}),
    ...(isHorizontal ? { width: size, height: "100%", [position]: 0, top: 0, bottom: 0 }  : {}),
    ...style,
  };

  return (
    <div ref={containerRef} className={`gradual-blur-rb ${className}`} style={containerStyle}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {blurDivs}
      </div>
    </div>
  );
}

export default React.memo(GradualBlur);

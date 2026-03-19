"use client";

import { useRef, useCallback, useEffect, CSSProperties } from "react";

/* ── helpers ──────────────────────────────────────────────────────────────── */

function parseHSL(hslStr: string): { h: number; s: number; l: number } {
  const m = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  if (!m) return { h: 40, s: 80, l: 80 };
  return { h: parseFloat(m[1]), s: parseFloat(m[2]), l: parseFloat(m[3]) };
}

function buildGlowVars(glowColor: string, intensity: number): Record<string, string> {
  const { h, s, l } = parseHSL(glowColor);
  const base = `${h}deg ${s}% ${l}%`;
  const opacities = [100, 60, 50, 40, 30, 20, 10];
  const keys = ["", "-60", "-50", "-40", "-30", "-20", "-10"];
  const vars: Record<string, string> = {};
  for (let i = 0; i < opacities.length; i++) {
    vars[`--glow-color${keys[i]}`] = `hsl(${base} / ${Math.min(opacities[i] * intensity, 100)}%)`;
  }
  return vars;
}

const GRADIENT_POSITIONS = ["80% 55%","69% 34%","8% 6%","41% 38%","86% 85%","82% 18%","51% 4%"];
const GRADIENT_KEYS = ["--gradient-one","--gradient-two","--gradient-three","--gradient-four","--gradient-five","--gradient-six","--gradient-seven"];
const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1];

function buildGradientVars(colors: string[]): Record<string, string> {
  const vars: Record<string, string> = {};
  for (let i = 0; i < 7; i++) {
    const c = colors[Math.min(COLOR_MAP[i], colors.length - 1)];
    vars[GRADIENT_KEYS[i]] = `radial-gradient(at ${GRADIENT_POSITIONS[i]}, ${c} 0px, transparent 50%)`;
  }
  vars["--gradient-base"] = `linear-gradient(${colors[0]} 0 100%)`;
  return vars;
}

function easeOutCubic(x: number) { return 1 - Math.pow(1 - x, 3); }
function easeInCubic(x: number)  { return x * x * x; }

function animateValue({ start = 0, end = 100, duration = 1000, delay = 0, ease = easeOutCubic, onUpdate, onEnd }: {
  start?: number; end?: number; duration?: number; delay?: number;
  ease?: (t: number) => number;
  onUpdate: (v: number) => void;
  onEnd?: () => void;
}) {
  const go = () => {
    const t0 = performance.now();
    const tick = () => {
      const elapsed = performance.now() - t0;
      const t = Math.min(elapsed / duration, 1);
      onUpdate(start + (end - start) * ease(t));
      if (t < 1) requestAnimationFrame(tick);
      else if (onEnd) onEnd();
    };
    requestAnimationFrame(tick);
  };
  if (delay > 0) setTimeout(go, delay);
  else go();
}

/* ── props ────────────────────────────────────────────────────────────────── */

interface BorderGlowProps {
  children: React.ReactNode;
  className?: string;
  edgeSensitivity?: number;
  glowColor?: string;
  backgroundColor?: string;
  borderRadius?: number;
  glowRadius?: number;
  glowIntensity?: number;
  coneSpread?: number;
  animated?: boolean;
  colors?: [string, string, string];
  fillOpacity?: number;
  style?: CSSProperties;
}

/* ── component ────────────────────────────────────────────────────────────── */

export default function BorderGlow({
  children,
  className = "",
  edgeSensitivity = 30,
  glowColor = "0 0 100",
  backgroundColor = "#111111",
  borderRadius = 0,
  glowRadius = 40,
  glowIntensity = 1.0,
  coneSpread = 25,
  animated = false,
  colors = ["rgba(255,255,255,0.9)", "rgba(200,200,200,0.55)", "rgba(140,140,140,0.35)"],
  fillOpacity = 0.15,
  style,
}: BorderGlowProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const getCenter = useCallback((el: HTMLElement) => {
    const { width, height } = el.getBoundingClientRect();
    return [width / 2, height / 2];
  }, []);

  const getEdgeProximity = useCallback((el: HTMLElement, x: number, y: number) => {
    const [cx, cy] = getCenter(el);
    const dx = x - cx, dy = y - cy;
    let kx = Infinity, ky = Infinity;
    if (dx !== 0) kx = cx / Math.abs(dx);
    if (dy !== 0) ky = cy / Math.abs(dy);
    return Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);
  }, [getCenter]);

  const getCursorAngle = useCallback((el: HTMLElement, x: number, y: number) => {
    const [cx, cy] = getCenter(el);
    const dx = x - cx, dy = y - cy;
    if (dx === 0 && dy === 0) return 0;
    let degrees = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
    if (degrees < 0) degrees += 360;
    return degrees;
  }, [getCenter]);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--edge-proximity", `${(getEdgeProximity(card, x, y) * 100).toFixed(3)}`);
    card.style.setProperty("--cursor-angle",   `${getCursorAngle(card, x, y).toFixed(3)}deg`);
  }, [getEdgeProximity, getCursorAngle]);

  useEffect(() => {
    if (!animated || !cardRef.current) return;
    const card = cardRef.current;
    card.classList.add("sweep-active");
    card.style.setProperty("--cursor-angle", "110deg");
    animateValue({ duration: 500, onUpdate: v => card.style.setProperty("--edge-proximity", String(v)) });
    animateValue({ ease: easeInCubic, duration: 1500, end: 50, onUpdate: v => card.style.setProperty("--cursor-angle", `${355 * (v / 100) + 110}deg`) });
    animateValue({ ease: easeOutCubic, delay: 1500, duration: 2250, start: 50, end: 100, onUpdate: v => card.style.setProperty("--cursor-angle", `${355 * (v / 100) + 110}deg`) });
    animateValue({ ease: easeInCubic, delay: 2500, duration: 1500, start: 100, end: 0, onUpdate: v => card.style.setProperty("--edge-proximity", String(v)), onEnd: () => card.classList.remove("sweep-active") });
  }, [animated]);

  const glowVars = buildGlowVars(glowColor, glowIntensity);
  const gradientVars = buildGradientVars(colors);

  const inlineStyle: CSSProperties & Record<string, string | number> = {
    "--card-bg": backgroundColor,
    "--border-radius": `${borderRadius}px`,
    "--glow-padding": `${glowRadius}px`,
    "--cone-spread": String(coneSpread),
    "--edge-sensitivity": String(edgeSensitivity),
    "--fill-opacity": String(fillOpacity),
    ...glowVars,
    ...gradientVars,
    ...style,
  };

  return (
    <div
      ref={cardRef}
      className={`border-glow-card ${className}`}
      style={inlineStyle}
      onPointerMove={handlePointerMove}
    >
      <span className="edge-light" />
      <div className="border-glow-inner">{children}</div>
    </div>
  );
}

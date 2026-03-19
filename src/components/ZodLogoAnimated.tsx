"use client";
import { useEffect, useRef, useId } from "react";
import { gsap } from "gsap";

const PATH =
  "M416.61 587H0L316.527 17.5134C209.812 44.0854 88.0246 149.166 53.0559 227.07C15.6756 190.835 0 151.581 0 115.951C0 51.9362 51.8501 0 122.39 0H539L224.885 568.883C330.997 541.707 450.975 437.23 485.944 359.93C523.324 396.165 539 434.815 539 470.445C539 535.064 487.15 587 416.61 587Z";

export default function ZodLogoAnimated({ size = 36 }: { size?: number }) {
  const uid = useId().replace(/:/g, "");
  const clipId = `zclip-${uid}`;
  const glowId = `zglow-${uid}`;

  const clipRectRef = useRef<SVGRectElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const blurRef = useRef<SVGFEGaussianBlurElement>(null);

  const h = Math.round(size * (587 / 539));

  /* — mount: diagonal wipe reveal from top-left → bottom-right — */
  useEffect(() => {
    if (!clipRectRef.current || !pathRef.current) return;

    const ctx = gsap.context(() => {
      // 1. clip rect grows from 0 → full height
      gsap.fromTo(
        clipRectRef.current,
        { attr: { height: 0 } },
        {
          attr: { height: 587 },
          duration: 1,
          ease: "expo.out",
          delay: 0.05,
        }
      );

      // 2. path fades in and lifts very slightly
      gsap.fromTo(
        pathRef.current,
        { opacity: 0, y: 3 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.05 }
      );
    });

    return () => ctx.revert();
  }, []);

  /* — hover: soft glow pulse + micro-scale — */
  const handleEnter = () => {
    if (!pathRef.current || !blurRef.current) return;
    gsap.to(pathRef.current, {
      scale: 1.06,
      transformOrigin: "center center",
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(blurRef.current, {
      attr: { stdDeviation: 5 },
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    if (!pathRef.current || !blurRef.current) return;
    gsap.to(pathRef.current, {
      scale: 1,
      transformOrigin: "center center",
      duration: 0.35,
      ease: "power2.inOut",
    });
    gsap.to(blurRef.current, {
      attr: { stdDeviation: 0 },
      duration: 0.35,
      ease: "power2.inOut",
    });
  };

  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 539 587"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ overflow: "visible", cursor: "pointer" }}
    >
      <defs>
        {/* clip: reveals logo from top → bottom */}
        <clipPath id={clipId}>
          <rect ref={clipRectRef} x="-10" y="0" width="559" height="0" />
        </clipPath>

        {/* glow filter */}
        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur
            ref={blurRef}
            in="SourceGraphic"
            stdDeviation="0"
            result="blur"
          />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* rendered path — clipped + glow-filterable */}
      <path
        ref={pathRef}
        d={PATH}
        fill="currentColor"
        clipPath={`url(#${clipId})`}
        filter={`url(#${glowId})`}
        style={{ opacity: 0 }}
      />
    </svg>
  );
}

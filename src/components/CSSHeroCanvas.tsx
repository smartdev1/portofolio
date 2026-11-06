"use client";

import React, { useEffect, useRef, useState } from "react";

export const CSSHeroCanvas: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointer = (ex: number, ey: number) => {
      const x = (ex / window.innerWidth) * 2 - 1;
      const y = -(ey / window.innerHeight) * 2 + 1;
      setOffset((prev) => ({
        x: prev.x + (x * 18 - prev.x) * 0.08,
        y: prev.y + (y * 18 - prev.y) * 0.08,
      }));
    };

    let raf: number;
    let mx = 0;
    let my = 0;

    const onMouse = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const onTouch = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      mx = e.touches[0].clientX;
      my = e.touches[0].clientY;
    };

    const tick = () => {
      handlePointer(mx, my);
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden ${className}`}
      aria-hidden="true"
      style={{
        perspective: "1200px",
        perspectiveOrigin: "50% 50%",
      }}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateY(${offset.x * 0.6}deg) rotateX(${-offset.y * 0.6}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Shape 1: Torus-like ring (top-left) */}
        <div
          className="hero-shape absolute"
          style={{
            width: "160px",
            height: "160px",
            left: "8%",
            top: "18%",
            animation: "hero-spin-1 18s linear infinite",
            transformStyle: "preserve-3d",
          }}
        >
          <svg viewBox="0 0 160 160" className="w-full h-full">
            <defs>
              <linearGradient id="grad-torus" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className="hero-grad-start-slate" />
                <stop offset="100%" className="hero-grad-end-slate" />
              </linearGradient>
            </defs>
            <ellipse
              cx="80"
              cy="80"
              rx="65"
              ry="65"
              fill="none"
              stroke="url(#grad-torus)"
              strokeWidth="22"
              opacity="0.7"
            />
            <ellipse
              cx="80"
              cy="80"
              rx="45"
              ry="20"
              fill="none"
              stroke="url(#grad-torus)"
              strokeWidth="14"
              opacity="0.4"
              transform="rotate(-25 80 80)"
            />
          </svg>
        </div>

        {/* Shape 2: Octahedron / Diamond (right) */}
        <div
          className="hero-shape absolute"
          style={{
            width: "130px",
            height: "130px",
            right: "10%",
            top: "28%",
            animation: "hero-spin-2 14s linear infinite",
            transformStyle: "preserve-3d",
          }}
        >
          <svg viewBox="0 0 130 130" className="w-full h-full">
            <defs>
              <linearGradient id="grad-octa" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className="hero-grad-start-blue" />
                <stop offset="100%" className="hero-grad-end-blue" />
              </linearGradient>
            </defs>
            <polygon
              points="65,5 120,65 65,125 10,65"
              fill="url(#grad-octa)"
              opacity="0.6"
            />
            <polygon
              points="65,5 120,65 65,65"
              fill="url(#grad-octa)"
              opacity="0.35"
            />
            <line
              x1="65"
              y1="5"
              x2="65"
              y2="125"
              stroke="url(#grad-octa)"
              strokeWidth="1"
              opacity="0.3"
            />
            <line
              x1="10"
              y1="65"
              x2="120"
              y2="65"
              stroke="url(#grad-octa)"
              strokeWidth="1"
              opacity="0.3"
            />
          </svg>
        </div>

        {/* Shape 3: Icosahedron-like sphere (bottom-left) */}
        <div
          className="hero-shape absolute"
          style={{
            width: "120px",
            height: "120px",
            left: "12%",
            bottom: "20%",
            animation: "hero-spin-3 22s linear infinite",
            transformStyle: "preserve-3d",
          }}
        >
          <svg viewBox="0 0 120 120" className="w-full h-full">
            <defs>
              <radialGradient id="grad-ico" cx="40%" cy="35%">
                <stop offset="0%" stopColor="white" stopOpacity="0.9" />
                <stop offset="100%" className="hero-grad-end-light" />
              </radialGradient>
            </defs>
            <circle
              cx="60"
              cy="60"
              r="48"
              fill="url(#grad-ico)"
              opacity="0.55"
            />
            {/* Wireframe facets */}
            <polygon
              points="60,12 95,38 85,78 35,78 25,38"
              fill="none"
              className="hero-wireframe"
              strokeWidth="1.2"
              opacity="0.3"
            />
            <polygon
              points="60,12 95,38 60,55"
              fill="none"
              className="hero-wireframe"
              strokeWidth="0.8"
              opacity="0.2"
            />
            <polygon
              points="60,12 25,38 60,55"
              fill="none"
              className="hero-wireframe"
              strokeWidth="0.8"
              opacity="0.2"
            />
            <polygon
              points="85,78 35,78 60,55"
              fill="none"
              className="hero-wireframe"
              strokeWidth="0.8"
              opacity="0.2"
            />
          </svg>
        </div>

        {/* Shape 4: Hexagonal prism (top-right) */}
        <div
          className="hero-shape absolute"
          style={{
            width: "100px",
            height: "130px",
            right: "12%",
            top: "8%",
            animation: "hero-spin-4 16s linear infinite",
            transformStyle: "preserve-3d",
          }}
        >
          <svg viewBox="0 0 100 130" className="w-full h-full">
            <defs>
              <linearGradient id="grad-hex" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className="hero-grad-start-sky" />
                <stop offset="100%" className="hero-grad-end-sky" />
              </linearGradient>
            </defs>
            {/* Top hexagon */}
            <polygon
              points="50,10 85,25 85,55 50,70 15,55 15,25"
              fill="url(#grad-hex)"
              opacity="0.5"
            />
            {/* Side faces */}
            <polygon
              points="85,25 85,75 50,90 50,70"
              fill="url(#grad-hex)"
              opacity="0.35"
            />
            <polygon
              points="15,25 15,75 50,90 50,70"
              fill="url(#grad-hex)"
              opacity="0.25"
            />
            {/* Bottom edge */}
            <polygon
              points="50,90 85,75 85,55 50,70 15,55 15,75"
              fill="url(#grad-hex)"
              opacity="0.15"
            />
          </svg>
        </div>

        {/* Shape 5: Small floating dot cluster (ambient) */}
        <div
          className="hero-shape absolute"
          style={{
            width: "80px",
            height: "80px",
            left: "45%",
            bottom: "15%",
            animation: "hero-float 8s ease-in-out infinite",
          }}
        >
          <svg viewBox="0 0 80 80" className="w-full h-full">
            <circle cx="20" cy="30" r="4" className="hero-dot-primary" opacity="0.4" />
            <circle cx="55" cy="20" r="3" className="hero-dot-primary" opacity="0.3" />
            <circle cx="40" cy="55" r="5" className="hero-dot-secondary" opacity="0.35" />
            <circle cx="65" cy="50" r="3" className="hero-dot-secondary" opacity="0.25" />
          </svg>
        </div>
      </div>
    </div>
  );
};

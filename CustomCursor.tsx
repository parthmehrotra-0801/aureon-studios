import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
  animate?: boolean;
}

export const LogoIcon: React.FC<LogoProps> = ({ className = "", size = 48, animate = false }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} overflow-visible`}
    >
      <defs>
        <linearGradient id="chromeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="40%" stopColor="#E2E2E2" />
          <stop offset="70%" stopColor="#7E7E7E" />
          <stop offset="100%" stopColor="#FFFFFF" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background soft geometric ring */}
      <circle
        cx="50"
        cy="50"
        r="44"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeOpacity="0.15"
        strokeDasharray="4 4"
      />

      <g filter="url(#glow)" className="opacity-95">
        {/* The Outer Premium Hexagon/Octagon Frame */}
        <polygon
          points="50,12 83,31 83,69 50,88 17,69 17,31"
          stroke="url(#chromeGradient)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          className={animate ? "logo-path-frame" : ""}
          style={
            animate
              ? {
                  strokeDasharray: 400,
                  strokeDashoffset: 400,
                  animation: "drawPath 3.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
                }
              : undefined
          }
        />

        {/* The Sleek Central Intersecting 'A' monogram */}
        <path
          d="M32 72 L50 25 L68 72"
          stroke="url(#chromeGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={animate ? "logo-path-left-right" : ""}
          style={
            animate
              ? {
                  strokeDasharray: 200,
                  strokeDashoffset: 200,
                  animation: "drawPath 2.5s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards",
                }
              : undefined
          }
        />

        {/* Elegant horizontal bridge forming the monogram & abstract horizon */}
        <path
          d="M26 54 H74"
          stroke="url(#chromeGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className={animate ? "logo-path-bridge" : ""}
          style={
            animate
              ? {
                  strokeDasharray: 100,
                  strokeDashoffset: 100,
                  animation: "drawPath 2s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards",
                }
              : undefined
          }
        />

        {/* Abstract core element: a small precise floating diamond representing pure luxury & strategic node */}
        <polygon
          points="50,45 54,50 50,55 46,50"
          fill="url(#chromeGradient)"
          className={animate ? "logo-diamond" : ""}
          style={
            animate
              ? {
                  opacity: 0,
                  transformOrigin: "center",
                  animation: "fadeInScale 1.5s cubic-bezier(0.16, 1, 0.3, 1) 2s forwards",
                }
              : undefined
          }
        />
      </g>
    </svg>
  );
};

export const LogoFull: React.FC<LogoProps> = ({ className = "", size = 36, animate = false }) => {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <LogoIcon size={size} animate={animate} />
      <div className="flex flex-col select-none">
        <span className="font-display text-lg tracking-[0.35em] text-white font-bold leading-none">
          AUREON
        </span>
        <span className="font-mono text-[8px] tracking-[0.55em] text-[#B8B8B8] uppercase mt-1 leading-none">
          STUDIOS
        </span>
      </div>
    </div>
  );
};

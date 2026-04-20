import { useEffect, useState } from "react";

export default function Intro({ onDone }) {
  const [phase, setPhase] = useState(0);
  // phase 0: dark, car drives in
  // phase 1: logo reveal
  // phase 2: fade out

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1200);
    const t2 = setTimeout(() => setPhase(2), 2600);
    const t3 = setTimeout(() => onDone?.(), 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#000d0f] transition-opacity duration-700 ${
        phase === 2 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              width: Math.random() * 2.5 + 1 + "px",
              height: Math.random() * 2.5 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animationDuration: Math.random() * 3 + 1.5 + "s",
              animationDelay: Math.random() * 2 + "s",
              opacity: Math.random() * 0.7 + 0.1,
            }}
          />
        ))}
      </div>

      {/* Road line */}
      <div className="absolute bottom-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#07575B]/40 to-transparent" />
      <div className="absolute bottom-1/3 translate-y-8 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#07575B]/20 to-transparent" />

      {/* Car animation */}
      <div
        className="absolute"
        style={{
          bottom: "calc(33% + 10px)",
          left: 0,
          animation: "car-drive 1.1s cubic-bezier(0.22,1,0.36,1) forwards",
        }}
      >
        <div style={{ filter: "drop-shadow(0 0 20px #66A5AD88)" }}>
          <svg width="180" height="70" viewBox="0 0 200 80" fill="none">
            {/* Body */}
            <rect x="20" y="30" width="160" height="30" rx="8" fill="#07575B" />
            <path d="M60 30 Q80 10 120 10 Q150 10 170 30Z" fill="#003B46" />
            {/* Windows */}
            <path d="M65 28 Q80 15 110 15 Q130 15 145 28Z" fill="#66A5AD" opacity="0.7" />
            <line x1="110" y1="15" x2="110" y2="28" stroke="#C4DFE6" strokeWidth="1" opacity="0.5" />
            {/* Headlight glow */}
            <ellipse cx="175" cy="45" rx="10" ry="6" fill="#C4DFE6" opacity="0.3" />
            <circle cx="178" cy="45" r="4" fill="#C4DFE6" opacity="0.9" />
            <rect x="178" y="43" width="20" height="4" fill="url(#beam)" opacity="0.5" rx="2" />
            <defs>
              <linearGradient id="beam" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#C4DFE6" stopOpacity="0.7" />
                <stop offset="1" stopColor="#C4DFE6" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Tail */}
            <circle cx="28" cy="45" r="3" fill="#ff4444" opacity="0.8" />
            {/* Wheels */}
            <circle cx="55" cy="62" r="12" fill="#001f24" stroke="#66A5AD" strokeWidth="2" />
            <circle cx="55" cy="62" r="6" fill="#07575B" />
            <circle cx="145" cy="62" r="12" fill="#001f24" stroke="#66A5AD" strokeWidth="2" />
            <circle cx="145" cy="62" r="6" fill="#07575B" />
            {/* Details */}
            <rect x="28" y="42" width="12" height="4" rx="2" fill="#07575B" />
          </svg>
        </div>
      </div>

      {/* Logo reveal */}
      <div
        className="relative z-10 text-center"
        style={{
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
          transition: "all 0.8s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#66A5AD] to-[#07575B] flex items-center justify-center shadow-[0_0_40px_rgba(102,165,173,0.7)]">
            <svg viewBox="0 0 24 24" fill="white" className="w-9 h-9">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
            </svg>
          </div>
        </div>
        <h1 className="font-['Pirata_One'] text-5xl md:text-7xl text-white tracking-[0.1em]">
          Royal<span className="text-[#66A5AD]">Drive</span>
        </h1>
        <p className="mt-2 font-['Krona_One'] text-xs tracking-[0.4em] text-[#66A5AD]/80 uppercase">
          Drive the Extraordinary
        </p>
      </div>

      <style>{`
        @keyframes car-drive {
          0% { transform: translateX(-220px); }
          100% { transform: translateX(calc(50vw - 90px)); }
        }
      `}</style>
    </div>
  );
}
import { useMemo } from "react";

export default function Stars({ count = 60, className = "" }) {
  const stars = useMemo(() =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      size: Math.random() * 2.5 + 0.8,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 4 + 2,
      delay: Math.random() * 3,
      opacity: Math.random() * 0.6 + 0.1,
    })),
  [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white animate-pulse"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.left}%`,
            top: `${s.top}%`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            opacity: s.opacity,
          }}
        />
      ))}
      {/* Occasional glitter stars */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`glitter-${i}`}
          className="absolute text-[#C4DFE6]"
          style={{
            left: `${10 + i * 12}%`,
            top: `${5 + (i % 3) * 25}%`,
            animation: `glitter ${2 + i * 0.4}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
            fontSize: "10px",
            opacity: 0.4,
          }}
        >
          ✦
        </div>
      ))}
      <style>{`
        @keyframes glitter {
          0%, 100% { opacity: 0.1; transform: scale(0.8) rotate(0deg); }
          50% { opacity: 0.8; transform: scale(1.3) rotate(180deg); }
        }
      `}</style>
    </div>
  );
}
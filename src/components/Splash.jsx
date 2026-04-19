import { useEffect, useRef } from "react";
import Stars from "./Stars";

const Splash = ({ onDone }) => {
  const ref = useRef(null);

  useEffect(() => {
    // Fade out after 3.6s, then unmount
    const fadeTimer = setTimeout(() => {
      if (ref.current) ref.current.classList.add("splash-fade-out");
    }, 3600);
    const doneTimer = setTimeout(onDone, 4400);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div ref={ref} className="splash">
      <Stars count={65} />

      {/* Logo – reveals after car parks */}
      <div className="splash-logo">
        <h1
          className="font-pirata grad-text"
          style={{ fontSize: "clamp(3rem, 9vw, 6rem)", letterSpacing: 4 }}
        >
          RoyalDrive
        </h1>
        <p
          className="font-krona"
          style={{
            fontSize: "0.72rem",
            letterSpacing: 7,
            color: "var(--seafoam)",
            marginTop: 8,
          }}
        >
          LUXURY CAR RENTALS
        </p>
        {/* Animated dots */}
        <div style={{ display: "flex", gap: 7, justifyContent: "center", marginTop: 16 }}>
          {[0.1, 0.3, 0.5, 0.7, 0.9].map((d) => (
            <div
              key={d}
              className="splash-dot"
              style={{ animationDelay: `${d}s` }}
            />
          ))}
        </div>
      </div>

      {/* SVG Car */}
      <div className="splash-car">
        <svg viewBox="0 0 290 110" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
          <defs>
            <linearGradient id="splCarBody" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#07575B" />
              <stop offset="100%" stopColor="#003B46" />
            </linearGradient>
            <linearGradient id="splWindow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#66A5AD" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#C4DFE6" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="splWheel" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1a3a3a" />
              <stop offset="100%" stopColor="#021a1d" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* Body */}
          <path
            d="M18 62 L38 36 L80 20 L188 20 L238 36 L268 62 L268 80 L18 80 Z"
            fill="url(#splCarBody)"
            stroke="#66A5AD"
            strokeWidth="1.5"
          />
          {/* Roof */}
          <path
            d="M78 36 L104 17 L188 17 L218 36 Z"
            fill="#07575B"
            stroke="#66A5AD"
            strokeWidth="1"
          />
          {/* Windows */}
          <path d="M82 35 L106 19 L152 19 L152 35 Z" fill="url(#splWindow)" />
          <path d="M156 35 L156 19 L190 19 L216 35 Z" fill="url(#splWindow)" />
          {/* Door crease */}
          <line x1="154" y1="22" x2="154" y2="78" stroke="#66A5AD" strokeWidth="0.8" strokeOpacity="0.5" strokeDasharray="3,3" />
          {/* Hood line */}
          <path d="M238 36 L268 62" stroke="#66A5AD" strokeWidth="0.6" strokeOpacity="0.4" />
          {/* Grille */}
          <rect x="254" y="52" width="15" height="9" rx="2" fill="#66A5AD" opacity="0.5" />
          <line x1="261" y1="52" x2="261" y2="61" stroke="rgba(196,223,230,0.4)" strokeWidth="0.8" />
          {/* Headlight */}
          <ellipse cx="264" cy="56" rx="7" ry="4.5" fill="#D4AF37" opacity="0.95" filter="url(#glow)" />
          {/* Headlight beam */}
          <path d="M271 54 L290 48 M271 58 L290 62" stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.4" />
          {/* Tail light */}
          <rect x="16" y="54" width="9" height="7" rx="1.5" fill="#D4AF37" opacity="0.75" />
          {/* Exhaust */}
          <rect x="8" y="70" width="13" height="5" rx="2.5" fill="#334" />
          {/* Wheels */}
          <circle cx="72" cy="80" r="18" fill="url(#splWheel)" stroke="#66A5AD" strokeWidth="2.2" />
          <circle cx="72" cy="80" r="9"  fill="#07575B" stroke="#C4DFE6" strokeWidth="1.4" />
          <circle cx="72" cy="80" r="2.5" fill="#C4DFE6" />
          <circle cx="205" cy="80" r="18" fill="url(#splWheel)" stroke="#66A5AD" strokeWidth="2.2" />
          <circle cx="205" cy="80" r="9"  fill="#07575B" stroke="#C4DFE6" strokeWidth="1.4" />
          <circle cx="205" cy="80" r="2.5" fill="#C4DFE6" />
          {/* Side skirt reflection */}
          <path d="M38 75 L80 70 L188 70 L238 75" stroke="rgba(102,165,173,0.2)" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Road */}
      <div className="road">
        <div className="road-line" />
        <div className="road-line" />
        <div className="road-line" />
      </div>
    </div>
  );
};

export default Splash;
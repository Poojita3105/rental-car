import { useState, useEffect } from "react";

const FALLBACK = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=700&q=80";

const RENTAL_TERMS = [
  {
    title: "Rental Terms",
    body: "Minimum rental period is 24 hours. Vehicles must be returned in the same condition as received. Any damage beyond normal wear and tear will be assessed and charged accordingly after inspection.",
  },
  {
    title: "Insurance & Liability",
    body: "All vehicles are covered by comprehensive insurance. Driver excess is ₹25,000 for standard vehicles and ₹1,00,000 for exotic models. Excess protection upgrades are available at booking.",
  },
  {
    title: "Fuel Policy",
    body: "Vehicles are provided with a full tank and must be returned full. If returned with less fuel, a refuelling service charge plus current fuel prices will apply. Receipts required for remote refuelling.",
  },
];

const CarModal = ({ car, onClose, onBook }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const [openTerm, setOpenTerm] = useState(null);

  // Three slight crop variants for carousel feel
  const imgs = [
    car.img,
    car.img.replace("w=700", "w=800").replace("q=80", "q=85"),
    car.img.replace("w=700", "w=600"),
  ];

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>

        {/* ── Carousel ── */}
        <div className="carousel-wrap">
          <img
            className="carousel-img"
            src={imgs[imgIdx]}
            alt={car.name}
            onError={(e) => { e.target.src = FALLBACK; }}
          />

          {/* Close btn */}
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: 14, right: 14,
              background: "rgba(0,0,0,0.6)", border: "1px solid rgba(102,165,173,0.4)",
              color: "#fff", borderRadius: "50%", width: 36, height: 36,
              cursor: "pointer", fontSize: "1.1rem",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            ✕
          </button>

          {/* Badge */}
          {car.badge && <div className="car-badge">{car.badge}</div>}

          {/* Dots */}
          <div style={{ position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 7 }}>
            {imgs.map((_, i) => (
              <div
                key={i}
                className="carousel-dot"
                onClick={() => setImgIdx(i)}
                style={{ background: i === imgIdx ? "var(--gold)" : "rgba(255,255,255,0.38)" }}
              />
            ))}
          </div>
        </div>

        {/* ── Body ── */}
        <div style={{ padding: "2rem" }}>

          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem" }}>
            <div>
              <h2
                className="font-pirata grad-text"
                style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", letterSpacing: 2 }}
              >
                {car.name}
              </h2>
              <p
                className="font-krona"
                style={{ fontSize: "0.57rem", letterSpacing: 3, color: "var(--seafoam)", marginTop: 5 }}
              >
                {car.type.toUpperCase()} · {car.year} · {car.color}
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <div className="font-pirata" style={{ fontSize: "2.1rem", color: "var(--gold)", lineHeight: 1 }}>
                ₹{car.price.toLocaleString("en-IN")}
              </div>
              <div className="font-krona" style={{ fontSize: "0.56rem", letterSpacing: 1, color: "var(--seafoam)", marginTop: 3 }}>
                per day
              </div>
            </div>
          </div>

          {/* Description */}
          <p style={{ color: "rgba(196,223,230,0.82)", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "0.92rem" }}>
            {car.desc}
          </p>

          {/* Specs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.5rem" }}>
            {[
              { icon: "💺", label: `${car.seats} Seats` },
              { icon: "⛽", label: car.fuel },
              { icon: "❄️",  label: "Climate AC" },
              { icon: "⚙️", label: car.transmission },
              { icon: "🏎️", label: car.power },
            ].map((s) => (
              <span key={s.label} className="spec-chip">
                {s.icon} {s.label}
              </span>
            ))}
          </div>

          {/* Features */}
          <div style={{ marginBottom: "1.75rem" }}>
            <p className="section-sub" style={{ marginBottom: "0.75rem" }}>Key Features</p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
                gap: "0.45rem",
              }}
            >
              {car.features.map((f) => (
                <div
                  key={f}
                  style={{ display: "flex", alignItems: "center", gap: "0.45rem", color: "rgba(196,223,230,0.78)", fontSize: "0.86rem" }}
                >
                  <span style={{ color: "var(--gold)", flexShrink: 0 }}>✦</span> {f}
                </div>
              ))}
            </div>
          </div>

          {/* Rental Terms Accordion */}
          <div style={{ marginBottom: "1.75rem" }}>
            <p className="section-sub" style={{ marginBottom: "0.75rem" }}>Rental Terms</p>
            {RENTAL_TERMS.map((t, i) => (
              <div key={i} className={`faq-item${openTerm === i ? " open" : ""}`}>
                <div className="faq-q" onClick={() => setOpenTerm(openTerm === i ? null : i)}>
                  {t.title}
                  <span className="faq-chevron">▾</span>
                </div>
                <div className="faq-body">{t.body}</div>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button className="btn-primary" style={{ flex: 1, minWidth: 140 }} onClick={() => { onBook(car); onClose(); }}>
              Book This Vehicle
            </button>
            <button className="btn-ghost" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarModal;
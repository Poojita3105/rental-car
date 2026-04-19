import { useState } from "react";
import Stars from "../components/Stars";
import CarCard from "../components/CarCard";
import Footer from "../components/Footer";
import { CARS, STEPS } from "../data/cars";

const MOVING_CARS = [
  { emoji: "🚗", speed: "12s", delay: "0s",    glow: "#66A5AD" },
  { emoji: "🚕", speed: "18s", delay: "-5s",   glow: "#D4AF37" },
  { emoji: "🏎️", speed: "8s",  delay: "-2.5s", glow: "#ff6b6b" },
  { emoji: "🚙", speed: "15s", delay: "-8s",   glow: "#C4DFE6" },
  { emoji: "🚓", speed: "21s", delay: "-13s",  glow: "#8B5CF6" },
];

const GLOW_RINGS = [520, 720, 920];

const STATS = [
  ["20+", "Luxury Cars"],
  ["4",   "City Offices"],
  ["24/7","Support"],
  ["₹7.9K","From/Day"],
];

const Home = ({ setPage, onBook }) => {
  const [pickup, setPickup] = useState("");
  const [fromD, setFromD] = useState("");
  const [toD, setToD] = useState("");
  const [carType, setCarType] = useState("");

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="hero-home">
        <Stars count={52} />

        {/* Glow rings */}
        {GLOW_RINGS.map((s, i) => (
          <div
            key={i}
            className="glow-ring"
            style={{
              width: s, height: s,
              top: "50%", left: "50%",
              animationDelay: `${i * 1.4}s`,
            }}
          />
        ))}

        {/* Moving cars lane */}
        <div className="car-lane">
          {MOVING_CARS.map((c, i) => (
            <div
              key={i}
              className="moving-car"
              style={{ "--speed": c.speed, "--delay": c.delay, "--glow": c.glow }}
            >
              {c.emoji}
            </div>
          ))}
        </div>
        <div className="road-stripe" />

        {/* Content grid */}
        <div
          className="hero-home-grid"
          style={{
            position: "relative", zIndex: 10,
            maxWidth: 1200, margin: "0 auto",
            padding: "5rem 1.5rem 8rem",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Left — Copy */}
          <div>
            <p className="section-sub" style={{ marginBottom: "1rem" }}>⬥ Premium Car Rentals ⬥</p>
            <h1
              className="font-pirata"
              style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", lineHeight: 1.08, marginBottom: "1.5rem" }}
            >
              <span style={{ color: "var(--seafoam)" }}>Drive in</span>
              <br />
              <span className="grad-text">Royal Style</span>
              <br />
              <span style={{ color: "var(--seafoam)" }}>Every Mile</span>
            </h1>
            <p style={{ color: "rgba(196,223,230,0.68)", maxWidth: 400, lineHeight: 1.85, marginBottom: "2rem", fontSize: "0.95rem" }}>
              India's finest luxury car rental experience. 20 handpicked vehicles — Rolls-Royce to Ferrari — arrive exactly as you deserve.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => setPage("Cars")}>Explore Fleet</button>
              <button className="btn-ghost"  onClick={() => setPage("How It Works")}>How It Works</button>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "2.5rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
              {STATS.map(([n, l]) => (
                <div key={l}>
                  <div className="font-pirata grad-text" style={{ fontSize: "1.9rem", lineHeight: 1 }}>{n}</div>
                  <div className="font-krona" style={{ fontSize: "0.52rem", letterSpacing: 2, color: "var(--seafoam)", marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Search */}
          <div className="search-box">
            <p className="section-sub" style={{ marginBottom: "1.25rem", textAlign: "center" }}>
              ⬥ Find Your Ride ⬥
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label className="form-label">Pickup Location</label>
                <input
                  className="search-input"
                  placeholder="Bengaluru, Mumbai, Delhi…"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                <div>
                  <label className="form-label">Pickup Date</label>
                  <input className="search-input" type="date" value={fromD} onChange={(e) => setFromD(e.target.value)} />
                </div>
                <div>
                  <label className="form-label">Return Date</label>
                  <input className="search-input" type="date" value={toD} onChange={(e) => setToD(e.target.value)} />
                </div>
              </div>
              <div>
                <label className="form-label">Vehicle Type</label>
                <select className="search-input" value={carType} onChange={(e) => setCarType(e.target.value)}>
                  <option value="">All Types</option>
                  {["Luxury","SUV","Sports","Electric","GT","Supercar","Sports SUV","Luxury SUV"].map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <button
                className="btn-primary"
                style={{ marginTop: "0.25rem" }}
                onClick={() => setPage("Cars")}
              >
                🔍 Search Available Cars
              </button>
            </div>
          </div>
        </div>

        <div className="hero-edge" />
      </section>

      {/* ═══ FEATURED CARS ═══ */}
      <section style={{ background: "linear-gradient(180deg,#021a1d,var(--deep-aqua))", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-sub" style={{ marginBottom: "0.5rem" }}>⬥ Our Fleet ⬥</p>
            <h2 className="section-title">Featured Vehicles</h2>
            <div className="shimmer-div" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1fr))", gap: "1.5rem" }}>
            {CARS.slice(0, 6).map((car) => (
              <CarCard key={car.id} car={car} onClick={() => onBook(car)} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <button className="btn-primary" onClick={() => setPage("Cars")}>
              View All 20 Vehicles →
            </button>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS TEASER ═══ */}
      <section style={{ background: "var(--deep-aqua)", padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: 1050, margin: "0 auto", textAlign: "center" }}>
          <p className="section-sub" style={{ marginBottom: "0.5rem" }}>⬥ Simple Process ⬥</p>
          <h2 className="section-title" style={{ marginBottom: "3rem" }}>How RoyalDrive Works</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "1.5rem" }}>
            {STEPS.map((s, i) => (
              <div key={i} className="step-card">
                <div className="step-icon">{s.icon}</div>
                <h3 className="font-krona" style={{ fontSize: "0.72rem", letterSpacing: 2, color: "var(--seafoam)", marginBottom: "0.75rem" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "rgba(196,223,230,0.68)", lineHeight: 1.75 }}>{s.desc}</p>
                <div
                  className="font-pirata"
                  style={{ position: "absolute", top: 12, right: 16, fontSize: "2.2rem", color: "rgba(102,165,173,0.08)" }}
                >
                  0{i + 1}
                </div>
              </div>
            ))}
          </div>
          <button className="btn-ghost" style={{ marginTop: "2rem" }} onClick={() => setPage("How It Works")}>
            Learn More →
          </button>
        </div>
      </section>

      {/* ═══ PROMO BAND ═══ */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--ocean), var(--deep-aqua))",
          padding: "4rem 1.5rem",
        }}
      >
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <div
            style={{
              background: "linear-gradient(135deg, rgba(7,87,91,0.55), rgba(0,59,70,0.8))",
              border: "1px solid rgba(212,175,55,0.28)",
              borderRadius: 20, padding: "3rem 2rem",
            }}
          >
            <div className="font-pirata" style={{ fontSize: "clamp(1.5rem,4vw,3rem)", color: "var(--gold)", marginBottom: "1rem" }}>
              ✦ New Member? 10% Off ✦
            </div>
            <p style={{ color: "rgba(196,223,230,0.72)", marginBottom: "1.5rem", lineHeight: 1.8 }}>
              First rental at RoyalDrive? Use code{" "}
              <strong style={{ color: "var(--gold)" }}>ROYAL10</strong> and step into luxury at a special introductory rate.
            </p>
            <button className="btn-primary" onClick={() => setPage("Cars")}>Claim Your Discount</button>
          </div>
        </div>
      </section>

      <Footer setPage={setPage} />
    </div>
  );
};

export default Home;
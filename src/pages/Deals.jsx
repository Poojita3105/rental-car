import { useRef } from "react";
import Stars from "../components/Stars";
import Footer from "../components/Footer";
import { DEALS } from "../data/cars";

// Gold floating particles
const Particles = () => {
  const pts = useRef(
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      size: 4 + Math.random() * 6,
      top: Math.random() * 100,
      left: Math.random() * 100,
      dur: 2 + Math.random() * 3,
      delay: Math.random() * 2,
      opacity: 0.18 + Math.random() * 0.35,
    }))
  ).current;

  return (
    <>
      {pts.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            width: p.size, height: p.size,
            borderRadius: "50%",
            background: "var(--gold)",
            top: `${p.top}%`, left: `${p.left}%`,
            opacity: p.opacity,
            animation: `starTwinkle ${p.dur}s ease-in-out ${p.delay}s infinite`,
            "--bright": p.opacity + 0.3,
            "--sc": 1.5,
            "--dur": `${p.dur}s`,
            "--delay": `${p.delay}s`,
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  );
};

const Deals = ({ setPage }) => (
  <div>
    {/* Hero */}
    <section className="hero-deals">
      <Stars count={42} />
      <Particles />
      <div className="hero-edge-gold" />
      <div style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
        <p className="section-sub" style={{ marginBottom: "0.75rem" }}>⬥ Exclusive Offers ⬥</p>
        <h1 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}>
          Royal{" "}
          <span style={{ color: "var(--gold)", WebkitTextFillColor: "var(--gold)" }}>Deals</span>
        </h1>
        <p className="font-krona" style={{ fontSize: "0.62rem", letterSpacing: 3, color: "rgba(196,223,230,0.5)", marginTop: "1rem" }}>
          SAVE MORE · DRIVE BETTER
        </p>
      </div>
    </section>

    {/* Deal cards */}
    <section style={{ background: "linear-gradient(180deg, #010d0f, var(--deep-aqua))", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {DEALS.map((d, i) => (
            <div key={i} className="deal-card">
              <div className="deal-ribbon">{d.tag}</div>
              <div style={{ padding: "2.5rem 2rem 2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", gap: "1rem" }}>
                  <h3 className="font-pirata" style={{ fontSize: "1.55rem", color: "var(--seafoam)", letterSpacing: 1 }}>
                    {d.title}
                  </h3>
                  <div className="font-pirata" style={{ fontSize: "1.9rem", color: "var(--gold)", whiteSpace: "nowrap", lineHeight: 1 }}>
                    {d.discount}
                  </div>
                </div>
                <p style={{ color: "rgba(196,223,230,0.7)", lineHeight: 1.78, fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                  {d.desc}
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "1.25rem" }}>
                  {[["Eligible Cars", d.cars], ["Valid", d.valid]].map(([lbl, val]) => (
                    <div
                      key={lbl}
                      style={{
                        background: "rgba(102,165,173,0.07)",
                        borderRadius: 8, padding: "0.5rem 0.75rem",
                      }}
                    >
                      <div className="font-krona" style={{ fontSize: "0.5rem", letterSpacing: 2, color: "var(--seafoam)", marginBottom: 3 }}>
                        {lbl}
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "rgba(196,223,230,0.78)" }}>{val}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <div className="font-krona" style={{ fontSize: "0.58rem", letterSpacing: 2, color: "var(--seafoam)" }}>
                    PROMO CODE:
                  </div>
                  <div
                    style={{
                      background: "rgba(212,175,55,0.13)",
                      border: "1px solid rgba(212,175,55,0.38)",
                      borderRadius: 8, padding: "0.38rem 1rem",
                      fontFamily: "'Krona One', sans-serif",
                      fontSize: "0.72rem", letterSpacing: 3, color: "var(--gold)",
                    }}
                  >
                    {d.code}
                  </div>
                </div>
                <button className="btn-primary" style={{ width: "100%" }} onClick={() => setPage("Cars")}>
                  Claim Offer →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Promo banner */}
    <section
      style={{
        background: "linear-gradient(135deg, var(--ocean), var(--deep-aqua))",
        padding: "4rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
        <div
          style={{
            background: "linear-gradient(135deg, rgba(7,87,91,0.55), rgba(0,59,70,0.82))",
            border: "1px solid rgba(212,175,55,0.26)",
            borderRadius: 20, padding: "3rem 2rem",
          }}
        >
          <div className="font-pirata" style={{ fontSize: "clamp(1.5rem,4vw,3rem)", color: "var(--gold)", marginBottom: "1rem" }}>
            ✦ First Rental? 10% Off ✦
          </div>
          <p style={{ color: "rgba(196,223,230,0.72)", marginBottom: "1.5rem", lineHeight: 1.82 }}>
            New to RoyalDrive? Welcome aboard. Use code{" "}
            <strong style={{ color: "var(--gold)" }}>ROYAL10</strong> on your first booking
            and step into luxury at a special introductory rate.
          </p>
          <button className="btn-primary" onClick={() => setPage("Cars")}>
            Book Your First Ride
          </button>
        </div>
      </div>
    </section>

    <Footer setPage={setPage} />
  </div>
);

export default Deals;
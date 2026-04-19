import Stars from "../components/Stars";
import FAQList from "../components/FAQList";
import Footer from "../components/Footer";
import { STEPS } from "../data/cars";

const WHY = [
  { icon: "🏆", title: "Curated Fleet",    desc: "Every vehicle is handpicked, immaculately maintained, and presented to five-star concierge standards." },
  { icon: "🛡️", title: "Full Insurance",   desc: "Comprehensive cover on every rental. Drive with complete confidence knowing you're fully protected." },
  { icon: "📱", title: "Easy Booking",     desc: "Reserve your dream car in under 2 minutes with our frictionless, secure digital booking platform." },
  { icon: "🌙", title: "24/7 Concierge",  desc: "Our white-glove concierge team is available around the clock for any assistance you may need." },
  { icon: "🚀", title: "Doorstep Delivery",desc: "We bring the car to you — home, hotel, or airport. Your vehicle arrives at your door, on time." },
  { icon: "💎", title: "Loyalty Rewards",  desc: "Every rental earns Royal Points redeemable for free days, upgrades, and exclusive experiences." },
];

const HowItWorks = ({ setPage }) => (
  <div>
    {/* Hero */}
    <section className="hero-hiw">
      <Stars count={38} />
      <div className="hero-edge-gold" />
      <div style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
        <p className="section-sub" style={{ marginBottom: "0.75rem" }}>⬥ The Process ⬥</p>
        <h1 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>How It Works</h1>
        <p style={{ color: "rgba(196,223,230,0.58)", marginTop: "1rem", maxWidth: 460, fontSize: "0.9rem", lineHeight: 1.75 }}>
          Renting a luxury car should feel as premium as driving one. Here's how we make it effortless.
        </p>
      </div>
    </section>

    {/* Timeline steps */}
    <section style={{ background: "linear-gradient(180deg, #021520, var(--deep-aqua))", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        {STEPS.map((s, i) => (
          <div
            key={i}
            style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: "2rem", marginBottom: "2.5rem", alignItems: "start" }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div className="step-icon">{s.icon}</div>
              {i < STEPS.length - 1 && (
                <div
                  style={{
                    width: 2, height: 55,
                    background: "linear-gradient(180deg, var(--wave), transparent)",
                    marginTop: 10,
                  }}
                />
              )}
            </div>
            <div style={{ paddingTop: "0.75rem" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "0.5rem" }}>
                <span className="font-pirata" style={{ fontSize: "2.8rem", color: "rgba(102,165,173,0.14)", lineHeight: 1 }}>
                  0{i + 1}
                </span>
                <h3 className="font-krona" style={{ fontSize: "0.82rem", letterSpacing: 2, color: "var(--seafoam)" }}>
                  {s.title}
                </h3>
              </div>
              <p style={{ color: "rgba(196,223,230,0.72)", lineHeight: 1.82, fontSize: "0.92rem" }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Why Choose Us */}
    <section style={{ background: "var(--deep-aqua)", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <p className="section-sub" style={{ marginBottom: "0.5rem" }}>⬥ Why RoyalDrive ⬥</p>
        <h2 className="section-title" style={{ marginBottom: "3rem" }}>The Royal Difference</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(215px, 1fr))", gap: "1.5rem" }}>
          {WHY.map((w) => (
            <div key={w.title} className="step-card">
              <div className="step-icon" style={{ width: 60, height: 60, fontSize: "1.55rem" }}>{w.icon}</div>
              <h3 className="font-krona" style={{ fontSize: "0.68rem", letterSpacing: 2, color: "var(--seafoam)", marginBottom: "0.5rem" }}>
                {w.title}
              </h3>
              <p style={{ fontSize: "0.84rem", color: "rgba(196,223,230,0.68)", lineHeight: 1.75 }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section style={{ background: "#021a1d", padding: "5rem 1.5rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <p className="section-sub" style={{ textAlign: "center", marginBottom: "0.5rem" }}>⬥ FAQ ⬥</p>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "2.5rem" }}>Common Questions</h2>
        <FAQList />
      </div>
    </section>

    <Footer setPage={setPage} />
  </div>
);

export default HowItWorks;
import { useState } from "react";
import Stars from "../components/Stars";
import Footer from "../components/Footer";
import { OFFICES } from "../data/cars";

const FORM_FIELDS = [
  { label: "Full Name",          key: "name",  type: "text",  placeholder: "Your full name" },
  { label: "Email Address",      key: "email", type: "email", placeholder: "you@example.com" },
  { label: "Phone Number",       key: "phone", type: "tel",   placeholder: "+91 98765 43210" },
  { label: "Preferred Vehicle",  key: "car",   type: "text",  placeholder: "e.g. Mercedes S-Class" },
  { label: "Rental Dates",       key: "dates", type: "text",  placeholder: "e.g. 20 Apr – 25 Apr 2025" },
];

const Contact = ({ setPage }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", car: "", dates: "", msg: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email) return;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: "", email: "", phone: "", car: "", dates: "", msg: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="hero-contact">
        <Stars count={36} />
        <div className="hero-edge" />
        <div style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
          <p className="section-sub" style={{ marginBottom: "0.75rem" }}>⬥ Get In Touch ⬥</p>
          <h1 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>Contact Us</h1>
          <p style={{ color: "rgba(196,223,230,0.58)", marginTop: "1rem", fontFamily: "'Krona One', sans-serif", fontSize: "0.62rem", letterSpacing: 3 }}>
            WE'RE ALWAYS READY TO ASSIST
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ background: "linear-gradient(180deg, #021520, var(--deep-aqua))", padding: "5rem 1.5rem" }}>
        <div
          className="contact-grid"
          style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}
        >
          {/* ── Form ── */}
          <div>
            <p className="section-sub" style={{ marginBottom: "0.5rem" }}>⬥ Rental Inquiry ⬥</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", marginBottom: "2rem" }}>
              Book a Vehicle
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              {FORM_FIELDS.map((f) => (
                <div key={f.key}>
                  <label className="form-label">{f.label}</label>
                  <input
                    className="form-input"
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.key]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  />
                </div>
              ))}
              <div>
                <label className="form-label">Message</label>
                <textarea
                  className="form-input"
                  rows={4}
                  placeholder="Tell us about your requirements, preferred dates, or any special requests…"
                  value={form.msg}
                  onChange={(e) => setForm({ ...form, msg: e.target.value })}
                />
              </div>
              <button className="btn-primary" onClick={handleSubmit}>
                {sent ? "✓ Inquiry Sent!" : "Send Inquiry →"}
              </button>
              {sent && (
                <div
                  style={{
                    background: "rgba(102,165,173,0.12)",
                    border: "1px solid var(--wave)",
                    borderRadius: 10, padding: "1rem",
                    fontFamily: "'Krona One', sans-serif",
                    fontSize: "0.65rem", letterSpacing: 1,
                    color: "var(--seafoam)", textAlign: "center",
                  }}
                >
                  ✦ Thank you! Our concierge team will reach out within 2 hours.
                </div>
              )}
            </div>
          </div>

          {/* ── Info ── */}
          <div>
            <p className="section-sub" style={{ marginBottom: "0.5rem" }}>⬥ Our Offices ⬥</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", marginBottom: "2rem" }}>
              Find Us
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              {OFFICES.map((o) => (
                <div
                  key={o.city}
                  style={{
                    background: "rgba(7,87,91,0.28)",
                    border: "1px solid rgba(102,165,173,0.14)",
                    borderRadius: 12, padding: "1.2rem 1.5rem",
                    display: "flex", gap: "1rem", alignItems: "flex-start",
                    transition: "border-color 0.3s",
                  }}
                >
                  <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>📍</div>
                  <div>
                    <div className="font-krona" style={{ fontSize: "0.72rem", letterSpacing: 2, color: "var(--seafoam)", marginBottom: 4 }}>
                      {o.city}
                    </div>
                    <div style={{ fontSize: "0.84rem", color: "rgba(196,223,230,0.58)", marginBottom: 3 }}>{o.address}</div>
                    <div style={{ fontSize: "0.84rem", color: "var(--wave)" }}>{o.phone}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="map-box">
              <div style={{ fontSize: "2.5rem" }}>🗺️</div>
              <p className="font-krona" style={{ fontSize: "0.68rem", letterSpacing: 2, color: "var(--seafoam)" }}>
                INDIA-WIDE COVERAGE
              </p>
              <p style={{ fontSize: "0.8rem", color: "rgba(196,223,230,0.45)", textAlign: "center", maxWidth: 210 }}>
                We operate across all major Indian cities with 4 flagship offices and 24/7 delivery.
              </p>
            </div>

            {/* Contact quick-links */}
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
              {[
                ["📧", "hello@royaldrive.in"],
                ["📞", "1800-ROYAL-DRV"],
                ["⏰", "24/7 Available"],
              ].map(([icon, text]) => (
                <div
                  key={text}
                  style={{ display: "flex", alignItems: "center", gap: "0.45rem", fontSize: "0.84rem", color: "rgba(196,223,230,0.65)" }}
                >
                  {icon} {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer setPage={setPage} />
    </div>
  );
};

export default Contact;
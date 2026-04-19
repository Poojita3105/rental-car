const Footer = ({ setPage }) => (
  <footer className="site-footer">
    <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div
        className="footer-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "3rem",
          marginBottom: "3rem",
        }}
      >
        {/* Brand */}
        <div>
          <div
            className="font-pirata grad-text"
            style={{ fontSize: "1.9rem", letterSpacing: 2, marginBottom: "1rem" }}
          >
            🚘 RoyalDrive
          </div>
          <p style={{ color: "rgba(196,223,230,0.48)", fontSize: "0.875rem", lineHeight: 1.85, maxWidth: 270 }}>
            India's premier luxury car rental service. Delivering exceptional vehicles and unforgettable journeys since 2018.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <div className="font-krona" style={{ fontSize: "0.58rem", letterSpacing: 3, color: "var(--wave)", marginBottom: "1rem" }}>
            NAVIGATE
          </div>
          {["Home", "Cars", "How It Works", "Deals", "Contact"].map((p) => (
            <span key={p} className="footer-link" onClick={() => setPage(p)}>{p}</span>
          ))}
        </div>

        {/* Fleet */}
        <div>
          <div className="font-krona" style={{ fontSize: "0.58rem", letterSpacing: 3, color: "var(--wave)", marginBottom: "1rem" }}>
            FLEET
          </div>
          {["Luxury Sedans", "Premium SUVs", "Sports Cars", "Electric Vehicles", "Grand Tourers", "Supercars"].map((f) => (
            <span key={f} className="footer-link" onClick={() => setPage("Cars")}>{f}</span>
          ))}
        </div>

        {/* Support */}
        <div>
          <div className="font-krona" style={{ fontSize: "0.58rem", letterSpacing: 3, color: "var(--wave)", marginBottom: "1rem" }}>
            SUPPORT
          </div>
          {[
            ["Contact Us",    "Contact"],
            ["Book Now",      "Cars"],
            ["Our Deals",     "Deals"],
            ["How It Works",  "How It Works"],
            ["FAQ",           "How It Works"],
          ].map(([label, dest]) => (
            <span key={label} className="footer-link" onClick={() => setPage(dest)}>{label}</span>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(102,165,173,0.1)",
          paddingTop: "1.75rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div className="font-krona" style={{ fontSize: "0.52rem", letterSpacing: 2, color: "rgba(196,223,230,0.28)" }}>
          © 2025 ROYALDRIVE. ALL RIGHTS RESERVED.
        </div>
        <div style={{ display: "flex", gap: "1.25rem" }}>
          {["Privacy Policy", "Terms of Use", "Cookies"].map((l) => (
            <span key={l} className="footer-link" style={{ marginBottom: 0, fontSize: "0.78rem" }}>{l}</span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
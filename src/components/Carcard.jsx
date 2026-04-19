const FALLBACK = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80";

const CarCard = ({ car, onClick }) => (
  <div className="car-card" onClick={onClick}>
    {car.badge && <div className="car-badge">{car.badge}</div>}

    <div className="car-card-img-wrap">
      <img
        className="car-card-img"
        src={car.img}
        alt={car.name}
        onError={(e) => { e.target.src = FALLBACK; }}
      />
    </div>

    <div style={{ padding: "1.2rem" }}>
      <h3
        className="font-pirata"
        style={{ fontSize: "1.28rem", color: "var(--seafoam)", letterSpacing: 1, marginBottom: 3 }}
      >
        {car.name}
      </h3>
      <p
        className="font-krona"
        style={{ fontSize: "0.52rem", letterSpacing: 2, color: "rgba(196,223,230,0.45)", marginBottom: "0.7rem" }}
      >
        {car.type.toUpperCase()} · {car.year}
      </p>

      {/* Specs */}
      <div style={{ display: "flex", gap: "0.38rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        {[
          `💺 ${car.seats}`,
          `⛽ ${car.fuel}`,
          `❄️ AC`,
          `⚙️ ${car.transmission.slice(0, 4)}`,
        ].map((s) => (
          <span key={s} className="spec-chip" style={{ fontSize: "0.68rem", padding: "0.22rem 0.55rem" }}>
            {s}
          </span>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span
            className="font-pirata"
            style={{ fontSize: "1.38rem", color: "var(--gold)" }}
          >
            ₹{car.price.toLocaleString("en-IN")}
          </span>
          <span
            className="font-krona"
            style={{ fontSize: "0.52rem", color: "var(--seafoam)", marginLeft: 5 }}
          >
            /day
          </span>
        </div>
        <button className="btn-ghost" style={{ padding: "0.38rem 0.9rem", fontSize: "0.52rem" }}>
          View →
        </button>
      </div>
    </div>
  </div>
);

export default CarCard;
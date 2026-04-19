import { useState } from "react";
import Stars from "../components/Stars";
import CarCard from "../components/CarCard";
import CarModal from "../components/CarModal";
import Footer from "../components/Footer";
import { CARS } from "../data/cars";

const TYPES = ["All", "Luxury", "SUV", "Sports", "Electric", "GT", "Supercar", "Sports SUV", "Luxury SUV"];

const Cars = ({ setPage, onBook }) => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = CARS.filter((c) => {
    const matchType = filter === "All" || c.type === filter;
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div>
      {/* ── Hero ── */}
      <section className="hero-cars">
        <Stars count={40} />
        <div className="hero-edge" />
        <div style={{ textAlign: "center", position: "relative", zIndex: 10 }}>
          <p className="section-sub" style={{ marginBottom: "0.75rem" }}>⬥ Premium Fleet ⬥</p>
          <h1 className="section-title" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
            Our Vehicles
          </h1>
          <p
            className="font-krona"
            style={{ fontSize: "0.62rem", letterSpacing: 3, color: "rgba(196,223,230,0.5)", marginTop: "1rem" }}
          >
            20 HANDPICKED LUXURY MACHINES
          </p>
        </div>
      </section>

      {/* ── Filter bar ── */}
      <div
        style={{
          background: "linear-gradient(180deg, #021520, var(--deep-aqua))",
          padding: "1.75rem 1.5rem",
          position: "sticky", top: 70, zIndex: 100,
          borderBottom: "1px solid rgba(102,165,173,0.12)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center", marginBottom: "0.85rem" }}>
            <input
              className="search-input"
              placeholder="Search by name…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ maxWidth: 280, flex: 1 }}
            />
          </div>
          <div style={{ display: "flex", gap: "0.45rem", flexWrap: "wrap" }}>
            {TYPES.map((t) => (
              <div
                key={t}
                className={`filter-pill${filter === t ? " active" : ""}`}
                onClick={() => setFilter(t)}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Grid ── */}
      <section style={{ background: "var(--deep-aqua)", padding: "2.5rem 1.5rem 5rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p
            className="font-krona"
            style={{ fontSize: "0.58rem", letterSpacing: 2, color: "var(--seafoam)", marginBottom: "1.5rem" }}
          >
            {filtered.length} VEHICLE{filtered.length !== 1 ? "S" : ""} FOUND
          </p>

          {filtered.length === 0 ? (
            <div
              style={{
                textAlign: "center", padding: "5rem 2rem",
                color: "rgba(196,223,230,0.35)",
                fontFamily: "'Krona One', sans-serif",
                fontSize: "0.75rem", letterSpacing: 2,
              }}
            >
              NO VEHICLES MATCH YOUR SEARCH
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {filtered.map((car) => (
                <CarCard key={car.id} car={car} onClick={() => setSelected(car)} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Car detail modal */}
      {selected && (
        <CarModal
          car={selected}
          onClose={() => setSelected(null)}
          onBook={(car) => { onBook(car); setSelected(null); }}
        />
      )}

      <Footer setPage={setPage} />
    </div>
  );
};

export default Cars;
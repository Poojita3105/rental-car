import { useState } from "react";

const NAV_LINKS = ["Home", "Cars", "How It Works", "Deals", "Contact"];

const Navbar = ({ page, setPage }) => {
  const [open, setOpen] = useState(false);

  const go = (p) => { setPage(p); setOpen(false); };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo" onClick={() => go("Home")}>
        🚘 RoyalDrive
      </div>

      {/* Hamburger */}
      <button
        className="hamburger"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        <span style={{ transform: open ? "rotate(45deg) translateY(7px)" : "none" }} />
        <span style={{ opacity: open ? 0 : 1 }} />
        <span style={{ transform: open ? "rotate(-45deg) translateY(-7px)" : "none" }} />
      </button>

      {/* Links */}
      <div className={`nav-links${open ? " open" : ""}`}>
        {NAV_LINKS.map((p) => (
          <div
            key={p}
            className={`nav-link${page === p ? " active" : ""}`}
            onClick={() => go(p)}
          >
            {p}
          </div>
        ))}
        <button className="nav-book" onClick={() => go("Cars")}>
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
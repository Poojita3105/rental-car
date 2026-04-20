import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/cars", label: "Cars" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/deals", label: "Deals" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#001f24]/95 backdrop-blur-xl shadow-[0_4px_40px_rgba(0,59,70,0.5)] border-b border-[#07575B]/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#66A5AD] to-[#07575B] flex items-center justify-center shadow-[0_0_15px_rgba(102,165,173,0.5)] group-hover:shadow-[0_0_25px_rgba(102,165,173,0.8)] transition-all duration-300">
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
              </svg>
            </div>
            <span className="font-['Pirata_One'] text-xl md:text-2xl text-white tracking-wider group-hover:text-[#66A5AD] transition-colors duration-300">
              Royal<span className="text-[#66A5AD] group-hover:text-white transition-colors duration-300">Drive</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ to, label }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-4 py-2 font-['Krona_One'] text-xs tracking-widest transition-all duration-300 group
                    ${active ? "text-[#66A5AD]" : "text-[#C4DFE6]/80 hover:text-white"}`}
                >
                  {label}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-[#118799]/80 to-[white]/60 transition-all duration-300 rounded-full
                    ${active ? "w-full opacity-100" : "w-0 group-hover:w-full opacity-0 group-hover:opacity-100"}`} />
                </Link>
              );
            })}
          </div>

          {/* Book Now CTA */}
          <div className="hidden md:block">
            <Link
              to="/cars"
              className="relative px-5 py-2.5 font-['Krona_One'] text-xs tracking-widest text-white overflow-hidden group
                bg-gradient-to-r from-[#07575B] to-[#003B46] rounded-full border border-[#66A5AD]/30
                hover:border-[#66A5AD]/80 transition-all duration-300
                shadow-[0_0_20px_rgba(7,87,91,0.4)] hover:shadow-[0_0_30px_rgba(102,165,173,0.5)]"
            >
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#66A5AD] to-[#07575B] translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[#C4DFE6] hover:text-white transition-colors"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-4"}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-[#001f24]/98 backdrop-blur-xl border-t border-[#07575B]/30 px-4 py-4 space-y-1">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="block px-4 py-3 font-['Krona_One'] text-xs tracking-widest text-[#C4DFE6] hover:text-white hover:bg-[#07575B]/20 rounded-lg transition-all duration-200"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/cars"
            className="block mt-4 text-center px-4 py-3 font-['Krona_One'] text-xs tracking-widest text-white bg-gradient-to-r from-[#07575B] to-[#003B46] rounded-full border border-[#66A5AD]/30"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
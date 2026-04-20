import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  const pages = [
    { to: "/", label: "Home" },
    { to: "/cars", label: "Our Fleet" },
    { to: "/how-it-works", label: "How It Works" },
    { to: "/deals", label: "Deals & Offers" },
    { to: "/contact", label: "Contact Us" },
  ];

  const categories = [
    { to: "/cars?cat=Sports", label: "Sports Cars" },
    { to: "/cars?cat=Luxury", label: "Luxury Saloons" },
    { to: "/cars?cat=SUV", label: "Premium SUVs" },
    { to: "/cars?cat=Electric", label: "Electric Vehicles" },
    { to: "/cars?cat=Hypercar", label: "Hypercars" },
  ];

  const support = [
    { to: "/contact", label: "Customer Support" },
    { to: "/how-it-works", label: "Rental Policy" },
    { to: "/contact", label: "Insurance Info" },
    { to: "/deals", label: "Corporate Deals" },
    { to: "/contact", label: "24/7 Roadside" },
  ];

  return (
    <footer className="bg-[#02303d] border-t border-[#07575B]/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="inline-flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#66A5AD] to-[#07575B] flex items-center justify-center shadow-[0_0_15px_rgba(102,165,173,0.4)]">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              <span className="font-['Pirata_One'] text-2xl text-white">Royal<span className="text-[#66A5AD]">Drive</span></span>
            </Link>
            <p className="text-[#C4DFE6]/60 text-sm leading-relaxed font-['Krona_One'] tracking-wide">
              The world's finest luxury car rental experience. Drive extraordinary.
            </p>
            <div className="flex gap-3">
              {["facebook", "twitter", "instagram", "youtube"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-full border border-[#07575B]/50 flex items-center justify-center text-[#66A5AD] hover:bg-[#07575B] hover:border-[#66A5AD] transition-all duration-300 hover:scale-110">
                  <span className="text-xs capitalize">{s[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-['Krona_One'] text-xs tracking-[0.2em] text-[#66A5AD] uppercase mb-5">Navigation</h4>
            <ul className="space-y-3">
              {pages.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-[#C4DFE6]/90 hover:text-white text-sm font-['Nunito_Sans'] tracking-wide transition-colors duration-200 hover:tracking-wider">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-['Krona_One'] text-xs tracking-[0.2em] text-[#66A5AD] uppercase mb-5">Fleet</h4>
            <ul className="space-y-3">
              {categories.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="text-[#C4DFE6]/90 hover:text-white text-sm font-['Nunito_Sans'] tracking-wide transition-colors duration-200 hover:tracking-wider">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-['Krona_One'] text-xs tracking-[0.2em] text-[#66A5AD] uppercase mb-5">Support</h4>
            <ul className="space-y-3">
              {support.map(({ to, label }) => (
                <li key={label}>
                  <Link to={to} className="text-[#C4DFE6]/90 hover:text-white text-sm font-['Nunito_Sans'] tracking-wide transition-colors duration-200 hover:tracking-wider">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 rounded-xl bg-[#07575B]/20 border border-[#07575B]/30">
              <p className="text-[#66A5AD] text-xs font-['Krona_One'] tracking-wider">24/7 SUPPORT</p>
              <p className="text-white text-sm mt-1 font-['Krona_One']">+1 (800) 765-4321</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#07575B]/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#C4DFE6]/40 text-xs font-['Krona_One'] tracking-wider">
            © {year} RoyalDrive. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <Link key={item} to="/contact" className="text-[#C4DFE6]/40 hover:text-[#66A5AD] text-xs font-['Krona_One'] tracking-wider transition-colors duration-200">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
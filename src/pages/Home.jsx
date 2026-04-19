import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Stars from "../components/Stars";
import CarCard from "../components/CarCard";
import { cars } from "../data/cars";

const heroCarImages = [
  "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?w=1400&q=80",
  "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1400&q=80",
  "https://images.unsplash.com/photo-1563720223185-11003d516935?w=1400&q=80",
  "https://images.unsplash.com/photo-1597007066704-67bf2068d5b2?w=1400&q=80",
];

const stats = [
  { value: "20+", label: "Exotic Cars" },
  { value: "5★", label: "Avg Rating" },
  { value: "24/7", label: "Support" },
  { value: "50+", label: "Cities" },
];

export default function Home() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const t = setInterval(() => setHeroIndex((i) => (i + 1) % heroCarImages.length), 4500);
    return () => clearInterval(t);
  }, []);

  const featured = cars.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#000d0f] overflow-x-hidden">
      {/* HERO */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* BG images */}
        {heroCarImages.map((src, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1500"
            style={{ opacity: i === heroIndex ? 1 : 0, transitionDuration: "1500ms" }}
          >
            <img src={src} alt="" className="w-full h-full object-cover scale-110" style={{ filter: "brightness(0.3) saturate(0.8)" }} />
          </div>
        ))}
        {/* Deep gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000d0f] via-[#001f24]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000d0f] via-transparent to-[#000d0f]/40" />
        <Stars count={80} />

        {/* Animated cars parade at bottom */}
        <div className="absolute bottom-20 left-0 right-0 overflow-hidden h-16 pointer-events-none">
          <div className="flex gap-24 animate-[carParade_20s_linear_infinite]" style={{ width: "200%" }}>
            {[...cars.slice(0,8), ...cars.slice(0,8)].map((c, i) => (
              <div key={i} className="flex-shrink-0 w-20 h-10 rounded-lg overflow-hidden border border-[#07575B]/30 opacity-50 hover:opacity-80 transition-opacity">
                <img src={c.image} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div
            className="max-w-3xl transition-all duration-1000"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#07575B]/30 border border-[#66A5AD]/30 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-[#66A5AD] animate-pulse" />
              <span className="font-['Krona_One'] text-[10px] tracking-[0.3em] text-[#66A5AD] uppercase">Premium Luxury Fleet Available</span>
            </div>

            <h1 className="font-['Pirata_One'] text-6xl sm:text-7xl lg:text-8xl text-white leading-none mb-4">
              Drive The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66A5AD] to-[#C4DFE6]">
                Extraordinary
              </span>
            </h1>
            <p className="font-['Krona_One'] text-sm text-[#C4DFE6]/70 tracking-wide leading-relaxed max-w-xl mb-10">
              Experience the world's most coveted automobiles. From Lamborghinis to Bugattis — your dream drive awaits.
            </p>

            {/* Search box */}
            <div className="bg-[#001419]/90 backdrop-blur-xl border border-[#07575B]/50 rounded-2xl p-4 md:p-6 max-w-2xl shadow-[0_20px_60px_rgba(0,20,25,0.8)]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                <SearchField icon="📍" label="Pickup Location" placeholder="Enter city..." />
                <SearchField icon="📅" label="Start Date" placeholder="DD/MM/YYYY" type="date" />
                <SearchField icon="📅" label="End Date" placeholder="DD/MM/YYYY" type="date" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <select className="bg-[#001f24] border border-[#07575B]/40 rounded-xl px-4 py-3 text-[#C4DFE6]/70 text-xs font-['Krona_One'] tracking-wide focus:outline-none focus:border-[#66A5AD]/60">
                  <option value="">All Categories</option>
                  <option>Sports</option><option>Luxury</option><option>SUV</option>
                  <option>Electric</option><option>Hypercar</option>
                </select>
                <Link
                  to="/cars"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#07575B] to-[#003B46] hover:from-[#66A5AD] hover:to-[#07575B] rounded-xl text-white text-xs font-['Krona_One'] tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(7,87,91,0.4)] hover:shadow-[0_0_30px_rgba(102,165,173,0.5)]"
                >
                  🔍 Search Cars
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-36 right-8 flex flex-col gap-2">
          {heroCarImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIndex(i)}
              className={`rounded-full transition-all duration-300 ${i === heroIndex ? "w-2 h-8 bg-[#66A5AD]" : "w-2 h-2 bg-[#07575B]"}`}
            />
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-16 bg-gradient-to-r from-[#001419] via-[#001f24] to-[#001419] border-y border-[#07575B]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center group">
                <p className="font-['Pirata_One'] text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#C4DFE6] to-[#66A5AD] group-hover:from-white group-hover:to-[#C4DFE6] transition-all duration-300">
                  {s.value}
                </p>
                <p className="font-['Krona_One'] text-[10px] tracking-[0.3em] text-[#66A5AD]/70 uppercase mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED FLEET */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-['Krona_One'] text-[10px] tracking-[0.4em] text-[#66A5AD] uppercase mb-3">Our Collection</p>
            <h2 className="font-['Pirata_One'] text-5xl md:text-6xl text-white">Featured Fleet</h2>
            <div className="mt-4 flex items-center justify-center gap-3">
              <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#66A5AD]" />
              <span className="text-[#66A5AD]">✦</span>
              <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#66A5AD]" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((car, i) => <CarCard key={car.id} car={car} index={i} />)}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/cars"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-['Krona_One'] text-xs tracking-widest text-white border border-[#66A5AD]/40 hover:bg-[#07575B]/30 hover:border-[#66A5AD] transition-all duration-300"
            >
              View All 20 Cars →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY ROYALDRIVE */}
      <section className="relative py-24 bg-[#001419] border-y border-[#07575B]/20 overflow-hidden">
        <Stars count={30} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-['Pirata_One'] text-5xl text-white">Why Choose <span className="text-[#66A5AD]">RoyalDrive</span>?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "👑", title: "Curated Luxury", desc: "Hand-picked selection of the world's most exclusive and performance-oriented vehicles." },
              { icon: "🛡️", title: "Full Insurance", desc: "Every vehicle comes with comprehensive insurance coverage for your peace of mind." },
              { icon: "🚀", title: "Instant Booking", desc: "Book in minutes. Flexible pickup and drop-off across 50+ premium locations worldwide." },
            ].map((f, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-[#001f24]/50 border border-[#07575B]/30 hover:border-[#66A5AD]/50 hover:-translate-y-2 transition-all duration-500 text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                <h3 className="font-['Pirata_One'] text-2xl text-white mb-3">{f.title}</h3>
                <p className="text-[#C4DFE6]/60 text-sm font-['Krona_One'] tracking-wide leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1400&q=80" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000d0f] via-[#001f24]/80 to-[#000d0f]" />
        </div>
        <Stars count={40} />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <h2 className="font-['Pirata_One'] text-5xl md:text-6xl text-white mb-6">
            Ready to Drive <span className="text-[#66A5AD]">Royally</span>?
          </h2>
          <p className="font-['Krona_One'] text-sm text-[#C4DFE6]/70 tracking-wide mb-10">
            Browse our full collection and book your dream drive today. First rental 10% off.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cars" className="px-10 py-4 rounded-full bg-gradient-to-r from-[#07575B] to-[#003B46] text-white font-['Krona_One'] text-xs tracking-widest hover:from-[#66A5AD] hover:to-[#07575B] transition-all duration-300 shadow-[0_0_30px_rgba(7,87,91,0.5)]">
              Explore Fleet
            </Link>
            <Link to="/deals" className="px-10 py-4 rounded-full border border-[#66A5AD]/40 text-[#C4DFE6] font-['Krona_One'] text-xs tracking-widest hover:bg-[#07575B]/30 hover:border-[#66A5AD] transition-all duration-300">
              View Deals
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes carParade {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

function SearchField({ icon, label, placeholder, type = "text" }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[#66A5AD] text-[10px] font-['Krona_One'] tracking-widest uppercase">{icon} {label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="bg-[#001f24] border border-[#07575B]/40 rounded-xl px-4 py-3 text-[#C4DFE6]/80 text-xs font-['Krona_One'] placeholder-[#07575B] focus:outline-none focus:border-[#66A5AD]/60 transition-colors duration-200"
      />
    </div>
  );
}
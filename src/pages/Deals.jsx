import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Stars from "../components/Stars";
import { cars } from "../data/cars";

const deals = [
  { id: 1, title: "Weekend Warrior", discount: "20% OFF", code: "WEEKEND20", desc: "Book Friday–Sunday and enjoy 20% off on any Sports or Hypercar. Perfect for unforgettable weekend escapes.", valid: "Valid until Dec 31, 2025", color: "from-[#003B46] to-[#07575B]", badge: "🏁 Popular", cars: ["Sports", "Hypercar"] },
  { id: 2, title: "First Drive Special", discount: "10% OFF", code: "FIRSTDRIVE", desc: "Your first booking with RoyalDrive? Welcome to the family! Enjoy 10% off any car in our entire fleet.", valid: "New customers only", color: "from-[#07575B] to-[#66A5AD]", badge: "⭐ New Customer", cars: ["All"] },
  { id: 3, title: "Week Away", discount: "25% OFF", code: "WEEK25", desc: "Renting for 7+ days? Save 25% on the total booking. Ideal for extended business trips or vacations.", valid: "Minimum 7-day rental", color: "from-[#001f24] to-[#003B46]", badge: "📅 Long Stay", cars: ["All"] },
  { id: 4, title: "Electric Future", discount: "15% OFF", code: "ELECTRIC15", desc: "Go green without compromising on performance. Save 15% on all electric vehicles in our fleet.", valid: "Valid on EV models only", color: "from-[#003B46] to-[#07575B]", badge: "⚡ Eco Special", cars: ["Electric"] },
  { id: 5, title: "Corporate Fleet", discount: "30% OFF", code: "CORP30", desc: "Exclusive rates for corporate accounts. Contact us for a bespoke fleet plan tailored to your business needs.", valid: "Business accounts only", color: "from-[#07575B] to-[#003B46]", badge: "💼 Corporate", cars: ["All"] },
  { id: 6, title: "Hypercar Experience", discount: "$500 OFF", code: "HYPER500", desc: "Your chance to drive a Bugatti, Koenigsegg, or Pagani. Save $500 on any hypercar booking of 2+ days.", valid: "2+ day rentals only", color: "from-[#001f24] to-[#07575B]", badge: "🚀 Exclusive", cars: ["Hypercar"] },
];

export default function Deals() {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(null);

  useEffect(() => { setVisible(true); }, []);

  const handleCopy = (code) => {
    navigator.clipboard?.writeText(code).catch(() => {});
    setCopied(code);
    setTimeout(() => setCopied(null), 2000);
  };

  const luxuryCars = cars.filter((c) => ["Luxury", "Hypercar"].includes(c.category)).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#000d0f] pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001419] via-[#001f24] to-[#000d0f]" />
        {/* Radial glows */}
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(ellipse at 30% 50%, rgba(102,165,173,0.12) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(7,87,91,0.15) 0%, transparent 50%)" }} />
        <Stars count={90} />

        {/* Floating deal badges */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {["20% OFF", "SAVE BIG", "$500 OFF", "25% OFF"].map((text, i) => (
            <div
              key={i}
              className="absolute font-['Pirata_One'] text-[#07575B]/20 select-none"
              style={{
                fontSize: "clamp(3rem, 8vw, 7rem)",
                left: `${5 + i * 25}%`,
                top: `${10 + (i % 2) * 50}%`,
                transform: `rotate(${-20 + i * 15}deg)`,
              }}
            >{text}</div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#07575B]/30 border border-[#66A5AD]/30 mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-[#66A5AD]" />
            <span className="font-['Krona_One'] text-[10px] tracking-[0.3em] text-[#66A5AD] uppercase">Limited Time Offers</span>
          </div>
          <h1 className="font-['Pirata_One'] text-6xl md:text-8xl text-white mb-4">
            Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66A5AD] to-[#C4DFE6]">Deals</span>
          </h1>
          <p className="font-['Krona_One'] text-sm text-[#C4DFE6]/60 tracking-wide max-w-xl mx-auto">
            Premium drives at exceptional value. Select your offer and use the code at checkout.
          </p>
        </div>
      </section>

      {/* Deal cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal, i) => (
            <div
              key={deal.id}
              className="group relative rounded-2xl overflow-hidden border border-[#07575B]/30 hover:border-[#66A5AD]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,59,70,0.5)]"
              style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)", transition: `all 0.6s ${i * 0.1}s` }}
            >
              {/* BG gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${deal.color} opacity-80`} />
              <div className="absolute inset-0 bg-[#000d0f]/50" />

              {/* Shine */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              <div className="relative z-10 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-['Krona_One'] tracking-widest text-[#C4DFE6]/70 bg-[#001f24]/50 px-3 py-1 rounded-full border border-[#07575B]/30">{deal.badge}</span>
                  <span className="font-['Pirata_One'] text-4xl text-[#66A5AD]">{deal.discount}</span>
                </div>
                <h3 className="font-['Pirata_One'] text-3xl text-white mb-2">{deal.title}</h3>
                <p className="font-['Krona_One'] text-xs text-[#C4DFE6]/60 tracking-wide leading-relaxed mb-6">{deal.desc}</p>

                {/* Code */}
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#001419]/80 border border-[#07575B]/40 mb-4">
                  <span className="flex-1 font-['Krona_One'] text-sm tracking-[0.3em] text-[#66A5AD]">{deal.code}</span>
                  <button
                    onClick={() => handleCopy(deal.code)}
                    className="px-3 py-1.5 rounded-lg bg-[#07575B] hover:bg-[#66A5AD] text-white text-[10px] font-['Krona_One'] tracking-widest transition-colors duration-200"
                  >
                    {copied === deal.code ? "✓ Copied!" : "Copy"}
                  </button>
                </div>

                <p className="font-['Krona_One'] text-[10px] text-[#C4DFE6]/40 tracking-widest mb-4">📅 {deal.valid}</p>

                <Link
                  to={`/cars${deal.cars[0] !== "All" ? `?cat=${deal.cars[0]}` : ""}`}
                  className="block w-full text-center py-3 rounded-xl border border-[#66A5AD]/40 hover:bg-[#07575B]/30 hover:border-[#66A5AD] text-white font-['Krona_One'] text-xs tracking-widest transition-all duration-200"
                >
                  Browse Cars →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured luxury showcase */}
      <section className="relative py-20 bg-[#001419] border-y border-[#07575B]/20 overflow-hidden">
        <Stars count={30} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-['Pirata_One'] text-5xl text-white mb-3">Top Picks for <span className="text-[#66A5AD]">This Month</span></h2>
            <p className="font-['Krona_One'] text-xs text-[#C4DFE6]/50 tracking-widest">Most booked vehicles right now</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {luxuryCars.map((car, i) => (
              <Link
                key={car.id}
                to={`/cars/${car.id}`}
                className="group relative rounded-2xl overflow-hidden h-56 border border-[#07575B]/30 hover:border-[#66A5AD]/50 transition-all duration-500 hover:-translate-y-2"
              >
                <img src={car.image} alt={car.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000d0f] via-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-['Pirata_One'] text-2xl text-white">{car.name}</p>
                  <p className="font-['Krona_One'] text-xs text-[#66A5AD] tracking-widest">${car.price}/day</p>
                </div>
                <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-[#07575B]/80 backdrop-blur-sm text-[10px] font-['Krona_One'] text-[#66A5AD] border border-[#66A5AD]/30">
                  {car.badge}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 max-w-2xl mx-auto px-4 text-center">
        <h2 className="font-['Pirata_One'] text-4xl text-white mb-3">Get Exclusive Offers</h2>
        <p className="font-['Krona_One'] text-xs text-[#C4DFE6]/50 tracking-widest mb-8">Subscribe to receive VIP deals and early access to our newest additions.</p>
        <div className="flex gap-3 max-w-md mx-auto">
          <input type="email" placeholder="your@email.com" className="flex-1 bg-[#001f24] border border-[#07575B]/40 rounded-xl px-4 py-3 text-[#C4DFE6]/80 text-xs font-['Krona_One'] placeholder-[#07575B] focus:outline-none focus:border-[#66A5AD]/60" />
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#07575B] to-[#003B46] text-white text-xs font-['Krona_One'] tracking-widest hover:from-[#66A5AD] hover:to-[#07575B] transition-all duration-300 whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
}
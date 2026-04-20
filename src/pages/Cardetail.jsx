import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Stars from "../components/Stars.jsx";
import { cars } from "../data/cars.js";
import CarCard from "../components/CarCard.jsx";

export default function CarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === Number(id));
  const [imgIndex, setImgIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [visible, setVisible] = useState(false);
  const [booking, setBooking] = useState({ start: "", end: "", days: 1 });
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    if (!car) { navigate("/cars"); return; }
    setVisible(true);
    setImgIndex(0);
    window.scrollTo(0, 0);
  }, [id]);

  if (!car) {
  return <div className="text-white text-center mt-20">Car not found</div>;
}

  const total = booking.days * car.price;

  const related = cars.filter((c) => c.category === car.category && c.id !== car.id).slice(0, 3);

  const terms = [
    { q: "Minimum Age Requirement", a: "Drivers must be at least 25 years of age with a valid driving license held for a minimum of 3 years. International licenses accepted." },
    { q: "Security Deposit", a: `A refundable security deposit of $${car.price * 3} is required at pickup. Returned within 5 business days after return, subject to vehicle inspection.` },
    { q: "Mileage Policy", a: "Unlimited mileage included on all rentals. No hidden charges for distance travelled. Subject to fair use policy in certain regions." },
    { q: "Fuel Policy", a: "Vehicle delivered with a full tank. Return with a full tank to avoid refuelling charges. Fuel type: " + car.fuel },
    { q: "Cancellation Policy", a: "Free cancellation up to 48 hours before pickup. 50% charge for cancellations within 48 hours. No refund for no-shows." },
  ];

  return (
    <div className="min-h-screen bg-[#000d0f] pt-15 ">
      {/* Hero banner */}
<section className="relative pt-12 pb-24 px-4">        
        
        <div
          className="absolute inset-0 flex items-end pb-6 px-4 sm:px-8 max-w-7xl mx-auto transition-all duration-700"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)" }}
        >
          <div className="w-full">
            <div className="flex items-center gap-2 mb-2">
              <Link to="/cars" className="font-['Krona_One'] text-[10px] text-[#66A5AD]/70 hover:text-[#66A5AD] tracking-widest transition-colors">Fleet</Link>
              <span className="text-[#07575B]">/</span>
              <span className="font-['Krona_One'] text-[10px] text-[#C4DFE6]/50 tracking-widest">{car.name}</span>
            </div>
            <div className="flex items-end gap-4 flex-wrap">
              <h1 className="font-['Pirata_One'] text-5xl md:text-6xl text-white">{car.name}</h1>
              {car.badge && (
                <span className="px-3 py-1 rounded-full bg-[#07575B]/80 border border-[#66A5AD]/30 text-[10px] font-['Krona_One'] text-[#66A5AD] uppercase tracking-widest">
                  {car.badge}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT: Carousel + details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Carousel */}
            <div
              className="relative rounded-2xl overflow-hidden bg-[#001f24] border border-[#07575B]/30 transition-all duration-700"
              style={{ opacity: visible ? 1 : 0 }}
            >
              <div className="relative h-72 md:h-96 group">
                <img
                  src={car.images[imgIndex]}
                  alt={car.name}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001f24]/60 to-transparent" />
                {/* Shine sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                {/* Nav arrows */}
                <button
                  onClick={() => setImgIndex((i) => (i - 1 + car.images.length) % car.images.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#001f24]/80 border border-[#07575B]/50 text-[#66A5AD] hover:bg-[#07575B] hover:border-[#66A5AD] transition-all duration-200 flex items-center justify-center text-lg"
                >‹</button>
                <button
                  onClick={() => setImgIndex((i) => (i + 1) % car.images.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#001f24]/80 border border-[#07575B]/50 text-[#66A5AD] hover:bg-[#07575B] hover:border-[#66A5AD] transition-all duration-200 flex items-center justify-center text-lg"
                >›</button>
                {/* Index indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {car.images.map((_, i) => (
                    <button key={i} onClick={() => setImgIndex(i)} className={`rounded-full transition-all duration-300 ${i === imgIndex ? "w-6 h-2 bg-[#66A5AD]" : "w-2 h-2 bg-[#07575B]"}`} />
                  ))}
                </div>
              </div>
              {/* Thumbnails */}
              <div className="flex gap-3 p-4">
                {car.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    className={`flex-1 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 ${i === imgIndex ? "border-[#66A5AD] shadow-[0_0_10px_rgba(102,165,173,0.4)]" : "border-[#07575B]/30 hover:border-[#07575B]"}`}
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="p-6 rounded-2xl bg-[#001f24]/50 border border-[#07575B]/30">
              <h2 className="font-['Pirata_One'] text-3xl text-white mb-4">About This Car</h2>
              <p className="text-[#C4DFE6]/70 font-['Krona_One'] text-sm tracking-wide leading-relaxed">{car.description}</p>
            </div>

            {/* Specs grid */}
            <div className="p-6 rounded-2xl bg-[#001f24]/50 border border-[#07575B]/30">
              <h2 className="font-['Pirata_One'] text-3xl text-white mb-6">Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: "Top Speed", value: car.speed, icon: "🏎️" },
                  { label: "Power", value: car.power, icon: "⚡" },
                  { label: "Transmission", value: car.transmission, icon: "⚙️" },
                  { label: "Fuel Type", value: car.fuel, icon: "⛽" },
                  { label: "Year", value: car.year, icon: "📅" },
                  { label: "Color", value: car.color, icon: "🎨" },
                  { label: "Seats", value: `${car.seats} Persons`, icon: "👥" },
                  { label: "Efficiency", value: car.mileage, icon: "📊" },
                  { label: "AC", value: car.ac ? "Climate Control" : "No AC", icon: "❄️" },
                ].map((spec, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#001419] border border-[#07575B]/20 hover:border-[#66A5AD]/40 transition-colors group">
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">{spec.icon}</div>
                    <p className="font-['Krona_One'] text-[10px] tracking-widest text-[#66A5AD]/70 uppercase">{spec.label}</p>
                    <p className="font-['Krona_One'] text-sm text-white mt-1">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="p-6 rounded-2xl bg-[#001f24]/50 border border-[#07575B]/30">
              <h2 className="font-['Pirata_One'] text-3xl text-white mb-5">Premium Features</h2>
              <div className="grid grid-cols-2 gap-3">
                {car.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#001419] border border-[#07575B]/20">
                    <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#66A5AD] to-[#07575B] flex items-center justify-center text-white text-xs flex-shrink-0">✓</span>
                    <span className="text-[#C4DFE6]/80 font-['Krona_One'] text-xs tracking-wide">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Terms accordion */}
            <div className="rounded-2xl bg-[#001f24]/50 border border-[#07575B]/30 overflow-hidden">
              <div className="px-6 py-4 border-b border-[#07575B]/20">
                <h2 className="font-['Pirata_One'] text-3xl text-white">Rental Terms</h2>
              </div>
              {terms.map((t, i) => (
                <div key={i} className="border-b border-[#07575B]/20 last:border-0">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#07575B]/10 transition-colors group"
                  >
                    <span className="font-['Krona_One'] text-xs tracking-widest text-[#C4DFE6]/80 group-hover:text-white transition-colors">{t.q}</span>
                    <span className={`text-[#66A5AD] text-xl transition-transform duration-300 flex-shrink-0 ml-4 ${openAccordion === i ? "rotate-45" : ""}`}>+</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openAccordion === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                    <p className="px-6 pb-4 font-['Krona_One'] text-xs text-[#C4DFE6]/60 tracking-wide leading-relaxed">{t.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Booking panel */}
          <div className="space-y-6">
            {/* Price card */}
            <div className="sticky top-24 space-y-5">
              <div className="p-6 rounded-2xl bg-gradient-to-b from-[#001f24] to-[#001419] border border-[#07575B]/40 shadow-[0_20px_60px_rgba(0,20,25,0.8)]">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-['Pirata_One'] text-5xl text-[#66A5AD]">${car.price}</span>
                  <span className="font-['Krona_One'] text-xs text-[#C4DFE6]/50 tracking-widest">/day</span>
                </div>
                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-0.5">{Array.from({length:5}).map((_,i) => <span key={i} className={`text-sm ${i < Math.floor(car.rating) ? "text-yellow-400" : "text-[#07575B]"}`}>★</span>)}</div>
                  <span className="font-['Krona_One'] text-xs text-[#C4DFE6]/50">{car.rating} · {car.reviews} reviews</span>
                </div>

                {booked ? (
                  <div className="py-8 text-center">
                    <div className="text-5xl mb-3">🎉</div>
                    <p className="font-['Pirata_One'] text-2xl text-[#66A5AD]">Booking Confirmed!</p>
                    <p className="font-['Krona_One'] text-xs text-[#C4DFE6]/60 mt-2 tracking-wide">We'll contact you shortly.</p>
                    <button onClick={() => setBooked(false)} className="mt-4 text-[10px] font-['Krona_One'] tracking-widest text-[#66A5AD] hover:underline">Book Again</button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <BookInput label="Pickup Date" type="date" />
                    <BookInput label="Return Date" type="date" />
                    <BookInput label="Pickup Location" placeholder="Enter city..." />
                    <div>
                      <label className="font-['Krona_One'] text-[10px] tracking-widest text-[#66A5AD] uppercase block mb-1">Duration</label>
                      <div className="flex items-center gap-3 bg-[#001419] border border-[#07575B]/40 rounded-xl p-3">
                        <button onClick={() => setBooking(b => ({...b, days: Math.max(1, b.days-1)}))} className="w-7 h-7 rounded-full border border-[#07575B] text-[#66A5AD] hover:bg-[#07575B] transition-colors">-</button>
                        <span className="flex-1 text-center font-['Krona_One'] text-sm text-white">{booking.days} day{booking.days > 1 ? "s" : ""}</span>
                        <button onClick={() => setBooking(b => ({...b, days: b.days+1}))} className="w-7 h-7 rounded-full border border-[#07575B] text-[#66A5AD] hover:bg-[#07575B] transition-colors">+</button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-3 border-t border-[#07575B]/30">
                      <span className="font-['Krona_One'] text-xs text-[#C4DFE6]/60 tracking-wide">Total ({booking.days} days)</span>
                      <span className="font-['Pirata_One'] text-2xl text-white">${total}</span>
                    </div>
                   <button
  onClick={() => setBooked(true)}
  className="w-full flex items-center justify-center px-6 py-4 bg-[#66A5AD] text-black rounded-xl font-['Krona_One'] text-xs tracking-widest hover:bg-[#07575B] transition-all"
>
  Reserve Now
</button>
                    <Link to="/contact" className="block text-center py-3 rounded-xl border border-[#07575B]/40 hover:border-[#66A5AD]/60 text-[#C4DFE6]/60 hover:text-white font-['Krona_One'] text-xs tracking-widest transition-all duration-200">
                      Enquire First
                    </Link>
                  </div>
                )}
              </div>

              {/* Quick info */}
              <div className="p-4 rounded-2xl bg-[#001f24]/50 border border-[#07575B]/30 space-y-3">
                {["✅ Free cancellation 48h", "🛡️ Full insurance included", "📍 Flexible pickup", "🔑 Instant confirmation"].map((item, i) => (
                  <p key={i} className="font-['Krona_One'] text-xs text-[#C4DFE6]/60 tracking-wide">{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related cars */}
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-['Pirata_One'] text-4xl text-white mb-8">Similar <span className="text-[#66A5AD]">Vehicles</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((c, i) => (
  <CarCard key={c.id} car={c} index={i} />
))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function BookInput({ label, type = "text", placeholder = "" }) {
  return (
    <div>
      <label className="font-['Krona_One'] text-[10px] tracking-widest text-[#66A5AD] uppercase block mb-1">{label}</label>
      <input type={type} placeholder={placeholder} className="w-full bg-[#001419] border border-[#07575B]/40 rounded-xl px-4 py-3 text-[#C4DFE6]/80 text-xs font-['Krona_One'] placeholder-[#07575B] focus:outline-none focus:border-[#66A5AD]/60 transition-colors" />
    </div>
  );
}
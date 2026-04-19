import { useEffect, useState } from "react";
import Stars from "../components/Stars";

const steps = [
  { icon: "🔍", num: "01", title: "Search & Filter", desc: "Browse our curated collection of 20+ luxury and exotic vehicles. Use smart filters to find your perfect match by category, price, specs, and more." },
  { icon: "📋", num: "02", title: "Select & Book", desc: "Choose your dream car and complete the instant booking form. Select pickup date, return date, and preferred location. No hidden fees." },
  { icon: "📍", num: "03", title: "Pickup Your Car", desc: "Arrive at your chosen location and collect your fully-prepared, immaculately maintained vehicle. We handle the paperwork in minutes." },
  { icon: "🚗", num: "04", title: "Drive & Enjoy", desc: "Experience unparalleled performance and luxury. Every journey becomes extraordinary. Our 24/7 concierge is always available." },
];

const faqs = [
  { q: "What documents do I need?", a: "Valid driving license (held for 3+ years), passport or national ID, and a credit card in the renter's name. International licenses are accepted in most locations." },
  { q: "Is insurance included?", a: "Yes, all rentals include comprehensive insurance coverage. This covers collision damage waiver (CDW) and theft protection. Additional personal accident insurance is available." },
  { q: "Can I extend my rental?", a: "Yes, rental extensions can be arranged subject to vehicle availability. Contact our 24/7 support team at least 24 hours before your scheduled return." },
  { q: "What if the car breaks down?", a: "All vehicles come with full roadside assistance. In the unlikely event of a breakdown, we will arrange an immediate replacement vehicle at no extra cost." },
  { q: "Is there a mileage limit?", a: "All our rentals include unlimited mileage. Drive as far as you like with no worries about per-kilometre charges." },
];

export default function HowItWorks() {
  const [visible, setVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => { setVisible(true); }, []);

  return (
    <div className="min-h-screen bg-[#000d0f] pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001419] via-[#000d0f] to-[#001f24]" />
        {/* Diagonal beams */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute h-[1px] w-96 bg-gradient-to-r from-transparent via-[#07575B]/30 to-transparent"
              style={{ top: `${20 + i * 15}%`, left: `${-10 + i * 25}%`, transform: `rotate(${-30 + i * 10}deg)` }} />
          ))}
        </div>
        <Stars count={80} />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#07575B]/30 border border-[#66A5AD]/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#66A5AD] animate-pulse" />
            <span className="font-['Krona_One'] text-[10px] tracking-[0.3em] text-[#66A5AD] uppercase">Simple · Fast · Luxurious</span>
          </div>
          <h1 className="font-['Pirata_One'] text-6xl md:text-8xl text-white mb-4">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66A5AD] to-[#C4DFE6]">Works</span>
          </h1>
          <p className="font-['Krona_One'] text-sm text-[#C4DFE6]/60 tracking-wide max-w-xl mx-auto leading-relaxed">
            From browsing to driving — we've made the entire experience seamless, elegant, and effortless.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#07575B]/0 via-[#07575B]/50 to-[#07575B]/0 hidden lg:block" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                style={{ opacity: visible ? 1 : 0, transform: visible ? "translateX(0)" : `translateX(${i % 2 === 0 ? -30 : 30}px)`, transition: `all 0.8s ${i * 0.15}s` }}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 1 ? "lg:text-right" : ""}`}>
                  <div className={`inline-flex items-center gap-3 mb-4 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                    <span className="font-['Pirata_One'] text-6xl text-[#07575B]/40">{step.num}</span>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#07575B] to-[#003B46] flex items-center justify-center text-2xl border border-[#66A5AD]/30 shadow-[0_0_20px_rgba(7,87,91,0.4)]">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="font-['Pirata_One'] text-4xl text-white mb-3">{step.title}</h3>
                  <p className="font-['Krona_One'] text-sm text-[#C4DFE6]/60 tracking-wide leading-relaxed max-w-md">{step.desc}</p>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex flex-col items-center z-10">
                  <div className="w-5 h-5 rounded-full bg-[#66A5AD] shadow-[0_0_20px_rgba(102,165,173,0.7)]" />
                </div>

                {/* Visual block */}
                <div className="flex-1">
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-[#001f24] to-[#001419] border border-[#07575B]/30 hover:border-[#66A5AD]/50 transition-all duration-500 hover:-translate-y-1 group text-center">
                    <div className="text-7xl mb-4 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                    <div className="font-['Pirata_One'] text-2xl text-[#66A5AD]">Step {step.num}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="relative py-24 bg-[#001419] border-y border-[#07575B]/20 overflow-hidden">
        <Stars count={40} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-['Pirata_One'] text-5xl text-center text-white mb-16">Our <span className="text-[#66A5AD]">Promise</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🛡️", title: "Full Coverage", desc: "Comprehensive insurance on every vehicle" },
              { icon: "⚡", title: "Instant Booking", desc: "Confirmed in under 60 seconds" },
              { icon: "🔧", title: "Roadside Assist", desc: "24/7 emergency breakdown service" },
              { icon: "💎", title: "Pristine Fleet", desc: "Every car professionally maintained" },
            ].map((g, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#001f24]/50 border border-[#07575B]/30 hover:border-[#66A5AD]/50 text-center group hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{g.icon}</div>
                <h3 className="font-['Pirata_One'] text-xl text-white mb-2">{g.title}</h3>
                <p className="font-['Krona_One'] text-xs text-[#C4DFE6]/50 tracking-wide">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-24">
        <h2 className="font-['Pirata_One'] text-5xl text-center text-white mb-4">FAQ</h2>
        <p className="text-center font-['Krona_One'] text-xs text-[#C4DFE6]/50 tracking-widest mb-12">Common questions answered</p>
        <div className="rounded-2xl overflow-hidden border border-[#07575B]/30 bg-[#001f24]/50">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#07575B]/20 last:border-0">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#07575B]/10 transition-colors group"
              >
                <span className="font-['Krona_One'] text-xs tracking-widest text-[#C4DFE6]/80 group-hover:text-white transition-colors">{faq.q}</span>
                <span className={`text-[#66A5AD] text-xl flex-shrink-0 ml-4 transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="px-6 pb-5 font-['Krona_One'] text-xs text-[#C4DFE6]/50 tracking-wide leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
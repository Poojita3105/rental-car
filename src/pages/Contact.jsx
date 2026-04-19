import { useEffect, useState } from "react";
import Stars from "../components/Stars";

const offices = [
  { city: "New York", address: "350 Fifth Avenue, Manhattan, NY 10118", phone: "+1 (212) 765-4321", hours: "Mon–Sun: 8am–10pm", emoji: "🗽" },
  { city: "London", address: "1 Knightsbridge, Mayfair, London SW1X 7XL", phone: "+44 20 7946 0321", hours: "Mon–Sun: 8am–10pm", emoji: "🎡" },
  { city: "Dubai", address: "Dubai Mall, Financial Centre Rd, Dubai", phone: "+971 4 321 9000", hours: "Mon–Sun: 9am–11pm", emoji: "🌆" },
  { city: "Monaco", address: "Blvd de la Croisette, Monte-Carlo, Monaco", phone: "+377 93 15 6789", hours: "Mon–Sun: 9am–9pm", emoji: "🏎️" },
];

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", car: "", message: "", type: "general" });
  const [sent, setSent] = useState(false);

  useEffect(() => { setVisible(true); }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#000d0f] pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001f24] via-[#000d0f] to-[#001419]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 50% 60%, rgba(7,87,91,0.2) 0%, transparent 60%)" }} />
        <Stars count={80} />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "linear-gradient(rgba(102,165,173,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(102,165,173,0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#07575B]/30 border border-[#66A5AD]/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#66A5AD] animate-pulse" />
            <span className="font-['Krona_One'] text-[10px] tracking-[0.3em] text-[#66A5AD] uppercase">4 Global Locations</span>
          </div>
          <h1 className="font-['Pirata_One'] text-6xl md:text-8xl text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66A5AD] to-[#C4DFE6]">Touch</span>
          </h1>
          <p className="font-['Krona_One'] text-sm text-[#C4DFE6]/60 tracking-wide max-w-xl mx-auto">
            Our concierge team is available 24/7 to assist with bookings, inquiries, and bespoke arrangements.
          </p>
          {/* Quick contact buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[{ icon: "📞", label: "+1 (800) 765-4321" }, { icon: "✉️", label: "hello@royaldrive.com" }, { icon: "💬", label: "Live Chat" }].map((c, i) => (
              <div key={i} className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#001f24]/80 border border-[#07575B]/40 backdrop-blur-sm hover:border-[#66A5AD]/60 transition-colors cursor-pointer group">
                <span>{c.icon}</span>
                <span className="font-['Krona_One'] text-xs tracking-wide text-[#C4DFE6]/70 group-hover:text-white transition-colors">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main grid: form + offices */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl bg-gradient-to-b from-[#001f24] to-[#001419] border border-[#07575B]/40 shadow-[0_20px_60px_rgba(0,20,25,0.8)]">
              <h2 className="font-['Pirata_One'] text-4xl text-white mb-2">Send a Message</h2>
              <p className="font-['Krona_One'] text-xs text-[#C4DFE6]/50 tracking-widest mb-8">We'll reply within 2 hours</p>

              {sent ? (
                <div className="py-16 text-center">
                  <div className="text-6xl mb-4">✉️</div>
                  <h3 className="font-['Pirata_One'] text-3xl text-[#66A5AD] mb-2">Message Sent!</h3>
                  <p className="font-['Krona_One'] text-xs text-[#C4DFE6]/60 tracking-wide">Our team will be in touch very soon.</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-[10px] font-['Krona_One'] tracking-widest text-[#66A5AD] hover:underline">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Inquiry type */}
                  <div>
                    <label className="font-['Krona_One'] text-[10px] tracking-widest text-[#66A5AD] uppercase block mb-2">Inquiry Type</label>
                    <div className="flex flex-wrap gap-2">
                      {["general", "booking", "support", "corporate"].map((t) => (
                        <button
                          key={t} type="button"
                          onClick={() => setForm(f => ({...f, type: t}))}
                          className={`px-4 py-2 rounded-full text-[10px] font-['Krona_One'] tracking-widest capitalize transition-all duration-200 ${
                            form.type === t
                              ? "bg-[#07575B] text-white border border-[#66A5AD]/50"
                              : "bg-[#001419] text-[#C4DFE6]/50 border border-[#07575B]/30 hover:border-[#66A5AD]/40"
                          }`}
                        >{t}</button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ContactInput label="Full Name" placeholder="John Doe" value={form.name} onChange={v => setForm(f => ({...f, name: v}))} required />
                    <ContactInput label="Email" type="email" placeholder="john@example.com" value={form.email} onChange={v => setForm(f => ({...f, email: v}))} required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ContactInput label="Phone" type="tel" placeholder="+1 234 567 8900" value={form.phone} onChange={v => setForm(f => ({...f, phone: v}))} />
                    <div>
                      <label className="font-['Krona_One'] text-[10px] tracking-widest text-[#66A5AD] uppercase block mb-1">Preferred Car</label>
                      <select
                        value={form.car}
                        onChange={e => setForm(f => ({...f, car: e.target.value}))}
                        className="w-full bg-[#001419] border border-[#07575B]/40 rounded-xl px-4 py-3 text-[#C4DFE6]/70 text-xs font-['Krona_One'] focus:outline-none focus:border-[#66A5AD]/60"
                      >
                        <option value="">Select a car...</option>
                        {["Lamborghini Huracán","Ferrari Roma","Bugatti Chiron","Rolls-Royce Ghost","Koenigsegg Regera","Other"].map(c => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="font-['Krona_One'] text-[10px] tracking-widest text-[#66A5AD] uppercase block mb-1">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your rental requirements, dates, or any specific requests..."
                      value={form.message}
                      onChange={e => setForm(f => ({...f, message: e.target.value}))}
                      required
                      className="w-full bg-[#001419] border border-[#07575B]/40 rounded-xl px-4 py-3 text-[#C4DFE6]/80 text-xs font-['Krona_One'] placeholder-[#07575B] focus:outline-none focus:border-[#66A5AD]/60 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#07575B] to-[#003B46] hover:from-[#66A5AD] hover:to-[#07575B] text-white font-['Krona_One'] text-xs tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(7,87,91,0.4)] hover:shadow-[0_0_30px_rgba(102,165,173,0.5)]"
                  >
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Offices */}
          <div className="lg:col-span-2 space-y-5">
            <h2 className="font-['Pirata_One'] text-4xl text-white">Our Offices</h2>
            <p className="font-['Krona_One'] text-xs text-[#C4DFE6]/50 tracking-widest">Visit us in person at any of our global locations</p>
            {offices.map((o, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#001f24]/50 border border-[#07575B]/30 hover:border-[#66A5AD]/50 transition-all duration-300 hover:-translate-y-0.5 group">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{o.emoji}</span>
                  <h3 className="font-['Pirata_One'] text-2xl text-white group-hover:text-[#66A5AD] transition-colors">{o.city}</h3>
                </div>
                <p className="font-['Krona_One'] text-xs text-[#C4DFE6]/60 tracking-wide leading-relaxed mb-2">{o.address}</p>
                <p className="font-['Krona_One'] text-xs text-[#66A5AD] tracking-wider mb-1">{o.phone}</p>
                <p className="font-['Krona_One'] text-[10px] text-[#C4DFE6]/40 tracking-widest">🕐 {o.hours}</p>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="p-5 rounded-2xl bg-[#001f24]/50 border border-[#07575B]/30 text-center">
              <div className="h-40 rounded-xl bg-[#001419] border border-[#07575B]/20 flex items-center justify-center mb-3 relative overflow-hidden">
                {/* Simple map-like visualization */}
                <div className="absolute inset-0 opacity-20"
                  style={{ backgroundImage: "linear-gradient(rgba(102,165,173,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(102,165,173,0.2) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <div className="relative text-center">
                  <div className="text-3xl mb-1">🗺️</div>
                  <p className="font-['Krona_One'] text-xs text-[#66A5AD] tracking-widest">Interactive Map</p>
                  <p className="font-['Krona_One'] text-[10px] text-[#C4DFE6]/40 tracking-wider mt-1">4 Worldwide Locations</p>
                </div>
                {/* Pulsing dots */}
                {[[25,35],[70,55],[45,70],[80,25]].map(([x,y], i) => (
                  <div key={i} className="absolute w-3 h-3" style={{ left: `${x}%`, top: `${y}%` }}>
                    <div className="w-3 h-3 rounded-full bg-[#66A5AD] animate-ping opacity-60" />
                    <div className="absolute inset-0.5 rounded-full bg-[#66A5AD]" />
                  </div>
                ))}
              </div>
              <p className="font-['Krona_One'] text-[10px] text-[#C4DFE6]/40 tracking-widest">All locations offer valet service</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactInput({ label, type = "text", placeholder, value, onChange, required }) {
  return (
    <div>
      <label className="font-['Krona_One'] text-[10px] tracking-widest text-[#66A5AD] uppercase block mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        required={required}
        className="w-full bg-[#001419] border border-[#07575B]/40 rounded-xl px-4 py-3 text-[#C4DFE6]/80 text-xs font-['Krona_One'] placeholder-[#07575B] focus:outline-none focus:border-[#66A5AD]/60 transition-colors"
      />
    </div>
  );
}
import { Link } from "react-router-dom";

export default function CarCard({ car, index = 0 }) {
  return (
    <div
      className="group relative bg-gradient-to-b from-[#001f24] to-[#000d0f] rounded-2xl overflow-hidden border border-[#07575B]/30 hover:border-[#66A5AD]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,59,70,0.6)]"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Badge */}
      {car.badge && (
        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-[#07575B]/80 backdrop-blur-sm border border-[#66A5AD]/30 text-[10px] font-['Krona_One'] tracking-widest text-[#66A5AD] uppercase">
          {car.badge}
        </div>
      )}

      {/* Price */}
      <div className="absolute top-3 right-3 z-10 px-3 py-1.5 rounded-full bg-[#001f24]/90 backdrop-blur-sm border border-[#07575B]/50 text-xs font-['Krona_One'] text-white">
        <span className="text-[#66A5AD]">${car.price}</span>
        <span className="text-[#C4DFE6]/50">/day</span>
      </div>

      {/* Image */}
      <div className="relative h-44 overflow-hidden bg-[#000d0f]">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001f24] via-transparent to-transparent" />
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-[#66A5AD] text-[10px] font-['Krona_One'] tracking-[0.2em] uppercase mb-1">{car.category}</p>
        <h3 className="text-white font-['Pirata_One'] text-xl leading-tight mb-3 group-hover:text-[#66A5AD] transition-colors duration-300">
          {car.name}
        </h3>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <SpecItem icon="👥" value={`${car.seats} Seats`} />
          <SpecItem icon="⛽" value={car.fuel} />
          <SpecItem icon="❄️" value={car.ac ? "AC" : "No AC"} />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className={`text-xs ${i < Math.floor(car.rating) ? "text-yellow-400" : "text-[#07575B]"}`}>★</span>
            ))}
          </div>
          <span className="text-[#C4DFE6]/50 text-xs font-['Krona_One']">{car.rating} ({car.reviews})</span>
        </div>

        <Link
          to={`/cars/${car.id}`}
          className="block w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-[#07575B] to-[#003B46] text-white text-xs font-['Krona_One'] tracking-widest border border-[#66A5AD]/20 hover:border-[#66A5AD]/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(7,87,91,0.5)] relative overflow-hidden group/btn"
        >
          <span className="relative z-10">View Details</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#66A5AD] to-[#07575B] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
}

function SpecItem({ icon, value }) {
  return (
    <div className="flex flex-col items-center gap-1 bg-[#07575B]/10 rounded-lg p-2 border border-[#07575B]/20">
      <span className="text-sm">{icon}</span>
      <span className="text-[#C4DFE6]/70 text-[10px] font-['Krona_One'] tracking-wide">{value}</span>
    </div>
  );
}
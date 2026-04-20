import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Stars from "../components/Stars.jsx";
import CarCard from "../components/CarCard.jsx";
import { cars, categories } from "../data/cars.js";

export default function Cars() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const [sort, setSort] = useState("default");
  const [priceMax, setPriceMax] = useState(1500);
  const [visible, setVisible] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setVisible(true);
    const c = searchParams.get("cat");
    if (c) setCat(c);
  }, [searchParams]);

  const filtered = cars
    .filter((c) => (cat === "All" ? true : c.category === cat))
    .filter((c) => c.price <= priceMax)
    .filter((c) =>
      search === "" ? true : c.name.toLowerCase().includes(search.toLowerCase()) || c.category.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="min-h-screen bg-[#072731d1] pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[] via-[#0c99ae5e] to-[#001419]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(7,87,91,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(102,165,173,0.1) 0%, transparent 40%)" }} />
        <Stars count={70} />

        {/* Animated lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[20, 40, 60, 80].map((top) => (
            <div key={top} className="absolute h-[1px] left-0 right-0 bg-gradient-to-r from-transparent via-[#07575B]/30 to-transparent animate-pulse" style={{ top: `${top}%` }} />
          ))}
        </div>

        <div
          className="relative z-10 text-center max-w-4xl mx-auto px-4 transition-all duration-1000"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#07575B]/30 border border-[#66A5AD]/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#66A5AD] animate-pulse" />
            <span className="font-['Krona_One'] text-[10px] tracking-[0.3em] text-[gold]/80 uppercase">20 Exclusive Vehicles</span>
          </div>
          <h1 className="font-['Pirata_One'] text-6xl md:text-8xl text-white mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66A5AD] to-[#C4DFE6]">Fleet</span>
          </h1>
         <p className="font-['Krona_One'] text-sm text-[white]/80 tracking-wide max-w-xl mx-auto">
            From hypercars to luxury saloons — discover your perfect drive
          </p>
          {/* Decorative car silhouettes */}
          <div className="mt-10 flex justify-center gap-4 opacity-20">
            {[1,2,3].map(i => (
              <div key={i} className="w-24 h-10 rounded-lg overflow-hidden">
                <img src={cars[i-1]?.image} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 md:top-20 z-40 bg-[#000d0f]/95 backdrop-blur-xl border-y border-[#07575B]/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-xs">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#66A5AD] text-sm">🔍</span>
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search cars..."
                className="w-full pl-9 pr-4 py-2.5 bg-[#001f24] border border-[#07575B]/40 rounded-xl text-[#C4DFE6]/80 text-xs font-['Krona_One'] placeholder-[#07575B] focus:outline-none focus:border-[#66A5AD]/60 transition-colors"
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-3 py-1.5 rounded-full text-[10px] font-['Krona_One'] tracking-widest transition-all duration-200 ${
                    cat === c
                      ? "bg-[#07575B] text-white border border-[#66A5AD]/50 shadow-[0_0_10px_rgba(7,87,91,0.5)]"
                      : "bg-[#001f24] text-[#C4DFE6]/60 border border-[#07575B]/30 hover:border-[#66A5AD]/40 hover:text-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-[#001f24] border border-[#07575B]/40 rounded-xl px-4 py-2.5 text-[#C4DFE6]/70 text-xs font-['Krona_One'] focus:outline-none focus:border-[#66A5AD]/60"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price ↑</option>
              <option value="price-desc">Price ↓</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {/* Price range */}
          <div className="mt-3 flex items-center gap-4">
            <span className="font-['Krona_One'] text-[10px] tracking-widest text-[#66A5AD] uppercase whitespace-nowrap">Max Price:</span>
            <input
              type="range" min={200} max={1500} step={50}
              value={priceMax}
              onChange={(e) => setPriceMax(Number(e.target.value))}
              className="flex-1 max-w-xs accent-[#66A5AD]"
            />
            <span className="font-['Krona_One'] text-xs text-white w-20">${priceMax}/day</span>
            <span className="font-['Krona_One'] text-[10px] text-[#66A5AD]/60">{filtered.length} cars</span>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-6xl mb-4">🔍</p>
            <p className="font-['Pirata_One'] text-3xl text-[#66A5AD]">No cars found</p>
            <p className="font-['Krona_One'] text-sm text-[#C4DFE6]/50 mt-2 tracking-wide">Try adjusting your filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((car, i) => <CarCard key={car.id} car={car} index={i} />)}
          </div>
        )}
      </section>
    </div>
  );
  
}
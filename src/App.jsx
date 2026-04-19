import { useState, useRef, useCallback } from "react";
import "./index.css";

import Splash   from "./components/Splash";
import Navbar   from "./components/Navbar";
import Toast    from "./components/Toast";

import Home       from "./pages/Home";
import Cars       from "./pages/Cars";
import HowItWorks from "./pages/HowItWorks";
import Deals      from "./pages/Deals";
import Contact    from "./pages/Contact";

const App = () => {
  const [splashDone,  setSplashDone]  = useState(false);
  const [page,        setPage]        = useState("Home");
  const [bookedCar,   setBookedCar]   = useState(null);
  const scrollRef = useRef(null);

  const handleSplashDone = useCallback(() => setSplashDone(true), []);

  const handleSetPage = useCallback((p) => {
    setPage(p);
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleBook = useCallback((car) => {
    setBookedCar(car);
  }, []);

  const handleToastClose = useCallback(() => setBookedCar(null), []);

  return (
    <>
      {/* ── Splash ── */}
      {!splashDone && <Splash onDone={handleSplashDone} />}

      {/* ── Main app ── */}
      <div
        ref={scrollRef}
        className="page-scroll"
        style={{
          opacity:    splashDone ? 1 : 0,
          transition: "opacity 0.5s ease",
          pointerEvents: splashDone ? "auto" : "none",
        }}
      >
        <Navbar page={page} setPage={handleSetPage} />

        {page === "Home"         && <Home        setPage={handleSetPage} onBook={handleBook} />}
        {page === "Cars"         && <Cars        setPage={handleSetPage} onBook={handleBook} />}
        {page === "How It Works" && <HowItWorks  setPage={handleSetPage} />}
        {page === "Deals"        && <Deals       setPage={handleSetPage} />}
        {page === "Contact"      && <Contact     setPage={handleSetPage} />}
      </div>

      {/* ── Booking toast ── */}
      {bookedCar && <Toast car={bookedCar} onClose={handleToastClose} />}
    </>
  );
};

export default App;
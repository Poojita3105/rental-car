import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Intro from "./components/Intro.jsx";

import Home from "./pages/Home.jsx";
import Cars from "./pages/Cars.jsx";
import CarDetail from "./pages/CarDetail.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import Deals from "./pages/Deals.jsx";
import Contact from "./pages/Contact.jsx";

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
}

function Layout() { 
  return (
    <div className="min-h-screen flex flex-col bg-[#000d0f]">
      <ScrollToTop />

      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/cars/:id" element={<CarDetail />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <BrowserRouter>
      {/* App always mounted */}
      <Layout />

      {/* Intro overlays on top */}
      {showIntro && <Intro onDone={() => setShowIntro(false)} />}
    </BrowserRouter>
  );
}
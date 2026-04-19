import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetail from "./pages/CarDetail";
import HowItWorks from "./pages/HowItWorks";
import Deals from "./pages/Deals";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();
  // Scroll to top on navigation
  useState(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#000d0f]">
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
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}
      <div style={{ visibility: introDone ? "visible" : "hidden" }}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
    </>
  );
}
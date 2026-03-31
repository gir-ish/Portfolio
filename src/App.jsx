import "./components/tokens.css";
import "./components/global.css";

import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header           from "./components/Header.jsx";
import Home             from "./components/Home.jsx";
import Publication      from "./components/Publication.jsx";
import Project          from "./components/Project.jsx";
import Awards           from "./components/awards.jsx";
import News             from "./components/News.jsx";
import Skills           from "./components/Skills.jsx";
import Blog             from "./components/Blog.jsx";
import SplashScreen     from "./components/SplashScreen.jsx";
import PageTransition   from "./components/PageTransition.jsx";
import ParticleBackground from "./components/ParticleBackground.jsx";
import BackToTop        from "./components/BackToTop.jsx";

/* ── Custom cursor (desktop only) ── */
function CustomCursor() {
  const [pos, setPos]         = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove  = (e) => { setPos({ x: e.clientX, y: e.clientY }); setVisible(true); };
    const onLeave = ()  => setVisible(false);
    const onEnter = ()  => setVisible(true);

    document.addEventListener("mousemove",  onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      document.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <div
      className={`custom-cursor${visible ? " cursor-visible" : ""}`}
      style={{ left: pos.x, top: pos.y }}
      aria-hidden="true"
    />
  );
}

/* ── Animated routes ── */
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"            element={<PageTransition><Home /></PageTransition>} />
        <Route path="/publication" element={<PageTransition><Publication /></PageTransition>} />
        <Route path="/project"     element={<PageTransition><Project /></PageTransition>} />
        <Route path="/skills"      element={<PageTransition><Skills /></PageTransition>} />
        <Route path="/awards"      element={<PageTransition><Awards /></PageTransition>} />
        <Route path="/news"        element={<PageTransition><News /></PageTransition>} />
        <Route path="/blog"        element={<PageTransition><Blog /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  const year = new Date().getFullYear();
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}

      <ParticleBackground />
      <CustomCursor />
      <Header />

      <AnimatedRoutes />

      <BackToTop />

      <footer className="site-footer" aria-label="Footer">
        <div className="page">
          <p className="footer-text">
            © {year} Girish. Last updated: Mar 2026.
          </p>
        </div>
      </footer>
    </>
  );
}

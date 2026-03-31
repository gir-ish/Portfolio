// src/App.jsx
import "./components/tokens.css";
import "./components/global.css";

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header     from "./components/Header.jsx";
import Home       from "./components/Home.jsx";
import Publication from "./components/Publication.jsx";
import Project    from "./components/Project.jsx";
import Awards     from "./components/awards.jsx";
import News       from "./components/News.jsx";
import Skills     from "./components/Skills.jsx";

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

export default function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <CustomCursor />
      <Header />

      <Routes>
        <Route path="/"            element={<Home />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/project"     element={<Project />} />
        <Route path="/skills"      element={<Skills />} />
        <Route path="/awards"      element={<Awards />} />
        <Route path="/news"        element={<News />} />
      </Routes>

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

// src/App.jsx

// ✅ CSS (better relative paths)
import "./components/tokens.css";
import "./components/global.css";

import Header from "./components/Header.jsx";
import Publication from "./components/Publication.jsx";
import Home from "./components/Home.jsx";
import Project from "./components/Project.jsx"; // ✅ from components folder

import { Routes, Route } from "react-router-dom";
import Awards from "./components/awards.jsx";
import News from "./components/News.jsx";




export default function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/project" element={<Project />} />
        <Route path="/awards" element={<Awards/>} />
        <Route path="/news" element={<News/>} />
       </Routes>

    
      <footer className="site-footer" aria-label="Footer">
        <div className="page">
          <p className="footer-text">
            © {year} Girish. Last updated: March 2026.
          </p>
        </div>
      </footer>
    </>
  );
}
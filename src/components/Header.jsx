// src/components/Header.jsx
import "./Header.css";
import { useEffect, useState } from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiGooglescholar } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", dark);
  }, [dark]);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? " header-scrolled" : ""}`} role="banner">
      {/* Scroll progress bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="bar">
        {/* LEFT: SOCIAL ICONS */}
        <div className="icon-row">
          <a href="mailto:girish.research.pr@gmail.com" className="icon-button" aria-label="Email">
            <MdEmail />
          </a>
          <a
            href="https://scholar.google.com/citations?user=4HIGa7AAAAAJ&hl=en"
            className="icon-button"
            target="_blank"
            rel="noreferrer"
            aria-label="Google Scholar"
          >
            <SiGooglescholar />
          </a>
          <a
            href="https://github.com/gir-ish"
            className="icon-button"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaSquareGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/girish-b794092a1"
            className="icon-button"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* CENTER/RIGHT: NAV */}
        <nav
          id="main-nav"
          className={`nav ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink to="/"           className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} onClick={handleNavClick}>About</NavLink>
          <NavLink to="/publication" className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} onClick={handleNavClick}>Publications</NavLink>
          <NavLink to="/project"    className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} onClick={handleNavClick}>Projects</NavLink>
          <NavLink to="/skills"     className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} onClick={handleNavClick}>Skills</NavLink>
          <NavLink to="/awards"     className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} onClick={handleNavClick}>Awards</NavLink>
          <NavLink to="/news"       className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} onClick={handleNavClick}>News</NavLink>
          <NavLink to="/blog"       className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} onClick={handleNavClick}>Blog</NavLink>

          {/* CV Download */}
          <a
            href={`${import.meta.env.BASE_URL}Girish_CV.pdf`}
            download="Girish_CV.pdf"
            className="cv-download-btn"
            onClick={handleNavClick}
          >
            CV ↓
          </a>
        </nav>

        {/* FAR RIGHT: THEME TOGGLE + HAMBURGER */}
        <div className="right-controls">
          <button
            className="icon-button theme-toggle"
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
          >
            {dark ? "☀" : "☾"}
          </button>
          <button
            className={`icon-button nav-toggle ${menuOpen ? "nav-toggle-open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="divider" />
    </header>
  );
}

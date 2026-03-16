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
  // Dark mode state (stored in localStorage)
  const [dark, setDark] = useState(
    () => localStorage.getItem("darkMode") === "true"
  );

  // Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (dark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", dark);
  }, [dark]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header" role="banner">
      <div className="bar">
        {/* ===== LEFT: SOCIAL ICONS (ALWAYS VISIBLE) ===== */}
        <div className="icon-row">
          {/* Email */}
          <a
            href="mailto:girish.research.pr@gmail.com"
            className="icon-button"
            aria-label="Email"
          >
            <MdEmail />
          </a>

          {/* Google Scholar */}
          <a
            href="https://scholar.google.com/citations?user=4HIGa7AAAAAJ&hl=en"
            className="icon-button"
            target="_blank"
            rel="noreferrer"
            aria-label="Google Scholar"
          >
            <SiGooglescholar />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/gir-ish"
            className="icon-button"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaSquareGithub />
          </a>

          {/* LinkedIn */}
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

        {/* ===== CENTER/RIGHT: NAV (DESKTOP INLINE, MOBILE DROPDOWN) ===== */}
        <nav
          id="main-nav"
          className={`nav ${menuOpen ? "nav-open" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link${isActive ? " active" : ""}`
            }
            onClick={handleNavClick}
          >
            About
          </NavLink>

          <NavLink
            to="/publication"
            className={({ isActive }) =>
              `nav-link${isActive ? " active" : ""}`
            }
            onClick={handleNavClick}
          >
            Publications
          </NavLink>

          <NavLink
            to="/project"
            className={({ isActive }) =>
              `nav-link${isActive ? " active" : ""}`
            }
            onClick={handleNavClick}
          >
            Project
          </NavLink>

          <NavLink
            to="/awards"
            className={({ isActive }) =>
              `nav-link${isActive ? " active" : ""}`
            }
            onClick={handleNavClick}
          >
            Awards
          </NavLink>

          <NavLink
            to="/news"
            className={({ isActive }) =>
              `nav-link${isActive ? " active" : ""}`
            }
            onClick={handleNavClick}
          >
            News
          </NavLink>
        </nav>

        {/* ===== FAR RIGHT: THEME TOGGLE + HAMBURGER ===== */}
        <div className="right-controls">
          {/* theme toggle */}
          <button
            className="icon-button theme-toggle"
            aria-label="Toggle theme"
            onClick={() => setDark((d) => !d)}
          >
            {dark ? "☀" : "☾"}
          </button>

          {/* hamburger (only visible on mobile via CSS) */}
          <button
            className={`icon-button nav-toggle ${
              menuOpen ? "nav-toggle-open" : ""
            }`}
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
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate, useLocation } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import About from './pages/About';
import CV from './pages/CV';
import Publication from './pages/Publication';
import Project from './pages/Project';
import './App.css';
import { PageTransition, ScrollProgress } from './components/Motion';
import { AnimatePresence } from 'framer-motion';

function RoutesWithAnimation(){
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/publication" element={<Publication />} />
          <Route path="/project" element={<Project />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </PageTransition>
    </AnimatePresence>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "App" : "App light"}>
      <Router>
        <ScrollProgress />
        <header className="header">
          <nav className="nav">
            <div className="brand">
              <div className="mark">Girish</div>
              <div className="role">Speech & Audio AI</div>
            </div>
            <ul className="nav-links">
              <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
              <li><NavLink to="/publication" className={({isActive}) => isActive ? 'active' : ''}>Publications</NavLink></li>
              <li><NavLink to="/project" className={({isActive}) => isActive ? 'active' : ''}>Projects</NavLink></li>
              <li><NavLink to="/cv" className={({isActive}) => isActive ? 'active' : ''}>CV</NavLink></li>
            </ul>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </nav>
          <hr className="divider" />
        </header>

        <main className="container">
          <RoutesWithAnimation />
        </main>

        <footer style={{padding:'2rem 1rem', color:'var(--muted)', textAlign:'center'}}>
          © {new Date().getFullYear()} Girish — Research Associate, IIIT-Delhi
        </footer>
      </Router>
    </div>
  );
}

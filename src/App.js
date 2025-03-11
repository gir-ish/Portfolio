import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import About from './pages/About';
import CV from './pages/CV';
import Publication from './pages/Publication';
import Project from './pages/Project';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "App dark" : "App light"}>
      <Router>
        <header className="header">
          <nav>
            <ul className="nav-links">
              <li><Link to="/">About</Link></li>
              <li><Link to="/publication">Publication</Link></li>
              <li><Link to="/project">Project</Link></li>
              <li><Link to="/cv">CV</Link></li>
            </ul>
            <button className="theme-toggle" onClick={toggleTheme}>
              {darkMode ? (
                <FaSun style={{ color: 'yellow', fontSize: '1.5rem' }} />
              ) : (
                <FaMoon style={{ color: 'blue', fontSize: '1.5rem' }} />
              )}
            </button>
          </nav>
          <hr className="divider" />
        </header>

        <main className="container">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/publication" element={<Publication />} />
            <Route path="/project" element={<Project />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;

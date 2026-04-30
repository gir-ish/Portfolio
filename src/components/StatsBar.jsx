import { useEffect, useRef, useState } from "react";
import "./StatsBar.css";

const SCHOLAR_URL = "https://scholar.google.com/citations?user=4HIGa7AAAAAJ&hl=en";

const STATIC_STATS = [
  { value: 23, label: "Publications", icon: "📄" },
  { value: 5,  label: "Experiences",  icon: "💼" },
  { value: 3,  label: "Awards",       icon: "🏆" },
  { value: 4,  label: "Projects",     icon: "⚙️" },
];

/* ── Flip digit animation ── */
function FlipNumber({ target, started }) {
  const [displayed, setDisplayed] = useState(0);
  const [flipping,  setFlipping]  = useState(false);
  const prev = useRef(0);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const total  = 30;
    const step   = Math.max(1, Math.ceil(target / total));

    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setFlipping(true);
      setTimeout(() => {
        setDisplayed(current);
        setFlipping(false);
        prev.current = current;
      }, 120);
      if (current >= target) clearInterval(timer);
    }, 60);

    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span className={`flip-num${flipping ? " flip-num--flipping" : ""}`}>
      {displayed}
    </span>
  );
}

export default function StatsBar() {
  const [started,   setStarted]   = useState(false);
  const [citations, setCitations] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}citations.json`)
      .then((r) => r.json())
      .then((d) => setCitations(d.citations ?? 0))
      .catch(() => setCitations(0));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-bar" ref={ref}>
      {STATIC_STATS.map((s) => (
        <div key={s.label} className="stat-item">
          <span className="stat-icon">{s.icon}</span>
          <span className="stat-number">
            <FlipNumber target={s.value} started={started} />
          </span>
          <span className="stat-label">{s.label}</span>
        </div>
      ))}

      <a
        className="stat-item stat-item--link"
        href={SCHOLAR_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="View on Google Scholar"
      >
        <span className="stat-icon">🎓</span>
        <span className="stat-number stat-number--scholar">
          {citations === null
            ? <span className="stat-loading">…</span>
            : <FlipNumber target={citations} started={started && citations !== null} />
          }
        </span>
        <span className="stat-label">Citations</span>
        <span className="stat-scholar-badge">Google Scholar ↗</span>
      </a>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import "./StatsBar.css";

const SCHOLAR_URL = "https://scholar.google.com/citations?user=4HIGa7AAAAAJ&hl=en";

const STATIC_STATS = [
  { value: 19, label: "Publications", icon: "📄" },
  { value: 5,  label: "Experiences",  icon: "💼" },
  { value: 3,  label: "Awards",       icon: "🏆" },
  { value: 4,  label: "Projects",     icon: "⚙️" },
];

function CountUp({ target, started }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started || target === null) return;
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 40));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [started, target]);
  return <>{count}</>;
}

export default function StatsBar() {
  const [started, setStarted] = useState(false);
  const [citations, setCitations] = useState(null);
  const ref = useRef(null);

  // Fetch live citation count
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}citations.json`)
      .then((r) => r.json())
      .then((d) => setCitations(d.citations ?? 0))
      .catch(() => setCitations(0));
  }, []);

  // Trigger count-up when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
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
            <CountUp target={s.value} started={started} />
          </span>
          <span className="stat-label">{s.label}</span>
        </div>
      ))}

      {/* Citations — links to Google Scholar */}
      <a
        className="stat-item stat-item--link"
        href={SCHOLAR_URL}
        target="_blank"
        rel="noopener noreferrer"
        title="View on Google Scholar"
      >
        <span className="stat-icon">🎓</span>
        <span className="stat-number stat-number--scholar">
          {citations === null ? (
            <span className="stat-loading">…</span>
          ) : (
            <CountUp target={citations} started={started && citations !== null} />
          )}
        </span>
        <span className="stat-label">Citations</span>
        <span className="stat-scholar-badge">Google Scholar ↗</span>
      </a>
    </div>
  );
}

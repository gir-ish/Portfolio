import { useEffect, useState } from "react";
import "./Spotlight.css";

export default function Spotlight() {
  const [pos, setPos]   = useState({ x: -999, y: -999 });
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const check = () => setDark(document.body.classList.contains("dark-mode"));
    check();
    const mo = new MutationObserver(check);
    mo.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => { window.removeEventListener("mousemove", onMove); mo.disconnect(); };
  }, []);

  return (
    <div
      className="spotlight"
      style={{
        background: dark
          ? `radial-gradient(700px circle at ${pos.x}px ${pos.y}px, rgba(14,56,122,0.08), transparent 65%)`
          : `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(14,56,122,0.04), transparent 65%)`,
      }}
      aria-hidden="true"
    />
  );
}

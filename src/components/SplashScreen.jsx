import { useEffect, useState } from "react";
import "./SplashScreen.css";

const BARS = [10, 22, 32, 20, 28, 14, 24, 18];

export default function SplashScreen({ onDone }) {
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 1800);
    const t2 = setTimeout(() => onDone(), 2300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [onDone]);

  return (
    <div className={`splash${hiding ? " splash--hide" : ""}`} aria-hidden="true">
      <div className="splash-inner">
        <div className="splash-wave">
          {BARS.map((h, i) => (
            <div
              key={i}
              className="splash-bar"
              style={{ "--h": `${h}px`, "--i": i }}
            />
          ))}
        </div>
        <p className="splash-name">Girish</p>
        <p className="splash-sub">Research Portfolio</p>
      </div>
    </div>
  );
}

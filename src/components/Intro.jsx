// src/components/Intro.jsx
import "./intro.css";
import avatar from "../../public/girish.jpg";
import { useState, useEffect, useRef } from "react";

const TAGLINE = "Speech, Multimodal Learning and Audio Language Models";

const INTERESTS = [
  "Speech Processing",
  "Multimodal Learning",
  "Audio Language Models",
  "Speech Deepfake Detection",
  "Affective Computing",
  "Speech for Healthcare",
];

// Heights (px) for each equalizer bar — 7 bars, irregular for organic feel
const EQ_BARS = [14, 22, 28, 18, 26, 16, 24];

export default function Intro() {
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    let i = 0;
    intervalRef.current = setInterval(() => {
      i += 1;
      setDisplayedText(TAGLINE.slice(0, i));
      if (i >= TAGLINE.length) {
        clearInterval(intervalRef.current);
        setTimeout(() => setCursorVisible(false), 1200);
      }
    }, 55);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section id="about" className="intro section">
      <div className="page-grid">

        {/* Column 1: Avatar wrap with pulse rings + equalizer */}
        <div className="avatar-wrap">
          <img
            className="avatar"
            src={avatar}
            alt="Portrait of Girish"
            width="335"
            height="355"
            loading="lazy"
            decoding="async"
          />
          <div className="equalizer" aria-hidden="true">
            {EQ_BARS.map((maxH, idx) => (
              <span
                key={idx}
                className="eq-bar"
                style={{ "--bar-max-h": `${maxH}px`, "--bar-i": idx }}
              />
            ))}
          </div>
        </div>

        {/* Column 2: Text content */}
        <div className="intro-col">
          <h1 className="intro-name">Girish</h1>

          <div className="intro-badge">
            U.G. Research Associate @ IIIT-Delhi &nbsp;|&nbsp; B.Tech (Hons.) '26 @ UPES
          </div>

          <h2 className="intro-tagline">
            {displayedText}
            <span
              className={cursorVisible ? "cursor blink" : "cursor"}
              aria-hidden="true"
            >|</span>
          </h2>

          <p className="intro-desc">
            I work on <span className="hi">speech processing</span>,
            <span className="hi"> multimodal learning</span>, and
            <span className="hi"> Audio Language Models</span>, with a focus on
            practical AI for <span className="hi">speech deepfake detection</span>,
            <span className="hi"> affective computing</span>, and
            <span className="hi"> healthcare applications</span>. My research spans
            deepfake attribution, speech emotion recognition, code-switched speech
            analysis for autism, and cross-domain modeling with speech foundation
            models, with the goal of building robust systems for real-world deployment.
          </p>
        </div>

        {/* Column 2 row 2: Research interest chips */}
        <div className="interests">
          <h3 className="interests-title">Research Interests</h3>
          <div className="interest-chips">
            {INTERESTS.map((label, idx) => (
              <span
                key={label}
                className="chip"
                style={{ "--chip-i": idx }}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

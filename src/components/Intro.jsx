import "./intro.css";
import avatar from "../../public/girish.jpg";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TAGLINE    = "Speech, Multimodal Learning and Audio Language Models";
const NAME       = "Girish";
const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*";

const INTERESTS = [
  "Speech Processing", "Multimodal Learning", "Audio Language Models",
  "Speech Deepfake Detection", "Affective Computing", "Speech for Healthcare",
];

const EQ_BARS = [14, 22, 28, 18, 26, 16, 24];

/* ── Scramble hook ── */
function useScramble(target, startDelay = 400) {
  const [text, setText] = useState(target);
  useEffect(() => {
    let iteration = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setText(
          target.split("").map((ch, idx) => {
            if (idx < Math.floor(iteration)) return ch;
            if (ch === " ") return " ";
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          }).join("")
        );
        iteration += 0.4;
        if (iteration >= target.length + 1) { clearInterval(interval); setText(target); }
      }, 40);
    }, startDelay);
    return () => { clearTimeout(timeout); clearInterval(interval); };
  }, [target, startDelay]);
  return text;
}

/* ── Wave text ── */
function WaveText({ text, className }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span key={i} className="wave-char" style={{ "--wi": i }} aria-hidden="true">
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

export default function Intro() {
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible]  = useState(true);
  const intervalRef = useRef(null);
  const sectionRef  = useRef(null);
  const scrambledName = useScramble(NAME, 300);

  /* typewriter */
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

  /* parallax on scroll */
  const { scrollY } = useScroll();
  const avatarY = useTransform(scrollY, [0, 400], [0, -40]);
  const textY   = useTransform(scrollY, [0, 400], [0, -20]);

  return (
    <section id="about" className="intro section" ref={sectionRef}>
      <div className="page-grid">

        {/* Column 1: Avatar + blob + equalizer */}
        <motion.div className="avatar-wrap" style={{ y: avatarY }}>
          {/* Morphing blob */}
          <div className="blob" aria-hidden="true" />

          <img
            className="avatar"
            src={avatar}
            alt="Portrait of Girish"
            width="335" height="355"
            loading="lazy" decoding="async"
          />
          <div className="equalizer" aria-hidden="true">
            {EQ_BARS.map((maxH, idx) => (
              <span key={idx} className="eq-bar"
                style={{ "--bar-max-h": `${maxH}px`, "--bar-i": idx }} />
            ))}
          </div>
        </motion.div>

        {/* Column 2: Text content */}
        <motion.div className="intro-col" style={{ y: textY }}>
          {/* Scramble + glitch on name */}
          <h1 className="intro-name glitch" data-text={scrambledName}>
            {scrambledName}
          </h1>

          <div className="intro-badge">
            U.G. Research Associate @ IIIT-Delhi &nbsp;|&nbsp; B.Tech (Hons.) '26 @ UPES
          </div>

          <h2 className="intro-tagline">
            {displayedText}
            <span className={cursorVisible ? "cursor blink" : "cursor"} aria-hidden="true">|</span>
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
        </motion.div>

        {/* Research interest chips */}
        <div className="interests">
          <WaveText text="Research Interests" className="interests-title" />
          <div className="interest-chips">
            {INTERESTS.map((label, idx) => (
              <span key={label} className="chip" style={{ "--chip-i": idx }}>{label}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

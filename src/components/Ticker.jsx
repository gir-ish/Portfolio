import "./Ticker.css";

const KEYWORDS = [
  "Speech Deepfake Detection", "Emotion Recognition", "INTERSPEECH 2025",
  "EACL 2026", "Multimodal AI", "Audio Language Models",
  "Affective Computing", "Speech for Healthcare", "ICASSP 2025",
  "Deepfake Attribution", "Code-Switched Speech", "Foundation Models",
  "NLP", "APSIPA 2025", "EUSIPCO 2025", "Cross-Domain Modeling",
];

export default function Ticker() {
  const items = [...KEYWORDS, ...KEYWORDS];
  return (
    <div className="ticker-wrap" aria-hidden="true">
      <div className="ticker-track">
        {items.map((k, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-sep">◆</span>
            {k}
          </span>
        ))}
      </div>
    </div>
  );
}

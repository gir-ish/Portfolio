import React, { useEffect, useRef } from "react";
import "./News.css";

const TYPE = {
  paper:      { icon: "📄", color: "#0e387a", bg: "#e0f2ff", label: "Paper"      },
  award:      { icon: "🏆", color: "#b45309", bg: "#fef3c7", label: "Award"      },
  work:       { icon: "💼", color: "#065f46", bg: "#d1fae5", label: "Experience" },
  conference: { icon: "🎤", color: "#7c3aed", bg: "#ede9fe", label: "Conference" },
  service:    { icon: "🌐", color: "#be185d", bg: "#fce7f3", label: "Service"    },
};

const newsItems = [
  {
    date: "Apr 2026", type: "paper",
    before: "Three papers accepted at ", highlight: "ACL 2026",
    after: " \u2014 1 Main paper (\u201cProsody as Supervision: Bridging the Non-Verbal\u2013Verbal for Multilingual Speech Emotion Recognition\u201d) and 2 Findings papers on Indic speech deepfake detection and healthcare audio deepfake benchmarking.",
  },
  {
    date: "Jan 2026", type: "award",
    before: "Received the ", highlight: "Social Impact Award",
    after: ' at EACL 2026 for the paper \u201cDIVINE: Coordinating Multimodal Disentangled Representations for Oro-Facial Neurological Disorder Assessment.\u201d',
  },
  {
    date: "Jan 2026", type: "paper",
    before: "Two papers accepted at ", highlight: "EACL 2026 Main",
    after: ", including work on synthetic speech attribution and multimodal neurological disorder assessment.",
  },
  {
    date: "Oct 2025", type: "conference",
    before: "Presented papers at ", highlight: "IJCNLP–AACL 2025",
    after: ", including a main conference paper and a Findings paper on synthetic speech detection and attribution.",
  },
  {
    date: "Oct 2025", type: "paper",
    before: "Paper accepted at ", highlight: "IJCNLP–AACL 2025 Findings",
    after: ".",
  },
  {
    date: "Sep 2025", type: "award",
    before: "Awarded a ", highlight: "€1,000 ISCA / INTERSPEECH travel grant",
    after: " to attend INTERSPEECH 2025 in Rotterdam, The Netherlands.",
  },
  {
    date: "Jun 2025", type: "paper",
    before: "Seven papers, including an oral paper on speech emotion recognition, were accepted at ", highlight: "INTERSPEECH 2025",
    after: ".",
  },
  {
    date: "Jun 2025", type: "paper",
    before: "Paper accepted at ", highlight: "INTERSPEECH 2025 (Oral)",
    after: ' for \u201cHYFuse: Aligning Heterogeneous Speech Pre-Trained Representations in Hyperbolic Space for Speech Emotion Recognition.\u201d',
  },
  {
    date: "2025", type: "paper",
    before: "Papers accepted at ", highlight: "EUSIPCO 2025",
    after: " on synthetic speech source tracing and audio foundation models for non-verbal emotion recognition.",
  },
  {
    date: "2025", type: "paper",
    before: "Multiple papers accepted at ", highlight: "APSIPA 2025",
    after: " on emofake detection, cross-corpus SER benchmarking, physiological time-series modeling, and crowd emotion recognition.",
  },
  {
    date: "2025", type: "paper",
    before: "Paper accepted at ", highlight: "ICASSP 2025",
    after: " on modality-binding foundation models for non-verbal emotion recognition.",
  },
  {
    date: "2024–Present", type: "service",
    before: "", highlight: "ISCA Team Volunteer",
    after: ", contributing to script development and co-hosting episodes on speech technology and AI; also serving as a reviewer for ICASSP 2026.",
  },
  {
    date: "Oct 2024", type: "award",
    before: "Awarded ", highlight: "First Runner-Up",
    after: " in Technical Idea Presentation at ICE Day, UPES Dehradun, for a speaker verification concept.",
  },
  {
    date: "2024", type: "paper",
    before: "Demo paper accepted at ", highlight: "INTERSPEECH 2024 Show & Tell",
    after: " on code-switched autism detection in children.",
  },
  {
    date: "Jul–Aug 2024", type: "work",
    before: "Worked as AI Research Engineer at ", highlight: "ARTVIEWINGS LLC (San Jose, USA)",
    after: ", developing a multilingual audio-visual question answering system using MERA and ensemble methods.",
  },
  {
    date: "Jun–Jul 2024", type: "work",
    before: "Worked as Computer Vision Intern at ", highlight: "Suratec Co. Ltd. (Bangkok, Thailand)",
    after: ", building a golf swing phase detection and analysis application with real-time feedback.",
  },
  {
    date: "Jun 2024–Present", type: "work",
    before: "Joined ", highlight: "IIIT-Delhi",
    after: " as an Undergraduate Research Assistant, working on deepfake detection, speech emotion recognition, multimodal AI, and Audio Language Models.",
  },
  {
    date: "May–Jun 2024", type: "work",
    before: "Worked with ", highlight: "Reliance Jio AICoE",
    after: " as an ML Engineer, evaluating speech foundation models for stress recognition and physiological signal understanding.",
  },
  {
    date: "Dec 2023–Present", type: "work",
    before: "Joined ", highlight: "Ulster University (UK)",
    after: " as an Undergraduate Research Assistant, focusing on NLP and speech analysis for autism detection using code-switched speech.",
  },
];

const News = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const container = timelineRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        // Animate SVG path drawing
        container.classList.add("tl-drawn");
        // Stagger-reveal each row
        const rows = container.querySelectorAll(".tl-row");
        rows.forEach((row, i) => {
          setTimeout(() => row.classList.add("tl-row--visible"), i * 55);
        });
        observer.disconnect();
      },
      { threshold: 0.05 }
    );
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="news" className="news-section">
      <div className="news-inner">
        <h2 className="news-heading scroll-reveal">news</h2>

        <div className="timeline" ref={timelineRef}>
          {newsItems.map((item, index) => {
            const t = TYPE[item.type] || TYPE.paper;
            return (
              <div className="tl-row" key={`${item.date}-${index}`}>
                {/* Left: date */}
                <div className="tl-date">{item.date}</div>

                {/* Center: dot + SVG line */}
                <div className="tl-spine">
                  <div
                    className="tl-dot"
                    style={{ background: t.color, boxShadow: `0 0 0 4px ${t.bg}` }}
                  />
                  {index < newsItems.length - 1 && (
                    <svg
                      className="tl-svg-line"
                      width="2"
                      height="100%"
                      preserveAspectRatio="none"
                      style={{ flex: 1, minHeight: 28 }}
                    >
                      <line x1="1" y1="0" x2="1" y2="300" vectorEffect="non-scaling-stroke" />
                    </svg>
                  )}
                </div>

                {/* Right: content */}
                <div className="tl-card">
                  <span
                    className="tl-badge"
                    style={{ color: t.color, background: t.bg }}
                  >
                    {t.icon} {t.label}
                  </span>
                  <p className="tl-text">
                    {item.before && <span>{item.before}</span>}
                    <span className="tl-highlight" style={{ color: t.color }}>
                      {item.highlight}
                    </span>
                    {item.after && <span>{item.after}</span>}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default News;

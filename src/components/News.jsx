import React from "react";
import "./news.css";

const newsItems = [
  {
    date: "Jan 2026",
    before: "Two papers accepted at ",
    highlight: "EACL 2026 Main",
    after: ", including work on synthetic speech attribution and multimodal neurological disorder assessment.",
  },
  {
    date: "Jan 2026",
    before: "Received the ",
    highlight: "Social Impact Award",
    after: " at EACL 2026 for the paper “DIVINE: Coordinating Multimodal Disentangled Representations for Oro-Facial Neurological Disorder Assessment.”",
  },

  {
    date: "Oct 2025",
    before: "Presented papers at ",
    highlight: "IJCNLP–AACL 2025",
    after: ", including a main conference paper and a Findings paper on synthetic speech detection and attribution.",
  },
  {
    date: "Oct 2025",
    before: "Paper accepted at ",
    highlight: "IJCNLP–AACL 2025 Findings",
    after: ".",
  },

  {
    date: "Sep 2025",
    before: "Awarded a ",
    highlight: "€1,000 ISCA / INTERSPEECH travel grant",
    after: " to attend INTERSPEECH 2025 in Rotterdam, The Netherlands.",
  },
  {
    date: "Jun 2025",
    before: "Seven papers, including an oral paper on speech emotion recognition, were accepted at ",
    highlight: "INTERSPEECH 2025",
    after: ".",
  },
  {
    date: "Jun 2025",
    before: "Paper accepted at ",
    highlight: "INTERSPEECH 2025 (Oral)",
    after: " for “HYFuse: Aligning Heterogeneous Speech Pre-Trained Representations in Hyperbolic Space for Speech Emotion Recognition.”",
  },

  {
    date: "2025",
    before: "Papers accepted at ",
    highlight: "EUSIPCO 2025",
    after: " on synthetic speech source tracing and audio foundation models for non-verbal emotion recognition.",
  },
  {
    date: "2025",
    before: "Multiple papers accepted at ",
    highlight: "APSIPA 2025",
    after: " on emofake detection, cross-corpus SER benchmarking, physiological time-series modeling, and crowd emotion recognition.",
  },
  {
    date: "2025",
    before: "Paper accepted at ",
    highlight: "ICASSP 2025",
    after: " on modality-binding foundation models for non-verbal emotion recognition.",
  },

  {
    date: "2024–Present",
    before: "",
    highlight: "ISCA Team Volunteer",
    after: ", contributing to script development and co-hosting episodes on speech technology and AI; also serving as a reviewer for ICASSP 2026.",
  },
  {
    date: "Oct 2024",
    before: "Awarded ",
    highlight: "First Runner-Up",
    after: " in Technical Idea Presentation at ICE Day, UPES Dehradun, for a speaker verification concept.",
  },
  {
    date: "2024",
    before: "Demo paper accepted at ",
    highlight: "INTERSPEECH 2024 Show & Tell",
    after: " on code-switched autism detection in children.",
  },

  {
    date: "Jul–Aug 2024",
    before: "Worked as AI Research Engineer at ",
    highlight: "ARTVIEWINGS LLC (San Jose, USA)",
    after: ", developing a multilingual audio-visual question answering system using MERA and ensemble methods.",
  },
  {
    date: "Jun–Jul 2024",
    before: "Worked as Computer Vision Intern at ",
    highlight: "Suratec Co. Ltd. (Bangkok, Thailand)",
    after: ", building a golf swing phase detection and analysis application with real-time feedback.",
  },
  {
    date: "Jun 2024–Present",
    before: "Joined ",
    highlight: "IIIT-Delhi",
    after: " as an Undergraduate Research Assistant, working on deepfake detection, speech emotion recognition, multimodal AI, and Audio Language Models.",
  },
  {
    date: "May–Jun 2024",
    before: "Worked with ",
    highlight: "Reliance Jio AICoE",
    after: " as an ML Engineer, evaluating speech foundation models for stress recognition and physiological signal understanding.",
  },

  {
    date: "Dec 2023–Present",
    before: "Joined ",
    highlight: "Ulster University (UK)",
    after: " as an Undergraduate Research Assistant, focusing on NLP and speech analysis for autism detection using code-switched speech.",
  },
];

const News = () => {
  return (
    <section id="news" className="news-section">
      <div className="news-inner">
        <h2 className="news-heading">news</h2>
        {/* <p className="news-subtitle">all news reversed chronological order.</p> */}

        <div className="news-list">
          {newsItems.map((item, index) => (
            <div className="news-row" key={`${item.date}-${index}`}>
              <div className="news-date-pill">{item.date}</div>
              <p className="news-text">
                {item.before && <span>{item.before}</span>}
                <span className="news-highlight">{item.highlight}</span>
                {item.after && <span>{item.after}</span>}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
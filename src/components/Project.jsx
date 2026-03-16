// src/pages/Project.jsx  (or wherever you keep your sections)

import React from "react";
import "./Project.css";

const projects = [
  {
    title: "Helix: Versatile AI Assistant",
    description:
      "Agentic toolkit using LangChain + FastAPI + Twilio with async MongoDB; multi-channel and domain-adaptable.",
    github: "https://github.com/your-user/helix-ai-assistant",
  },
  {
    title: "TwinVerify",
    description:
      "Two-factor audio + text authentication; Whisper + speaker embeddings + Flask; integrates C++ crypto executables.",
    github: "https://github.com/your-user/twinverify",
  },
  {
    title: "Multimodal Personality via Contrastive Learning",
    description:
      "Audio-visual embeddings with contrastive objectives to predict OCEAN traits; TensorFlow + HF Transformers.",
    github: "https://github.com/your-user/multimodal-personality",
  },
  {
    title: "Golf Phase Detection",
    description:
      "OpenCV / MediaPipe / FFmpeg pipeline for golf swing phase segmentation with a coach-friendly Streamlit UI.",
    github: "https://github.com/your-user/golf-phase-detection",
  },
];

export default function Project() {
  return (
    <main className="projects-page">
      <section className="projects-container">
        <h1 className="projects-heading">Projects</h1>

        <div className="projects-list">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <header className="project-header">
                <h2 className="project-title">{project.title}</h2>

                {/* GitHub link just under the title */}
                <a
                  href={project.github}
                  className="project-github-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub ↗
                </a>
              </header>

              <p className="project-description">{project.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

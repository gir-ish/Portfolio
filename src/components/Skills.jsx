import "./Skills.css";
import { FaGithub } from "react-icons/fa6";

const skillGroups = [
  {
    category: "Frameworks & Libraries",
    icon: "⚡",
    color: "#0e387a",
    bg: "#e0f2ff",
    skills: ["PyTorch", "TensorFlow", "Keras", "HuggingFace Transformers", "OpenCV", "LangChain", "Pinecone"],
  },
  {
    category: "Programming Languages",
    icon: "💻",
    color: "#065f46",
    bg: "#d1fae5",
    skills: ["Python", "C", "Java", "SQL"],
  },
  {
    category: "Web & APIs",
    icon: "🌐",
    color: "#7c3aed",
    bg: "#ede9fe",
    skills: ["FastAPI", "Flask", "HTML", "JavaScript", "MongoDB", "Twilio"],
  },
  {
    category: "Research Methods",
    icon: "🔬",
    color: "#b45309",
    bg: "#fef3c7",
    skills: [
      "Contrastive Learning",
      "Retrieval-Augmented Generation (RAG)",
      "Optimal Transport",
      "Multimodal Fusion",
      "Self-Supervised Learning",
      "Hyperbolic Geometry",
      "Graph Neural Networks",
    ],
  },
  {
    category: "Tools & Infrastructure",
    icon: "🛠️",
    color: "#be185d",
    bg: "#fce7f3",
    skills: ["Git", "Docker", "AWS", "Linux"],
  },
];

const researchLibs = [
  {
    name: "Neural Codecs",
    github: "https://github.com/CodeVault-girish/Neural-Codecs",
    desc: "Library for generating neural codec-processed audio datasets using multiple codec models for speech synthesis, deepfake detection, and audio representation research.",
  },
  {
    name: "SFM Models",
    github: "https://github.com/CodeVault-girish/SFM-models",
    desc: "Speech foundation model toolkit for extracting embeddings from speech audio using large-scale pre-trained speech models.",
  },
  {
    name: "MFM Models",
    github: "https://github.com/CodeVault-girish/MFM-models",
    desc: "Music foundation model toolkit for extracting embeddings from music/audio signals using pre-trained music and multimodal foundation models.",
  },
];

export default function Skills() {
  return (
    <main className="skills-page">
      <section className="skills-container">
        <h1 className="skills-heading scroll-reveal">Skills &amp; Tech Stack</h1>
        <p className="skills-sub">Tools and methods I use in research and engineering.</p>

        <div className="skills-groups">
          {skillGroups.map((group, gi) => (
            <div key={group.category} className="skill-group" style={{ "--g": gi }}>
              <div
                className="skill-group-header"
                style={{ borderLeftColor: group.color }}
              >
                <span className="skill-group-icon">{group.icon}</span>
                <h2 className="skill-group-title" style={{ color: group.color }}>
                  {group.category}
                </h2>
              </div>
              <div className="skill-tags">
                {group.skills.map((skill, si) => (
                  <span
                    key={skill}
                    className="skill-tag"
                    style={{
                      "--tag-color": group.color,
                      "--tag-bg": group.bg,
                      "--si": si,
                      "--gi": gi,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Research Software & Libraries ── */}
        <section className="research-libs scroll-reveal">
          <div className="skill-group-header rlib-header-bar">
            <span className="skill-group-icon">🔬</span>
            <h2 className="skill-group-title rlib-title">Research Software &amp; Libraries</h2>
          </div>

          <div className="rlib-list">
            {researchLibs.map((lib) => (
              <div key={lib.name} className="rlib-card">
                <div className="rlib-row">
                  <span className="rlib-name">{lib.name}</span>
                  {lib.github && lib.github !== "#" && (
                    <a href={lib.github} className="rlib-gh-btn" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> GitHub ↗
                    </a>
                  )}
                </div>
                <p className="rlib-desc">{lib.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

import "./Skills.css";

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
      </section>
    </main>
  );
}

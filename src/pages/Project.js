import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Stagger, Item } from '../components/Motion';

const ProjectCard = ({ title, desc, href }) => (
  <div className="card">
    <h3 style={{marginTop:0}}>{title}</h3>
    <p className="sub">{desc}</p>
    <div style={{marginTop:'.6rem'}}>
      <a href={href} target="_blank" rel="noreferrer" title="View on GitHub"><FaGithub /></a>
    </div>
  </div>
);

export default function Project() {
  return (
    <div>
      <h1 className="section-title">Projects</h1>
      <Stagger>
        <Item><ProjectCard
          title="Helix: Versatile AI Assistant"
          desc="Agentic toolkit using LangChain + FastAPI + Twilio with async MongoDB; multi-channel and domain-adaptable."
          href="https://github.com/voice-chat-agent/WhatsApp-bot"
        /></Item>
        <Item><ProjectCard
          title="TwinVerify"
          desc="Two-factor audio+text auth; Whisper + speaker embeddings + Flask; integrates C++ crypto executables."
          href="https://github.com/gir-ish/TwinVerify"
        /></Item>
        <Item><ProjectCard
          title="Multimodal Personality via Contrastive Learning"
          desc="Audio-visual embeddings with contrastive objectives to predict OCEAN traits; TensorFlow + HF Transformers."
          href="https://github.com/gir-ish/Personality-Detection"
        /></Item>
        <Item><ProjectCard
          title="Golf Phase Detection"
          desc="OpenCV / MediaPipe / FFmpeg pipeline; robust phase segmentation and coach-friendly UI (Streamlit)."
          href="https://github.com/gir-ish/Golf_Phase_Detection"
        /></Item>
      </Stagger>
    </div>
  );
}

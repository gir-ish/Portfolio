import React from 'react';
import myPhoto from '../assets/1.jpg';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import { Stagger, Item, ParallaxIn, Magnetic } from '../components/Motion';

export default function About() {
  const pills = ['Deepfake Attribution','Emotion Recognition','Speech SSL & Codecs','Hyperbolic Fusion','Multimodal FM Synergy'];

  return (
    <>
      <section className="hero">
        <div>
          <div className="kicker">Research Associate · IIIT-Delhi</div>
          <h1>Speech & Audio AI for Forensics and Affective Computing</h1>
          <p className="sub">
            I work at the intersection of <strong>paralinguistics</strong>, <strong>audio deepfake detection</strong>,
            and <strong>multimodal emotion understanding</strong>. I explore non-Euclidean representations, codec-based
            features, and foundation-model synergies for robust real-world speech intelligence.
          </p>
          <Stagger>
            {pills.map(p => (
              <Item key={p}><span className="pill">{p}</span></Item>
            ))}
          </Stagger>
        </div>
        <ParallaxIn>
          <div className="center">
            <img src={myPhoto} alt="Girish" className="avatar" />
            <div style={{ marginTop: '0.8rem', display: 'flex', gap: '1.1rem', justifyContent: 'center' }}>
              <Magnetic><a href="https://linkedin.com/in/girish-b794092a1/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={26} /></a></Magnetic>
              <Magnetic><a href="https://github.com/gir-ish" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={26} /></a></Magnetic>
              <Magnetic><a href="https://scholar.google.com/citations?user=4HIGa7AAAAAJ&hl=en" target="_blank" rel="noreferrer" aria-label="Scholar"><SiGooglescholar size={26} /></a></Magnetic>
              <Magnetic><a href="mailto:girish.research.pr@gmail.com" aria-label="Email"><FaEnvelope size={26} /></a></Magnetic>
            </div>
          </div>
        </ParallaxIn>
      </section>

      <section>
        <h2 className="section-title">Recent Updates</h2>
        <Stagger>
          <Item><div className="card"><h3>Conference Track</h3><p className="sub">Acceptances across INTERSPEECH/ICASSP/EUSIPCO; new work on codec-aided murmur classification & unlearning for paralinguistics.</p></div></Item>
          <Item><div className="card"><h3>Lab & Collaboration</h3><p className="sub">Co-founding Non-Euclidean Speech Lab; collaborations with IIIT-Delhi, industry partners, and international groups.</p></div></Item>
          <Item><div className="card"><h3>Building</h3><p className="sub">Helix: pragmatic AI agents + tooling; dataset curation for forensic-grade audio tasks.</p></div></Item>
        </Stagger>
      </section>
    </>
  );
}

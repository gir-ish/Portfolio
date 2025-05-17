import React from 'react';
import myPhoto from '../assets/1.jpg';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

function About() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', padding: '1rem' }}>
      {/* Name */}
      <h1>Girish .  </h1>
      
      {/* Intro & Photo */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap',
        }}
      >
        {/* Text */}
        <div style={{ flex: '1 1 300px', textAlign: 'left', padding: '1rem' }}>
          <p>
            Greetings—I am Girish, currently in my final year of the Bachelor of Technology (Hons)
            in Computer Science &amp; Engineering, specializing in Artificial Intelligence &amp;
            Machine Learning at UPES. I anticipate graduating in June 2026.
          </p>
          <p>
            My present research focuses on advanced speech and audio technologies, including
            emotion recognition, deepfake detection in audio streams, and the development of
            novel audio language models.
          </p>
          <p>
            Previously, I served as a Research Associate at IIIT Delhi and have collaborated with
            organizations such as Reliance Jio, ARTVIEWINGS LLC, Suratec Co., Ltd., and Ulster
            University.
          </p>
          <p>
            I have contributed papers to premier conferences including Interspeech and ICASSP,
            with several additional manuscripts currently under review.
          </p>
          <p>
            Core competencies: Python, Java, C++, TensorFlow, PyTorch, audio signal processing,
            NLP, and generative AI.
          </p>
        </div>

        {/* Photo */}
        <div style={{ flex: '1 1 300px', textAlign: 'center', padding: '1rem' }}>
          <img
            src={myPhoto}
            alt="Girish"
            style={{ maxWidth: '50%', height: 'auto', borderRadius: '35%' }}
          />
        </div>
      </div>

      {/* Recent Updates */}
      <h2>Recent Updates</h2>
      <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
        <li>Awaiting acceptance notifications for EUSIPCO 2025 and Interspeech 2025.</li>
        <li>Submitted (or preparing submissions) to EMNLP 2025, ECAI 2025, and ASRU 2025.</li>
        <li>Co-founding the Non-Euclidean Speech Lab, focusing on geometric approaches to audio analysis.</li>
        <li>Launching Helix, a company building AI agents and their applications.</li>
      </ul>

      {/* Contact */}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <h2>Contact</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <a
            href="https://linkedin.com/in/girish-b794092a1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin style={{ fontSize: '2.5rem', color: '#0e76a8' }} />
          </a>
          <a
            href="https://github.com/gir-ish"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub style={{ fontSize: '2.5rem', color: '#333' }} />
          </a>
          <a
            href="https://scholar.google.com/citations?user=4HIGa7AAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google Scholar"
          >
            <SiGooglescholar style={{ fontSize: '2.5rem', color: '#4285F4' }} />
          </a>
          <a
            href="mailto:girish.research.pr@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FaEnvelope style={{ fontSize: '2.5rem', color: 'red' }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from 'react';
import myPhoto from '../assets/1.jpg'; // Ensure this path is correct
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

function About() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', padding: '1rem' }}>
      {/* Your name at the top */}
      <h1>Girish</h1>
      
      {/* Two-column layout for intro and photo */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {/* Intro text on the left */}
        <div style={{ flex: '1 1 300px', textAlign: 'left', padding: '1rem' }}>
          <p>Hello, I’m Girish!</p>
          <p>I study Computer Science (AI-ML honors) at UPES and will graduate in June 2026.</p>
          <p>I work on research projects like deepfake detection, speech emotion recognition, and audio language models.</p>
          <p>
            I have worked as a Research Associate at IIIT, Delhi and collaborated with companies like Reliance Jio,
            ARTVIEWINGS LLC, Suratec Co., LTD, and Ulster University.
          </p>
          <p>I have published research at conferences like Interspeech and ICASSP, and many are submitted.</p>
          <p>Skilled in Python, Java, C++, TensorFlow, PyTorch.</p>
        </div>
        
        {/* Photo on the right */}
        <div style={{ flex: '1 1 300px', textAlign: 'center', padding: '1rem' }}>
          <img 
            src={myPhoto} 
            alt="Girish" 
            style={{ maxWidth: '50%', height: 'auto', borderRadius: '35%' }} 
          />
        </div>
      </div>
      
      {/* Updates section in bullet points */}
      <h2>Updates</h2>
      <ul style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
        <li>Working on new AI projects.</li>
        <li>Published a paper on code-switched autism detection.</li>
        <li>Collaborated on a multimodal personality prediction project.</li>
        <li>Gained more experience with deep learning frameworks.</li>
      </ul>

      {/* Contact details section */}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <h2>Contact</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <a href="https://linkedin.com/in/girish-b794092a1/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ fontSize: '2.5rem', color: '#0e76a8' }} />
          </a>
          <a href="https://github.com/gir-ish" target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ fontSize: '2.5rem', color: '#333' }} />
          </a>
          <a href="https://scholar.google.com/citations?user=4HIGa7AAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
            <SiGooglescholar style={{ fontSize: '2.5rem', color: '#4285F4' }} />
          </a>
          <a href="mailto:girish.research.pr@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope style={{ fontSize: '2.5rem', color: 'red' }} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;

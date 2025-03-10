import React from 'react';
import myPhoto from '../assets/1.jpg'; // Ensure this path is correct

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
          <p>I have published research at conferences like Interspeech and ICASSP, and on arXiv.</p>
          <p>Skilled in Python, Java, C++, TensorFlow, PyTorch, and more.</p>
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
    </div>
  );
}

export default About;

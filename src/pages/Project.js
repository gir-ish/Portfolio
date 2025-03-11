import React from 'react';
import { FaGithub } from 'react-icons/fa';
import infinityImage from '../assets/1.jpg'; // Replace with your actual image file
import twinVerifyImage from '../assets/audio-vault-enc-dec-application.drawio.png';
import golfImage from '../assets/1.jpg';

function Project() {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '1rem', textAlign: 'left' }}>
      <h1>Projects</h1>
      <ol>
        {/* Project 1 */}
        <li style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <h2 style={{ margin: 0 }}>TwinVerify: Secure Encryption with Two-Factor Audio and Text Authentication Framework
            <a 
              href="https://github.com/gir-ish/TwinVerify" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ marginLeft: '1rem' }}
              title="View on GitHub"
            >
              <FaGithub style={{ fontSize: '1.8rem', color: '#333', position: 'relative', top: '8px' }} />
            </a>
            </h2>
            <br />
          </div>
          <ul>
            <li>Designed audio encryption and decryption mechanisms with dual-step authentication.</li>
            <li>Combined voice verification with text-based answer matching for secure access.</li>
            {/* <li>Implemented a dynamic platform with random challenges and encrypted data storage.</li> */}
            <li>Developed the application using Python with the Flask web framework.</li>
            {/* <li>C++: Integrated external C++ executables for file encryption and decryption.</li>
            <li>HuggingFace Transformers (FLAN-T5): Integrated transformer-based models to verify transcribed answers against expected responses.</li>
            <li>Whisper: Implemented speech-to-text transcription for real-time audio conversion.</li>  
            <li>SpeechBrain: Used speaker recognition to compute and update audio embeddings.</li>
            <li>PyTorch & NumPy: Performed deep learning tasks and signal processing.</li>
            <li>Scipy & Pydub: Converted and processed audio data for compatibility and analysis.</li>
            <li>Scikit-learn: Calculated cosine similarity between voice embeddings for verification.</li> */}

          </ul>
          <img 
            src={twinVerifyImage} 
            alt="TwinVerify Project" 
            style={{ maxWidth: '50%', height: 'auto', marginTop: '1rem' }} 
          />
        </li>
        
        
        {/* Project 2 */}
        <li style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <h2 style={{ margin: 0 }}>INFINITY: Adaptive Speaker Verification with Continual Learning, Supervised Representations            <a 
              href="https://github.com/gir-ish/INFINITY" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ marginLeft: '1rem' }}
              title="View on GitHub">
              <FaGithub style={{ fontSize: '1.8rem', color: '#333', position: 'relative', top: '8px' }} />
            </a>
            </h2>
            <br />  
          </div>
          <ul>
            <li>Developed an adaptive speaker verification system using continual learning.</li>
            <li>Implemented custom encryption and DeepQ-Networks (DQN) for dynamic threshold adjustment.</li>
            <li>Utilized CNN and embedding-based architectures with datasets like RAVDESS and CREMA-D.</li>
          </ul>
          {/* <img 
            src={infinityImage} 
            alt="INFINITY Project" 
            style={{ maxWidth: '50%', height: 'auto', marginTop: '1rem' }} 
          /> */}
        </li>

      </ol>
    </div>
  );
}

export default Project;

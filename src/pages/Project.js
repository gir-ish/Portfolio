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
            <h2 style={{ margin: 0 }}>Helix: Versatile AI Assistant
              <a 
              href="https://github.com/voice-chat-agent/WhatsApp-bot" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ marginLeft: '1rem' }}
              title="View on GitHub">
              <FaGithub style={{ fontSize: '1.8rem', color: '#333', position: 'relative', top: '8px' }} />
            </a>
            </h2>
            <br />  
          </div>
          <br />  
          <ul>
            <li>AI-Powered Smart Responses: Uses OpenAI GPT, LangChain, and Pinecone for real-time, context-aware interactions,
            improving customer engagement and automation.</li>
            <li>Versatile \& Scalable: Easily deploys across industries like healthcare, retail, and finance with minimal code changes, ensuring seamless adaptability.</li>
            <li>Omnichannel \& Fast: Connects via WhatsApp (Twilio) and phone calls, with a FastAPI backend and async MongoDB for quick, efficient responses.</li>
            <li>Tools Used: LangChain, FastAPI, MongoDB, Twilio.</li>
          </ul>
          {/* <img 
            src={infinityImage} 
            alt="INFINITY Project" 
            style={{ maxWidth: '50%', height: 'auto', marginTop: '1rem' }} 
          /> */}
        </li>

        {/* Project 2 */}
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
          </div>
          <br />
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
        
        
        {/* Project 3 */}
        
        <li style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <h2 style={{ margin: 0 }}>Multimodal Personality Prediction Using Contrastive Learning 
              <a 
              href="https://github.com/gir-ish/Personality-Detection" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ marginLeft: '1rem' }}
              title="View on GitHub">
              <FaGithub style={{ fontSize: '1.8rem', color: '#333', position: 'relative', top: '8px' }} />
            </a>
            </h2> 
          </div>
          <br /> 
          <ul>
            <li>Built a neural network with two processing paths that uses contrastive learning to predict personality traits (Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism) from audio and video data.</li>
            <li>Trained the model on both speech and visual cues, improving how it understands and learns personality traits from different sources.</li>
            <li>Optimized the system for better integration of multimodal data, ensuring accurate and reliable personality predictions from real-world audio and video inputs.</li>
            <li>Tools Used: TensorFlow, Hugging Face Transformers.</li>
          </ul>
          {/* { <img 
            src={infinityImage} 
            alt="INFINITY Project" 
            style={{ maxWidth: '50%', height: 'auto', marginTop: '1rem' }} 
          /> } */}
        </li>


        {/* Project 4 */}
        
        <li style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <h2 style={{ margin: 0 }}>Golf Phase Detection and Analysis Application. 
              <a 
              href="https://github.com/gir-ish/Golf_Phase_Detection" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ marginLeft: '1rem' }}
              title="View on GitHub">
              <FaGithub style={{ fontSize: '1.8rem', color: '#333', position: 'relative', top: '8px' }} />
            </a>
            </h2> 
          </div>
          <br /> 
          <ul>
            <li>Developed algorithms to detect and classify golf swing phases (setup, backswing, downswing, ball impact, and follow-through) with high accuracy.</li>
            <li>Designed a user-friendly interface for players and coaches, enabling easy review and real-time analysis across different video formats.</li>
            <li>Tools Used: OpenCV, MediaPipe, FFmpeg, Streamlit</li>
          </ul>
          {/* { <img 
            src={infinityImage} 
            alt="INFINITY Project" 
            style={{ maxWidth: '50%', height: 'auto', marginTop: '1rem' }} 
          /> } */}
        </li>


      </ol>
    </div>
  );
}

export default Project;

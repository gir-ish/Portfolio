import React from 'react';
import { FaFilePdf } from 'react-icons/fa';

function Publication() {
  return (
    <div style={{ textAlign: "left", maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
      <h1 style={{ textAlign: "center" }}>Publications</h1>
      
      {/* Conference Papers Section */}
      <h2 style={{textDecoration: "underline" }}>Conference Papers</h2>

      <ul>
      <li>
          Strong Alone, Stronger Together: Synergizing Modality-Binding Foundation Models with Optimal Transport for Non-Verbal Emotion Recognition {" "}<span style={{ color: "#297aeb" }}>(ICASSP 2025)</span>{" "}
          <a 
            href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=4HIGa7AAAAAJ&citation_for_view=4HIGa7AAAAAJ:9yKSN-GCB0IC" 
            target="_blank" 
            rel="noopener noreferrer"
            title="View PDF"
          >
            <FaFilePdf style={{ color: 'red', verticalAlign: 'middle' }} />
          </a>
          <br />
          <div style={{ marginTop: "10px" }}> 
            <em>Authors: Orchid Chetia Phukan, Mohd Mujtaba Akhtar*, <strong>Girish*</strong>, Swarup Ranjan Behera, Sishir Kalita, Arun Balaji Buduru, Rajesh Sharma, SR Mahadeva Prasanna</em>
          </div>
      </li>
        <br />
        <li>
          NeuRO: An Application for Code-Switched Autism Detection in Children{" "} <span style={{ color: "#297aeb" }}>(Interspeech Show & Tell 2024)</span>{" "}
          <a 
            href="https://ui.adsabs.harvard.edu/abs/2024arXiv240603514M/abstract" 
            target="_blank" 
            rel="noopener noreferrer"
            title="View PDF"
          >
            <FaFilePdf style={{ color: 'red', verticalAlign: 'middle' }} />
          </a>
          <div style={{ marginTop: "10px" }}> 
            <em>Authors: Mohd Mujtaba Akhtar*, <strong>Girish*</strong>, Orchid Chetia Phukan*, Muskaan Singh*</em>
          </div>
        </li>
      </ul>
      

      {/* Preprints/Submissions Section */}
      <h2 style={{textDecoration: "underline" }}>Preprints / Submitted</h2>
      <ul>
        {/* <li>
          Modality-Order Matters! A Novel Hierarchical Feature Fusion Method for CoSAm: A Code-Switched Autism Corpus{" "}
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            title="View PDF"
          >
            <FaFilePdf style={{ color: 'red', verticalAlign: 'middle' }} />
          </a>
          <br />
          <div style={{ marginTop: "10px" }}> 
            <em>Authors: Mohd Mujtaba Akhtar*, <strong>Girish*</strong>, Muskaan Singh, Orchid Chetia Phukan</em>
          </div>
        </li> */}
        <li>
        SOURCE TRACING OF SYNTHETIC SPEECH SYSTEMS THROUGH PARALINGUISTIC PRE-TRAINED REPRESENTATIONS{" "}
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            title="View PDF"
          >
            <FaFilePdf style={{ color: 'red', verticalAlign: 'middle' }} />
          </a>
          <br />
          <div style={{ marginTop: "10px" }}> 
            <em>Authors: <strong>Girish*</strong>, Mohd Mujtaba Akhtar*, Orchid Chetia Phukan*, Drishti Singh, Swarup Ranjan Behera, Pailla Balakrishna Reddy, Arun Balaji Buduru, Rajesh Sharma</em>
          </div>
        </li>
        <br />
        <li>
        ARE MULTIMODAL FOUNDATION MODELS ALL THAT IS NEEDED FOR EMOFAKE DETECTION?{" "}
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            title="View PDF"
          >
            <FaFilePdf style={{ color: 'red', verticalAlign: 'middle' }} />
          </a>
          <br />
          <div style={{ marginTop: "10px" }}> 
            <em>Authors: Mohd Mujtaba Akhtar*, <strong>Girish*</strong>, Orchid Chetia Phukan*, Swarup Ranjan Behera, Jaya Sai Kiran Patibandla, Pailla Balakrishna Reddy, Arun Balaji Buduru, Rajesh Sharma</em>
          </div>
        </li>
        <br />
        <li>
        ARE MAMBA-BASED AUDIO FOUNDATION MODELS THE BEST FIT FOR NON-VERBAL EMOTION RECOGNITION?{" "}
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            title="View PDF"
          >
            <FaFilePdf style={{ color: 'red', verticalAlign: 'middle' }} />
          </a>
          <br />
          <div style={{ marginTop: "10px" }}> 
            <em>Mohd Mujtaba Akhtar*, Orchid Chetia Phukan*, <strong>Girish*</strong>, Swarup Ranjan Behera, Sanjib, Arun Balaji Buduru, Rajesh Sharma</em>
          </div>
        </li>
        <br />
        <li>
        SYNERGIZING NEURAL AUDIO CODEC AND SPECTRAL REPRESENTATIONS FOR DEPRESSION DETECTION{" "}
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            title="View PDF"
          >
            <FaFilePdf style={{ color: 'red', verticalAlign: 'middle' }} />
          </a>
          <br />
          <div style={{ marginTop: "10px" }}> 
            <em>Authors: Mohd Mujtaba Akhtar*, <strong>Girish*</strong>, Orchid Chetia Phukan*, Swarup Ranjan Behera, Pailla Balakrishna Reddy, Arun Balaji Buduru, Rajesh Sharma</em>
          </div>
        </li>
        <br />
        <li>
          Representation Loss Minimization with Randomized Selection Strategy for Efficient Environmental Fake Audio Detection{" "}
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            title="View PDF"
          >
            <FaFilePdf style={{ color: 'red', verticalAlign: 'middle' }} />
          </a>
          <br />
          <div style={{ marginTop: "10px" }}> 
            <em>Authors: Orchid Chetia Phukan*, <strong>Girish*</strong>, Mohd Mujtaba Akhtar*, Swarup Ranjan Behera*, Nitin Choudhury, Arun Balaji Buduru, Rajesh Sharma, SR Mahadeva Prasanna</em>
          </div>
        </li>
        <br />
        <li>
          Beyond Speech and More: Investigating the Emergent Ability of Speech Foundation Models for Classifying Physiological Time-Series Signals{" "}
          <a 
            href="https://arxiv.org/abs/2410.12645" 
            target="_blank" 
            rel="noopener noreferrer"
            title="View PDF"
          >
            <FaFilePdf style={{ color: 'red', verticalAlign: 'middle' }} />
          </a>
          <br />
          <div style={{ marginTop: "10px" }}> 
            <em>Authors: Orchid Chetia Phukan*, Swarup Ranjan Behera*, <strong>Girish**</strong>, Mohd Mujtaba Akhtar**, Arun Balaji Buduru, Rajesh Sharma</em>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Publication;

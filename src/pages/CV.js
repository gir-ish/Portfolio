import React from 'react';
import cvPDF from '../assets/Girish_CV.pdf'; // Update path as needed

function CV() {
  return (
    <div style={{ padding: '1rem', textAlign: 'center' }}>

      {/* PDF Container */}
      <div style={{ 
        position: 'relative', 
        margin: '0 auto', 
        maxWidth: '900px' 
      }}>
        {/* Hide default toolbar & nav panes in browsers like Chrome */}
        <iframe
          src={`${cvPDF}#toolbar=0&navpanes=0&scrollbar=0`}
          width="100%"
          height="800px"
          style={{ 
            border: 'none', 
            backgroundColor: '#ffffff'
          }}
          title="Girish CV"
        />
      </div>

      {/* Download Button */}
      <div style={{ marginTop: '1rem' }}>
        <a
          href={cvPDF}
          download="Girish_Resume.pdf"
          style={{
            display: 'inline-block',
            padding: '0.6rem 1.2rem',
            backgroundColor: '#007bff',
            color: '#ffffff',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}

export default CV;

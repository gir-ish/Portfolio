import React from 'react';
import cvPDF from '../assets/Girish_CV.pdf';

export default function CV() {
  return (
    <div className="center">
      <iframe
        src={`${cvPDF}#toolbar=0&navpanes=0&scrollbar=0`}
        width="100%"
        height="900"
        style={{ border: '1px solid var(--border)', backgroundColor: 'transparent', borderRadius: 12 }}
        title="Girish CV"
      />
      <div style={{ marginTop: '1rem' }}>
        <a
          href={cvPDF}
          download="Girish_CV.pdf"
          style={{
            display: 'inline-block', padding: '.6rem 1.2rem',
            border: '1px solid var(--border)', borderRadius: 999,
            color: 'var(--accent)', textDecoration: 'none'
          }}
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}

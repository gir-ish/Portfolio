import React from 'react';
import { FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';
import { Stagger, Item } from '../components/Motion';

const PubCard = ({ title, venue, year, authors, links=[] }) => (
  <div className="card">
    <div className="badges">
      <span className="badge">{venue}</span>
      <span className="badge">{year}</span>
    </div>
    <div className="pub-title">{title}</div>
    <div className="pub-meta">{authors}</div>
    <div className="pub-actions">
      {links.map(({href, label, icon}, i) => (
        <a key={i} href={href} target="_blank" rel="noreferrer" title={label}>
          {icon === 'pdf' ? <FaFilePdf /> : <FaExternalLinkAlt />}
        </a>
      ))}
    </div>
  </div>
);

export default function Publication() {
  return (
    <div>
      <h1 className="section-title">Publications</h1>

      <h2 className="section-title" style={{fontSize:'1.3rem'}}>Accepted</h2>
      <Stagger>
        <Item><PubCard
          title="Investigating the Reasonable Effectiveness of Speaker PTMs and their Synergy for SingMOS Prediction"
          venue="INTERSPEECH"
          year="2025"
          authors="Orchid Chetia Phukan*, Girish*, Mohd Mujtaba Akhtar*, et al."
          links={[{href:'#',label:'PDF',icon:'pdf'}]}
        /></Item>
        <Item><PubCard
          title="HYFuse: Aligning Heterogeneous Speech PTMs in Hyperbolic Space for SER"
          venue="INTERSPEECH"
          year="2025"
          authors="Orchid Chetia Phukan*, Girish*, Mohd Mujtaba Akhtar*, et al."
          links={[{href:'#',label:'PDF',icon:'pdf'}]}
        /></Item>
        <Item><PubCard
          title="Strong Alone, Stronger Together: Modality-Binding FMs with Optimal Transport for Non-Verbal ER"
          venue="ICASSP"
          year="2025"
          authors="Orchid Chetia Phukan, Girish*, Mohd Mujtaba Akhtar*, et al."
          links={[{href:'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=4HIGa7AAAAAJ&citation_for_view=4HIGa7AAAAAJ:9yKSN-GCB0IC',label:'Scholar',icon:'link'}]}
        /></Item>
      </Stagger>

      <h2 className="section-title" style={{fontSize:'1.3rem'}}>Preprints / Submitted</h2>
      <Stagger>
        <Item><PubCard
          title="Beyond Speech: Emergent Ability of Speech FMs for Physiological Time-Series"
          venue="arXiv"
          year="2024"
          authors="Orchid Chetia Phukan*, Swarup Ranjan Behera*, Girish*, et al."
          links={[{href:'https://arxiv.org/abs/2410.12645',label:'arXiv',icon:'link'}]}
        /></Item>
      </Stagger>
    </div>
  );
}

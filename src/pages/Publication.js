import React from 'react';
import { Stagger, Item } from '../components/Motion';
import { FaFilePdf } from 'react-icons/fa';

/** Show first 3 authors, then "et al." if more */
function formatAuthors(authors: string[]) {
  if (!authors || !authors.length) return '';
  const shown = authors.slice(0, 3).join(', ');
  return authors.length > 3 ? `${shown}, et al.` : shown;
}

const pubs = [
  // === Keep order exactly as you listed ===
  {
    title:
      'HYFuse: Aligning Heterogeneous Speech Pre-Trained Representations in Hyperbolic Space for Speech Emotion Recognition',
    authors: [
      'Orchid Chetia Phukan*', 'Girish*', 'Mohd Mujtaba Akhtar*',
      'Swarup Ranjan Behera', 'Pailla Balakrishna Reddy', 'Arun Balaji Buduru', 'Rajesh Sharma'
    ],
    venue: 'INTERSPEECH', year: '2025', note: 'Oral',
    link: 'https://arxiv.org/pdf/2506.03403v1'
  },
  {
    title:
      'Investigating the Reasonable Effectiveness of Speaker Pre-Trained Models and their Synergistic Power for SingMOS Prediction',
    authors: [
      'Orchid Chetia Phukan*', 'Girish*', 'Mohd Mujtaba Akhtar*',
      'Swarup Ranjan Behera', 'Pailla Balakrishna Reddy', 'Arun Balaji Buduru', 'Rajesh Sharma'
    ],
    venue: 'INTERSPEECH', year: '2025',
    link: 'https://arxiv.org/pdf/2506.02232'
  },
  {
    title:
      'Towards Source Attribution of Singing Voice Deepfake with Multimodal Foundation Models',
    authors: [
      'Orchid Chetia Phukan*', 'Girish*', 'Mohd Mujtaba Akhtar*',
      'Swarup Ranjan Behera', 'Priyabrata Mallick',
      'Pailla Balakrishna Reddy', 'Arun Balaji Buduru', 'Rajesh Sharma'
    ],
    venue: 'INTERSPEECH', year: '2025',
    link: 'https://arxiv.org/pdf/2506.03364v1'
  },
  {
    title:
      'PARROT: Synergizing Mamba and Attention-based SSL Pre-Trained Models via Parallel Branch Hadamard Optimal Transport for Speech Emotion Recognition',
    authors: [
      'Orchid Chetia Phukan*', 'Mohd Mujtaba Akhtar*', 'Girish*',
      'Swarup Ranjan Behera', 'Sai Kiran Patibandla', 'Arun Balaji Buduru', 'Rajesh Sharma'
    ],
    venue: 'INTERSPEECH', year: '2025',
    link: 'https://arxiv.org/pdf/2506.01138'
  },
  {
    title:
      'SNIFR: Boosting Fine-Grained Child Harmful Content Detection Through Audio-Visual Alignment with Cascaded Cross-Transformer',
    authors: [
      'Orchid Chetia Phukan*', 'Mohd Mujtaba Akhtar*', 'Girish*',
      'Swarup Ranjan Behera', 'Abu Osama Siddiqui', 'Sarthak Jain',
      'Priyabrata Mallick', 'Sai Kiran Patibandla', 'Pailla Balakrishna Reddy', 'Arun Balaji Buduru', 'Rajesh Sharma'
    ],
    venue: 'INTERSPEECH', year: '2025',
    link: 'https://arxiv.org/pdf/2506.03378v1'
  },
  {
    title: 'Towards Machine Unlearning for Paralinguistic Speech Processing',
    authors: [
      'Orchid Chetia Phukan*', 'Girish*', 'Mohd Mujtaba Akhtar*',
      'Shubham Singh', 'Swarup Ranjan Behera', 'Vandana Rajan',
      'Muskaan Singh', 'Arun Balaji Buduru', 'Rajesh Sharma'
    ],
    venue: 'INTERSPEECH', year: '2025',
    link: 'https://arxiv.org/pdf/2506.02230v1'
  },
  {
    title:
      'Towards Fusion of Neural Audio Codec-based Representations with Spectral for Heart Murmur Classification via Bandit-based Cross-Attention Mechanism',
    authors: [
      'Orchid Chetia Phukan*', 'Girish*', 'Mohd Mujtaba Akhtar*',
      'Swarup Ranjan Behera', 'Priyabrata Mallick', 'Santanu Roy',
      'Arun Balaji Buduru', 'Rajesh Sharma'
    ],
    venue: 'INTERSPEECH', year: '2025',
    link: 'https://arxiv.org/pdf/2506.01148v1'
  },
  {
    title:
      'Source Tracing of Synthetic Speech Systems Through Paralinguistic Pre-Trained Representations',
    authors: [
      'Girish*', 'Mohd Mujtaba Akhtar*', 'Orchid Chetia Phukan*',
      'Drishti Singh', 'Swarup Ranjan Behera', 'Pailla Balakrishna Reddy',
      'Arun Balaji Buduru', 'Rajesh Sharma'
    ],
    venue: 'EUSIPCO', year: '2025',
    link: 'https://arxiv.org/pdf/2506.01157v1'
  },
  {
    title:
      'Are Mamba-based Audio Foundation Models the Best Fit for Non-Verbal Emotion Recognition?',
    authors: [
      'Mohd Mujtaba Akhtar*', 'Orchid Chetia Phukan*', 'Girish*',
      'Sanjib', 'Arun Balaji Buduru', 'Rajesh Sharma'
    ],
    venue: 'EUSIPCO', year: '2025',
    link: 'https://arxiv.org/pdf/2506.02258'
  },
  {
    title:
      'Are Multimodal Foundation Models All That Is Needed for Emofake Detection?',
    authors: [
      'Mohd Mujtaba Akhtar*', 'Girish*', 'Orchid Chetia Phukan*',
      'Swarup Ranjan Behera', 'Pailla Balakrishna Reddy',
      'Ananda Chandra Nayak', 'Sanjib Kumar Nayak', 'Arun Balaji Buduru'
    ],
    venue: 'APSIPA', year: '2025',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=4HIGa7AAAAAJ&citation_for_view=4HIGa7AAAAAJ:_FxGoFyzp5QC'
  },
  {
    title:
      'Rethinking Cross-Corpus Speech Emotion Recognition Benchmarking: Are Paralinguistic Pre-Trained Representations Sufficient?',
    authors: [
      'Mohd Mujtaba Akhtar*', 'Orchid Chetia Phukan*', 'Girish*',
      'Swarup Ranjan Behera', 'Sanjib', 'Arun Balaji Buduru', 'Rajesh Sharma'
    ],
    venue: 'APSIPA', year: '2025',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=4HIGa7AAAAAJ&citation_for_view=4HIGa7AAAAAJ:LkGwnXOMwfcC'
  },
  {
    title:
      'Beyond Speech and More: Investigating the Emergent Ability of Speech Pre-Trained Models for Classifying Physiological Time-Series Signals',
    authors: [
      'Orchid Chetia Phukan*', 'Swarup Ranjan Behera*', 'Girish*',
      'Mohd Mujtaba Akhtar', 'Sanjib', 'Arun Balaji Buduru', 'Rajesh Sharma'
    ],
    venue: 'APSIPA', year: '2025',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=4HIGa7AAAAAJ&citation_for_view=4HIGa7AAAAAJ:qjMakFHDy7sC'
  },
  {
    title:
      'Investigating Polyglot Speech Foundation Models for Learning Collective Emotion from Crowds',
    authors: [
      'Orchid Chetia Phukan*', 'Girish*', 'Mohd Mujtaba Akhtar*',
      'Panchal Nayak', 'Priyabrata Mallick', 'Swarup Ranjan Behera',
      'Parabattina Bhagath', 'Pailla Balakrishna Reddy', 'Arun Balaji Buduru'
    ],
    venue: 'APSIPA', year: '2025',
    link: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&user=4HIGa7AAAAAJ&citation_for_view=4HIGa7AAAAAJ:roLk4NBRz8UC'
  },
  {
    title:
      'Strong Alone, Stronger Together: Synergizing Modality-Binding Foundation Models with Optimal Transport for Non- Verbal Emotion Recognition',
    authors: [
      'Orchid Chetia Phukan', 'Mohd Mujtaba Akhtar*', 'Girish*',
      'Swarup Ranjan Behera', 'Sishir Kalita', 'Arun Balaji Buduru',
      'Rajesh Sharma', 'SR Mahadeva Prasanna'
    ],
    venue: 'ICASSP', year: '2025',
    link: 'https://ieeexplore.ieee.org/document/10889257'
  },
  {
    title:
      'NeuRO: An Application for Code-Switched Autism Detection in Children',
    authors: [
      'Mohd Mujtaba Akhtar*', 'Girish*', 'Orchid Chetia Phukan*', 'Muskaan Singh*'
    ],
    venue: 'INTERSPEECH Show & Tell', year: '2024',
    link: 'https://ui.adsabs.harvard.edu/abs/2024arXiv240603514M/abstract'
  }
];

export default function Publications() {
  return (
    <section className="container">
      <h2 className="section-title">Publications &amp; Preprints</h2>

      {/* No pager — show everything */}
      <div className="pub-list">
        <Stagger>
          {pubs.map((p, i) => (
            <Item key={`${p.title}-${i}`}>
              <article className="card pub-card">
                <div className="pub-title">{p.title}</div>
                <div className="pub-meta">{formatAuthors(p.authors)}</div>

                <div className="pub-actions">
                  <span className="badge">
                    {p.venue} {p.year}{p.note ? ` · ${p.note}` : ''}
                  </span>
                  <a
                    className="badge badge-icon"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} — PDF`}
                    title="Open PDF"
                  >
                    <FaFilePdf />
                  </a>
                </div>
              </article>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

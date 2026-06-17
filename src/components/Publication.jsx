import { useState, useMemo } from "react";
import React from "react";
import "../components/Publication.css";
import CoauthorNetwork from "./CoauthorNetwork";
import CitationChart   from "./CitationChart";

const confPubs = [
  {
    year: 2026,
    title: "Synergizing Zero-Shot Cross-Lingual Alzheimer Detection with Language Invariant Multimodal Bi-Geometric Adversarial Learning",
    authors: "Girish*, Mohd Mujtaba Akhtar*, Farhan Sheth, Muskaan Singh, Juliana Gerard, Paula McClean, Kongfatt Wong-Lin",
    venue: "INTERSPEECH 2026",
    pdf: "https://arxiv.org/html/2606.17254v1",
  },
  {
    year: 2026,
    title: "Towards Detecting Neural Audio Codec Synthesized Heart Sounds",
    authors: "Girish*, Orchid Chetia Phukan*, Mohd Mujtaba Akhtar*, Bhavinkumar Vinodbhai Kuwar, Swarup Ranjan Behera, Arun Balaji Buduru",
    venue: "INTERSPEECH 2026",
    pdf: "#",
  },
  {
    year: 2026,
    title: "From Signals to Patterns: Non-Invasive Tuberculosis Detection from Cough Audio using Bandit Weighted Hyperbolic Prototypes",
    authors: "Mohd Mujtaba Akhtar*, Girish*, Sanjam Wadhwa, Muskaan Singh, Ning Ma",
    venue: "INTERSPEECH 2026",
    pdf: "https://arxiv.org/html/2606.17337v1",
  },
  {
    year: 2026,
    title: "Bridging the Age Gap: Towards Detecting Neural Audio Codec Synthesized Elderly Speech Deepfake",
    authors: "Orchid Chetia Phukan*, Girish*, Mohd Mujtaba Akhtar*, Chi-Chun Lee",
    venue: "INTERSPEECH 2026",
    pdf: "#",
  },
  {
    year: 2026,
    title: "Bridging the SEA Gap: An Initial Benchmark for Neural Audio Codec-Synthesized Speech Deepfakes in South-East Asian Languages",
    authors: "Orchid Chetia Phukan*, Girish*, Mohd Mujtaba Akhtar*, Arun Balaji Buduru",
    venue: "IJCAI 2026",
    pdf: "https://arxiv.org/abs/2606.15968",
    github: "https://helixometry.github.io/SEACodecFake/",
  },
  {
    year: 2026,
    title: "Prosody as Supervision: Bridging the Non-Verbal–Verbal for Multilingual Speech Emotion Recognition",
    authors: "Girish*, Mohd Mujtaba Akhtar*, Muskaan Singh",
    venue: "ACL 2026 Main",
    pdf: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=4HIGa7AAAAAJ&sortby=pubdate&citation_for_view=4HIGa7AAAAAJ:kNdYIx-mwKoC",
    github: "https://helixometry.github.io/NOVA-ARC---ACL26/",
  },
  {
    year: 2026,
    title: "Indic-CodecFake meets SATYAM: Towards Detecting Neural Audio Codec Synthesized Speech Deepfakes in Indic Languages",
    authors: "Girish*, Mohd Mujtaba Akhtar*, Orchid Chetia Phukan*, Arun Balaji Buduru",
    venue: "ACL 2026 Findings",
    pdf: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=4HIGa7AAAAAJ&sortby=pubdate&citation_for_view=4HIGa7AAAAAJ:Zph67rFs4hoC",
    github: "https://helixometry.github.io/IndicFake/",
  },
  {
    year: 2026,
    title: "HCFD: A Benchmark for Audio Deepfake Detection in Healthcare",
    authors: "Mohd Mujtaba Akhtar*, Girish*, Muskaan Singh",
    venue: "ACL 2026 Findings",
    pdf: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=4HIGa7AAAAAJ&sortby=pubdate&citation_for_view=4HIGa7AAAAAJ:KlAtU1dfN6UC",
    github: "https://helixometry.github.io/HCFD/",
  },
  {
    year: 2026,
    title: "Bridging Attribution and Open-Set Detection using Graph-Augmented Instance Learning in Synthetic Speech",
    authors: "Mohd Mujtaba Akhtar*, Girish*, Farhan Sheth, Muskaan Singh",
    venue: "EACL 2026 Main",
    pdf: "https://arxiv.org/abs/2601.07064",
  },
  {
    year: 2026,
    title: "DIVINE: Coordinating Multimodal Disentangled Representations for Oro-Facial Neurological Disorder Assessment",
    authors: "Mohd Mujtaba Akhtar*, Girish*, Muskaan Singh",
    venue: "EACL 2026 Main (Social Impact Award)",
    pdf: "https://arxiv.org/abs/2601.07014",
  },
  {
    year: 2025,
    title: "Towards Attribution of Generators and Emotional Manipulation in Cross-Lingual Synthetic Speech using Geometric Learning",
    authors: "Girish*, Mohd Mujtaba Akhtar*, Farhan Sheth*, Muskaan Singh",
    venue: "IJCNLP-AACL 2025 Findings",
    pdf: "https://arxiv.org/abs/2511.10790",
  },
  {
    year: 2025,
    title: "Curved Worlds, Clear Boundaries: Generalizing Speech Deepfake Detection using Hyperbolic and Spherical Geometry Spaces",
    authors: "Farhan Sheth*, Girish*, Mohd Mujtaba Akhtar*, Muskaan Singh",
    venue: "IJCNLP-AACL 2025 Main",
    pdf: "https://arxiv.org/abs/2511.10793",
  },
  {
    year: 2025,
    title: "HYFuse: Aligning Heterogeneous Speech Pre-Trained Representations in Hyperbolic Space for Speech Emotion Recognition",
    authors: "Orchid Chetia Phukan*, Girish*, Mohd Mujtaba Akhtar*, Swarup Ranjan Behera, Pailla Balakrishna Reddy, Arun Balaji Buduru, Rajesh Sharma",
    venue: "INTERSPEECH 2025 (Oral)",
    pdf: "https://arxiv.org/pdf/2506.03403v1",
    github: "https://github.com/Helix-IIIT-Delhi/HYFuse-SER",
  },
  {
    year: 2025,
    title: "Investigating the Reasonable Effectiveness of Speaker Pre-Trained Models and their Synergistic Power for SingMOS Prediction",
    authors: "Orchid Chetia Phukan*, Girish*, Mohd Mujtaba Akhtar*, Swarup Ranjan Behera, Pailla Balakrishna Reddy, Arun Balaji Buduru, Rajesh Sharma",
    venue: "INTERSPEECH 2025",
    pdf: "https://arxiv.org/pdf/2506.02232",
    github: "https://github.com/Helix-IIIT-Delhi/BATCH-SingMOS",
  },
  {
    year: 2025,
    title: "Towards Source Attribution of Singing Voice Deepfake with Multimodal Foundation Models",
    authors: "Orchid Chetia Phukan*, Girish*, Mohd Mujtaba Akhtar*, Swarup Ranjan Behera, Priyabrata Mallick, Pailla Balakrishna Reddy, Arun Balaji Buduru, Rajesh Sharma",
    venue: "INTERSPEECH 2025",
    pdf: "https://arxiv.org/pdf/2506.03364v1",
    github: "https://github.com/Helix-IIIT-Delhi/COFFE-Singing_Voice_Deepfake",
  },
  {
    year: 2025,
    title: "PARROT: Synergizing Mamba and Attention-based SSL Pre-Trained Models via Parallel Branch Hadamard Optimal Transport for Speech Emotion Recognition",
    authors: "Orchid Chetia Phukan*, Mohd Mujtaba Akhtar*, Girish*, Swarup Ranjan Behera, Sai Kiran Patibandla, Arun Balaji Buduru, Rajesh Sharma",
    venue: "INTERSPEECH 2025",
    pdf: "https://arxiv.org/pdf/2506.01138",
  },
  {
    year: 2025,
    title: "SNIFR: Boosting Fine-Grained Child Harmful Content Detection Through Audio-Visual Alignment with Cascaded Cross-Transformer",
    authors: "Orchid Chetia Phukan*, Mohd Mujtaba Akhtar*, Girish*, Swarup Ranjan Behera, Abu Osama Siddiqui, Sarthak Jain, Priyabrata Mallick, Sai Kiran Patibandla, Pailla Balakrishna Reddy, Arun Balaji Buduru, Rajesh Sharma",
    venue: "INTERSPEECH 2025",
    pdf: "https://arxiv.org/pdf/2506.03378v1",
  },
  {
    year: 2025,
    title: "Towards Machine Unlearning for Paralinguistic Speech Processing",
    authors: "Orchid Chetia Phukan*, Girish*, Mohd Mujtaba Akhtar*, Shubham Singh, Swarup Ranjan Behera, Vandana Rajan, Muskaan Singh, Arun Balaji Buduru, Rajesh Sharma",
    venue: "INTERSPEECH 2025",
    pdf: "https://arxiv.org/pdf/2506.02230v1",
  },
  {
    year: 2025,
    title: "Towards Fusion of Neural Audio Codec-based Representations with Spectral for Heart Murmur Classification via Bandit-based Cross-Attention Mechanism",
    authors: "Orchid Chetia Phukan*, Girish*, Mohd Mujtaba Akhtar*, Swarup Ranjan Behera, Priyabrata Mallick, Santanu Roy, Arun Balaji Buduru, Rajesh Sharma",
    venue: "INTERSPEECH 2025",
    pdf: "https://arxiv.org/pdf/2506.01148v1",
  },
  {
    year: 2025,
    title: "Source Tracing of Synthetic Speech Systems Through Paralinguistic Pre-Trained Representations",
    authors: "Girish*, Mohd Mujtaba Akhtar*, Orchid Chetia Phukan*, Drishti Singh, Swarup Ranjan Behera, Pailla Balakrishna Reddy, Arun Balaji Buduru, Rajesh Sharma",
    venue: "EUSIPCO 2025",
    pdf: "https://arxiv.org/pdf/2506.01157v1",
  },
  {
    year: 2025,
    title: "Are Mamba-based Audio Foundation Models the best fit for non-verbal emotion recognition?",
    authors: "Mohd Mujtaba Akhtar*, Orchid Chetia Phukan*, Girish*, Swarup Ranjan Behera, Ananda Chandra Nayak, Sanjib Kumar Nayak, Arun Balaji Buduru, Rajesh Sharma",
    venue: "EUSIPCO 2025",
    pdf: "https://arxiv.org/pdf/2506.02258",
  },
  {
    year: 2025,
    title: "Are Multimodal Foundation Models All That Is Needed for Emofake Detection?",
    authors: "Mohd Mujtaba Akhtar*, Girish*, Orchid Chetia Phukan*, Swarup Ranjan Behera, Pailla Balakrishna Reddy, Ananda Chandra Nayak, Sanjib Kumar Nayak, Arun Balaji Buduru",
    venue: "APSIPA ASC 2025",
    pdf: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=4HIGa7AAAAAJ&citation_for_view=4HIGa7AAAAAJ:_FxGoFyzp5QC",
  },
  {
    year: 2025,
    title: "Rethinking Cross-Corpus Speech Emotion Recognition Benchmarking: Are Paralinguistic Pre-Trained Representations Sufficient?",
    authors: "Mohd Mujtaba Akhtar*, Orchid Chetia Phukan*, Girish*, Swarup Ranjan Behera, Sanjib Kumar Nayak, Arun Balaji Buduru, Rajesh Sharma",
    venue: "APSIPA ASC 2025",
    pdf: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=4HIGa7AAAAAJ&citation_for_view=4HIGa7AAAAAJ:LkGwnXOMwfcC",
  },
  {
    year: 2025,
    title: "Beyond Speech and More: Investigating the Emergent Ability of Speech Pre-Trained Models for Classifying Physiological Time-Series Signals",
    authors: "Orchid Chetia Phukan*, Swarup Ranjan Behera*, Girish*, Mohd Mujtaba Akhtar, Arun Balaji Buduru, Rajesh Sharma",
    venue: "APSIPA ASC 2025",
    pdf: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=4HIGa7AAAAAJ&citation_for_view=4HIGa7AAAAAJ:qjMakFHDy7sC",
  },
  {
    year: 2025,
    title: "Investigating Polyglot Speech Foundation Models for Learning Collective Emotion from Crowds",
    authors: "Orchid Chetia Phukan*, Girish*, Mohd Mujtaba Akhtar*, Panchal Nayak, Priyabrata Mallick, Swarup Ranjan Behera, Parabattina Bhagath, Pailla Balakrishna Reddy, Arun Balaji Buduru",
    venue: "APSIPA ASC 2025",
    pdf: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=4HIGa7AAAAAJ&citation_for_view=4HIGa7AAAAAJ:roLk4NBRz8UC",
  },
  {
    year: 2025,
    title: "Strong Alone, Stronger Together: Synergizing Modality-Binding Foundation Models with Optimal Transport for Non-Verbal Emotion Recognition",
    authors: "Orchid Chetia Phukan, Mohd Mujtaba Akhtar*, Girish*, Swarup Ranjan Behera, Sishir Kalita, Arun Balaji Buduru, Rajesh Sharma, S.R. Mahadeva Prasanna",
    venue: "ICASSP 2025",
    pdf: "https://ieeexplore.ieee.org/document/10889257",
  },
  {
    year: 2024,
    title: "NeuRO: An Application for Code-Switched Autism Detection in Children",
    authors: "Mohd Mujtaba Akhtar*, Girish*, Orchid Chetia Phukan*, Muskaan Singh*",
    venue: "INTERSPEECH Show & Tell 2024",
    pdf: "https://ui.adsabs.harvard.edu/abs/2024arXiv240603514M/abstract",
    github: "https://github.com/Helix-IIIT-Delhi/NeuRO",
  },
];

const VENUE_FILTERS = ["All", "IJCAI", "ACL", "EACL", "INTERSPEECH", "IJCNLP-AACL", "EUSIPCO", "APSIPA", "ICASSP"];

function highlightAuthor(text) {
  return text
    .replace(/Girish\s*\*/g, '<span class="author-accent">Girish*</span>')
    .replace(/Girish∗/g,     '<span class="author-accent">Girish∗</span>');
}

export default function Publications() {
  const [search,      setSearch]      = useState("");
  const [activeVenue, setActiveVenue] = useState("All");

  // Filter list
  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return confPubs.filter((p) => {
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.authors.toLowerCase().includes(q);
      const matchVenue =
        activeVenue === "All" ||
        p.venue.toUpperCase().includes(activeVenue.toUpperCase());
      return matchSearch && matchVenue;
    });
  }, [search, activeVenue]);

  // Group filtered papers by year (descending)
  const byYear = useMemo(() => {
    const map = {};
    filtered.forEach((p) => {
      if (!map[p.year]) map[p.year] = [];
      map[p.year].push(p);
    });
    return map;
  }, [filtered]);

  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a);

  return (
    <section id="publications" className="pubs-page" aria-labelledby="pubs-title">
      <div className="wrap">
        <h2 id="pubs-title" className="pubs-heading scroll-reveal">Conference publications</h2>

        {/* Search + Venue filter */}
        <div className="pubs-controls">
          <input
            className="pubs-search"
            type="text"
            placeholder="Search by title or author…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search publications"
          />
          <div className="pubs-filters" role="group" aria-label="Filter by venue">
            {VENUE_FILTERS.map((v) => (
              <button
                key={v}
                className={`filter-chip${activeVenue === v ? " filter-chip--active" : ""}`}
                onClick={() => setActiveVenue(v)}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="pubs-empty">No publications match your search.</p>
        ) : (
          <ol className="pubs-list" key={`${activeVenue}|${search}`}>
            {years.map((year, yi) => (
              <React.Fragment key={year}>
                {/* Year separator — first group has no top line */}
                <li className={`pubs-year-sep${yi === 0 ? " pubs-year-sep--first" : ""}`}>
                  <span className="year-sep-label">{year}</span>
                </li>

                {byYear[year].map((p, i) => (
                  <li key={`${year}-${i}`} className="pub-row">
                    <h3 className="pub-title">{p.title}</h3>
                    <p
                      className="pub-authors"
                      dangerouslySetInnerHTML={{ __html: highlightAuthor(p.authors) }}
                    />
                    <div className="pub-actions">
                      <span className="badge">{p.venue}</span>
                      {p.pdf && p.pdf !== "#" && (
                        <a className="btn" href={p.pdf} target="_blank" rel="noopener noreferrer">
                          PDF
                        </a>
                      )}
                      {p.github && (
                        <a className="btn btn--gh" href={p.github} target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </React.Fragment>
            ))}
          </ol>
        )}
        <CitationChart pubs={confPubs} />
        <CoauthorNetwork />
      </div>
    </section>
  );
}

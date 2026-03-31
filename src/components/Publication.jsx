import { useState, useMemo } from "react";
import React from "react";
import "../components/Publication.css";

const confPubs = [
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
    pdf: "https://drive.google.com/file/d/1lEc8M1nQV39p_YYXck6sgUdPDynUxukU/view",
  },
  {
    year: 2025,
    title: "Curved Worlds, Clear Boundaries: Generalizing Speech Deepfake Detection using Hyperbolic and Spherical Geometry Spaces",
    authors: "Farhan Sheth*, Girish*, Mohd Mujtaba Akhtar*, Muskaan Singh",
    venue: "IJCNLP-AACL 2025 Main",
    pdf: "https://drive.google.com/file/d/1VKSD0kaYQQnKj_ObyCU4s4wNRxutC0I-/view",
  },
  {
    year: 2025,
    title: "HYFuse: Aligning Heterogeneous Speech Pre-Trained Representations in Hyperbolic Space for Speech Emotion Recognition",
    authors: "Orchid Chetia Phukan*, Girish*, Mohd Mujtaba Akhtar*, Swarup Ranjan Behera, Pailla Balakrishna Reddy, Arun Balaji Buduru, Rajesh Sharma",
    venue: "INTERSPEECH 2025 (Oral)",
    pdf: "https://arxiv.org/pdf/2506.03403",
  },
  {
    year: 2025,
    title: "Investigating the Reasonable Effectiveness of Speaker Pre-Trained Models and their Synergistic Power for SingMOS Prediction",
    authors: "Orchid Chetia Phukan*, Girish*, Mohd Mujtaba Akhtar*, Swarup Ranjan Behera, Pailla Balakrishna Reddy, Arun Balaji Buduru, Rajesh Sharma",
    venue: "INTERSPEECH 2025",
    pdf: "https://arxiv.org/pdf/2506.02232",
  },
  {
    year: 2025,
    title: "Towards Source Attribution of Singing Voice Deepfake with Multimodal Foundation Models",
    authors: "Orchid Chetia Phukan*, Girish*, Mohd Mujtaba Akhtar*, Swarup Ranjan Behera, Priyabrata Mallick, Pailla Balakrishna Reddy, Arun Balaji Buduru, Rajesh Sharma",
    venue: "INTERSPEECH 2025",
    pdf: "https://arxiv.org/pdf/2506.03364",
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
    pdf: "https://arxiv.org/pdf/2506.03378",
  },
  {
    year: 2025,
    title: "Towards Machine Unlearning for Paralinguistic Speech Processing",
    authors: "Orchid Chetia Phukan*, Girish*, Mohd Mujtaba Akhtar*, Shubham Singh, Swarup Ranjan Behera, Vandana Rajan, Muskaan Singh, Arun Balaji Buduru, Rajesh Sharma",
    venue: "INTERSPEECH 2025",
    pdf: "https://arxiv.org/pdf/2506.02230",
  },
  {
    year: 2025,
    title: "Towards Fusion of Neural Audio Codec-based Representations with Spectral for Heart Murmur Classification via Bandit-based Cross-Attention Mechanism",
    authors: "Orchid Chetia Phukan*, Girish*, Mohd Mujtaba Akhtar*, Swarup Ranjan Behera, Priyabrata Mallick, Santanu Roy, Arun Balaji Buduru, Rajesh Sharma",
    venue: "INTERSPEECH 2025",
    pdf: "https://arxiv.org/pdf/2506.01148",
  },
  {
    year: 2025,
    title: "Source Tracing of Synthetic Speech Systems Through Paralinguistic Pre-Trained Representations",
    authors: "Girish*, Mohd Mujtaba Akhtar*, Orchid Chetia Phukan*, Drishti Singh, Swarup Ranjan Behera, Pailla Balakrishna Reddy, Arun Balaji Buduru, Rajesh Sharma",
    venue: "EUSIPCO 2025",
    pdf: "https://arxiv.org/pdf/2506.01157",
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
    pdf: "https://arxiv.org/pdf/2509.16193",
  },
  {
    year: 2025,
    title: "Rethinking Cross-Corpus Speech Emotion Recognition Benchmarking: Are Paralinguistic Pre-Trained Representations Sufficient?",
    authors: "Mohd Mujtaba Akhtar*, Orchid Chetia Phukan*, Girish*, Swarup Ranjan Behera, Sanjib Kumar Nayak, Arun Balaji Buduru, Rajesh Sharma",
    venue: "APSIPA ASC 2025",
    pdf: "https://arxiv.org/pdf/2509.16182",
  },
  {
    year: 2025,
    title: "Beyond Speech and More: Investigating the Emergent Ability of Speech Pre-Trained Models for Classifying Physiological Time-Series Signals",
    authors: "Orchid Chetia Phukan*, Swarup Ranjan Behera*, Girish*, Mohd Mujtaba Akhtar, Arun Balaji Buduru, Rajesh Sharma",
    venue: "APSIPA ASC 2025",
    pdf: "https://arxiv.org/pdf/2410.12645",
  },
  {
    year: 2025,
    title: "Investigating Polyglot Speech Foundation Models for Learning Collective Emotion from Crowds",
    authors: "Orchid Chetia Phukan*, Girish*, Mohd Mujtaba Akhtar*, Panchal Nayak, Priyabrata Mallick, Swarup Ranjan Behera, Parabattina Bhagath, Pailla Balakrishna Reddy, Arun Balaji Buduru",
    venue: "APSIPA ASC 2025",
    pdf: "https://arxiv.org/pdf/2509.16329",
  },
  {
    year: 2025,
    title: "Strong Alone, Stronger Together: Synergizing Modality-Binding Foundation Models with Optimal Transport for Non-Verbal Emotion Recognition",
    authors: "Orchid Chetia Phukan, Mohd Mujtaba Akhtar*, Girish*, Swarup Ranjan Behera, Sishir Kalita, Arun Balaji Buduru, Rajesh Sharma, S.R. Mahadeva Prasanna",
    venue: "ICASSP 2025",
    pdf: "https://ieeexplore.ieee.org/document/10889257/?denied=",
  },
  {
    year: 2024,
    title: "NeuRO: An Application for Code-Switched Autism Detection in Children",
    authors: "Mohd Mujtaba Akhtar*, Girish*, Orchid Chetia Phukan*, Muskaan Singh*",
    venue: "INTERSPEECH Show & Tell 2024",
    pdf: "https://arxiv.org/pdf/2406.03514",
  },
];

const VENUE_FILTERS = ["All", "EACL", "INTERSPEECH", "IJCNLP-AACL", "EUSIPCO", "APSIPA", "ICASSP"];

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
        <h2 id="pubs-title" className="pubs-heading">Conference publications</h2>

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
          <ol className="pubs-list">
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
                      <a className="btn" href={p.pdf} target="_blank" rel="noopener noreferrer">
                        PDF
                      </a>
                    </div>
                  </li>
                ))}
              </React.Fragment>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}

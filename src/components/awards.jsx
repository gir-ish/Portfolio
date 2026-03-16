// src/components/Awards.jsx
import React from "react";
import "./awards.css";

const Awards = () => {
  return (
    <section id="awards" className="awards-section">
      <div className="awards-inner">
        <h2 className="awards-title">awards &amp; achievements</h2>
        <p className="awards-subtitle">
          selected recognitions, service, and milestones.
        </p>

        <ul className="awards-list">
          <li className="award-item">
            <div className="award-text">
              Awarded the <strong>Social Impact Award</strong> at{" "}
              <span style={{ color: "#0e387a" }}>EACL 2026</span> for the paper{" "}
              <em>
                “DIVINE: Coordinating Multimodal Disentangled Representations for
                Oro-Facial Neurological Disorder Assessment.”
              </em>
            </div>
            <div className="award-tags">
              <span className="tag tag--gold">2026</span>
              <span className="tag tag--maroon">AWARD</span>
            </div>
          </li>

          <li className="award-item">
            <div className="award-text">
              Serving as a <strong>Reviewer for ICASSP 2026</strong>, contributing
              to the peer-review process in{" "}
              <span style={{ color: "#0e387a" }}>
                speech and audio processing
              </span>
              .
            </div>
            <div className="award-tags">
              <span className="tag tag--gold">2026</span>
              <span className="tag tag--maroon">REVIEWER</span>
            </div>
          </li>

          <li className="award-item">
            <div className="award-text">
              Received a <strong>€1000 ISCA Travel Grant</strong> to attend{" "}
              <span style={{ color: "#0e387a" }}>INTERSPEECH 2025</span> in{" "}
              <strong>Rotterdam, The Netherlands</strong>.
            </div>
            <div className="award-tags">
              <span className="tag tag--gold">AUG 2025</span>
              <span className="tag tag--maroon">TRAVEL GRANT</span>
            </div>
          </li>

          <li className="award-item">
            <div className="award-text">
              Attended and presented work at{" "}
              <span style={{ color: "#0e387a" }}>INTERSPEECH 2025</span>{" "}
              (August 17–21, 2025, <strong>Rotterdam</strong>,{" "}
              <strong>The Netherlands</strong>), engaging with leading research in{" "}
              <span style={{ color: "#0e387a" }}>
                speech and language processing
              </span>
              .
            </div>
            <div className="award-tags">
              <span className="tag tag--gold">AUG 2025</span>
              <span className="tag tag--maroon">CONFERENCE</span>
            </div>
          </li>

          <li className="award-item">
            <div className="award-text">
              Contributed to a strong publication year with{" "}
              <strong>multiple papers across INTERSPEECH, EUSIPCO, APSIPA, ICASSP, IJCNLP-AACL, and EACL</strong>,
              including an <strong>oral paper at INTERSPEECH 2025</strong>.
            </div>
            <div className="award-tags">
              <span className="tag tag--gold">2025–2026</span>
              <span className="tag tag--maroon">PUBLICATIONS</span>
            </div>
          </li>

          <li className="award-item">
            <div className="award-text">
              <strong>ISCA Team Volunteer</strong> — contributing to script
              development and co-hosting episodes on{" "}
              <span style={{ color: "#0e387a" }}>
                speech technology and AI advancements
              </span>
              .
            </div>
            <div className="award-tags">
              <span className="tag tag--gold">2024–PRESENT</span>
              <span className="tag tag--maroon">SERVICE</span>
            </div>
          </li>

          <li className="award-item">
            <div className="award-text">
              Awarded <strong>First Runner-Up</strong> in the{" "}
              <span style={{ color: "#0e387a" }}>
                Technical Idea Presentation at ICE Day
              </span>
              , <strong>UPES Dehradun</strong> (22 October 2024), for a concept
              related to speaker verification.
            </div>
            <div className="award-tags">
              <span className="tag tag--gold">OCT 2024</span>
              <span className="tag tag--maroon">COMPETITION</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Awards;
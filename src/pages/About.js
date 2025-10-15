import React from 'react';
import myPhoto from '../assets/1.jpg';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';
import { Stagger, Item, ParallaxIn, Magnetic } from '../components/Motion';

export default function About() {
  return (
    <>
      <section className="hero">
        <div>
          <div className="kicker">
            U.G. Research — IIIT-Delhi &amp; Ulster University · B.Tech ’26 @ UPES
          </div>

          <h1>Speech &amp; Multimodal AI with Hyperbolic and Graph-Based Methods</h1>

          <p className="sub">
            I develop practical speech intelligence for <strong>forensics</strong> and <strong>affective computing</strong>,
            combining <strong>graph neural networks</strong> with <strong>hyperbolic representations</strong> to model
            hierarchical and relational structure in audio and multimodal signals. My work spans
            <em> deepfake source attribution</em>, <em>non-verbal emotion recognition</em>, and
            <em> cross-corpus generalization</em>, with codec-aware features and foundation-model alignment for robust,
            real-world deployment.
          </p>
        </div>

        <ParallaxIn>
          {/* Avatar block — image and icons are locked together */}
          <div className="avatar-wrap">
            <img src={myPhoto} alt="Girish — Speech/Audio ML Researcher" className="avatar" />
            <div className="social-bar" aria-label="Social links">
              <Magnetic>
                <a
                  href="https://linkedin.com/in/girish-b794092a1/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={26} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://github.com/gir-ish"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub size={26} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="https://scholar.google.com/citations?user=4HIGa7AAAAAJ&hl=en"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Google Scholar"
                >
                  <SiGooglescholar size={26} />
                </a>
              </Magnetic>
              <Magnetic>
                <a href="mailto:girish.research.pr@gmail.com" aria-label="Email">
                  <FaEnvelope size={26} />
                </a>
              </Magnetic>
            </div>
          </div>
        </ParallaxIn>
      </section>

      {/* 3-column Recent Updates */}
      <section>
        <h2 className="section-title">Recent Updates</h2>

        <div className="updates-grid">
          <Stagger>
            <Item>
              <div className="card">
                <h3>Conferences &amp; Recognition</h3>
                <p className="sub">
                  Recently attended <strong>INTERSPEECH</strong>; awarded a <strong>€1,000 ISCA/INTERSPEECH travel grant</strong>.
                  Continuing dissemination across <strong>ICASSP</strong>, <strong>EUSIPCO</strong>, and
                  <strong> APSIPA Show&nbsp;&amp;&nbsp;Tell</strong>.
                </p>
              </div>
            </Item>

            <Item>
              <div className="card">
                <h3>Research &amp; Collaboration</h3>
                <p className="sub">
                  Ongoing work at <strong>IIIT-Delhi</strong> (paralinguistics, deepfakes, ALMs) and
                  <strong> Ulster University</strong> (code-switched speech for autism insights).
                  Currently collaborating on an <strong>AAAI</strong> submission.
                </p>
              </div>
            </Item>

            <Item>
              <div className="card">
                <h3>Systems &amp; Projects</h3>
                <p className="sub">
                  Currently building an application that integrates <strong>federated learning</strong> for
                  <strong> diabetic retinopathy</strong> screening—privacy-preserving training across clinical silos with model
                  aggregation, on-device inference targets, and auditability for regulatory readiness.
                </p>
              </div>
            </Item>
          </Stagger>
        </div>
      </section>
    </>
  );
}

// src/components/Intro.jsx
import "./intro.css";
import avatar from "../../public/girish.jpg";

export default function Intro() {
  return (
    <section id="about" className="intro section">
      <div className="page-grid">
        <img
          className="avatar"
          src={avatar}
          alt="Portrait of Girish"
          width="335"
          height="355"
          loading="lazy"
          decoding="async"
        />

        <div className="intro-col">
          <h1 className="intro-name">Girish</h1>

          <div className="intro-badge">
            U.G. Research Associate @ IIIT-Delhi &nbsp;|&nbsp; B.Tech (Hons.) ’26 @ UPES
          </div>

          <h2 className="intro-tagline">
            Speech, Multimodal Learning
            <span className="br" aria-hidden="true"></span>
            {" "}and Audio Language Models
          </h2>

          <p className="intro-desc">
            I work on <span className="hi">speech processing</span>,
            <span className="hi"> multimodal learning</span>, and
            <span className="hi"> Audio Language Models</span>, with a focus on
            practical AI for <span className="hi">speech deepfake detection</span>,
            <span className="hi"> affective computing</span>, and
            <span className="hi"> healthcare applications</span>. My research spans
            deepfake attribution, speech emotion recognition, code-switched speech
            analysis for autism, and cross-domain modeling with speech foundation
            models, with the goal of building robust systems for real-world deployment.
          </p>
        </div>

        <div className="interests">
          <h3 className="interests-title">Research Interests</h3>
          <ul className="interests-list">
            <li>Speech Processing</li>
            <li>Multimodal Learning</li>
            <li>Audio Language Models</li>
            <li>Speech Deepfake Detection</li>
            <li>Affective Computing</li>
            <li>Speech for Healthcare</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
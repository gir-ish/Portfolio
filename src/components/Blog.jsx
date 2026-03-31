import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./Blog.css";

const POSTS = [
  {
    id: 1,
    date: "Mar 2026",
    tag: "Research",
    title: "Why Hyperbolic Space Works for Speech Deepfake Detection",
    excerpt: "Euclidean geometry struggles with hierarchical data. Here's why curved spaces give better decision boundaries for detecting synthetic speech.",
    content: `
## The Problem with Flat Space

Most neural networks operate in Euclidean space — flat, isotropic, and familiar. But speech data has an inherently **hierarchical structure**: phonemes nest inside words, words inside utterances, speakers inside language groups. Flat geometry is poorly suited for this.

## Enter Hyperbolic Geometry

Hyperbolic space grows *exponentially* with radius, unlike Euclidean space which grows polynomially. This matches how tree-structured data expands — making it naturally efficient for encoding hierarchical relationships with fewer dimensions.

In our work on speech deepfake detection, we embed speaker and acoustic representations into hyperbolic space using the **Poincaré ball model**. The result: cleaner separation between real and synthetic speech, especially for cross-lingual scenarios.

## Key Insight

> Real speech clusters tightly near the origin (shared phonetic priors), while synthetic speech from different generators spreads toward the boundary — a natural consequence of the geometry.

This geometric intuition drives the decision boundary improvements we see across datasets.
    `,
  },
  {
    id: 2,
    date: "Jan 2026",
    tag: "Paper Notes",
    title: "DIVINE: Multimodal Disentanglement for Neurological Assessment",
    excerpt: "How we decomposed audio-visual representations for oro-facial disorder assessment — and why disentanglement matters more than fusion.",
    content: `
## Motivation

Standard multimodal fusion (concatenation, cross-attention) conflates modality-specific and modality-shared information. For clinical tasks like **oro-facial neurological disorder assessment**, this is problematic — you need to know *which* modality is contributing *what*.

## Our Approach: DIVINE

DIVINE (**D**isentangled **I**nstance-a**V**are multImodal **N**etwork) separates representations into:
- **Shared space**: information consistent across modalities (content)
- **Private space**: modality-specific signals (style, noise)

We coordinate these using a combination of **mutual information minimization** and **reconstruction objectives**.

## Why It Won the Social Impact Award

The clinical impact is direct: by isolating which acoustic or visual features drive the model's decision, clinicians can interpret predictions rather than treating the model as a black box.
    `,
  },
  {
    id: 3,
    date: "Nov 2025",
    tag: "Opinion",
    title: "Are Foundation Models Enough for Audio Tasks?",
    excerpt: "Large pre-trained models are powerful, but blindly applying them to every audio task misses important signal. Here's what I've learned.",
    content: `
## The Foundation Model Temptation

With models like Wav2Vec 2.0, HuBERT, and Whisper available off-the-shelf, it's tempting to treat every audio task as a fine-tuning problem. But our research suggests this is often suboptimal.

## What Foundation Models Miss

1. **Paralinguistic signals**: Models trained for ASR suppress speaker identity, emotion, and health cues — exactly what matters for non-speech tasks.
2. **Domain shift**: Pre-training data skews toward clean, read speech. Clinical or synthetic speech has very different statistics.
3. **Modality blindness**: Single-modality SSL models ignore complementary visual or physiological signals.

## What Works Better

In our INTERSPEECH 2025 work, we found that **combining multiple pre-trained models** (speaker, emotion, content) via optimal transport yields significantly better results than any single foundation model — even larger ones.

> The right architecture beats the biggest model.
    `,
  },
];

export default function Blog() {
  const [active, setActive] = useState(null);
  const post = active !== null ? POSTS.find((p) => p.id === active) : null;

  return (
    <main className="blog-page">
      <div className="blog-wrap">
        {post ? (
          <article className="blog-post">
            <button className="blog-back" onClick={() => setActive(null)}>← Back to Notes</button>
            <div className="blog-post-meta">
              <span className="blog-tag">{post.tag}</span>
              <span className="blog-date">{post.date}</span>
            </div>
            <h1 className="blog-post-title">{post.title}</h1>
            <div className="blog-post-body">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </article>
        ) : (
          <>
            <h2 className="blog-heading">Research Notes</h2>
            <p className="blog-intro">Thoughts on papers, methods, and ideas from my research.</p>
            <div className="blog-list">
              {POSTS.map((p) => (
                <div key={p.id} className="blog-card" onClick={() => setActive(p.id)}>
                  <div className="blog-card-meta">
                    <span className="blog-tag">{p.tag}</span>
                    <span className="blog-date">{p.date}</span>
                  </div>
                  <h3 className="blog-card-title">{p.title}</h3>
                  <p className="blog-card-excerpt">{p.excerpt}</p>
                  <span className="blog-read-more">Read more →</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}

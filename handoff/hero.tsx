"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// CMYK process chips for the swatch card
const cmyk = [
  { l: "C", c: "var(--cyan)" },
  { l: "M", c: "var(--magenta)" },
  { l: "Y", c: "var(--yellow)" },
  { l: "K", c: "var(--ink)" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  // Cursor parallax — writes --mx / --my onto the section; the cards read them in CSS.
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 2;
    e.currentTarget.style.setProperty("--mx", x.toFixed(3));
    e.currentTarget.style.setProperty("--my", y.toFixed(3));
  };
  const onLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.setProperty("--mx", "0");
    e.currentTarget.style.setProperty("--my", "0");
  };

  return (
    <section
      id="home"
      className="hero-spec"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* baseline grid */}
      <div className="spec-grid" aria-hidden="true" />

      {/* crop marks */}
      <span className="spec-crop tl" aria-hidden="true" />
      <span className="spec-crop tr" aria-hidden="true" />
      <span className="spec-crop bl" aria-hidden="true" />
      <span className="spec-crop br" aria-hidden="true" />

      {/* paint accents (already in /public/gen) */}
      <img src="/gen/splash_cyan.png" alt="" aria-hidden="true" className="spec-paint p1" />
      <img src="/gen/splash_yellow.png" alt="" aria-hidden="true" className="spec-paint p2" />

      {/* TL — pen tool */}
      <div className="spec-para para-tl">
        <div className="spec-bob bob-a">
          <div className="spec-card">
            <div className="spec-card-label">PEN TOOL · VECTOR</div>
            <svg width="210" height="132" viewBox="0 0 210 132" fill="none">
              <line x1="24" y1="110" x2="64" y2="22" stroke="var(--red)" strokeWidth="1.2" strokeDasharray="4 4" />
              <line x1="186" y1="100" x2="150" y2="22" stroke="var(--red)" strokeWidth="1.2" strokeDasharray="4 4" />
              <path d="M24 110 C 64 22, 150 22, 186 100" stroke="var(--navy)" strokeWidth="2.5" />
              <rect x="19" y="105" width="11" height="11" fill="var(--paper-card)" stroke="var(--navy)" strokeWidth="2" />
              <rect x="181" y="95" width="11" height="11" fill="var(--paper-card)" stroke="var(--navy)" strokeWidth="2" />
              <circle cx="64" cy="22" r="5" fill="var(--red)" />
              <circle cx="150" cy="22" r="5" fill="var(--red)" />
              <path d="M120 78 l20 5 -7 6 9 11 -5 4 -9 -11 -6 6 z" fill="var(--ink)" />
            </svg>
          </div>
        </div>
      </div>

      {/* TR — CMYK */}
      <div className="spec-para para-tr">
        <div className="spec-bob bob-b">
          <div className="spec-card">
            <div className="spec-cmyk">
              {cmyk.map((ch) => (
                <div key={ch.l}>
                  <div className="spec-chip" style={{ background: ch.c }} />
                  <span className="spec-chip-l">{ch.l}</span>
                </div>
              ))}
            </div>
            <div className="spec-card-label" style={{ marginTop: 11, marginBottom: 0 }}>
              CMYK · PROCESS COLOUR
            </div>
          </div>
        </div>
      </div>

      {/* BL — type specimen */}
      <div className="spec-para para-bl">
        <div className="spec-bob bob-c">
          <div className="spec-card">
            <div className="spec-type">
              <span className="spec-aa">Aa</span>
              <div>
                <div className="spec-type-name">Fraunces</div>
                <div className="spec-type-meta">DISPLAY · 9–144 OPSZ</div>
              </div>
            </div>
            <div className="spec-type-glyphs">
              ABCDEFGHIJ · abcdefghij · 0123456789
            </div>
          </div>
        </div>
      </div>

      {/* BR — Pantone chip */}
      <div className="spec-para para-br">
        <div className="spec-bob bob-d">
          <div className="spec-pantone">
            <div className="spec-pantone-top" />
            <div className="spec-pantone-body">
              <div className="spec-pantone-brand">PANTONE®</div>
              <div className="spec-pantone-code">186 C</div>
              <div className="spec-pantone-name">Process Red</div>
            </div>
          </div>
        </div>
      </div>

      {/* rotating seal */}
      <div className="spec-para para-seal spec-seal">
        <svg width="104" height="104" viewBox="0 0 120 120">
          <defs>
            <path id="sealCircle" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" />
          </defs>
          <text fontFamily="var(--font-body), sans-serif" fontSize="10.5" fontWeight="700" letterSpacing="3.2" fill="var(--ink)">
            <textPath href="#sealCircle">GRAPHIC DESIGN · PRINT · BRAND · IDEAS · </textPath>
          </text>
          <circle cx="60" cy="60" r="13" fill="none" stroke="var(--red)" strokeWidth="1.4" />
          <text x="60" y="65" textAnchor="middle" fontFamily="var(--font-display), serif" fontSize="16" fontWeight="600" fill="var(--red)">✦</text>
        </svg>
      </div>

      {/* center content */}
      <div className="spec-content">
        <motion.img
          src="/assets/logo.png"
          alt="Commercial Advertising"
          className="spec-logo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
        />
        <motion.span
          className="kicker"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34, ease }}
        >
          Commercial Advertising
        </motion.span>
        <motion.h1
          className="hero-name spec-name"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.44, ease }}
        >
          Design that gets
          <span className="red">noticed.</span>
        </motion.h1>
        <motion.div
          className="hero-rule"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.58, ease }}
        />
        <motion.p
          className="hero-tag"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.66, ease }}
        >
          Your Partner in Printing, Branding,<br />
          Advertising &amp; Event Solutions
        </motion.p>
        <motion.a
          href="#work"
          className="btn spec-cta"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.76, ease }}
          whileHover={{ y: -3 }}
        >
          See our work
          <ArrowRight size={18} className="btn-arrow" />
        </motion.a>
      </div>
    </section>
  );
}

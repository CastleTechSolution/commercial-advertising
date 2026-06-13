import { Building2, Eye, Target, Gem, Check } from "lucide-react";

const values = [
  "Creativity & Innovation",
  "Quality & Reliability",
  "Client-Centric Approach",
  "Integrity & Transparency",
  "Excellence in Execution",
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <div className="section-head">
          <div>
            <span className="kicker reveal">Who we are</span>
            <h2
              className="section-title display reveal"
              style={{ "--reveal-delay": "0.08s", marginTop: "1.2rem" } as React.CSSProperties}
            >
              A studio built on <span className="serif-em">ink, craft</span> and
              ideas.
            </h2>
          </div>
          <span className="section-index reveal">01 / About</span>
        </div>

        <div className="about-grid">
          <div className="card card-wide reveal">
            <div className="card-icon">
              <Building2 size={26} />
            </div>
            <h3 className="card-title">About Us</h3>
            <p className="card-text">
              Commercial Advertising is a full-service advertising and branding
              company specializing in advertising solutions, commercial
              printing, garment branding, and event organization. We help
              businesses enhance their visibility and connect with their
              audience through creative, high-quality, and cost-effective work.
              From billboards, signage, banners, and printed marketing materials
              to branded apparel and professionally managed events, we deliver
              solutions tailored to each client&apos;s needs — transforming ideas
              into impactful brand experiences that leave a lasting impression.
            </p>
          </div>

          <div
            className="card reveal"
            style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
          >
            <div className="card-icon red">
              <Eye size={26} />
            </div>
            <h3 className="card-title">Our Vision</h3>
            <p className="card-text">
              To be the leading provider of printing, branding, and promotional
              solutions — recognized for quality, creativity, and reliability,
              helping every client strengthen their brand identity.
            </p>
          </div>

          <div
            className="card reveal"
            style={{ "--reveal-delay": "0.16s" } as React.CSSProperties}
          >
            <div className="card-icon">
              <Target size={26} />
            </div>
            <h3 className="card-title">Our Mission</h3>
            <p className="card-text">
              To deliver high-quality, customized products through creative
              design, advanced production, and exceptional service — enhancing
              brand visibility and exceeding expectations on every project.
            </p>
          </div>

          <div
            className="card reveal"
            style={{ "--reveal-delay": "0.24s" } as React.CSSProperties}
          >
            <div className="card-icon red">
              <Gem size={26} />
            </div>
            <h3 className="card-title">Core Values</h3>
            <ul className="values-list">
              {values.map((value) => (
                <li key={value}>
                  <Check size={18} strokeWidth={3} /> {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

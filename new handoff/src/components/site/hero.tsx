"use client";

const cmyk = [
  { l: "C", c: "var(--cyan)" },
  { l: "M", c: "var(--magenta)" },
  { l: "Y", c: "var(--yellow)" },
  { l: "K", c: "var(--ink)" },
];

const card: React.CSSProperties = {
  background: "var(--paper-card)",
  border: "1px solid var(--line-strong)",
  borderRadius: 16,
  padding: "14px 16px",
  boxShadow: "0 26px 52px -28px rgba(20,22,42,0.6)",
};

export function Hero() {
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
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        ["--mx"]: 0,
        ["--my"]: 0,
        position: "relative",
        minHeight: 760,
        overflow: "hidden",
        background: "radial-gradient(125% 120% at 50% 0%, #fffdf7 0%, var(--paper) 52%, #ece3d1 100%)",
        padding: "40px 24px",
      } as React.CSSProperties}
    >
      {/* baseline grid */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.55,
          backgroundImage:
            "linear-gradient(rgba(34,61,121,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,61,121,0.06) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* crop marks */}
      <div aria-hidden style={{ position: "absolute", top: 24, left: 24, width: 38, height: 38, borderLeft: "1.5px solid var(--ink)", borderTop: "1.5px solid var(--ink)", opacity: 0.4 }} />
      <div aria-hidden style={{ position: "absolute", top: 24, right: 24, width: 38, height: 38, borderRight: "1.5px solid var(--ink)", borderTop: "1.5px solid var(--ink)", opacity: 0.4 }} />
      <div aria-hidden style={{ position: "absolute", bottom: 24, left: 24, width: 38, height: 38, borderLeft: "1.5px solid var(--ink)", borderBottom: "1.5px solid var(--ink)", opacity: 0.4 }} />
      <div aria-hidden style={{ position: "absolute", bottom: 24, right: 24, width: 38, height: 38, borderRight: "1.5px solid var(--ink)", borderBottom: "1.5px solid var(--ink)", opacity: 0.4 }} />

      {/* paint accents (from /public/gen) */}
      <img className="ca-anim" src="/gen/splash_cyan.png" alt="" aria-hidden style={{ position: "absolute", top: "-5%", right: "23%", width: 280, height: "auto", opacity: 0.28, mixBlendMode: "multiply", animation: "ca-drift 11s ease-in-out infinite", pointerEvents: "none", zIndex: 0 }} />
      <img className="ca-anim" src="/gen/splash_yellow.png" alt="" aria-hidden style={{ position: "absolute", bottom: "-7%", left: "25%", width: 260, height: "auto", opacity: 0.26, mixBlendMode: "multiply", animation: "ca-drift 13s ease-in-out infinite reverse", pointerEvents: "none", zIndex: 0 }} />

      {/* TL — pen tool */}
      <div className="ca-hero-card" style={{ position: "absolute", top: "11%", left: "4.5%", transform: "translate3d(calc(var(--mx) * 22px), calc(var(--my) * 18px), 0)", transition: "transform 0.3s ease-out", zIndex: 3 }}>
        <div className="ca-anim" style={{ animation: "ca-floatA 7.2s ease-in-out infinite" }}>
          <div style={card}>
            <div style={{ fontWeight: 700, fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-faint)", marginBottom: 8 }}>PEN TOOL · VECTOR</div>
            <svg width="190" height="118" viewBox="0 0 210 132" fill="none">
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
      <div className="ca-hero-card" style={{ position: "absolute", top: "13%", right: "5.5%", transform: "translate3d(calc(var(--mx) * -20px), calc(var(--my) * 16px), 0)", transition: "transform 0.3s ease-out", zIndex: 3 }}>
        <div className="ca-anim" style={{ animation: "ca-floatB 8s ease-in-out infinite" }}>
          <div style={card}>
            <div style={{ display: "flex", gap: 9 }}>
              {cmyk.map((ch) => (
                <div key={ch.l} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 7 }}>
                  <div style={{ width: 30, height: 44, borderRadius: 5, background: ch.c, boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)" }} />
                  <span style={{ fontWeight: 800, fontSize: 11, color: "var(--ink-soft)" }}>{ch.l}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 11, fontWeight: 700, fontSize: 10, letterSpacing: "0.16em", color: "var(--ink-faint)" }}>CMYK · PROCESS COLOUR</div>
          </div>
        </div>
      </div>

      {/* BL — type specimen */}
      <div className="ca-hero-card" style={{ position: "absolute", bottom: "13%", left: "6%", transform: "translate3d(calc(var(--mx) * 16px), calc(var(--my) * -14px), 0)", transition: "transform 0.3s ease-out", zIndex: 3 }}>
        <div className="ca-anim" style={{ animation: "ca-floatC 7.6s ease-in-out infinite" }}>
          <div style={card}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
              <span style={{ fontFamily: "var(--font-display), serif", fontWeight: 600, fontSize: 54, lineHeight: 0.9, color: "var(--ink)" }}>Aa</span>
              <div>
                <div style={{ fontFamily: "var(--font-display), serif", fontStyle: "italic", fontWeight: 500, fontSize: 18, color: "var(--red)" }}>Fraunces</div>
                <div style={{ fontWeight: 700, fontSize: 10, letterSpacing: "0.14em", color: "var(--ink-faint)", marginTop: 3 }}>DISPLAY · 9&ndash;144 OPSZ</div>
              </div>
            </div>
            <div style={{ marginTop: 11, fontFamily: "var(--font-display), serif", fontSize: 12, color: "var(--ink-soft)" }}>ABCDEFGHIJ &middot; abcdefghij &middot; 0123456789</div>
          </div>
        </div>
      </div>

      {/* BR — pantone */}
      <div className="ca-hero-card" style={{ position: "absolute", bottom: "14%", right: "6.5%", transform: "translate3d(calc(var(--mx) * -18px), calc(var(--my) * -16px), 0)", transition: "transform 0.3s ease-out", zIndex: 3 }}>
        <div className="ca-anim" style={{ animation: "ca-floatD 8.4s ease-in-out infinite" }}>
          <div style={{ width: 140, boxShadow: "0 26px 52px -26px rgba(20,22,42,0.6)", borderRadius: 5 }}>
            <div style={{ height: 92, background: "var(--red)", borderRadius: "5px 5px 0 0" }} />
            <div style={{ background: "var(--paper-card)", border: "1px solid var(--line)", borderTop: "none", borderRadius: "0 0 5px 5px", padding: "9px 11px 11px" }}>
              <div style={{ fontWeight: 800, fontSize: 9, letterSpacing: "0.1em", color: "var(--ink)" }}>PANTONE&reg;</div>
              <div style={{ fontWeight: 800, fontSize: 14, color: "var(--ink)", marginTop: 3 }}>186 C</div>
              <div style={{ fontWeight: 600, fontSize: 10, color: "var(--ink-faint)", marginTop: 1 }}>Process Red</div>
            </div>
          </div>
        </div>
      </div>

      {/* center content */}
      <div style={{ position: "absolute", inset: 0, zIndex: 5, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px", pointerEvents: "none" }}>
        <img src="/assets/logo.png" alt="Commercial Advertising" style={{ width: 138, height: "auto", marginBottom: 26, filter: "drop-shadow(0 14px 26px rgba(20,22,42,0.2))" }} />
        <h1 style={{ fontFamily: "'Gotham', 'Montserrat', sans-serif", fontWeight: 700, fontSize: "clamp(24px,4.4vw,62px)", lineHeight: 1.02, letterSpacing: "-0.01em", color: "var(--ink)", margin: 0, whiteSpace: "nowrap" }}>
          Commercial <span style={{ color: "var(--red)", fontWeight: 700 }}>Advertising</span>
        </h1>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 9, fontWeight: 800, fontSize: 15, letterSpacing: "0.26em", textTransform: "uppercase", color: "var(--navy)", marginTop: 18 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--red)", boxShadow: "0 0 0 4px rgba(191,30,46,0.18)" }} />
          Design that gets&nbsp;<span style={{ color: "var(--red)" }}>noticed</span>
        </div>
        <div style={{ width: 54, height: 3, borderRadius: 3, background: "var(--red)", margin: "24px 0" }} />
        <p style={{ fontWeight: 600, fontSize: 14, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-soft)", maxWidth: "42ch", lineHeight: 1.6, margin: 0 }}>
          Your Partner in Printing, Branding,
          <br />
          Advertising &amp; Event Solutions
        </p>
        <a
          className="ca-btn-ink"
          href="#work"
          style={{ pointerEvents: "auto", display: "inline-flex", alignItems: "center", gap: 10, marginTop: 28, padding: "14px 27px", borderRadius: 999, background: "var(--ink)", color: "var(--paper)", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 16px 30px -16px rgba(20,22,42,0.6)" }}
        >
          See our work
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}

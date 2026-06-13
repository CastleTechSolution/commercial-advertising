"use client";

const link: React.CSSProperties = {
  fontWeight: 600,
  fontSize: 14,
  color: "var(--ink-soft)",
  textDecoration: "none",
};

export function Navbar() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background: "rgba(243,238,227,0.82)",
        backdropFilter: "blur(14px) saturate(1.2)",
        WebkitBackdropFilter: "blur(14px) saturate(1.2)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div
        style={{
          maxWidth: 1320,
          margin: "0 auto",
          padding: "0 clamp(20px,5vw,72px)",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#home"
          style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none", color: "var(--ink)" }}
        >
          <img src="/assets/logo.png" alt="Commercial Advertising" style={{ height: 34, width: "auto" }} />
          <span style={{ fontWeight: 800, fontSize: 13, letterSpacing: "0.04em", lineHeight: 1.05, textTransform: "uppercase" }}>
            Commercial
            <br />
            <span style={{ color: "var(--red)" }}>Advertising</span>
          </span>
        </a>

        <div style={{ display: "flex", alignItems: "center", gap: 34 }}>
          <a className="ca-navlink" href="#about" style={link}>About</a>
          <a className="ca-navlink" href="#services" style={link}>Services</a>
          <a className="ca-navlink" href="#contact" style={link}>Contact</a>
          <a
            className="ca-btn-ink"
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "11px 20px",
              borderRadius: 999,
              background: "var(--ink)",
              color: "var(--paper)",
              fontWeight: 700,
              fontSize: 13,
              textDecoration: "none",
            }}
          >
            Let&rsquo;s talk
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

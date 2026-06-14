const values = ["Creativity", "Quality", "Client-First", "Integrity", "Excellence"];

const label: React.CSSProperties = {
  fontWeight: 700,
  fontSize: 11,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--red)",
  marginBottom: 9,
};

export function About() {
  return (
    <section id="about" style={{ padding: "clamp(48px,7vh,84px) clamp(20px,5vw,72px)", maxWidth: 1320, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1.5rem", marginBottom: "clamp(26px,4vh,44px)" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 9, fontWeight: 700, fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--ink-faint)" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--red)", boxShadow: "0 0 0 4px rgba(191,30,46,0.18)" }} />
          Who we are
        </div>
        <span style={{ fontFamily: "var(--font-display), serif", fontWeight: 600, fontSize: 14, color: "var(--red)", letterSpacing: "0.05em" }}>01 / About</span>
      </div>

      <div className="ca-2col" style={{ display: "grid", gridTemplateColumns: "0.92fr 1.08fr", gap: "clamp(28px,4vw,56px)", alignItems: "stretch" }}>
        <div className="ca-aboutwrap" style={{ position: "relative", borderRadius: 20, overflow: "hidden", background: "var(--paper-deep)", border: "1px solid var(--line)", minHeight: 400 }}>
          <div
            className="ca-aboutimg"
            style={{ position: "absolute", inset: 0, backgroundImage: "url('/gen/about.png')", backgroundSize: "cover", backgroundPosition: "center" }}
          />
        </div>

        <div>
          <h2 style={{ fontFamily: "var(--font-display), serif", fontWeight: 600, fontSize: "clamp(24px,2.8vw,40px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 18px" }}>
            We turn ideas into brands people <span style={{ fontStyle: "italic", fontWeight: 500, color: "var(--red)" }}>remember</span>.
          </h2>
          <p style={{ margin: 0, color: "var(--ink-soft)", fontSize: "1.05rem", lineHeight: 1.6 }}>
            A full-service printing, branding, advertising and events house. From billboards, signage and banners to branded apparel and professionally run events.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 30, marginTop: 30, paddingTop: 28, borderTop: "1px solid var(--line)" }}>
            <div>
              <div style={label}>Vision</div>
              <p style={{ margin: 0, color: "var(--ink-soft)", fontSize: "0.95rem", lineHeight: 1.55 }}>
                Lead in printing, branding and promotional solutions, known for quality and reliability.
              </p>
            </div>
            <div>
              <div style={label}>Mission</div>
              <p style={{ margin: 0, color: "var(--ink-soft)", fontSize: "0.95rem", lineHeight: 1.55 }}>
                High-quality, custom work through creative design and exceptional service.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 30, paddingTop: 28, borderTop: "1px solid var(--line)" }}>
            <div style={{ ...label, color: "var(--ink-faint)", marginBottom: 14 }}>What we value</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {values.map((v) => (
                <span
                  key={v}
                  className="ca-chip"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 15px", border: "1px solid var(--line)", borderRadius: 999, background: "var(--paper-card)", fontWeight: 600, fontSize: "0.85rem", color: "var(--ink)" }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--red)" }} />
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

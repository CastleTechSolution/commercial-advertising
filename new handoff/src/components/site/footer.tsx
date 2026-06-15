const socials = [
  { label: "Facebook", path: "M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" },
  { label: "Instagram", path: "M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5 0-4.74.07-.9.04-1.38.19-1.7.31-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.12.32-.27.8-.31 1.7C3.96 8.5 3.96 8.85 3.96 12s0 3.5.07 4.74c.04.9.19 1.38.31 1.7.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.12.8.27 1.7.31 1.24.06 1.59.07 4.74.07s3.5 0 4.74-.07c.9-.04 1.38-.19 1.7-.31.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.12-.32.27-.8.31-1.7.06-1.24.07-1.59.07-4.74s0-3.5-.07-4.74c-.04-.9-.19-1.38-.31-1.7a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.12-.8-.27-1.7-.31C15.5 4 15.15 4 12 4Zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.14-.78a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" },
  { label: "LinkedIn", path: "M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.48h3.28V21H3.3V8.48Zm5.36 0h3.15v1.71h.04c.44-.83 1.51-1.71 3.11-1.71 3.33 0 3.94 2.19 3.94 5.04V21h-3.28v-5.55c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93V21H8.66V8.48Z" },
  { label: "Twitter", path: "M18.9 2.5h3.3l-7.2 8.23L23.5 21.5h-6.62l-5.18-6.78-5.94 6.78H2.46l7.7-8.8L1.5 2.5h6.78l4.69 6.2 5.43-6.2Zm-1.16 17.02h1.83L7.34 4.38H5.38l12.36 15.14Z" },
];

const li: React.CSSProperties = { display: "flex", alignItems: "flex-start", gap: "0.85rem", color: "rgba(243,238,227,0.82)", fontSize: "0.95rem", lineHeight: 1.5 };
const ico: React.CSSProperties = { flexShrink: 0, marginTop: 2 };
const h4: React.CSSProperties = { fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(243,238,227,0.55)", margin: "0 0 1.1rem" };

export function Footer() {
  return (
    <footer id="contact" style={{ position: "relative", background: "var(--ink)", color: "var(--paper)", overflow: "hidden", padding: "clamp(44px,6vh,72px) 0 0" }}>
      <div style={{ position: "absolute", width: 560, height: 560, borderRadius: "50%", filter: "blur(120px)", background: "radial-gradient(circle, rgba(191,30,46,0.3), transparent 70%)", top: "-30%", right: "-8%", pointerEvents: "none" }} />
      <div style={{ position: "relative", maxWidth: 1320, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 9, fontWeight: 700, fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(243,238,227,0.6)" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--red)" }} />
          Let&rsquo;s talk
        </div>
        <h2 style={{ fontFamily: "var(--font-display), serif", fontWeight: 600, fontSize: "clamp(28px,3.8vw,54px)", lineHeight: 1.02, letterSpacing: "-0.02em", margin: "22px 0 0", maxWidth: "14ch" }}>
          Ready to make <span style={{ color: "var(--red)", fontStyle: "italic", fontWeight: 500 }}>something</span> people remember?
        </h2>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 34 }}>
          <a className="ca-btn-red" href="mailto:yihaprintingplc@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "15px 28px", borderRadius: 999, background: "var(--red)", color: "var(--paper)", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
            Email us
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M7 17 17 7M7 7h10v10" /></svg>
          </a>
          <a className="ca-btn-ghost-dark" href="tel:+251912199953" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "15px 28px", borderRadius: 999, background: "transparent", border: "1.5px solid rgba(243,238,227,0.3)", color: "var(--paper)", fontWeight: 700, fontSize: 15, textDecoration: "none" }}>
            Call us
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>
          </a>
        </div>

        <div className="ca-2col" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: "2.5rem", marginTop: "clamp(48px,7vh,80px)", paddingTop: "clamp(36px,6vh,56px)", borderTop: "1px solid rgba(243,238,227,0.16)" }}>
          <div>
            <h4 style={h4}>Studio</h4>
            <p style={{ color: "rgba(243,238,227,0.82)", lineHeight: 1.65, fontSize: "0.96rem", maxWidth: "34ch", margin: 0 }}>
              Your trusted partner in printing, branding, advertising and event solutions, turning ideas into impactful brand experiences.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1.6rem" }}>
              {socials.map((s) => (
                <a key={s.label} className="ca-social" href="#" aria-label={s.label} style={{ width: 46, height: 46, borderRadius: "50%", display: "grid", placeItems: "center", color: "var(--paper)", border: "1px solid rgba(243,238,227,0.22)", textDecoration: "none" }}>
                  <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={h4}>Reach us</h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li style={li}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" style={ico}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
                <span>Addis Ababa, 22, near Zerihun Building, IPS Building, 1st Floor</span>
              </li>
              <li style={li}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" style={ico}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>
                <span>+251 912 199 953</span>
              </li>
              <li style={li}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" style={ico}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
                <span>yihaprintingplc@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 style={h4}>Hours</h4>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li style={li}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" style={ico}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                <span>Mon &ndash; Fri: 8:30 AM &ndash; 5:30 PM</span>
              </li>
              <li style={li}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" style={ico}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
                <span>Sat: 8:30 AM &ndash; 12:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", padding: "2rem 0", borderTop: "1px solid rgba(243,238,227,0.16)", marginTop: "clamp(48px,7vh,80px)", fontSize: "0.85rem", color: "rgba(243,238,227,0.6)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <img src="/assets/logo.png" alt="Commercial Advertising" style={{ height: 30, width: "auto" }} />
            <span style={{ fontWeight: 800, fontSize: "0.82rem", letterSpacing: "0.04em", textTransform: "uppercase", color: "rgba(243,238,227,0.85)" }}>Commercial Advertising</span>
          </div>
          <span>&copy; 2026 Commercial Advertising. All rights reserved.</span>
          <a className="ca-backtop" href="#home" style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "rgba(243,238,227,0.6)", textDecoration: "none", fontWeight: 600 }}>
            Back to top
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

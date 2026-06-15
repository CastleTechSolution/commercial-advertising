"use client";

import { useState } from "react";

const link: React.CSSProperties = {
  fontWeight: 600,
  fontSize: 14,
  color: "var(--ink-soft)",
  textDecoration: "none",
};

const navItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

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
          onClick={() => setOpen(false)}
          style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none", color: "var(--ink)" }}
        >
          <img src="/assets/logo.png" alt="Commercial Advertising" style={{ height: 34, width: "auto" }} />
          <span style={{ fontWeight: 800, fontSize: 13, letterSpacing: "0.04em", lineHeight: 1.05, textTransform: "uppercase" }}>
            Commercial
            <br />
            <span style={{ color: "var(--red)" }}>Advertising</span>
          </span>
        </a>

        {/* desktop links — hidden below 980px via .ca-nav-desktop */}
        <div className="ca-nav-desktop" style={{ alignItems: "center", gap: 34 }}>
          {navItems.map((item) => (
            <a key={item.href} className="ca-navlink" href={item.href} style={link}>
              {item.label}
            </a>
          ))}
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

        {/* mobile hamburger — shown below 980px via .ca-nav-toggle */}
        <button
          type="button"
          className="ca-nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{
            width: 44,
            height: 44,
            display: "none",
            placeItems: "center",
            border: "1.5px solid var(--line-strong)",
            borderRadius: 12,
            background: "transparent",
            color: "var(--ink)",
            cursor: "pointer",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* mobile dropdown */}
      {open && (
        <div
          className="ca-mobile-menu"
          style={{
            borderTop: "1px solid var(--line)",
            background: "rgba(243,238,227,0.97)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        >
          <div style={{ maxWidth: 1320, margin: "0 auto", padding: "10px clamp(20px,5vw,72px) 22px", display: "flex", flexDirection: "column" }}>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontSize: 24,
                  fontWeight: 600,
                  color: "var(--ink)",
                  textDecoration: "none",
                  padding: "14px 0",
                  borderBottom: "1px solid var(--line)",
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              className="ca-btn-ink"
              href="#contact"
              onClick={() => setOpen(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                marginTop: 18,
                padding: "14px 20px",
                borderRadius: 999,
                background: "var(--ink)",
                color: "var(--paper)",
                fontWeight: 700,
                fontSize: 14,
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
      )}
    </nav>
  );
}

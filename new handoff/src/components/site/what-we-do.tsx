import type { ReactNode } from "react";

type Service = { num: string; name: string; desc: string; icon: ReactNode };

const services: Service[] = [
  {
    num: "01",
    name: "Commercial Printing",
    desc: "High-quality flyers, banners, brochures, business cards, and more.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="6" y="3" width="12" height="6" />
        <path d="M6 18H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="7" />
      </svg>
    ),
  },
  {
    num: "02",
    name: "Garment Branding",
    desc: "Custom apparel, promotional merchandise, and branded uniforms.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M16 3l4 3-3 3-1-1v12H8V8L7 9 4 6l4-3 2 2a2 2 0 0 0 4 0z" />
      </svg>
    ),
  },
  {
    num: "03",
    name: "Advertising Solutions",
    desc: "Billboards, signage, digital ads, and outdoor media campaigns.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="11" rx="1" />
        <path d="M8 20l4-5 4 5" />
      </svg>
    ),
  },
  {
    num: "04",
    name: "Event Organization",
    desc: "Professional events, product launches, and brand activations.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M3 9h18M8 2v4M16 2v4" />
      </svg>
    ),
  },
];

const gallery = [
  { img: "/assets/c1.png", tag: "Premium Print" },
  { img: "/assets/F.jpg", tag: "Business Cards" },
  { img: "/assets/C3.jpg", tag: "Large Format" },
  { img: "/assets/G1.jpg", tag: "Custom Apparel" },
  { img: "/assets/G2.jpg", tag: "Uniforms" },
  { img: "/assets/bs.jpg", tag: "Merch" },
  { img: "/assets/Award.png", tag: "Campaigns" },
  { img: "/assets/Lightbox.png", tag: "Signage" },
  { img: "/assets/S.png", tag: "Outdoor Media" },
];

export function WhatWeDo() {
  return (
    <section id="services" style={{ background: "var(--ink)", color: "var(--paper)", padding: "clamp(44px,6vh,72px) 0" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 clamp(20px,5vw,72px)" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap", marginBottom: "clamp(26px,4vh,40px)" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 9, fontWeight: 700, fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(243,238,227,0.6)" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--red)" }} />
              What We Do
            </div>
            <p style={{ margin: "16px 0 0", fontFamily: "var(--font-display), serif", fontSize: "clamp(20px,2.4vw,30px)", fontWeight: 500, color: "var(--paper)", letterSpacing: "-0.01em" }}>
              Comprehensive solutions to elevate your brand.
            </p>
          </div>
          <span style={{ fontFamily: "var(--font-display), serif", fontWeight: 600, fontSize: 15, color: "var(--red)", letterSpacing: "0.05em" }}>02 / Services</span>
        </div>

        <div className="ca-svc-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "clamp(36px,5vw,72px)" }}>
          {services.map((s) => (
            <div key={s.num} className="ca-svc" style={{ padding: "clamp(22px,3vh,34px) 0", borderTop: "1px solid rgba(243,238,227,0.2)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                <div style={{ width: 42, height: 42, borderRadius: 11, display: "grid", placeItems: "center", background: "rgba(243,238,227,0.07)", border: "1px solid rgba(243,238,227,0.16)", color: "var(--paper)" }}>
                  {s.icon}
                </div>
                <span style={{ fontFamily: "var(--font-display), serif", fontSize: 14, color: "var(--red)" }}>{s.num}</span>
              </div>
              <h3 style={{ fontFamily: "var(--font-display), serif", fontWeight: 600, fontSize: "clamp(20px,2.1vw,29px)", margin: "0 0 8px", color: "var(--paper)" }}>{s.name}</h3>
              <p style={{ margin: 0, color: "rgba(243,238,227,0.55)", fontSize: "0.95rem", lineHeight: 1.55, maxWidth: "34ch" }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div id="work" style={{ marginTop: "clamp(40px,6vh,64px)", paddingTop: "clamp(30px,4.5vh,46px)", borderTop: "1px solid rgba(243,238,227,0.16)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, fontWeight: 700, fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(243,238,227,0.6)", marginBottom: "clamp(18px,2.5vh,24px)" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--red)" }} />
            Things we&rsquo;ve made
          </div>
          <div className="ca-gallery" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "clamp(12px,1.4vw,18px)" }}>
            {gallery.map((it) => (
              <div key={it.img} className="ca-zoomwrap" style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4 / 3", background: "#0e0f1f" }}>
                <div className="ca-zoom" style={{ position: "absolute", inset: 0, backgroundImage: `url('${it.img}')`, backgroundSize: "cover", backgroundPosition: "center" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 45%, rgba(10,11,24,0.82) 100%)" }} />
                <span style={{ position: "absolute", left: "0.9rem", bottom: "0.9rem", color: "var(--paper)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.04em", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ color: "var(--red)" }}>&#10022;</span>
                  {it.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

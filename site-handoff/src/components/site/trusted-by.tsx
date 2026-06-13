const clients = [
  { name: "Ministry of Agriculture", logo: "/assets/A.png" },
  { name: "Special Operations Command", logo: "/assets/D.png" },
  { name: "Zam Zam Bank", logo: "/assets/Z.png" },
  { name: "Ministry of Revenues", logo: "/assets/G.png" },
  { name: "Tsedey Bank", logo: "/assets/T.png" },
  { name: "Federal Police", logo: "/assets/P.png" },
  { name: "INSA", logo: "/assets/I.png" },
  { name: "Ministry of Health", logo: "/assets/H.png" },
];

export function TrustedBy() {
  const loop = [...clients, ...clients];
  return (
    <div style={{ background: "var(--paper-deep)", borderBlock: "1px solid var(--line)", padding: "clamp(22px,3.5vh,34px) 0" }}>
      <div style={{ textAlign: "center", marginBottom: 18, fontWeight: 700, fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--ink-faint)" }}>
        Trusted by leading brands
      </div>
      <div
        style={{
          overflow: "hidden",
          position: "relative",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div className="ca-anim" style={{ display: "flex", width: "max-content", alignItems: "center", animation: "ca-marquee 40s linear infinite" }}>
          {loop.map((cl, i) => (
            <div key={i} style={{ padding: "0 clamp(26px,4vw,54px)", display: "flex", alignItems: "center" }}>
              <img src={cl.logo} alt={cl.name} style={{ height: 50, width: "auto", objectFit: "contain", filter: "grayscale(1)", opacity: 0.55 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

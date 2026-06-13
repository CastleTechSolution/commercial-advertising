const items = [
  "Commercial Printing",
  "Garment Branding",
  "Billboards & Signage",
  "Brand Identity",
  "Event Organization",
  "Outdoor Media",
  "Promotional Merch",
  "Large Format",
];

export function Marquee() {
  // duplicated once for a seamless -50% loop
  const loop = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

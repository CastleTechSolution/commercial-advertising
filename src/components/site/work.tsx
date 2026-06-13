import { Printer, Shirt, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Category = {
  icon: LucideIcon;
  title: string;
  items: { image: string; tag: string }[];
};

const categories: Category[] = [
  {
    icon: Printer,
    title: "Printing Solutions",
    items: [
      { image: "/assets/c1.png", tag: "Premium Print" },
      { image: "/assets/F.jpg", tag: "Business Cards" },
      { image: "/assets/C3.jpg", tag: "Large Format" },
    ],
  },
  {
    icon: Shirt,
    title: "Garment Branding",
    items: [
      { image: "/assets/G1.jpg", tag: "Custom Apparel" },
      { image: "/assets/G2.jpg", tag: "Uniforms" },
      { image: "/assets/bs.jpg", tag: "Merch" },
    ],
  },
  {
    icon: TrendingUp,
    title: "Advertising Solutions",
    items: [
      { image: "/assets/Award.png", tag: "Campaigns" },
      { image: "/assets/Lightbox.png", tag: "Signage" },
      { image: "/assets/S.png", tag: "Outdoor Media" },
    ],
  },
];

export function Work() {
  return (
    <section id="work" className="section">
      <div className="shell">
        <div className="section-head">
          <div>
            <span className="kicker reveal">Selected work</span>
            <h2
              className="section-title display reveal"
              style={{ "--reveal-delay": "0.08s", marginTop: "1.2rem" } as React.CSSProperties}
            >
              Some of the things we&apos;ve <span className="serif-em">made</span>.
            </h2>
          </div>
          <span className="section-index reveal">03 / Work</span>
        </div>

        {categories.map(({ icon: Icon, title, items }) => (
          <div key={title}>
            <div className="work-cat-label reveal">
              <span className="work-cat-name">
                <Icon size={22} /> {title}
              </span>
              <span className="line" />
            </div>

            <div className="work-grid">
              {items.map((item, i) => (
                <div
                  key={item.image}
                  className="work-item reveal"
                  style={{ "--reveal-delay": `${i * 0.08}s` } as React.CSSProperties}
                >
                  <div
                    className="work-img"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="work-veil" />
                  <span className="work-tag">
                    <span style={{ color: "var(--red)" }}>✦</span>
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

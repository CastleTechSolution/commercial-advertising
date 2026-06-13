"use client";

import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

type Service = {
  num: string;
  name: string;
  desc: string;
  image: string;
};

const services: Service[] = [
  {
    num: "01",
    name: "Commercial Printing",
    desc: "Flyers, banners, brochures, business cards and large-format — pressed to perfection.",
    image:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop",
  },
  {
    num: "02",
    name: "Garment Branding",
    desc: "Custom apparel, promotional merchandise and branded uniforms with crisp finishing.",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&h=600&fit=crop",
  },
  {
    num: "03",
    name: "Advertising Solutions",
    desc: "Billboards, signage, digital ads and outdoor media campaigns that command attention.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
  },
  {
    num: "04",
    name: "Event Organization",
    desc: "Product launches, brand activations and professionally managed events end to end.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
  },
];

export function Services() {
  const [active, setActive] = useState<number | null>(null);
  const floatRef = useRef<HTMLDivElement>(null);

  const move = (e: React.MouseEvent) => {
    const el = floatRef.current;
    if (el) {
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
    }
  };

  return (
    <section id="services" className="section services" onMouseMove={move}>
      <div className="shell">
        <div className="section-head">
          <div>
            <span className="kicker reveal">What we do</span>
            <h2
              className="section-title display reveal"
              style={{ "--reveal-delay": "0.08s", marginTop: "1.2rem" } as React.CSSProperties}
            >
              Four ways we make brands <span className="serif-em">loud</span>.
            </h2>
          </div>
          <span className="section-index reveal">02 / Services</span>
        </div>

        <div className="svc-list reveal">
          {services.map((s, i) => (
            <a
              key={s.num}
              href="#contact"
              className="svc-row"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <span className="svc-num">{s.num}</span>
              <span className="svc-name">{s.name}</span>
              <span className="svc-desc">{s.desc}</span>
              <ArrowUpRight size={28} className="svc-arrow" />
            </a>
          ))}
        </div>
      </div>

      <div
        ref={floatRef}
        className={`svc-float ${active !== null ? "show" : ""}`}
        aria-hidden="true"
      >
        {services.map((s, i) => (
          <div
            key={s.num}
            className="svc-float-img"
            style={{
              backgroundImage: `url('${s.image}')`,
              display: active === i ? "block" : "none",
            }}
          />
        ))}
      </div>
    </section>
  );
}

import { Mail, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";

const brandIcon = "h-5 w-5 fill-current";

const socials = [
  {
    label: "Facebook",
    path: "M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z",
  },
  {
    label: "Instagram",
    path: "M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5 0-4.74.07-.9.04-1.38.19-1.7.31-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.12.32-.27.8-.31 1.7C3.96 8.5 3.96 8.85 3.96 12s0 3.5.07 4.74c.04.9.19 1.38.31 1.7.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.12.8.27 1.7.31 1.24.06 1.59.07 4.74.07s3.5 0 4.74-.07c.9-.04 1.38-.19 1.7-.31.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.12-.32.27-.8.31-1.7.06-1.24.07-1.59.07-4.74s0-3.5-.07-4.74c-.04-.9-.19-1.38-.31-1.7a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.12-.8-.27-1.7-.31C15.5 4 15.15 4 12 4Zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.14-.78a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z",
  },
  {
    label: "LinkedIn",
    path: "M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.48h3.28V21H3.3V8.48Zm5.36 0h3.15v1.71h.04c.44-.83 1.51-1.71 3.11-1.71 3.33 0 3.94 2.19 3.94 5.04V21h-3.28v-5.55c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93V21H8.66V8.48Z",
  },
  {
    label: "Twitter",
    path: "M18.9 2.5h3.3l-7.2 8.23L23.5 21.5h-6.62l-5.18-6.78-5.94 6.78H2.46l7.7-8.8L1.5 2.5h6.78l4.69 6.2 5.43-6.2Zm-1.16 17.02h1.83L7.34 4.38H5.38l12.36 15.14Z",
  },
];

export function Footer() {
  return (
    <footer id="contact" className="contact section">
      <div className="contact-glow" />
      <div className="shell">
        <span className="kicker reveal" style={{ color: "rgba(243,238,227,0.6)" }}>
          Let&apos;s talk
        </span>
        <h2
          className="contact-cta display reveal"
          style={{ "--reveal-delay": "0.08s", marginTop: "1.4rem" } as React.CSSProperties}
        >
          Ready to make <span className="red">something</span> people remember?
        </h2>

        <div className="reveal" style={{ "--reveal-delay": "0.18s", marginTop: "2.2rem" } as React.CSSProperties}>
          <a href="mailto:yihaprintingplc@gmail.com" className="btn btn-red">
            Email us
            <ArrowUpRight size={18} className="btn-arrow" />
          </a>
        </div>

        <div className="contact-grid">
          <div className="contact-block reveal">
            <h4>Studio</h4>
            <p className="card-text" style={{ color: "rgba(243,238,227,0.82)", maxWidth: "34ch" }}>
              Your trusted partner in printing, branding, advertising and event
              solutions — transforming ideas into impactful brand experiences.
            </p>
            <div className="socials" style={{ marginTop: "1.6rem" }}>
              {socials.map((s) => (
                <a key={s.label} href="#" className="social" aria-label={s.label}>
                  <svg viewBox="0 0 24 24" className={brandIcon} aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-block reveal" style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}>
            <h4>Reach us</h4>
            <ul className="contact-list">
              <li>
                <MapPin size={18} />
                <span>
                  Addis Ababa, 22 — near Zerihun Building, IPS Building, 1st Floor
                </span>
              </li>
              <li>
                <Phone size={18} />
                <span>+251 912 199 953</span>
              </li>
              <li>
                <Mail size={18} />
                <span>yihaprintingplc@gmail.com</span>
              </li>
            </ul>
          </div>

          <div className="contact-block reveal" style={{ "--reveal-delay": "0.16s" } as React.CSSProperties}>
            <h4>Hours</h4>
            <ul className="contact-list">
              <li>
                <Clock size={18} />
                <span>Mon – Fri: 8:30 AM – 5:30 PM</span>
              </li>
              <li>
                <Clock size={18} />
                <span>Sat: 8:30 AM – 12:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span className="brand-name">Commercial Advertising</span>
          <span>&copy; 2026 Commercial Advertising. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

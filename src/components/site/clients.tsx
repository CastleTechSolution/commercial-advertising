import Image from "next/image";

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

export function Clients() {
  return (
    <section id="clients" className="section">
      <div className="shell">
        <div className="section-head">
          <div>
            <span className="kicker reveal">In good company</span>
            <h2
              className="section-title display reveal"
              style={{ "--reveal-delay": "0.08s", marginTop: "1.2rem" } as React.CSSProperties}
            >
              Trusted by <span className="serif-em">leading brands</span>.
            </h2>
          </div>
          <span className="section-index reveal">04 / Clients</span>
        </div>

        <div className="clients-grid reveal">
          {clients.map((client) => (
            <div className="client-cell" key={client.name}>
              <Image
                src={client.logo}
                alt={client.name}
                width={160}
                height={80}
                className="client-logo"
              />
              <span className="client-name">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

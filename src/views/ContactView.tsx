import { hero, socialLinks, whatsappLink } from "../data/site";

export function ContactView() {
  const direct = [
    { label: "Email", value: hero.email, href: `mailto:${hero.email}` },
    { label: "Phone", value: hero.phone, href: `tel:${hero.phone.replace(/\s/g, "")}` },
    { label: "Location", value: hero.location },
  ];

  return (
    <div className="contact">
      <section className="contact__main">
        <p className="label">Contact</p>
        <h1 className="display display--contact">
          Let’s create something <em>visual</em> together.
        </h1>
        <p className="lead">
          Open to conversations about Gen AI content, creative automation and 3D production pipelines.
        </p>

        <dl className="direct-list">
          {direct.map((d) => (
            <div key={d.label} className="direct-list__row">
              <dt className="label">{d.label}</dt>
              <dd>{d.href ? <a href={d.href}>{d.value}</a> : d.value}</dd>
            </div>
          ))}
        </dl>

        <div className="cta-row">
          <a href={`mailto:${hero.email}`} className="btn btn--accent">
            Email me <span aria-hidden>→</span>
          </a>
          <a href={whatsappLink} target="_blank" className="btn btn--ghost">
            WhatsApp <span aria-hidden>↗</span>
          </a>
          <a href={hero.cv} target="_blank" className="btn btn--ghost">
            View CV <span aria-hidden>↗</span>
          </a>
        </div>
      </section>

      <section className="contact__social" aria-label="Social profiles">
        <h2 className="label">Find me online</h2>
        <div className="social-grid">
          {socialLinks.map((s) => (
            <a key={s.href} href={s.href} target="_blank" className="social">
              <img src={s.icon} alt="" loading="lazy" />
              <span>{s.alt === "discord" ? "Discord" : s.alt}</span>
              <span className="social__arrow" aria-hidden>
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

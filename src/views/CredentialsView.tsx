import { eduCertItems } from "../data/education";

const certs = eduCertItems.filter((i) => i.kind === "cert");

export function CredentialsView() {
  return (
    <div className="credentials">
      <div className="view-head">
        <div>
          <p className="label">Certifications</p>
          <h1 className="view-title">
            Always <em>learning</em>
          </h1>
        </div>
        <p className="view-note">{certs.length} certifications across Gen AI, UX, project management and Python.</p>
      </div>

      <div className="cert-grid">
        {certs.map((c) => (
          <a key={c.href} href={c.href} target="_blank" className="cert">
            <div className="cert__logo">
              <img src={c.image} alt={c.alt} loading="lazy" />
            </div>
            <h2 className="cert__title">{c.title}</h2>
            <p className="cert__id">
              {c.isCredentialId && <span>Credential ID</span>}
              <code>{c.credential}</code>
            </p>
            <span className="text-link">View certificate ↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}

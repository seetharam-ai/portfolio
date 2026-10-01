import { certs, type Cert } from "../data/education";

const groups = [...new Set(certs.map((c) => c.group))];

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
        <p className="view-note">
          {certs.length} certifications across Gen AI, prompt engineering, UX, project management, Lean Six Sigma and
          Python.
        </p>
      </div>

      {groups.map((g) => (
        <section key={g} className="cert-group" aria-label={g}>
          <h2 className="label cert-group__title">{g}</h2>
          <div className="cert-grid">
            {certs
              .filter((c) => c.group === g)
              .map((c) => (
                <CertCard key={c.href} cert={c} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function CertCard({ cert: c }: { cert: Cert }) {
  return (
    <article className="cert">
      <div className="cert__logo">
        <img src={c.image} alt={c.alt} loading="lazy" />
        <span className="cert__date">{c.issued}</span>
      </div>
      <h3 className="cert__title">{c.title}</h3>
      <p className="cert__id">
        {c.isCredentialId && <span>Credential ID</span>}
        <code>{c.credential}</code>
      </p>
      <div className="cert__links">
        {c.parts ? (
          c.parts.map((p) => (
            <a key={p.href} href={p.href} target="_blank" className="text-link">
              {p.label} ↗
            </a>
          ))
        ) : (
          <a href={c.href} target="_blank" className="text-link">
            View certificate ↗
          </a>
        )}
        {c.verify && (
          <a href={c.verify} target="_blank" className="text-link text-link--muted">
            Verify ↗
          </a>
        )}
      </div>
    </article>
  );
}

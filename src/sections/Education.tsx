import { Section } from "../components/Reveal";
import { eduCertItems } from "../data/education";

export function Education() {
  return (
    <Section id="edu-certificates">
      <h2>
        <span className="heading-gradient">Education & Certifications</span>
      </h2>

      <div className="edu-cert-container">
        {eduCertItems.map((item) =>
          item.kind === "cert" ? (
            <div className="cert-card" key={item.href}>
              <a href={item.href} target="_blank">
                <img src={item.image} alt={item.alt} loading="lazy" />
                <h3>
                  {item.title} <br />
                  {item.isCredentialId && "Credential ID: "}
                  <b>{item.credential}</b>
                </h3>
                <h4>View Certificate</h4>
              </a>
            </div>
          ) : (
            <div className="education-item" key={item.school}>
              <img src={item.logo} alt={item.alt} loading="lazy" />
              <h3>{item.school}</h3>
              <h4>{item.location}</h4>
              <p>
                {item.degree} <br />
                {item.years}
              </p>
            </div>
          ),
        )}
      </div>
    </Section>
  );
}

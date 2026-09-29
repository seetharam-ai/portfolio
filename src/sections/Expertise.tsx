import { Reveal, Section } from "../components/Reveal";
import { expertise } from "../data/site";

export function Expertise() {
  return (
    <Section id="myExpertise">
      <h2>
        <span className="heading-gradient">My Expertise</span>
      </h2>
      <div className="myExpertise-container">
        {expertise.map((item) => (
          <Reveal key={item.title} className="myExpertise-item reveal-trigger">
            <h3>{item.title}</h3>
            {item.subtitle && <h4>{item.subtitle}</h4>}
            <p>{item.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

import { Fragment, type CSSProperties } from "react";
import { Reveal, Section } from "../components/Reveal";
import { aiModels, genAiTools, productionSkills, technicalSkills, type Skill } from "../data/skills";

export function Skills() {
  return (
    <Section id="skills">
      <Reveal as="h2" className="reveal-trigger">
        <span className="heading-gradient">Expertise & Skills</span>
      </Reveal>
      <Reveal className="skills-container reveal-trigger" style={{ marginTop: 50 }}>
        <div className="skill-column">
          <h3>Generative AI Tools & workflows</h3>
          <h4>
            {genAiTools.map((tool, i) => (
              <Fragment key={tool.href}>
                {i > 0 && " - "}
                <a href={tool.href} target="_blank">
                  {tool.label}
                </a>
              </Fragment>
            ))}
          </h4>
        </div>

        <div className="skill-column">
          <h3>AI Hands on Practice models</h3>
          <p>{aiModels}</p>
        </div>

        <SkillColumn title="Technical Proficiency" skills={technicalSkills} />
        <SkillColumn title="Specialized Production" skills={productionSkills} />
      </Reveal>
    </Section>
  );
}

function SkillColumn({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <div className="skill-column">
      <h3>{title}</h3>
      <div className="skill-items-grid">
        {skills.map((skill) => (
          <div className="skill-item" key={skill.name}>
            <div className="skill-icon">
              <img src={skill.icon} alt={skill.alt} loading="lazy" />
            </div>
            <div className="skill-content">
              <div className="skill-info">
                <span>{skill.name} </span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ "--w": `${skill.level}%` } as CSSProperties} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

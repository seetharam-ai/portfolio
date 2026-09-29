import type { CSSProperties } from "react";
import { aiModels, genAiTools, productionSkills, technicalSkills, type Skill } from "../data/skills";

export function SkillsView() {
  return (
    <div className="skills">
      <div className="view-head">
        <div>
          <p className="label">Toolkit</p>
          <h1 className="view-title">
            Tools I <em>work</em> with
          </h1>
        </div>
      </div>

      <div className="skills__grid">
        <div className="skills__col">
          <section className="panel">
            <h2 className="label">Gen AI platforms & workflows</h2>
            <div className="chip-cloud">
              {genAiTools.map((t) => (
                <a key={t.href} href={t.href} target="_blank" className="chip chip--link">
                  {t.label} <span aria-hidden>↗</span>
                </a>
              ))}
            </div>
          </section>
          <section className="panel">
            <h2 className="label">Models — hands-on</h2>
            <div className="chip-cloud">
              {aiModels.split(" - ").map((m) => (
                <span key={m} className="chip">
                  {m}
                </span>
              ))}
            </div>
          </section>
        </div>

        <SkillPanel title="Technical proficiency" skills={technicalSkills} />
        <SkillPanel title="Specialized production" skills={productionSkills} />
      </div>
    </div>
  );
}

function SkillPanel({ title, skills }: { title: string; skills: Skill[] }) {
  return (
    <section className="panel">
      <h2 className="label">{title}</h2>
      <ul className="skill-list">
        {skills.map((s) => (
          <li key={s.name} className="skill">
            <img src={s.icon} alt="" loading="lazy" className="skill__icon" />
            <span className="skill__name">{s.name}</span>
            <span className="skill__level">{s.level}</span>
            <span className="skill__bar" style={{ "--w": `${s.level}%` } as CSSProperties} aria-hidden />
          </li>
        ))}
      </ul>
    </section>
  );
}

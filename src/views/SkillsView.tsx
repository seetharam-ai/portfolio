import { ProofLinks } from "../components/ProofLinks";
import { aiModels, capabilities, genAiTools, productionSkills, technicalSkills, type Skill } from "../data/skills";

export function SkillsView() {
  return (
    <div className="skills">
      <div className="view-head">
        <div>
          <p className="label">Skills & toolkit</p>
          <h1 className="view-title">
            What I <em>bring</em>
          </h1>
        </div>
      </div>

      <section className="capabilities" aria-label="Core capabilities">
        {capabilities.map((c, i) => (
          <div key={c.area} className="capability">
            <span className="capability__num">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="capability__area">{c.area}</h2>
            <p className="capability__items">{c.items.join(" · ")}</p>
            <ProofLinks proof={c.proof} />
          </div>
        ))}
      </section>

      <div className="skills__grid">
        <div className="skills__col">
          <section className="panel">
            <h2 className="label">Gen AI platforms & workflows</h2>
            <ul className="link-list">
              {genAiTools.map((t) => (
                <li key={t.href}>
                  <a href={t.href} target="_blank">
                    {t.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <section className="panel">
            <h2 className="label">Models — hands-on</h2>
            <ul className="keywords">
              {aiModels.split(" - ").map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
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
          </li>
        ))}
      </ul>
    </section>
  );
}

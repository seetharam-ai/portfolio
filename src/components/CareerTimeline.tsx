import { journey, type Job } from "../data/site";
import { cx } from "../utils/cx";

type Block = { kind: "job"; job: Job } | { kind: "group"; org: string; logo: string; jobs: Job[] };

/** Consecutive roles at the same company are grouped to show progression. */
function toBlocks(jobs: Job[]): Block[] {
  const blocks: Block[] = [];
  for (const job of jobs) {
    const last = blocks[blocks.length - 1];
    const sameOrg = jobs.filter((j) => j.org === job.org).length > 1 && job.org !== "Freelance";
    if (sameOrg && last?.kind === "group" && last.org === job.org) last.jobs.push(job);
    else if (sameOrg) blocks.push({ kind: "group", org: job.org, logo: job.logo, jobs: [job] });
    else blocks.push({ kind: "job", job });
  }
  return blocks;
}

/** "2024 – 2025" + "2015 – 2016" → "2015 – 2025" */
function span(jobs: Job[]) {
  const years = jobs.flatMap((j) => j.period.match(/\d{4}/g) ?? []).map(Number);
  return `${Math.min(...years)} – ${Math.max(...years)}`;
}

export function CareerTimeline() {
  return (
    <ol className="career">
      {toBlocks(journey).map((b) =>
        b.kind === "job" ? (
          <Row key={b.job.role} job={b.job} showOrg />
        ) : (
          <li key={b.org} className="career__group">
            <div className="career__group-head">
              <img src={b.logo} alt={b.org} className="career__group-logo" />
              <span className="career__group-meta">
                {b.jobs.length} roles · {span(b.jobs)}
              </span>
            </div>
            <ol className="career__group-list">
              {b.jobs.map((job) => (
                <Row key={job.role} job={job} />
              ))}
            </ol>
          </li>
        ),
      )}
    </ol>
  );
}

function Row({ job, showOrg }: { job: Job; showOrg?: boolean }) {
  const current = /present/i.test(job.period);
  return (
    <li className={cx("career-row", current && "is-current")}>
      <span className="career-row__dot" aria-hidden />
      <span className="career-row__period">
        {current && <span className="career-row__now">Now</span>}
        {job.period}
      </span>
      <div className="career-row__text">
        <h3>
          {job.role}
          {showOrg && <span className="career-row__org"> · {job.org}</span>}
        </h3>
        <p>{job.summary}</p>
      </div>
      {job.highlight && (
        <div className="career-row__metric">
          <strong>{job.highlight.value}</strong>
          <span>{job.highlight.label}</span>
        </div>
      )}
    </li>
  );
}

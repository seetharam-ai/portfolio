import type { Proof } from "../data/site";

/** "See: …" links from a claim to the work that proves it. */
export function ProofLinks({ proof }: { proof: Proof[] }) {
  return (
    <p className="proof-links">
      <span>See:</span>
      {proof.map((p) => (
        <a key={p.link + p.label} href={`#${p.link}`}>
          {p.label} →
        </a>
      ))}
    </p>
  );
}

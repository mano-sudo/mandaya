import MandayaStagger from "../mandaya-stagger";
import SectionShell from "../section-shell";

export default function IssuesSection() {
  return (
    <SectionShell id="issues" index="08" title="Issues" tag="Present-day pressures">
      <MandayaStagger className="cards" itemSelector=".issue-card" stagger={0.12}>
        <article className="issue-card">
          <h3>Land encroachment</h3>
          <p>
            The intrusion of large-scale mining and logging operations into their ancestral domains
            threatens their environment and food security.
          </p>
        </article>
        <article className="issue-card">
          <h3>Cultural erosion</h3>
          <p>
            As the younger generation migrates to urban centers for education and work, there is an
            increasing risk of losing the Mandaya language and traditional weaving techniques.
          </p>
        </article>
        <article className="issue-card">
          <h3>Land titles</h3>
          <p>
            The community continues to struggle for the full legal recognition of their Ancestral Domain
            Titles (CADT) and protection from displacement.
          </p>
        </article>
      </MandayaStagger>
    </SectionShell>
  );
}

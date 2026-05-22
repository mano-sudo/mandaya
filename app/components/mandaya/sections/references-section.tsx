import { mandayaReferences } from "@/app/data/mandaya/references";
import SectionShell from "../section-shell";

export default function ReferencesSection() {
  return (
    <SectionShell id="references" index="10" title="References" tag="Web sources (APA 7)">
      <div className="refs mag-card" style={{ padding: "clamp(20px, 3vw, 28px)" }}>
        <p className="fineprint" style={{ marginTop: 0 }}>
          Entries follow APA Publication Manual (7th ed.) style for webpages; omit retrieval dates when the
          source is expected to be updated.
        </p>
        <ol style={{ margin: "12px 0 0", paddingLeft: 22 }}>
          {mandayaReferences.map((ref) => (
            <li
              key={ref.id}
              style={{ marginBottom: 14 }}
              dangerouslySetInnerHTML={{ __html: ref.html }}
            />
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}

import PoliticalShowcase from "../political-showcase";
import SectionShell from "../section-shell";

export default function PoliticalSection() {
  return (
    <SectionShell id="political" index="04" title="Political" tag="Leadership and law">
      <PoliticalShowcase />
    </SectionShell>
  );
}

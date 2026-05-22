import { mandayaReflections } from "@/app/data/mandaya/reflections";
import MandayaStagger from "../mandaya-stagger";
import SectionShell from "../section-shell";

export default function ReflectionsSection() {
  return (
    <SectionShell id="reflections" index="09" title="Reflection" tag="Personal learning notes">
      <MandayaStagger className="reflections-grid" itemSelector=".reflection-card" stagger={0.1}>
        {mandayaReflections.map((item) => (
          <article key={item.id} className="reflection-card">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </MandayaStagger>
    </SectionShell>
  );
}

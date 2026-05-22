import SectionShell from "../section-shell";

export default function ReligionSection() {
  return (
    <SectionShell id="religion" index="07" title="Religion" tag="Belief and practice" variant="immersive">
      <div className="split mag-card religion-split">
        <div
          className="split-media"
          role="img"
          aria-label="River ritual scene with traditional attire and offerings"
        />
        <div className="split-copy">
          <p>
            The Mandaya religious system is a complex form of animism in which the physical and spiritual
            worlds are deeply interconnected. Their beliefs shape how they interact with nature, guide
            their moral behavior, and help explain events and mysteries in life.
          </p>
          <p>
            Central to this worldview is a concept of dualism, where the visible world and the invisible
            spirit realm (Maganito) exist in constant balance and depend on each other. Because of this
            belief, humans are seen as caretakers of a &ldquo;spirit-owned&rdquo; environment. This leads
            to a strong sense of reciprocity, where any activity such as harvesting or community actions
            must be done with respect and approval from spirits and deities like Mansilatan and the weaving
            spirit Tagamaling.
          </p>
          <p>
            These beliefs are expressed through rituals led by the balyan (spirit medium), such as
            pagkayag, which involves offerings and sacrifices intended to appease the Diwata and protect
            the community. Faith is viewed as essential for survival, and observing rituals and spiritual
            rules helps prevent harm from busao (malevolent spirits) and maintains harmony within both
            society and nature.
          </p>
          <p>
            Mandaya belief also includes a pantheon of deities and spirits, such as Mansilatan and Baly
            (often described as father and son figures representing benevolent forces), and Pudaugnon and
            Malimbong (a husband-and-wife pair associated with harmful or evil forces). The Diwata are
            generally considered benevolent spirits who act as intermediaries between higher deities and the
            people.
          </p>
          <p>
            This religious structure has real effects on Mandaya society. It supports ecological
            preservation, as certain forests and areas are considered sacred and &ldquo;spirit-owned,&rdquo;
            making logging and hunting culturally and spiritually forbidden. It also reinforces moral
            discipline, since the belief that spirits and gods are always watching encourages honesty and
            adherence to customary laws (dama). As a result, social harmony is not just a cultural value
            but a spiritual obligation meant to avoid misfortune for the entire community.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}

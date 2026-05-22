import Image from "next/image";
import MandayaStagger from "../mandaya-stagger";
import SectionShell from "../section-shell";

export default function IntroductionSection() {
  return (
    <SectionShell id="introduction" index="01" title="Introduction" tag="Overview" variant="editorial">
      <div className="mag-card intro-panel">
        <MandayaStagger className="intro-layout" itemSelector=":scope > *" stagger={0.15}>
          <div className="intro-copy">
            <p className="dropcap">
              The Mandaya take their name from two words: <em>man</em> (&ldquo;people&rdquo;) and{" "}
              <em>daya</em> (&ldquo;upstream&rdquo; or the upper reaches of a river). It marks both a
              geography and an identity — communities tied to the headwaters and highlands of eastern
              Mindanao, especially in Davao Oriental, where forests, abaca gardens, and woven work have
              long sustained everyday life.
            </p>
            <p>
              What follows moves from deep history and migration through social life and environmental
              stewardship, political structure beside Philippine institutions, forest and market
              economies, expressive culture in language and cloth, animist belief and ritual, and the
              land and cultural rights issues that shape Mandaya futures today.
            </p>
            <div className="pullquote">
              &ldquo;Man&rdquo; and &ldquo;daya&rdquo; meet in a name: people of the upstream — a
              geography of memory as much as a map coordinate.
            </div>
            <p className="fineprint">
              Spellings of ethnonyms, ritual roles, and spirit names differ across sources and
              communities; local usage should be taken as authoritative where it diverges from general
              references.
            </p>
          </div>
          <figure className="photo-frame intro-media">
            <span className="photo-badge">Community</span>
            <Image
              src="/assets/t-21ec38b0-5a88-44cf-a36b-d0af59450846.png"
              alt="Large group portrait of Mandaya community members in traditional and contemporary attire in front of thatched structures"
              width={800}
              height={600}
              loading="lazy"
              sizes="100vw"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
            <figcaption>
              Community members in traditional and everyday dress; thatch and timber architecture
              reflect long-established upland settlement patterns.
            </figcaption>
          </figure>
        </MandayaStagger>
      </div>
    </SectionShell>
  );
}

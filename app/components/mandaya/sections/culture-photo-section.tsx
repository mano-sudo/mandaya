import Image from "next/image";
import SectionShell from "../section-shell";

export default function CulturePhotoSection() {
  return (
    <SectionShell
      id="culture-gallery"
      index="06"
      title="Living arts"
      tag="Music and movement"
      variant="editorial"
      hideIndex
    >
      <div className="slide-showcase-wrap">
        <figure className="mag-card photo-frame intro-media">
          <Image
            src="/assets/u-ac3e96e9-1eb0-4374-be10-4cc514082cca.png"
            alt="Historical photograph of Mandaya musicians and dancers with gong, drum, and woven garments near water"
            width={1200}
            height={800}
            loading="eager"
            sizes="100vw"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <figcaption>
            Archival scene of Mandaya musicians and dancers with gong, drum, and woven garments — sound
            and movement carry ceremony from everyday arts into sacred practice.
          </figcaption>
        </figure>
      </div>
    </SectionShell>
  );
}

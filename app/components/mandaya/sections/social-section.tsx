import SocialCarousel from "../social-carousel";
import SectionShell from "../section-shell";

export default function SocialSection() {
  return (
    <SectionShell id="social" index="03" title="Social" tag="Land, identity, and community">
      <div className="slide-showcase-wrap">
        <SocialCarousel />
      </div>
    </SectionShell>
  );
}

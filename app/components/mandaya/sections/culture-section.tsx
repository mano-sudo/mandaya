import CultureBook from "../culture-book";
import SectionShell from "../section-shell";

export default function CultureSection() {
  return (
    <SectionShell id="culture" index="06" title="Culture" tag="Arts, cloth, and ritual" variant="immersive">
      <p className="fineprint culture-book-intro">
        For the Mandaya, culture is not a performance but a way of survival. Every aspect of daily
        life—from the moment they wake until they sleep—is dictated by their interaction with nature.
        Their history and structures of power are tied to the protection of the ancestral domain, where
        the environment serves as both their sacred temple and their primary source of livelihood. The
        sequence below pairs short notes with images on facing panels.
      </p>
      <div className="slide-showcase-wrap slide-showcase-wrap--culture">
        <CultureBook />
      </div>
    </SectionShell>
  );
}

"use client";

import ScrollSection from "@/app/components/scroll-section";
import MandayaHeader from "./mandaya-header";
import MandayaHero from "./mandaya-hero";
import MandayaFooter from "./mandaya-footer";
import { useMandayaScrollReset } from "./use-mandaya-scroll-reset";
import ThemeEditor from "./theme-editor";
import MandayaScrollProgress from "./mandaya-scroll-progress";
import MandayaChapterNav from "./mandaya-chapter-nav";
import MandayaGrain from "./mandaya-grain";
import IntroductionSection from "./sections/introduction-section";
import HistorySection from "./sections/history-section";
import SocialSection from "./sections/social-section";
import PoliticalSection from "./sections/political-section";
import EconomicSection from "./sections/economic-section";
import CultureSection from "./sections/culture-section";
import CulturePhotoSection from "./sections/culture-photo-section";
import ReligionSection from "./sections/religion-section";
import IssuesSection from "./sections/issues-section";
import ReflectionsSection from "./sections/reflections-section";
import ReferencesSection from "./sections/references-section";

export default function MandayaSite() {
  useMandayaScrollReset();

  return (
    <div className="mandaya-experience">
      <MandayaGrain />
      <MandayaScrollProgress />
      <MandayaChapterNav />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <MandayaHeader />
      <MandayaHero />
      <main id="main" style={{ scrollbarGutter: "stable" }}>
        <ScrollSection>
          <IntroductionSection />
        </ScrollSection>
        <ScrollSection>
          <HistorySection />
        </ScrollSection>
        <ScrollSection>
          <SocialSection />
        </ScrollSection>
        <ScrollSection>
          <PoliticalSection />
        </ScrollSection>
        <ScrollSection>
          <EconomicSection />
        </ScrollSection>
        <ScrollSection>
          <CultureSection />
        </ScrollSection>
        <ScrollSection>
          <CulturePhotoSection />
        </ScrollSection>
        <ScrollSection>
          <ReligionSection />
        </ScrollSection>
        <ScrollSection>
          <IssuesSection />
        </ScrollSection>
        <ScrollSection>
          <ReflectionsSection />
        </ScrollSection>
        <ScrollSection>
          <ReferencesSection />
        </ScrollSection>
      </main>
      <ScrollSection>
        <MandayaFooter />
      </ScrollSection>
      <ThemeEditor />
    </div>
  );
}

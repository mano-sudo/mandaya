"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

const TAB_COUNT = 4;

const TABS = [
  { id: "overview", label: "Overview", sub: "Warrior-led polarity to bicultural governance" },
  { id: "bagani", label: "Bagani system", sub: "Decentralized warrior-chiefs" },
  { id: "structure", label: "Leadership structure", sub: "Bagani, Likid, Balyan" },
  { id: "dama", label: "Dama & IPMR", sub: "Customary law in LGUs" },
] as const;

export default function PoliticalShowcase() {
  const [idx, setIdx] = useState(0);
  const tablistRef = useRef<HTMLDivElement>(null);

  const select = useCallback((index: number, scrollTab = false) => {
    const next = ((index % TAB_COUNT) + TAB_COUNT) % TAB_COUNT;
    setIdx(next);
    if (scrollTab) {
      const tab = tablistRef.current?.querySelectorAll('[role="tab"]')[next];
      tab?.scrollIntoView({ inline: "nearest", block: "nearest", behavior: "smooth" });
    }
  }, []);

  return (
    <div
      className="political-showcase"
      id="politicalShowcase"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          select(idx - 1, true);
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          select(idx + 1, true);
        }
      }}
    >
      <div
        className="political-topics"
        id="politicalTabs"
        ref={tablistRef}
        role="tablist"
        aria-label="Political themes"
      >
        {TABS.map((tab, i) => (
          <button
            key={tab.id}
            className="political-tab"
            role="tab"
            type="button"
            id={`tab-${tab.id}`}
            aria-selected={i === idx}
            aria-controls={`panel-${tab.id}`}
            onClick={() => select(i, true)}
          >
            {tab.label}
            <span>{tab.sub}</span>
          </button>
        ))}
      </div>

      <div className="political-panels">
        <article
          className={`political-panel${idx === 0 ? " is-active" : ""}`}
          role="tabpanel"
          id="panel-overview"
          aria-labelledby="tab-overview"
          hidden={idx !== 0}
        >
          <figure className="political-panel-fig">
            <Image
              src="/assets/t-21ec38b0-5a88-44cf-a36b-d0af59450846.png"
              alt="Mandaya community members representing collective leadership"
              width={800}
              height={600}
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <figcaption className="political-panel-cap">
              Bicultural governance — traditional councils and Philippine institutions
            </figcaption>
          </figure>
          <div className="political-panel-body">
            <p className="political-panel-kicker">Topic 1 of 4</p>
            <h3>Warrior-led polarity and bicultural governance</h3>
            <p>
              Historically, the Mandaya practiced a Warrior-Led Polarity or a Bagani System. This is a
              traditional governance model where authority is decentralized across different settlements,
              each led by a warrior-chief. In the modern era, this has transitioned into a Bicultural
              Governance System, where the traditional tribal leadership co-exists and integrates with
              the local government units (LGUs) of the Philippines.
            </p>
            <p>
              The Mandaya political system remains a dynamic and highly evident force in the modern era,
              characterized by a Bicultural Governance System that integrates ancestral traditions with
              the Philippine legal framework. Historically organized under the Bagani system, Mandaya
              communities today bridge ancient warrior-led heritage and contemporary democratic
              governance.
            </p>
          </div>
        </article>

        <article
          className={`political-panel${idx === 1 ? " is-active" : ""}`}
          role="tabpanel"
          id="panel-bagani"
          aria-labelledby="tab-bagani"
          hidden={idx !== 1}
        >
          <figure className="political-panel-fig political-panel-fig--festival">
            <Image
              src="/assets/r-654af73d-ad2b-44ae-922d-1e2fbb91afc7.png"
              alt="Mandaya performers in traditional warrior-style dress"
              width={800}
              height={600}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 20%",
              }}
            />
            <figcaption className="political-panel-cap">Bagani ideals — defense and communal duty</figcaption>
          </figure>
          <div className="political-panel-body">
            <p className="political-panel-kicker">Topic 2 of 4</p>
            <h3>The Bagani (warrior-chiefs)</h3>
            <p>
              The <strong>Bagani</strong>: The supreme political and military leader. To become a
              Bagani, one historically had to demonstrate bravery and leadership in defense of the
              community.
            </p>
            <p>
              Bagani coordinated protection during raids, mediated serious disputes, and led responses
              to threats from outsiders. During Spanish and American periods, many communities preserved
              autonomy by retreating upland while Bagani-led resistance slowed colonial control.
            </p>
          </div>
        </article>

        <article
          className={`political-panel${idx === 2 ? " is-active" : ""}`}
          role="tabpanel"
          id="panel-structure"
          aria-labelledby="tab-structure"
          hidden={idx !== 2}
        >
          <figure className="political-panel-fig political-panel-fig--elder">
            <Image
              src="/assets/q-59f93d10-2156-4858-9aa7-fa05ab1f97a4.png"
              alt="Mandaya elder weaving Dagmay cloth"
              width={800}
              height={600}
              loading="lazy"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 35%",
              }}
            />
            <figcaption className="political-panel-cap">Likid elders and Balyan spiritual authority</figcaption>
          </figure>
          <div className="political-panel-body">
            <p className="political-panel-kicker">Topic 3 of 4</p>
            <h3>How leadership is organized</h3>
            <p>The traditional structure is hierarchical but community-focused:</p>
            <ul className="political-panel-list">
              <li>
                <strong>The Bagani:</strong> The supreme political and military leader. To become a
                Bagani, one historically had to demonstrate bravery and leadership in defense of the
                community.
              </li>
              <li>
                <strong>The Advisory Council:</strong> Composed of elders (Likid) who provide wisdom
                and historical context for decision-making.
              </li>
              <li>
                <strong>The Balyan:</strong> While primarily a spiritual leader, the Balyan holds
                significant political influence, serving as a consultant for the Bagani on the morality
                and spiritual timing of political acts.
              </li>
            </ul>
          </div>
        </article>

        <article
          className={`political-panel${idx === 3 ? " is-active" : ""}`}
          role="tabpanel"
          id="panel-dama"
          aria-labelledby="tab-dama"
          hidden={idx !== 3}
        >
          <figure className="political-panel-fig political-panel-fig--village">
            <Image
              src="/assets/e-09060972-8f85-411c-a8a6-8e7e3a07e47e.png"
              alt="Historical Mandaya upland village"
              width={800}
              height={600}
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <figcaption className="political-panel-cap">
              Upland village — Dama customary law and IPMR representation
            </figcaption>
          </figure>
          <div className="political-panel-body">
            <p className="political-panel-kicker">Topic 4 of 4</p>
            <h3>Dama customary law &amp; IPMR</h3>
            <p>
              Their administration relies heavily on Customary Laws known as Dama, a restorative justice
              system that remains the preferred method for resolving local disputes over land or social
              conduct before they reach formal courts. By appointing Indigenous Peoples Mandatory
              Representatives (IPMR) to local government units, the Mandaya ensure that their
              traditional political hierarchy continues to influence modern policy, effectively bridging
              the gap between ancient warrior-led heritage and contemporary democratic governance.
            </p>
          </div>
        </article>
      </div>

      <div className="political-toolbar">
        <div className="political-toolbar-nav">
          <button
            className="political-btn"
            type="button"
            aria-label="Previous topic"
            disabled={idx === 0}
            onClick={() => select(idx - 1, true)}
          >
            Previous
          </button>
          <span className="political-counter" aria-live="polite">
            {idx + 1} / {TAB_COUNT}
          </span>
          <button
            className="political-btn political-btn--primary"
            type="button"
            aria-label="Next topic"
            disabled={idx === TAB_COUNT - 1}
            onClick={() => select(idx + 1, true)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

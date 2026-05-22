import Image from "next/image";
import MandayaStagger from "../mandaya-stagger";
import SectionShell from "../section-shell";

export default function HistorySection() {
  return (
    <SectionShell
      id="history"
      index="02"
      title="History"
      tag="Origins and change over time"
      headingId="history-heading"
    >
      <div className="mag-card history-panel">
        <div className="history-timeline">
          <div className="history-ribbon" aria-hidden="true">
            <div className="history-ribbon-inner">
              <p className="history-ribbon-title">Origins and change over time</p>
            </div>
          </div>
          <MandayaStagger className="ht-entries" itemSelector=".ht-entry" stagger={0.14} y={36}>
            <article className="ht-entry ht-entry--left" id="history-origin-term" aria-labelledby="history-origin-term-h">
              <div className="ht-rail">
                <span className="ht-year">Name</span>
                <span className="ht-dot" aria-hidden="true" />
                <span className="ht-tag">Oral tradition</span>
              </div>
              <div className="ht-card">
                <h3 id="history-origin-term-h">1. Origin of the Term</h3>
                <p>
                  The name Mandaya is a combination of two words: man, meaning &ldquo;people,&rdquo; and
                  daya, meaning &ldquo;upstream&rdquo; or &ldquo;the upper portion of a river.&rdquo;
                  Collectively, the name identifies them as &ldquo;the first people upstream,&rdquo; a
                  title that reflects their historical preference for settling near the headwaters of
                  the great rivers in Mindanao.
                </p>
              </div>
              <figure className="ht-media">
                <Image src="/assets/history-rio-mindanao.jpg" alt="Vegetated banks of the Rio Grande de Mindanao" width={640} height={480} loading="lazy" style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }} />
                <figcaption className="ht-media-cap">
                  Rio Grande de Mindanao —{" "}
                  <a href="https://commons.wikimedia.org/wiki/File:Rio_Grande_De_Mindanao.jpg" rel="noopener noreferrer" target="_blank">Wikimedia Commons</a>
                </figcaption>
              </figure>
            </article>

            <article className="ht-entry ht-entry--right" id="history-origins" aria-labelledby="history-origins-h">
              <div className="ht-rail">
                <span className="ht-year">3000-500 BC</span>
                <span className="ht-dot" aria-hidden="true" />
                <span className="ht-tag">Austronesian context</span>
              </div>
              <div className="ht-card">
                <h3 id="history-origins-h">2. Origins</h3>
                <p>
                  The Mandaya are believed to have descended from early Indonesian migrants who arrived
                  in the Philippines in several waves between 3000 and 500 BC. These settlers
                  intermarried with local populations, giving rise to the Manobo groups of eastern
                  Mindanao. Later, Malay migrants who reached the Philippines between 300 and 200 BC
                  through Palawan and Mindoro are thought to have intermarried with the Manobo, leading
                  to the emergence of the Mandaya people.
                </p>
                <p>
                  This theory is supported by similarities in language patterns and weaving techniques
                  shared by the Mandaya and certain Indonesian groups. In the 13th century, Chinese traders
                  and settlers also arrived and, through intermarriage, further influenced the ancestry
                  and cultural development of the Mandaya.
                </p>
              </div>
              <figure className="ht-media">
                <Image src="/assets/history-austronesian-boat.png" alt="Diagram of Austronesian boat development" width={640} height={341} loading="lazy" style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }} />
                <figcaption className="ht-media-cap">
                  Austronesian boat forms —{" "}
                  <a href="https://commons.wikimedia.org/wiki/File:Succession_of_forms_in_the_development_of_the_Austronesian_boat.png" rel="noopener noreferrer" target="_blank">Wikimedia Commons</a>
                </figcaption>
              </figure>
            </article>

            <article className="ht-entry ht-entry--left" id="history-migration" aria-labelledby="history-migration-h">
              <div className="ht-rail">
                <span className="ht-year">Interior</span>
                <span className="ht-dot" aria-hidden="true" />
                <span className="ht-tag">Highland refuge</span>
              </div>
              <div className="ht-card">
                <h3 id="history-migration-h">3. Migration</h3>
                <p>Historical migration was defined by a movement away from coastal pressures.</p>
                <p>
                  <strong>Highland Settlement:</strong> To preserve their culture and avoid conflict with
                  expanding coastal populations, the Mandaya moved into the rugged interior of the Davao
                  region.
                </p>
                <p>
                  <strong>Adaptation:</strong> They adapted to the high-altitude environment, developing
                  a seminomadic lifestyle centered on forest foraging and shifting agriculture. This
                  isolation allowed their unique traditions—such as the intricate Dagmay weaving—to
                  remain largely untouched for centuries.
                </p>
              </div>
              <figure className="ht-media">
                <Image src="/assets/history-mount-apo-rainforest.jpg" alt="Rainforest on Mount Apo" width={640} height={426} loading="lazy" style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }} />
                <figcaption className="ht-media-cap">
                  Mount Apo rainforest —{" "}
                  <a href="https://commons.wikimedia.org/wiki/File:Mount_Apo_Rainforest.jpg" rel="noopener noreferrer" target="_blank">Wikimedia Commons</a>
                </figcaption>
              </figure>
            </article>

            <article className="ht-entry ht-entry--right" id="history-colonization" aria-labelledby="history-colonization-h">
              <div className="ht-rail">
                <span className="ht-year">1880s-1910s</span>
                <span className="ht-dot" aria-hidden="true" />
                <span className="ht-tag">Spanish & American eras</span>
              </div>
              <div className="ht-card">
                <h3 id="history-colonization-h">4. Colonization and Resistance</h3>
                <p>
                  The Mandaya are historically recognized for their fierce independence and refusal to
                  submit to foreign rule.
                </p>
                <p>
                  <strong>The Spanish Period:</strong> During the late 19th century, Spanish missionaries
                  attempted to relocate the Mandaya into organized settlements called reducciones. Many
                  Mandaya resisted by retreating further into the inaccessible mountain ranges of Davao
                  Oriental, successfully evading colonial taxation and forced labor.
                </p>
                <p>
                  <strong>The American Period:</strong> When the American colonial government established
                  vast abaca plantations in the Davao Gulf, the Mandaya chose to remain in their ancestral
                  highlands rather than join the plantation labor force, effectively maintaining their
                  economic and cultural autonomy.
                </p>
              </div>
              <figure className="ht-media">
                <Image src="/assets/e-09060972-8f85-411c-a8a6-8e7e3a07e47e.png" alt="19th-century Mandaya village engraving" width={640} height={480} loading="lazy" style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }} />
                <figcaption className="ht-media-cap">Archival village depiction, 19th century</figcaption>
              </figure>
            </article>

            <article className="ht-entry ht-entry--left" id="history-demography" aria-labelledby="history-demography-h">
              <div className="ht-rail">
                <span className="ht-year">Today</span>
                <span className="ht-dot" aria-hidden="true" />
                <span className="ht-tag">Population ~288,000</span>
              </div>
              <div className="ht-card">
                <h3 id="history-demography-h">5. Demography</h3>
                <p>
                  Today, the Mandaya remain one of the largest indigenous ethnic groups in the Davao
                  Region with a population of approximately 288,000 people. While modern census data
                  reflects a community integrated into the broader Philippine society, they maintain a
                  strong tribal identity. The population is characterized by a deep-seated respect for
                  elders and a social structure that continues to value the guidance of traditional
                  leaders alongside local government officials.
                </p>
              </div>
              <figure className="ht-media">
                <Image src="/assets/t-21ec38b0-5a88-44cf-a36b-d0af59450846.png" alt="Mandaya community members today" width={640} height={480} loading="lazy" style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }} />
                <figcaption className="ht-media-cap">Mandaya community members today</figcaption>
              </figure>
            </article>

            <article className="ht-entry ht-entry--right" id="history-geography" aria-labelledby="history-geography-h">
              <div className="ht-rail">
                <span className="ht-year">Homelands</span>
                <span className="ht-dot" aria-hidden="true" />
                <span className="ht-tag">Davao Oriental core</span>
              </div>
              <div className="ht-card">
                <h3 id="history-geography-h">6. Geography</h3>
                <p>
                  The Mandaya are distributed across several areas of Davao del Norte, Compostela Valley,
                  and Surigao del Sur. However, the largest and most established Mandaya communities are
                  found in the central part of Davao Oriental, especially in the municipalities of
                  Banganga, Caraga, and Cateel.
                </p>
              </div>
              <figure className="ht-media">
                <Image src="/assets/history-baganga-davao-oriental.jpg" alt="Baganga, Davao Oriental" width={640} height={603} loading="lazy" style={{ width: "100%", height: "auto", aspectRatio: "4/3", objectFit: "cover" }} />
                <figcaption className="ht-media-cap">
                  Baganga, Davao Oriental —{" "}
                  <a href="https://commons.wikimedia.org/wiki/File:Dayok_Ayana%27s_Baganga_Davao_Oriental_textureB.jpg" rel="noopener noreferrer" target="_blank">Wikimedia Commons</a>
                </figcaption>
              </figure>
            </article>
          </MandayaStagger>
        </div>
      </div>
    </SectionShell>
  );
}

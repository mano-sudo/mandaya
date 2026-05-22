import Image from "next/image";
import MandayaStagger from "../mandaya-stagger";
import SectionShell from "../section-shell";

export default function EconomicSection() {
  return (
    <SectionShell id="economic" index="05" title="Economic" tag="Livelihood and exchange">
      <div className="economic-dashboard">
        <div aria-label="Key economic figures for Davao Oriental abaca communities">
        <MandayaStagger className="economic-stats" itemSelector=".economic-stat" stagger={0.08}>
          <div className="economic-stat">
            <span>Davao Oriental (2023)</span>
            <strong>9,516 MT</strong>
            <p>Abaca fiber produced province-wide (PSA Region XI situationer).</p>
          </div>
          <div className="economic-stat">
            <span>Abaca sector (2001)</span>
            <strong>2,164</strong>
            <p>Farmers on 4,711 ha; Mandayan households led production (Sumile et al., Davao Research Journal).</p>
          </div>
          <div className="economic-stat">
            <span>National rank</span>
            <strong>2nd</strong>
            <p>Davao Oriental among top abaca-producing provinces in the Philippines (PhilFIDA / PNA).</p>
          </div>
          <div className="economic-stat">
            <span>Typical farm</span>
            <strong>2.02 ha</strong>
            <p>Average abaca holding; mixed with food crops because fiber income alone stays low.</p>
          </div>
        </MandayaStagger>
        </div>

        <div className="charts-grid">
          <div className="chart-card">
            <h3 className="chart-title">Livelihood emphasis among Mandaya households</h3>
            <p className="chart-note">
              Estimated shares synthesize ethnographic accounts (NCCA, C. E. Smith Anthropology Museum) and
              the 2001 Davao Oriental abaca production profile. Mandaya communities rely on upland food
              crops, abaca as the main cash crop, forest resources, and Dagmay weaving.
            </p>
            <div className="bars">
              {[
                ["Upland food farming", "farm", "38%"],
                ["Abaca (Manila hemp)", "abaca", "30%"],
                ["Forest, hunt & fish", "forest", "16%"],
                ["Dagmay weaving", "weave", "11%"],
                ["Trade & wage labor", "trade", "5%"],
              ].map(([label, cls, pct]) => (
                <div className="bar-row" key={label}>
                  <div className="bar-label">{label}</div>
                  <div className="bar-track">
                    <div
                      className={`bar-fill bar-fill--${cls}`}
                      style={{ "--w": pct } as React.CSSProperties}
                    />
                  </div>
                  <div className="bar-pct">{pct}</div>
                </div>
              ))}
            </div>
            <p className="chart-source">
              Sources: Sumile et al. (2001), <em>Davao Research Journal</em>; CSU East Bay Anthropology
              Museum Mandaya profile; PSA Region XI Non-Food Crops Situationer (2023).
            </p>
          </div>

          <div className="chart-card">
            <h3 className="chart-title">Cash &amp; exchange channels</h3>
            <p className="chart-note">
              How income and trade reach Mandaya communities today, based on abaca market dominance in Davao
              Oriental and continuing textile exchange. Shares reflect documented economic roles, not
              household survey totals.
            </p>
            <div className="donut-wrap">
              <div
                className="donut"
                style={{
                  background:
                    "conic-gradient(var(--color-sea) 0% 48%, var(--color-gold) 48% 68%, var(--color-crimson) 68% 83%, rgba(74,50,32,0.85) 83% 100%)",
                }}
                role="img"
                aria-label="Cash channels: abaca 48%, Dagmay 20%, barter 15%, forest 17%"
              >
                <span className="donut-center">
                  Cash
                  <br />
                  channels
                </span>
              </div>
              <div className="legend">
                <div className="legend-item">
                  <span className="swatch" style={{ background: "var(--color-sea)" }} />
                  <span>Abaca &amp; formal markets</span>
                  <span className="legend-pct">48%</span>
                </div>
                <div className="legend-item">
                  <span className="swatch" style={{ background: "var(--color-gold)" }} />
                  <span>Dagmay &amp; handicrafts</span>
                  <span className="legend-pct">20%</span>
                </div>
                <div className="legend-item">
                  <span className="swatch" style={{ background: "var(--color-crimson)" }} />
                  <span>Historic barter goods</span>
                  <span className="legend-pct">15%</span>
                </div>
                <div className="legend-item">
                  <span className="swatch" style={{ background: "rgba(74,50,32,0.85)" }} />
                  <span>Forest &amp; subsistence trade</span>
                  <span className="legend-pct">17%</span>
                </div>
              </div>
            </div>
            <p className="chart-source">
              Abaca priced around PHP 11.62/kg in 2001 provincial surveys; fiber sold on an &ldquo;all-in&rdquo;
              basis through municipal traders (Sumile et al., 2001).
            </p>
          </div>
        </div>

        <div className="chart-card economic-body">
          <div className="economic-body-copy">
            <p>
              The Mandaya economy is built upon a deep, symbiotic relationship between their ancestral
              lands and their traditional resourcefulness. While their economy has modernized to include
              global trade, it remains anchored in indigenous practices that prioritize communal
              sustainability and cultural identity.
            </p>
            <p>
              The primary source of living for the Mandaya is rooted in highland agriculture and
              forest-based livelihoods, with the cultivation of abaca (Manila hemp) serving as the
              cornerstone of their economy. Their way of life is inseparable from their ancestral land and
              domain, which they view as a &ldquo;living market&rdquo; and a sacred provider; this land
              provides the raw materials for their world-renowned Dagmay weaving and the fertile soil for
              ethnofarming crops like ginger, mountain rice, and tubers. Historically, the Mandaya engaged
              in a robust trade of goods and services, bartering their intricate textiles, beeswax, and
              tobacco with neighboring tribes and coastal traders for salt, metal tools, and porcelain. In
              the modern era, this has evolved into local and international relationships, where Mandaya
              Dagmay fabric is exported and featured in global high-fashion circles, while their
              agricultural products supply markets across Mindanao. This economic evolution has facilitated
              a significant transfer of technology and ideas, as the community integrates modern
              sustainable farming techniques and digital marketing with their traditional knowledge,
              ensuring that their ancestral economy thrives within the competitive 21st-century global
              marketplace.
            </p>
          </div>
          <figure className="photo-frame">
            <span className="photo-badge">Livelihood</span>
            <Image
              src="/assets/i-05d7f815-a24e-4b82-bc62-c62a5e9ded38.png"
              alt="Close-up of handwoven Mandaya Dagmay textile"
              width={640}
              height={480}
              loading="lazy"
              style={{ width: "100%", height: "auto" }}
            />
            <figcaption>
              Dagmay weaving turns abaca fiber into cloth sold or worn for ritual and community status.
            </figcaption>
          </figure>
        </div>
      </div>
    </SectionShell>
  );
}

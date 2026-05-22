export default function MandayaFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>
          <p
            style={{
              margin: "0 0 12px",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "#fffef8",
            }}
          >
            Mandaya: people of the upstream
          </p>
          <p className="fineprint" style={{ margin: 0, maxWidth: "48ch" }}>
            Educational overview of the Mandaya indigenous community. Color presets adjust on-screen
            contrast only; this page does not collect personal data.
          </p>
          <a className="footer-cta" href="#introduction">
            Read from the beginning
          </a>
        </div>
        <div>
          <p style={{ margin: "0 0 10px", fontWeight: 700, letterSpacing: "0.08em", fontSize: "0.8rem", textTransform: "uppercase", color: "rgba(255,254,248,0.5)" }}>
            Navigate
          </p>
          <p className="fineprint" style={{ margin: 0, lineHeight: 2 }}>
            <a href="#top">Back to top</a>
            <br />
            <a href="#culture">Culture</a>
            <br />
            <a href="#issues">Issues</a>
            <br />
            <a href="#references">References</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

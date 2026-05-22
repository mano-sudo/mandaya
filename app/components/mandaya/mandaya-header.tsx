"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useHydrationSafeReducedMotion } from "@/app/hooks/use-hydration-safe-reduced-motion";
import { mandayaExploreLinks, mandayaNavLinks } from "@/app/data/mandaya/nav-links";
import { useMandayaAnchorNav } from "./use-mandaya-anchor-nav";

export default function MandayaHeader() {
  const reduceMotion = useHydrationSafeReducedMotion();
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeNav = useCallback(() => {
    setNavOpen(false);
    document.querySelectorAll(".nav-details[open]").forEach((d) => {
      d.removeAttribute("open");
    });
  }, []);

  useMandayaAnchorNav(closeNav);

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 48);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <LazyMotion features={domAnimation} strict>
      <m.header
        className={`site-header${scrolled ? " is-scrolled" : ""}`}
        id="top"
        initial={reduceMotion ? false : { opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="Home" onClick={closeNav}>
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-text">
              <span className="brand-kicker">Philippine Indigenous Community</span>
              <span className="brand-title">Mandaya</span>
            </span>
          </a>

          <button
            type="button"
            className={`hamburger${navOpen ? " is-active" : ""}`}
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
            aria-controls="primaryNav"
            onClick={() => setNavOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            id="primaryNav"
            className={`main-nav${navOpen ? " is-open" : ""}`}
            aria-label="Primary"
          >
            <ul>
              {mandayaNavLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={closeNav}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="nav-dd">
                <details className="nav-details">
                  <summary>Explore</summary>
                  <div className="nav-dd-panel" role="menu">
                    {mandayaExploreLinks.map((link) => (
                      <a key={link.href} href={link.href} role="menuitem" onClick={closeNav}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </details>
              </li>
            </ul>
          </nav>
        </div>
      </m.header>
    </LazyMotion>
  );
}

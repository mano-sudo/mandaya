"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { useHydrationSafeReducedMotion } from "@/app/hooks/use-hydration-safe-reduced-motion";
import { mandayaQuickLinks } from "@/app/data/mandaya/nav-links";

export default function MandayaQuickLinks() {
  const reduceMotion = useHydrationSafeReducedMotion();

  return (
    <LazyMotion features={domAnimation} strict>
      <m.nav
        className="quick-links"
        aria-label="Quick section links"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="quick-links-inner">
          {mandayaQuickLinks.map((link, i) => (
            <m.a
              key={link.href}
              className="quick-link"
              href={link.href}
              initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.35,
                delay: reduceMotion ? 0 : 0.9 + i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.label}
            </m.a>
          ))}
        </div>
      </m.nav>
    </LazyMotion>
  );
}

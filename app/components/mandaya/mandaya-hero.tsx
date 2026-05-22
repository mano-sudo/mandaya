"use client";

import { LazyMotion, domAnimation, m, type Variants } from "framer-motion";
import { useHydrationSafeReducedMotion } from "@/app/hooks/use-hydration-safe-reduced-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function blockVariants(reduce: boolean, delay = 0): Variants {
  if (reduce) {
    return {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0 },
    };
  }
  return {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
    },
  };
}

const HERO_STATS = [
  {
    value: "Lumad",
    label: "Identity",
    detail: "Among the largest indigenous communities of the Davao Region.",
  },
  {
    value: "Dagmay",
    label: "Weaving",
    detail: "Dream-woven abaca cloth tied to spirit gifts and kin memory.",
  },
  {
    value: "Upstream",
    label: "Geography",
    detail: "Settlements along headwaters of Mindanao's great river systems.",
  },
] as const;

export default function MandayaHero() {
  const reduceMotion = useHydrationSafeReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduceMotion || !heroRef.current || !mediaRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        mediaRef.current,
        { scale: 1.14, y: 0 },
        {
          scale: 1.02,
          y: 48,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [reduceMotion]);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
        delayChildren: reduceMotion ? 0 : 0.15,
      },
    },
  };

  return (
    <LazyMotion features={domAnimation} strict>
      <section className="hero" aria-label="Hero" ref={heroRef}>
        <div
          ref={mediaRef}
          className="hero-media"
          role="img"
          aria-label="Mandaya performers in traditional attire during a community festival"
        />
        <m.div
          className="hero-inner"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-main">
            <m.div className="hero-kicker" variants={blockVariants(!!reduceMotion)}>
              Davao Oriental and the Pacific Cordillera
            </m.div>
            <m.h1 variants={blockVariants(!!reduceMotion, 0.05)}>
              People living upstream: the Mandaya of eastern Mindanao.
            </m.h1>
            <m.p className="hero-lede" variants={blockVariants(!!reduceMotion, 0.1)}>
              The Mandaya are among the largest Lumad communities of the Davao Region, known for Dagmay
              weaving, upland lifeways along major river systems, and a worldview in which land, spirits,
              and kin obligations belong to one fabric. What follows moves from history and migration
              through everyday life, governance, livelihood, arts, belief, and the pressures that shape
              their present and future.
            </m.p>
            <m.div className="hero-actions" variants={blockVariants(!!reduceMotion, 0.15)}>
              <a className="btn btn-primary" href="#introduction">
                Begin reading
              </a>
              <a className="btn btn-ghost" href="#issues">
                See pressing issues
              </a>
            </m.div>
          </div>
          <m.aside className="hero-aside" variants={container} aria-label="Key themes">
            {HERO_STATS.map((stat, i) => (
              <m.div
                key={stat.label}
                className="hero-stat"
                variants={blockVariants(!!reduceMotion, 0.2 + i * 0.08)}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
                <p>{stat.detail}</p>
              </m.div>
            ))}
          </m.aside>
        </m.div>
        <div className="hero-scroll-cue" aria-hidden="true">
          <span>Explore</span>
          <span className="hero-scroll-cue__line" />
        </div>
      </section>
    </LazyMotion>
  );
}

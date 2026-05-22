"use client";

import { type CSSProperties, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@/app/hooks/useGSAP";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface MandayaStaggerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** CSS selector for direct children to animate */
  itemSelector?: string;
  stagger?: number;
  y?: number;
  start?: string;
}

export default function MandayaStagger({
  children,
  className = "",
  style,
  itemSelector = ":scope > *",
  stagger = 0.1,
  y = 28,
  start = "top 88%",
}: MandayaStaggerProps) {
  const containerRef = useGSAP(() => {
    const root = containerRef.current;
    if (!root) return;

    const items = root.querySelectorAll(itemSelector);
    if (!items.length) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      gsap.set(items, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      items,
      { opacity: 0, y },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power2.out",
        stagger,
        scrollTrigger: {
          trigger: root,
          start,
          toggleActions: "play none none none",
          once: true,
          fastScrollEnd: true,
        },
      }
    );
  }, [itemSelector, stagger, y, start]);

  return (
    <div ref={containerRef} className={className} style={style}>
      {children}
    </div>
  );
}

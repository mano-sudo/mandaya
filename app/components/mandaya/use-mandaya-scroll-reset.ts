"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type WindowWithLenis = Window & {
  lenis?: { scrollTo: (y: number, opts?: { immediate?: boolean }) => void };
};

function scrollPageToTop(): void {
  if (typeof window === "undefined") return;

  const hash = window.location.hash;
  if (hash && hash.length > 1) return;

  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  const lenis = (window as WindowWithLenis).lenis;
  if (lenis?.scrollTo) {
    lenis.scrollTo(0, { immediate: true });
  }
}

export function useMandayaScrollReset(): void {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    scrollPageToTop();

    const raf = requestAnimationFrame(() => {
      scrollPageToTop();
      ScrollTrigger.refresh();
    });

    const timeout = window.setTimeout(() => {
      scrollPageToTop();
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(timeout);
    };
  }, []);
}

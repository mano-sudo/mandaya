"use client";

import { useEffect } from "react";

type LenisLike = {
  scrollTo: (
    target: number | string | Element,
    options?: { offset?: number; immediate?: boolean }
  ) => void;
};

type WindowWithLenis = Window & { lenis?: LenisLike };

const HEADER_OFFSET = 72;

export function useMandayaAnchorNav(onNavigate?: () => void): void {
  useEffect(() => {
    const handler = (e: MouseEvent): void => {
      const link = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      if (href === "#top") {
        e.preventDefault();
        onNavigate?.();
        const lenis = (window as WindowWithLenis).lenis;
        if (lenis) {
          lenis.scrollTo(0, { immediate: false });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        history.pushState(null, "", href);
        return;
      }

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      onNavigate?.();

      const lenis = (window as WindowWithLenis).lenis;
      if (lenis) {
        lenis.scrollTo(target, { offset: -HEADER_OFFSET });
      } else {
        const top =
          target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
      }
      history.pushState(null, "", href);
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [onNavigate]);
}

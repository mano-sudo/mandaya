"use client";

import { useEffect, useState } from "react";
import { mandayaChapters } from "@/app/data/mandaya/chapters";

export default function MandayaChapterNav() {
  const [active, setActive] = useState(mandayaChapters[0]?.id ?? "introduction");

  useEffect(() => {
    const sections = mandayaChapters
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.12, 0.35, 0.55] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="md-chapter-nav" aria-label="Page chapters">
      <span className="md-chapter-nav__label">Chapters</span>
      <ol className="md-chapter-nav__list">
        {mandayaChapters.map((chapter) => (
          <li key={chapter.id}>
            <a
              href={chapter.href}
              className={`md-chapter-nav__link${active === chapter.id ? " is-active" : ""}`}
              aria-current={active === chapter.id ? "true" : undefined}
            >
              <span className="md-chapter-nav__dot" aria-hidden="true" />
              <span className="md-chapter-nav__index">{chapter.index}</span>
              <span className="md-chapter-nav__name">{chapter.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

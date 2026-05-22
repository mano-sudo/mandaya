"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import SlideFigureImage from "./slide-figure-image";
import { usePreloadImages } from "./use-preload-images";

const SLIDE_COUNT = 4;

interface SocialSlide {
  src: string;
  alt: string;
  cap: string;
  kicker: string;
  title: string;
  body: ReactNode;
  objectPosition: string;
  figClass?: string;
}

const SLIDES: SocialSlide[] = [
  {
    src: "/assets/t-21ec38b0-5a88-44cf-a36b-d0af59450846.png",
    alt: "Mandaya community members gathered in front of thatched homes",
    cap: "Community portrait — ancestral domain as living inheritance",
    kicker: "Slide 1 of 4",
    title: "Ancestral domain",
    body: (
      <p>
        The Mandaya have a profound and sacred connection to their ancestral domain, viewing the land
        not as a commodity but as a living inheritance. Their survival is deeply rooted in the
        forests and rivers of the Pacific Cordillera, which serve as their primary source of food,
        medicine, and spiritual identity. This relationship is governed by the belief that the land
        is guarded by spirits, requiring ritual permission for its use.
      </p>
    ),
    objectPosition: "center 22%",
  },
  {
    src: "/assets/q-59f93d10-2156-4858-9aa7-fa05ab1f97a4.png",
    alt: "Mandaya elder weaving Dagmay cloth",
    cap: "Dagmay weaving — dream-woven identity",
    kicker: "Slide 2 of 4",
    title: "Language and Dagmay",
    figClass: "social-slide-fig--weaving",
    body: (
      <p>
        The social identity of the Mandaya is defined by their unique language and the mastery of
        Dagmay weaving. Their identity is a &ldquo;dream-woven&rdquo; culture, where the intricate
        patterns of their abaca cloth are believed to be gifts from the spirit Tagamaling. This
        spiritual connection, combined with their history as the &ldquo;people of the
        upstream,&rdquo; distinguishes them from other Lumad groups in Mindanao.
      </p>
    ),
    objectPosition: "center 35%",
  },
  {
    src: "/assets/history-mount-apo-rainforest.jpg",
    alt: "Highland forest in Mindanao",
    cap: "Environmental stewardship and governance",
    kicker: "Slide 3 of 4",
    title: "Stewardship and governance",
    body: (
      <>
        <p>
          Environmental stewardship is central to the Mandaya way of life. They practice traditional
          ethno farming, such as the sustainable cultivation of ginger and abaca, which preserves the
          soil&apos;s fertility. Their indigenous knowledge systems include strict community laws
          against over-harvesting forest resources, ensuring that the mountains of Davao Oriental
          remain biodiverse for future generations.
        </p>
        <p>
          The community is organized through a blend of traditional and modern governance.
          Historically, it was led by the Bagani (warrior-chiefs) for protection and the Balyan
          (spirit mediums) for healing and spiritual guidance. Today, this has evolved into Tribal
          Councils that work in tandem with local government officials, ensuring that indigenous laws
          are respected within the modern Philippine legal framework.
        </p>
      </>
    ),
    objectPosition: "center center",
  },
  {
    src: "/assets/u-ac3e96e9-1eb0-4374-be10-4cc514082cca.png",
    alt: "Mandaya musicians with gongs near water",
    cap: "Pressures on social life today",
    kicker: "Slide 4 of 4",
    title: "Present-day challenges",
    figClass: "social-slide-fig--music",
    body: (
      <>
        <p>In the modern era, the Mandaya face several critical challenges:</p>
        <ul className="social-slide-list">
          <li>
            <strong>Land Encroachment:</strong> The intrusion of large-scale mining and logging
            operations into their ancestral domains threatens their environment and food security.
          </li>
          <li>
            <strong>Cultural Erosion:</strong> As the younger generation migrates to urban centers
            for education and work, there is an increasing risk of losing the Mandaya language and
            traditional weaving techniques.
          </li>
          <li>
            <strong>Land Titles:</strong> The community continues to struggle for the full legal
            recognition of their Ancestral Domain Titles (CADT) and protection from displacement.
          </li>
        </ul>
      </>
    ),
    objectPosition: "center top",
  },
];

export default function SocialCarousel() {
  const [idx, setIdx] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const touchRef = useRef({ x: 0, y: 0 });

  usePreloadImages(SLIDES.map((s) => s.src));

  const measure = useCallback(() => {
    const w = viewportRef.current?.clientWidth ?? 0;
    if (w > 0) setSlideWidth(w);
  }, []);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, [measure]);

  const go = useCallback((next: number) => {
    setIdx(((next % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT);
  }, []);

  const offset = slideWidth > 0 ? -idx * slideWidth : 0;

  return (
    <div
      className="social-showcase"
      id="socialSlider"
      aria-roledescription="carousel"
      aria-label="Social slides"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          go(idx - 1);
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          go(idx + 1);
        }
      }}
    >
      <div className="social-viewport" ref={viewportRef}>
        <div
          className="social-track"
          id="slidesTrack"
          style={{
            transform: slideWidth > 0 ? `translateX(${offset}px)` : undefined,
            visibility: slideWidth > 0 ? "visible" : "hidden",
          }}
        >
          {SLIDES.map((slide, i) => (
            <article
              key={slide.src}
              className="social-slide"
              role="group"
              aria-label={`Slide ${i + 1} of ${SLIDE_COUNT}`}
              aria-hidden={idx !== i}
            >
              <figure className={`social-slide-fig${slide.figClass ? ` ${slide.figClass}` : ""}`}>
                <SlideFigureImage
                  src={slide.src}
                  alt={slide.alt}
                  objectPosition={slide.objectPosition}
                  priority={i === 0}
                />
                <figcaption className="social-slide-cap">{slide.cap}</figcaption>
              </figure>
              <div className="social-slide-content">
                <p className="social-slide-kicker">{slide.kicker}</p>
                <h3>{slide.title}</h3>
                {slide.body}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="social-pp-progress" aria-hidden="true">
        <div
          className="social-pp-progress-fill"
          style={{ ["--fill" as string]: `${Math.round(((idx + 1) / SLIDE_COUNT) * 100)}%` }}
        />
      </div>

      <div className="social-toolbar">
        <div className="social-toolbar-nav">
          <button
            className="social-btn"
            type="button"
            aria-label="Previous slide"
            disabled={idx === 0}
            onClick={() => go(idx - 1)}
          >
            Previous
          </button>
          <span className="social-counter" aria-live="polite">
            {idx + 1} / {SLIDE_COUNT}
          </span>
          <button
            className="social-btn social-btn--primary"
            type="button"
            aria-label="Next slide"
            disabled={idx === SLIDE_COUNT - 1}
            onClick={() => go(idx + 1)}
          >
            Next
          </button>
        </div>
        <div className="social-dots" aria-label="Slide indicators">
          {Array.from({ length: SLIDE_COUNT }, (_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              className="social-dot"
              aria-label={`Go to slide ${dotIdx + 1}`}
              aria-current={dotIdx === idx ? "true" : undefined}
              onClick={() => go(dotIdx)}
            />
          ))}
        </div>
      </div>

      <div
        className="social-swipe-hint"
        aria-hidden="true"
        onTouchStart={(e) => {
          touchRef.current = {
            x: e.changedTouches[0]?.clientX ?? 0,
            y: e.changedTouches[0]?.clientY ?? 0,
          };
        }}
        onTouchEnd={(e) => {
          const dx = (e.changedTouches[0]?.clientX ?? 0) - touchRef.current.x;
          const dy = (e.changedTouches[0]?.clientY ?? 0) - touchRef.current.y;
          if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
          if (dx < 0) go(idx + 1);
          else go(idx - 1);
        }}
      />
    </div>
  );
}

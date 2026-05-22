"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDE_COUNT = 4;

export default function SocialCarousel() {
  const [idx, setIdx] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const touchRef = useRef({ x: 0, y: 0 });

  const go = useCallback((next: number) => {
    setIdx(((next % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT);
  }, []);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = (): void => setSlideWidth(el.clientWidth);
    measure();
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  const offset = slideWidth ? -idx * slideWidth : 0;

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
          style={{ transform: `translateX(${offset}px)` }}
        >
          <article
            className="social-slide"
            role="group"
            aria-label="Slide 1 of 4"
            aria-hidden={idx !== 0}
          >
            <figure className="social-slide-fig">
              <Image
                src="/assets/t-21ec38b0-5a88-44cf-a36b-d0af59450846.png"
                alt="Mandaya community members gathered in front of thatched homes"
                width={800}
                height={600}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <figcaption className="social-slide-cap">
                Community portrait — ancestral domain as living inheritance
              </figcaption>
            </figure>
            <div className="social-slide-content">
              <p className="social-slide-kicker">Slide 1 of 4</p>
              <h3>Ancestral domain</h3>
              <p>
                The Mandaya have a profound and sacred connection to their ancestral domain, viewing
                the land not as a commodity but as a living inheritance. Their survival is deeply rooted
                in the forests and rivers of the Pacific Cordillera, which serve as their primary source
                of food, medicine, and spiritual identity. This relationship is governed by the belief
                that the land is guarded by spirits, requiring ritual permission for its use.
              </p>
            </div>
          </article>

          <article
            className="social-slide"
            role="group"
            aria-label="Slide 2 of 4"
            aria-hidden={idx !== 1}
          >
            <figure className="social-slide-fig social-slide-fig--weaving">
              <Image
                src="/assets/q-59f93d10-2156-4858-9aa7-fa05ab1f97a4.png"
                alt="Mandaya elder weaving Dagmay cloth"
                width={800}
                height={600}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 35%",
                }}
              />
              <figcaption className="social-slide-cap">Dagmay weaving — dream-woven identity</figcaption>
            </figure>
            <div className="social-slide-content">
              <p className="social-slide-kicker">Slide 2 of 4</p>
              <h3>Language and Dagmay</h3>
              <p>
                The social identity of the Mandaya is defined by their unique language and the mastery
                of Dagmay weaving. Their identity is a &ldquo;dream-woven&rdquo; culture, where the
                intricate patterns of their abaca cloth are believed to be gifts from the spirit
                Tagamaling. This spiritual connection, combined with their history as the &ldquo;people
                of the upstream,&rdquo; distinguishes them from other Lumad groups in Mindanao.
              </p>
            </div>
          </article>

          <article
            className="social-slide"
            role="group"
            aria-label="Slide 3 of 4"
            aria-hidden={idx !== 2}
          >
            <figure className="social-slide-fig">
              <Image
                src="/assets/history-mount-apo-rainforest.jpg"
                alt="Highland forest in Mindanao"
                width={800}
                height={600}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <figcaption className="social-slide-cap">
                Environmental stewardship and governance
              </figcaption>
            </figure>
            <div className="social-slide-content">
              <p className="social-slide-kicker">Slide 3 of 4</p>
              <h3>Stewardship and governance</h3>
              <p>
                Environmental stewardship is central to the Mandaya way of life. They practice
                traditional ethno farming, such as the sustainable cultivation of ginger and abaca,
                which preserves the soil&apos;s fertility. Their indigenous knowledge systems include
                strict community laws against over-harvesting forest resources, ensuring that the
                mountains of Davao Oriental remain biodiverse for future generations.
              </p>
              <p>
                The community is organized through a blend of traditional and modern governance.
                Historically, it was led by the Bagani (warrior-chiefs) for protection and the Balyan
                (spirit mediums) for healing and spiritual guidance. Today, this has evolved into Tribal
                Councils that work in tandem with local government officials, ensuring that indigenous
                laws are respected within the modern Philippine legal framework.
              </p>
            </div>
          </article>

          <article
            className="social-slide"
            role="group"
            aria-label="Slide 4 of 4"
            aria-hidden={idx !== 3}
          >
            <figure className="social-slide-fig social-slide-fig--music">
              <Image
                src="/assets/u-ac3e96e9-1eb0-4374-be10-4cc514082cca.png"
                alt="Mandaya musicians with gongs near water"
                width={800}
                height={600}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                }}
              />
              <figcaption className="social-slide-cap">Pressures on social life today</figcaption>
            </figure>
            <div className="social-slide-content">
              <p className="social-slide-kicker">Slide 4 of 4</p>
              <h3>Present-day challenges</h3>
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
            </div>
          </article>
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
          {Array.from({ length: SLIDE_COUNT }, (_, i) => (
            <button
              key={i}
              type="button"
              className="social-dot"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === idx ? "true" : undefined}
              onClick={() => go(i)}
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

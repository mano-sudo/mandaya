"use client";

import { useEffect } from "react";
import { CultureSpreadPool } from "./culture-spread-pool";

export default function CultureBook() {
  useEffect(() => {
    const culturePool = document.getElementById("cultureSpreadPool");
    const cultureFlipLeft = document.getElementById("cultureFlipLeft");
    const cultureFlipRight = document.getElementById("cultureFlipRight");
    const cultureLeftFront = document.getElementById("cultureLeftFront");
    const cultureLeftBack = document.getElementById("cultureLeftBack");
    const cultureRightFront = document.getElementById("cultureRightFront");
    const cultureRightBack = document.getElementById("cultureRightBack");
    const cultureUnderLeft = document.getElementById("cultureUnderLeft");
    const cultureUnderRight = document.getElementById("cultureUnderRight");
    const cultureMobileLeft = document.getElementById("cultureMobileLeft");
    const cultureMobileRight = document.getElementById("cultureMobileRight");
    const cultureMobileCard = document.getElementById("cultureMobileCard");
    const cultureDots = document.getElementById("cultureDots");
    const cultureProgressBar = document.getElementById("cultureProgressBar");
    const culturePrev = document.getElementById("culturePrev") as HTMLButtonElement | null;
    const cultureNext = document.getElementById("cultureNext") as HTMLButtonElement | null;
    const culturePageNum = document.getElementById("culturePageNum");
    const cultureMobileMq = window.matchMedia("(max-width: 900px)");

    interface Spread {
      left: string;
      right: string;
      leftClass: string;
      rightClass: string;
    }

    let cultureSpreads: Spread[] = [];
    let cultureIdx = 0;
    let cultureBusy = false;
    let cultureTouchX = 0;

    function cultureIsMobile(): boolean {
      return cultureMobileMq.matches;
    }

    function resetFlipEl(el: HTMLElement | null): void {
      if (!el) return;
      el.classList.remove("is-flip-next", "is-flip-prev");
      el.style.transition = "none";
      void el.offsetHeight;
      el.style.transition = "";
    }

    function culturePaint(i: number): void {
      if (!cultureSpreads.length) return;
      const spread = cultureSpreads[i];
      if (cultureLeftFront && cultureRightFront) {
        cultureLeftFront.innerHTML = spread.left;
        cultureRightFront.innerHTML = spread.right;
        if (cultureRightBack)
          cultureRightBack.innerHTML = cultureSpreads[i + 1] ? cultureSpreads[i + 1].left : "";
        if (cultureLeftBack)
          cultureLeftBack.innerHTML = i > 0 ? cultureSpreads[i - 1].right : "";
        if (cultureUnderRight)
          cultureUnderRight.innerHTML = cultureSpreads[i + 1] ? cultureSpreads[i + 1].right : "";
        if (cultureUnderLeft)
          cultureUnderLeft.innerHTML = i > 0 ? cultureSpreads[i - 1].left : "";
      }
      if (cultureMobileLeft && cultureMobileRight) {
        cultureMobileLeft.className = spread.leftClass;
        cultureMobileLeft.innerHTML = spread.left;
        cultureMobileRight.className = spread.rightClass;
        cultureMobileRight.innerHTML = spread.right;
      }
    }

    function cultureSetProgress(): void {
      if (!cultureProgressBar || cultureSpreads.length < 2) {
        cultureProgressBar?.style.setProperty(
          "--fill",
          cultureSpreads.length ? "100%" : "0%"
        );
        return;
      }
      const pct = (cultureIdx / (cultureSpreads.length - 1)) * 100;
      cultureProgressBar.style.setProperty("--fill", `${pct}%`);
    }

    function cultureBuildDots(): void {
      if (!cultureDots) return;
      cultureDots.innerHTML = "";
      cultureSpreads.forEach((_, dotIdx) => {
        const dot = document.createElement("button");
        dot.type = "button";
        dot.className = "culture-dot";
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-label", `Spread ${dotIdx + 1}`);
        if (dotIdx === cultureIdx) dot.setAttribute("aria-current", "true");
        dot.addEventListener("click", () => cultureGoTo(dotIdx));
        cultureDots.appendChild(dot);
      });
    }

    function cultureUpdateUI(): void {
      if (culturePageNum) culturePageNum.textContent = String(cultureIdx + 1);
      if (culturePrev) culturePrev.disabled = cultureIdx <= 0 || cultureBusy;
      if (cultureNext)
        cultureNext.disabled = cultureIdx >= cultureSpreads.length - 1 || cultureBusy;
      cultureDots?.querySelectorAll(".culture-dot").forEach((dot, dotIdx) => {
        if (dotIdx === cultureIdx) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
      cultureSetProgress();
    }

    function cultureAnimateMobile(done: () => void): void {
      if (!cultureMobileCard || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        done();
        return;
      }
      cultureMobileCard.classList.add("is-changing");
      window.setTimeout(() => {
        done();
        requestAnimationFrame(() => cultureMobileCard?.classList.remove("is-changing"));
      }, 180);
    }

    function cultureGoTo(i: number): void {
      if (cultureBusy || i < 0 || i >= cultureSpreads.length || i === cultureIdx) return;
      if (cultureIsMobile()) {
        cultureBusy = true;
        cultureUpdateUI();
        cultureAnimateMobile(() => {
          cultureIdx = i;
          culturePaint(cultureIdx);
          cultureBusy = false;
          cultureUpdateUI();
        });
        return;
      }
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        cultureIdx = i;
        culturePaint(cultureIdx);
        cultureUpdateUI();
        return;
      }
      cultureIdx = i;
      culturePaint(cultureIdx);
      cultureUpdateUI();
    }

    function cultureInit(): void {
      if (!culturePool) return;
      cultureSpreads = Array.from(
        culturePool.querySelectorAll("article.culture-spread-src")
      ).map((art) => {
        const l = art.querySelector(".culture-page--left");
        const r = art.querySelector(".culture-page--right");
        return {
          left: l ? l.innerHTML : "",
          right: r ? r.innerHTML : "",
          leftClass: l
            ? `${l.className} culture-mobile-page`
            : "culture-mobile-page culture-page culture-page--left",
          rightClass: r
            ? `${r.className} culture-mobile-page`
            : "culture-mobile-page culture-page culture-page--right",
        };
      });
      const tot = document.getElementById("culturePageTotal");
      if (tot) tot.textContent = String(cultureSpreads.length);
      cultureIdx = 0;
      cultureBuildDots();
      culturePaint(0);
      cultureUpdateUI();
    }

    function onFlipEnd(which: "next" | "prev"): void {
      if (!cultureBusy) return;
      if (which === "next") {
        cultureIdx += 1;
        resetFlipEl(cultureFlipRight);
        culturePaint(cultureIdx);
      } else {
        cultureIdx -= 1;
        resetFlipEl(cultureFlipLeft);
        culturePaint(cultureIdx);
      }
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          cultureBusy = false;
          cultureUpdateUI();
        });
      });
    }

    const onFlipRightEnd = (e: TransitionEvent): void => {
      if (!cultureBusy || !cultureFlipRight?.classList.contains("is-flip-next")) return;
      if (e.target !== cultureFlipRight) return;
      onFlipEnd("next");
    };
    const onFlipLeftEnd = (e: TransitionEvent): void => {
      if (!cultureBusy || !cultureFlipLeft?.classList.contains("is-flip-prev")) return;
      if (e.target !== cultureFlipLeft) return;
      onFlipEnd("prev");
    };

    cultureFlipRight?.addEventListener("transitionend", onFlipRightEnd);
    cultureFlipLeft?.addEventListener("transitionend", onFlipLeftEnd);

    cultureInit();

    function cultureStepNext(): void {
      if (cultureBusy || cultureIdx >= cultureSpreads.length - 1) return;
      if (cultureIsMobile()) {
        cultureBusy = true;
        cultureUpdateUI();
        cultureAnimateMobile(() => {
          cultureIdx += 1;
          culturePaint(cultureIdx);
          cultureBusy = false;
          cultureUpdateUI();
        });
        return;
      }
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        cultureIdx += 1;
        culturePaint(cultureIdx);
        cultureUpdateUI();
        return;
      }
      cultureBusy = true;
      cultureUpdateUI();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => cultureFlipRight?.classList.add("is-flip-next"));
      });
    }

    function cultureStepPrev(): void {
      if (cultureBusy || cultureIdx <= 0) return;
      if (cultureIsMobile()) {
        cultureBusy = true;
        cultureUpdateUI();
        cultureAnimateMobile(() => {
          cultureIdx -= 1;
          culturePaint(cultureIdx);
          cultureBusy = false;
          cultureUpdateUI();
        });
        return;
      }
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        cultureIdx -= 1;
        culturePaint(cultureIdx);
        cultureUpdateUI();
        return;
      }
      cultureBusy = true;
      cultureUpdateUI();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => cultureFlipLeft?.classList.add("is-flip-prev"));
      });
    }

    const onPrevClick = (): void => cultureStepPrev();
    const onNextClick = (): void => cultureStepNext();

    cultureNext?.addEventListener("click", onNextClick);
    culturePrev?.addEventListener("click", onPrevClick);

    const onTouchStart = (e: TouchEvent): void => {
      cultureTouchX = e.changedTouches[0]?.screenX ?? 0;
    };
    const onTouchEnd = (e: TouchEvent): void => {
      const dx = (e.changedTouches[0]?.screenX ?? 0) - cultureTouchX;
      if (Math.abs(dx) < 48) return;
      if (dx < 0) cultureStepNext();
      else cultureStepPrev();
    };

    cultureMobileCard?.addEventListener("touchstart", onTouchStart, { passive: true });
    cultureMobileCard?.addEventListener("touchend", onTouchEnd, { passive: true });

    const onMqChange = (): void => {
      culturePaint(cultureIdx);
      cultureUpdateUI();
    };
    cultureMobileMq.addEventListener("change", onMqChange);

    const onDocKey = (e: KeyboardEvent): void => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      const sec = document.getElementById("culture");
      if (!sec) return;
      const r = sec.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      if (cultureBusy) return;
      if (e.key === "ArrowLeft" && culturePrev && !culturePrev.disabled) cultureStepPrev();
      if (e.key === "ArrowRight" && cultureNext && !cultureNext.disabled) cultureStepNext();
    };
    document.addEventListener("keydown", onDocKey);

    return () => {
      cultureFlipRight?.removeEventListener("transitionend", onFlipRightEnd);
      cultureFlipLeft?.removeEventListener("transitionend", onFlipLeftEnd);
      cultureNext?.removeEventListener("click", onNextClick);
      culturePrev?.removeEventListener("click", onPrevClick);
      cultureMobileCard?.removeEventListener("touchstart", onTouchStart);
      cultureMobileCard?.removeEventListener("touchend", onTouchEnd);
      cultureMobileMq.removeEventListener("change", onMqChange);
      document.removeEventListener("keydown", onDocKey);
    };
  }, []);

  return (
    <div className="culture-book-shell">
      <div className="culture-stage-wrap">
        <div id="cultureBookFrame" className="culture-book-frame">
          <div className="culture-viewport" id="cultureViewport">
            <div className="culture-spread-stage" id="cultureSpreadStage">
              <div className="culture-col culture-col--left">
                <div className="culture-under culture-page culture-page--left" id="cultureUnderLeft" />
                <div className="culture-flip-scene culture-flip-scene--left">
                  <div className="culture-flip-inner" id="cultureFlipLeft">
                    <div className="culture-flip-face culture-page culture-page--left" id="cultureLeftFront" />
                    <div
                      className="culture-flip-face culture-flip-face--back culture-page culture-page--right"
                      id="cultureLeftBack"
                    />
                  </div>
                </div>
              </div>
              <div className="culture-col culture-col--right">
                <div className="culture-under culture-page culture-page--right" id="cultureUnderRight" />
                <div className="culture-flip-scene culture-flip-scene--right">
                  <div className="culture-flip-inner" id="cultureFlipRight">
                    <div className="culture-flip-face culture-page culture-page--right" id="cultureRightFront" />
                    <div
                      className="culture-flip-face culture-flip-face--back culture-page culture-page--right"
                      id="cultureRightBack"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="culture-mobile" id="cultureMobileView">
            <div className="culture-mobile-card" id="cultureMobileCard">
              <div className="culture-mobile-stack">
                <div className="culture-mobile-page culture-page--left" id="cultureMobileLeft" />
                <div className="culture-mobile-divider" aria-hidden="true" />
                <div className="culture-mobile-page culture-page--right" id="cultureMobileRight" />
              </div>
            </div>
          </div>
          <CultureSpreadPool />
        </div>
      </div>
      <div className="culture-progress" aria-hidden={false}>
        <div className="culture-progress-fill" id="cultureProgressBar" />
      </div>
      <div className="culture-toolbar">
        <div className="culture-dots" id="cultureDots" role="tablist" aria-label="Culture spreads" />
        <div className="culture-toolbar-nav">
          <button type="button" id="culturePrev" className="culture-btn" aria-label="Previous spread">
            Previous
          </button>
          <span className="culture-counter" aria-live="polite">
            <span id="culturePageNum">1</span> / <span id="culturePageTotal">13</span>
          </span>
          <button type="button" id="cultureNext" className="culture-btn" aria-label="Next spread">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Ambient module declarations so TypeScript resolves imports when the IDE
 * workspace root is the parent folder (sabina) instead of portfolio-v3.
 */

declare module "@studio-freight/lenis" {
  export interface LenisOptions {
    duration?: number;
    easing?: (t: number) => number;
    smoothWheel?: boolean;
    wheelMultiplier?: number;
    touchMultiplier?: number;
    infinite?: boolean;
    lerp?: number;
    orientation?: "vertical" | "horizontal";
  }

  export default class Lenis {
    constructor(options?: LenisOptions);
    destroy(): void;
    on(event: string, callback: (...args: unknown[]) => void): void;
    off(event: string, callback: (...args: unknown[]) => void): void;
    raf(time: number): void;
    resize(): void;
    scrollTo(
      target: number | string | Element,
      options?: { immediate?: boolean; offset?: number }
    ): void;
  }
}

declare module "gsap" {
  export interface ScrollTriggerInstance {
    refresh(): void;
    kill(): void;
  }

  export interface ScrollTriggerStatic {
    update(): void;
    refresh(): void;
    create(vars: Record<string, unknown>): ScrollTriggerInstance;
  }

  export const ScrollTrigger: ScrollTriggerStatic;

  export interface GSAPStatic {
    registerPlugin(...plugins: unknown[]): void;
    context(fn: () => void, scope?: Element | object): { revert(): void };
    fromTo(
      target: object | null,
      fromVars: Record<string, unknown>,
      toVars: Record<string, unknown>
    ): unknown;
    set(target: object | null, vars: Record<string, unknown>): void;
  }

  export const gsap: GSAPStatic;
  export default gsap;
}

declare module "gsap/ScrollTrigger" {
  import type { ScrollTriggerStatic } from "gsap";
  export const ScrollTrigger: ScrollTriggerStatic;
  export default ScrollTrigger;
}

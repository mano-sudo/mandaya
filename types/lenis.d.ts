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

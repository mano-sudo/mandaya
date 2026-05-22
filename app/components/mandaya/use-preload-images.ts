"use client";

import { useEffect } from "react";

export function usePreloadImages(urls: readonly string[]): void {
  useEffect(() => {
    urls.forEach((url) => {
      const img = new window.Image();
      img.src = url;
    });
  }, [urls]);
}

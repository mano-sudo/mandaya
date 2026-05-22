"use client";

import Image from "next/image";

interface SlideFigureImageProps {
  src: string;
  alt: string;
  objectPosition?: string;
  priority?: boolean;
}

export default function SlideFigureImage({
  src,
  alt,
  objectPosition = "center center",
  priority = false,
}: SlideFigureImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 560px"
      priority={priority}
      loading={priority ? undefined : "eager"}
      decoding="async"
      className="slide-figure-img"
      style={{ objectPosition }}
    />
  );
}

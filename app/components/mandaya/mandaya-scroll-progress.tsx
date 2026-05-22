"use client";

import { motion, useScroll } from "framer-motion";

export default function MandayaScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="mandaya-scroll-progress"
      aria-hidden="true"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0 50%",
        willChange: "transform",
      }}
    />
  );
}

// ParallaxHero.jsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxHero({
  title = "Build Something Amazing",
  subtitle = "Modern UI with Parallax & Motion Effects",
  image = "projects/project1.png",
  height = "85vh",
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ height }}
    >
      {/* Background Image */}
      <motion.img
        src={image}
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center text-white px-6"
      >
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl opacity-90">{subtitle}</p>
      </motion.div>
    </section>
  );
}

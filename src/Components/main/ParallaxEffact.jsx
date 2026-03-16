import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const ParallaxEffect = ({ type,typeText }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yPlanet = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const xStars = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <section
      ref={ref}
      className="w-full h-screen relative flex items-center justify-center overflow-hidden"
    >
      
      {/* TEXT */}
      <motion.h1
        style={{ y: yText }}
        className="websiteText text-5xl md:text-7xl font-bold z-0 text-center"
      >
        {typeText}
      </motion.h1>

      {/* ⭐ STARS (FULL SCREEN BACKGROUND) */}
      <motion.div
        className="absolute inset-0 z-10 bg-cover bg-center bg-no-repeat"
        style={{
          x: xStars,
          backgroundImage: `url("/portfolio/parallax/stars.png")`,
        }}
      />

      {/* 🪐 PLANETS (CENTER) */}
      <motion.div
        className="absolute inset-0 z-20 bg-contain bg-center bg-no-repeat"
        style={{
          y: yPlanet,
          backgroundImage: `url(${
            type === "service"
              ? "/portfolio/parallax/planets.png"
              : "/portfolio/parallax/sun.png"
          })`,
        }}
      />

      {/* ⛰ MOUNTAINS (BOTTOM) */}
      <div
        className="absolute inset-0 z-30 bg-contain md:bg-cover bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `url("/portfolio/parallax/mountains.png")`,
        }}
      />

    </section>
  );
};

export default ParallaxEffect;
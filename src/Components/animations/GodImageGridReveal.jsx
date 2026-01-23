// GodImageGridReveal.jsx
"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";


const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 1.0, ease: "easeOut" },
  },
};

export default function GodImageGridReveal({ images = [] }) {
    console.log("Images received:", images);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-150px" }}
      className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {images.map((img, i) => (
        <GodCard key={i} img={img} />
      ))}
    </motion.div>
  );
}

function GodCard({ img }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const [hover, setHover] = useState(false);
  // pos are small numbers centered around 0
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // Throttle mouse move using requestAnimationFrame
  const rafRef = useRef(null);
  const pending = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!ref.current) return;
    pending.current = e;
    if (rafRef.current === null) {
      rafRef.current = requestAnimationFrame(() => {
        const ev = pending.current;
        if (!ev) {
          rafRef.current = null;
          return;
        }
        const r = ref.current.getBoundingClientRect();
        const x = ((ev.clientX - r.left) / r.width - 0.5) * 30; // tilt magnitude
        const y = ((ev.clientY - r.top) / r.height - 0.5) * 30;
        setPos({ x, y });
        pending.current = null;
        rafRef.current = null;
      });
    }
  }, []);

  useEffect(() => {
    // Idle floating animation
    controls.start({
      translateY: [0, -8, 0],
      transition: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
    });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [controls]);

  // safe computed spotlight position for CSS gradient
  const spotlight = (() => {
    // keep values within 0..100% to avoid invalid CSS
    const cx = Math.max(0, Math.min(100, 50 + pos.x));
    const cy = Math.max(0, Math.min(100, 50 + pos.y));
    return `${cx}% ${cy}%`;
  })();

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/30 backdrop-blur-sm"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setHover(false);
        setPos({ x: 0, y: 0 });
      }}
      onMouseEnter={() => setHover(true)}
      animate={{
        rotateX: hover ? -pos.y / 6 : 0,
        rotateY: hover ? pos.x / 6 : 0,
        scale: hover ? 1.045 : 1,
      }}
      transition={{ type: "spring", stiffness: 130, damping: 14 }}
      style={{ transformStyle: "preserve-3d", perspective: 1200 }}
    >
      {/* BACK IMAGE LAYER (parallax) */}
      <motion.img
        src={img.src}
        alt={img.title || "image"}
        className="absolute inset-0 w-full h-full object-cover"
        animate={{
          x: hover ? pos.x / 6 : 0,
          y: hover ? pos.y / 6 : 0,
          scale: hover ? 1.18 : 1.02,
          filter: hover ? "blur(2px)" : "blur(0px)",
        }}
        transition={{ type: "spring", stiffness: 60, damping: 12 }}
        style={{ willChange: "transform, filter" }}
      />

      {/* MID floating glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${spotlight}, rgba(255,255,255,0.12), transparent 40%)`,
          transition: "background 120ms linear",
        }}
      />

      {/* TOP overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none" />

      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        animate={{
          boxShadow: hover
            ? "0 30px 60px rgba(0,0,0,0.45), 0 0 40px rgba(255,255,255,0.06)"
            : "0 18px 40px rgba(0,0,0,0.32)",
        }}
        transition={{ type: "spring", stiffness: 60, damping: 14 }}
      />

      {/* Caption */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={hover ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
        transition={{ duration: 0.38 }}
        className="absolute bottom-6 left-6 z-30 text-white"
      >
        <h3 className="text-lg font-semibold drop-shadow-md">{img.title}</h3>
        <p className="text-sm opacity-90">{img.desc}</p>
      </motion.div>

      {/* invisible overlay to ensure rounded clipping on some browsers */}
      <div className="absolute inset-0 rounded-3xl" />
    </motion.div>
  );
}

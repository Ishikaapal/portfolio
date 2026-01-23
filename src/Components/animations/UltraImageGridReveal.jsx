"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.10,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function UltraImageGridReveal({
  images = [], // expects [{src, title, desc}]
  columns = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  gap = "gap-8",
}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-150px" }}
      className={`grid ${columns} ${gap}`}
    >
      {images.map((img, i) => (
        <UltraCard key={i} img={img} />
      ))}
    </motion.div>
  );
}

function UltraCard({ img }) {
  const ref = useRef();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    if (!ref.current) return;

    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 20; // tilt
    const y = ((e.clientY - top) / height - 0.5) * 20;

    setPos({ x, y });
  };

  return (
    <motion.div
      ref={ref}
      variants={item}
      onMouseMove={handleMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      style={{
        transform: `rotateX(${ -pos.y }deg) rotateY(${ pos.x }deg)`,
      }}
      className="relative overflow-hidden rounded-2xl bg-zinc-800 shadow-xl group"
    >
      {/* Image */}
      <motion.img
        src={img.src}
        alt={img.title}
        className="w-full h-full object-cover rounded-2xl"
        animate={{
          x: pos.x / 3,
          y: pos.y / 3,
          scale: pos.x !== 0 || pos.y !== 0 ? 1.12 : 1,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-700" />

      {/* Text */}
      <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-700">
        <h3 className="text-lg text-white font-semibold">{img.title}</h3>
        <p className="text-sm text-white/80">{img.desc}</p>
      </div>
    </motion.div>
  );
}

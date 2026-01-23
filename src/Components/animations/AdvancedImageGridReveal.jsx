// AdvancedImageGridReveal.jsx
"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)", scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { ease: "easeOut", duration: 1 },
  },
};

export default function AdvancedImageGridReveal({
  images = [],
  columns = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  gap = "gap-8",
}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`grid ${columns} ${gap}`}
    >
      {images.map((img, i) => (
        <TiltCard key={i} img={img} />
      ))}
    </motion.div>
  );
}

function TiltCard({ img }) {
  const ref = useRef(null);

  return (
    <motion.div
      variants={item}
      ref={ref}
      className="relative group rounded-2xl overflow-hidden bg-zinc-900/20
                 backdrop-blur-xl shadow-lg shadow-black/20"
      whileHover={{
        scale: 1.03,
        rotateX: 6,
        rotateY: -6,
        transition: { type: "spring", stiffness: 150, damping: 15 },
      }}
    >
      {/* Image */}
      <motion.img
        src={img.src}
        alt=""
        className="w-full h-full object-cover rounded-2xl 
                   group-hover:scale-110 transition-all duration-[1200ms]"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

      {/* Text Overlay */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute bottom-4 left-4 text-white"
      >
        <h3 className="text-lg font-semibold">{img.title}</h3>
        <p className="text-sm opacity-80">{img.desc}</p>
      </motion.div>
    </motion.div>
  );
}

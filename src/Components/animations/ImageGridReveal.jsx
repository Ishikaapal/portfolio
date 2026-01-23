// ImageGridReveal.jsx
"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: "easeOut",
      duration: 0.8,
    },
  },
};

export default function ImageGridReveal({
  images = [],
  columns = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  gap = "gap-6",
}) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`grid ${columns} ${gap}`}
      
    >
      {images.map((src, index) => (
        <motion.div
          key={index}
          variants={item}
          whileHover={{ scale: 1.02, y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="overflow-hidden rounded-xl group"
        >
          <motion.img
            src={src}
            alt=""
            className="w-full h-full object-cover rounded-xl
                       group-hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

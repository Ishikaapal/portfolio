import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

export default function Advanced3DCard({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY }}
      className="w-[320px] h-[380px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden p-6 transform-gpu"
    >
      {children}
    </motion.div>
  );
}

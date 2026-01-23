import { motion, useMotionValue } from "framer-motion";

export default function MagneticButton({ children, className = "" }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX * 0.2);
    y.set(offsetY * 0.2);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`px-6 py-3 rounded-full bg-black text-white shadow-xl ${className}`}
    >
      {children}
    </motion.button>
  );
}

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{ x: pos.x - 150, y: pos.y - 150 }}
      transition={{ type: "spring", stiffness: 70, damping: 20 }}
      className="fixed pointer-events-none w-[300px] h-[300px] bg-purple-500/40 rounded-full blur-3xl"
    />
  );
}

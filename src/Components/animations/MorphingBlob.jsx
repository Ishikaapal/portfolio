import { motion } from "framer-motion";

export default function MorphingBlob() {
  return (
    <motion.div
      className="absolute w-[350px] h-[350px] bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full blur-3xl opacity-50"
      animate={{
        borderRadius: ["40% 60% 55% 45%", "60% 40% 45% 55%", "50% 50% 50% 50%"],
        scale: [1, 1.15, 1],
        x: [-30, 30, -10],
        y: [20, -20, 20],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
}

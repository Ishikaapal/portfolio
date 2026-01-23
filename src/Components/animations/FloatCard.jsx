import { motion } from "framer-motion";

export default function FloatCard({ children }) {
  return (
    <motion.div
      whileHover={{ y: -10, rotate: -2 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className="bg-white/80 dark:bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl"
    >
      {children}
    </motion.div>
  );
}

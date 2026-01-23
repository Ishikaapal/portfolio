import { motion } from "framer-motion";

export default function ScaleIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0, filter: "blur(4px)" }}
      animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

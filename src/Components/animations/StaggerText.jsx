import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function StaggerText({ lines = [], className = "" }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={className}
    >
      {lines.map((line, i) => (
        <motion.h1 key={i} variants={item}>
          {line}
        </motion.h1>
      ))}
    </motion.div>
  );
}

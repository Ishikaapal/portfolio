import { motion } from "framer-motion";

export default function SplitTextReveal({ text }) {
  const words = text.split(" ");

  return (
    <div className="overflow-hidden flex flex-wrap gap-2">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
          className="inline-block text-5xl font-bold"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

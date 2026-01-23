import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  className = ""
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const variants = {
    up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
    rotate: {
      hidden: { opacity: 0, rotate: -8 },
      visible: { opacity: 1, rotate: 0 }
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

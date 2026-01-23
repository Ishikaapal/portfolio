import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "../assets/data";

export const ResponsiveMenu = ({ open, setOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          {/* Background overlay */}
          <motion.div
            className="fixed inset-0 bg-secondary backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* Dropdown menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-20 left-0 w-full z-50 px-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl shadow-xl shadow-accent bg-background text-text-primary py-10 px-6"
            >
              <ul className="flex flex-col items-center gap-8 text-lg font-semibold uppercase tracking-wide">
                {navItems.map((item, key) => (
                  <li key={key}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="hover:text-text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

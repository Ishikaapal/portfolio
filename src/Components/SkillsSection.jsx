import { motion } from "framer-motion";
import { frontend, tools, softskills } from "../assets/data";

export const SkillsSection = () => {
  const rows = [
    [
      { title: "Technologies And Language", data: frontend },
      { title: "Tools & other", data: tools },
    ],
  ];

  // Container variant for rows (stagger children)
  const rowVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  // Card entrance: accepts custom index to stagger with a nicer rhythm
  const cardVariant = {
    hidden: { opacity: 0, y: 30, rotateX: 6 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.12,
        type: "spring",
        stiffness: 90,
        damping: 14,
      },
    }),
  };

  // Skill item entrance (slight slide + fade) and works with whileHover transform
  const itemVariant = {
    hidden: { opacity: 0, x: -8 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 220, damping: 20 },
    },
  };

  return (
    <section id="skill" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        <div className="flex flex-col gap-10">
          {rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              variants={rowVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              {row.map((cat, index) => (
                <motion.div
                  key={cat.title}
                  custom={rowIndex * 2 + index} // custom index for nicer delay across rows
                  variants={cardVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  // subtle 3D hover + scale
                  whileHover={{
                    scale: 1.02,
                    rotateX: 3,
                    transition: { type: "spring", stiffness: 220, damping: 16 },
                  }}
                  className="border-l-8 border-r-8 border-primary p-6 rounded-2xl border-1
                    shadow-lg bg-gradient-to-br from-white/3 to-white/2 backdrop-blur-md
                    hover:shadow-lg transition-all will-change-transform hover:shadow-accent"
                >
                  {/* Card Title */}
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {cat.title}
                  </h3>

                  {/* Skill pills in a row (wrap) */}
                  <motion.div
                    className="flex flex-wrap gap-3"
                    initial="hidden"
                    whileInView="visible"
                    transition={{ staggerChildren: 0.06 }}
                    viewport={{ once: true }}
                  >
                    {cat.data.map((skill) => (
                      <motion.button
                        key={skill.id}
                        type="button"
                        variants={itemVariant}
                        whileHover={{ scale: 1.06, y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 px-3 py-1 rounded-full
                          bg-primary/8 border border-primary/20 text-sm cursor-default
                          shadow-sm hover:shadow-md transition-all select-none"
                        style={{ WebkitTapHighlightColor: "transparent" }}
                        aria-label={skill.name}
                      >
                        <img
                          src={skill.url}
                          alt={skill.name}
                          className="h-5 w-5 object-contain rounded-full"
                        />
                        <span className="text-text-primary">{skill.name}</span>
                      </motion.button>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-8">
          <motion.div
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{
              scale: 1.02,
              rotateX: 3,
              transition: { type: "spring", stiffness: 220, damping: 16 },
            }}
            className="
    border-l-8 border-r-8 border-primary border 
    p-6 rounded-2xl shadow-lg
    bg-gradient-to-br from-white/3 to-white/2 backdrop-blur-md
    hover:shadow-accent transition-all will-change-transform
  "
          >
            {/* Card Title */}
            <h3 className="text-xl font-semibold text-primary mb-4">
              Soft Skills
            </h3>

            {/* Skill Pills */}
            <motion.div
              className="flex flex-wrap gap-3 mb-16"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.06 }}
              viewport={{ once: true }}
            >
              {softskills.map((skill) => (
                <motion.button
                  key={skill.id}
                  type="button"
                  variants={itemVariant}
                  whileHover={{ scale: 1.06, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="
          flex items-center gap-2 px-3 py-1 rounded-full
          bg-primary/8 border border-primary/20 text-sm cursor-default
          shadow-sm hover:shadow-md transition-all select-none
        "
                  style={{ WebkitTapHighlightColor: "transparent" }}
                  aria-label={skill.name}
                >
                  <img
                    src={skill.url}
                    alt={skill.name}
                    className="h-5 w-5 object-contain rounded-full"
                  />
                  <span className="text-text-primary">{skill.name}</span>
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

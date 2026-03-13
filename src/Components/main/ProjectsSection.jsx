import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, GithubIcon } from "lucide-react";
import { projects } from "../../assets/data";

export const ProjectsSection = () => {
  // Animation Variants for the Grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="mainContainer">
      <div className="insideContainer">
        {/* --- Heading Section --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
              Projects
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-accent to-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
        </motion.div>

        {/* --- Projects Grid --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative bg-text-primary/10 border border-text-primary/40 rounded-3xl overflow-hidden backdrop-blur-sm hover:border-accent/30 transition-all duration-500"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent z-10 opacity-60" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Area */}
              <div className="p-8 relative z-20">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider border border-text-primary/20 rounded-full bg-text-primary/5 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h2>

                <p className="text-secondary text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Footer Links */}
                <div className="flex items-center justify-between pt-4 border-t border-text-primary/5">
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-text-primary transition-all transform hover:scale-110"
                    >
                      <GithubIcon size={20} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-text-primary transition-all transform hover:scale-110"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <div className="h-2 w-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Footer Button --- */}
        <div className="text-center mt-8">
          <motion.a
            href="https://github.com/Ishikaapal"
            target="_blank"
            whileHover={{ scale: 1.05  }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-12 py-5 
                        overflow-hidden font-bold text-text-primary transition-all rounded-2xl 
                        border border-primary/80 shadow shadow-accent hover:shadow-md 
                        "
          >
            
            <Github size={22} className="text-cyan-400" />
            <span className="relative tracking-wide">Check My Github</span>
            <ArrowRight
              size={20}
              className="text-cyan-400 group-hover:translate-x-2 transition-transform duration-300"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

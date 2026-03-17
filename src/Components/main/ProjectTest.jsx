import { useRef } from "react";
import { projects } from "../../assets/data";
import {
  motion,
  useSpring,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowRight, ExternalLink, Github, GithubIcon } from "lucide-react";

const ProjectTest = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative pt-24" ref={containerRef}>
      {/* Premium Progress Header */}
      <div className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-text-primary/5">
        <div className="flex justify-center items-center ">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter">
              Featured <span className="websiteText">Projects</span>
            </h1>
          </motion.div>
        </div>

        {/* Progress Bar */}
        <motion.div
          style={{ scaleX }}
          className="h-2 bg-gradient-to-r from-accent via-accent to-primary rounded-full mt-4"
        />
      </div>

      <div className="relative">
        {projects.map((project, index) => (
          <Single project={project} key={project.id} index={index} />
        ))}
      </div>

      {/* --- Footer Button --- */}
      <div className="text-center">
        <motion.a
          href="https://github.com/Ishikaapal"
          target="_blank"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group relative inline-flex items-center gap-3 px-12 py-5 
                              overflow-hidden font-bold text-text-primary transition-all rounded-2xl 
                              border border-primary/80 shadow shadow-accent hover:shadow-md 
                              "
        >
          <Github size={22} className="text-cyan-400" />
          <span className="relative tracking-wide">For More, Check My Github</span>
          <ArrowRight
            size={20}
            className="text-cyan-400 group-hover:translate-x-2 transition-transform duration-300"
          />
        </motion.a>
      </div>
    </div>
  );
};

const Single = ({ project, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Sophisticated Parallax: Image moves slower than text
  const yImage = useTransform(scrollYProgress, [0, 1], ["-120%", "120%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);

  return (
    <section ref={ref} className="rowFlex mainContainer">
      <div className="insideContainer px-4 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Image Container: Alternates side based on index */}
        <motion.div
          style={{ opacity, scale }}
          className={`md:col-span-7 relative group ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <motion.img
              style={{ y: yImage, scale: 1.1 }}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`md:col-span-5 flex flex-col gap-6 ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary leading-tight">
            {project.title}
          </h2>

          <p className="text-lg text-text-secondary leading-relaxed font-light">
            {project.description}
          </p>

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

          {/* Footer Links */}
          <div className="flex items-center justify-between pt-6 border-t border-text-primary/10">
            <div className="flex items-center gap-4">
              {/* GitHub Button */}
              {/* <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-text-primary text-background rounded-lg font-medium text-sm transition-shadow hover:shadow-[0_0_20px_rgba(var(--color-primary),0.3)]"
              >
                <Github size={18} strokeWidth={2.5} />
                <span>Source</span>
              </motion.a> */}

              {/* Live Demo Button */}
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 border border-text-primary/20 hover:border-accent hover:text-accent rounded-lg font-medium text-sm transition-colors group"
              >
                <span>Live Preview</span>
                <ExternalLink
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </motion.a>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-3 bg-text-primary/5 px-3 py-1.5 rounded-full border border-text-primary/5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">
                Project Active
              </span>
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent shadow-[0_0_10px_#06b6d4]"></span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectTest;

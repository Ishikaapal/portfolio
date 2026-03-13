import React from "react";
import { motion } from "framer-motion";
import { Mouse, ArrowRight, Sparkles, Terminal } from "lucide-react";
import issssshhh from "../../assets/images/isssshhh.png";

const HeroSection = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 1, ease: "backOut" },
    },
    floating: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="mainContainer rowFlex">
      {/* --- Advanced Background Elements --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radial Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full" />
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* --- TEXT CONTENT --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left space-y-8 order-2 lg:order-1"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase">
            <Terminal size={14} />
            <span>Available for innovative projects</span>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl md:text-8xl font-black text-text-primary tracking-tighter leading-[0.9]">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-primary">
                Ishika Pal
              </span>
            </h1>
            <p className="text-secondary text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Engineer by degree, <span className="text-text-primary">Developer by passion</span>. 
              I craft scalable, high-performance digital experiences with precision and creativity.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
            <a 
              href="#project" 
              className="group relative flex items-center gap-2 bg-accent text-background px-8 py-4 rounded-full text-lg font-bold hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-text-primary/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
              <span>View My Work</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#contact" 
              className="flex items-center gap-2 border border-text-primary/20 text-text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-white/5 transition-all duration-300"
            >
              Let's Talk
            </a>
          </motion.div>
        </motion.div>

        {/* --- IMAGE / VISUAL --- */}
        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
          
          
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={["visible", "floating"]}
            className="relative z-10 w-64 h-64 md:w-96 md:h-96"
          >
            {/* The "Blob" Border Frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-[morph_8s_ease-in-out_infinite] opacity-20 blur-2xl" />
            
            <div className="relative w-full h-full overflow-hidden rounded-[5px_150px_5px_150px] sm:rounded-[5px_155px_5px_155px] border-2 border-accent/30 group transition-all duration-500 hover:rounded-[150px_5px_150px_5px] shadow-2xl">
              <img
                src={issssshhh}
                alt="Ishika Pal"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Glass Overlay on Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Floating Experience Badge */}
            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 3, repeat: Infinity }}
               className="absolute -bottom-6 -left-6 bg-text-primary/5 backdrop-blur-xl border border-text-primary/10 p-4 rounded-2xl shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/20 rounded-lg text-accent">
                   <Sparkles size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-secondary font-bold">Experience</p>
                  <p className="text-text-primary font-black">6+ Projects</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* --- Scroll Indicator --- */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-secondary font-bold">Scroll</span>
        
        <div className="flex flex-col items-center gap-0">
          {/* Mouse Icon */}
          <Mouse className="h-6 w-6 text-accent animate-pulse" />
          
        </div>
      </motion.div>
      
      {/* Morph Animation for Blob Background */}
      <style>{`
        @keyframes morph {
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
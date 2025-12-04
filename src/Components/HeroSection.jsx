import { motion } from "framer-motion";
import { Mouse } from "lucide-react";

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
  },
};

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden "
    >
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 relative z-10">
        {/* Left: Text */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <motion.div
            className="relative bg-transparent rounded-[5px_150px_5px_150px] sm:rounded-[5px_155px_5px_155px] border-10 border-accent transition-all duration-300 hover:border-accent/60 
              overflow-hidden max-w-sm lg:max-w-md transform translate-y-8 lg:translate-y-0 hover:rounded-[150px_5px_150px_5px] hover:sm:rounded-[155px_5px_155px_5px]"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <img
              src="/portfolio/ishh.png"
              alt="Ishika"
              className="w-[250px] sm:w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Right: Animated Image */}
        <div className="container max-w-2xl text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in">Hi I'm</span>
            <span className="text-accent opacity-0 animate-fade-in-delay-1">
              {" "}
              Ishika
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Pal
            </span>
          </h1>
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
            Engineer by degree, Developer by passion.
          </h3>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#project" className="button-style">
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-20 mt-2">
        <span className="text-sm text-text-primary mb-2">Scroll</span>
        <Mouse className="h-6 w-6 text-accent" />
      </div>
    </section>
  );
};

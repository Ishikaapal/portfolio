import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Quote } from "lucide-react";

const TestimonialCard = ({ data }) => {
  // Mouse tracking for 3D effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative group h-full"
    >
      <div className="relative h-full bg-background/10 backdrop-blur-xl border border-primary/40 p-8 rounded-3xl transition-colors duration-500 group-hover:border-primary/60 overflow-hidden">
        
        {/* Spotlight Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), ${data.color}, transparent 40%)`
          }}
        />

        <Quote className="text-accent w-12 h-12 mb-4" />
        
        <div className="relative z-10 space-y-4">
          <p className="text-secondary leading-relaxed italic text-lg">
            "{data.content}"
          </p>

          <div className="pt-6 border-t border-white/5 flex items-center justify-between">
            <div>
              <h4 className="text-text-primary font-semibold text-lg">{data.name}</h4>
              <p className="text-primary text-sm font-medium">{data.role}</p>
            </div>
            <div className="text-[10px] uppercase tracking-widest text-primary font-bold">
              <a target="_blank" href={data.href}>{data.project}</a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
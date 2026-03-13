import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import TestimonialCard from "./TestimonialCards";

const testimonials = [
  {
    name: "Deeksha",
    role: "Founder, Digitalsbydee",
    content:
      "The Prabodha website truly reflects the essence of yoga and mindfulness. The UI is beautifully designed, elegant, and calming — exactly what we envisioned. Even as a static site, it feels premium and meaningful.",
    project: "prabodhaaks.com",
    color: "rgba(6, 182, 212, 0.15)",
  },
  {
    name: "Deeksha",
    role: "Founder, Digitalsbydee",
    content:
      "Excellent work on the AKS Ind Group website. Your professionalism and attention to detail ensured the design aligned perfectly with our brand vision. Smooth coordination and timely delivery throughout.",
    project: "aksindgroup.com",
    color: "rgba(139, 92, 246, 0.15)",
  },
  {
    name: "Pankaj",
    role: "Co-Founder ,IP Vertex",
    content:
      "Working on these projects allowed for a deep dive into aesthetic minimalism. The goal was to balance white space with functional elegance, ensuring the brand's voice was never lost in the code.",
    project: "Elevare",
    color: "rgba(236, 72, 153, 0.15)",
  },
];

const Testimonial = () => {
  // Container variants for staggered entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
                   What Our{" "}
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">
                     Client Says
                   </span>
                 </h1>
                 <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
               </motion.div>
        {/* --- Testimonials Grid --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} data={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;

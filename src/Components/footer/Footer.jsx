import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Youtube, ArrowUp, Mail, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030712] border-t border-text-primary/10 pt-16 pb-8 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="insideContainer">       
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-secondary text-xs font-medium flex items-center gap-1">
            © {currentYear} — Crafted with 
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart size={12} className="text-red-500 fill-red-500" />
            </motion.span> 
            by IP Vertex
          </div>

          

          {/* Back to Top */}
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent border border-accent/20 px-4 py-2 rounded-full hover:bg-accent/10 transition-all"
          >
            <span>Top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
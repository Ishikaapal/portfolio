import React from "react";
import { motion } from "framer-motion";

const HobbyCard = ({ title, description, icon, className, bg, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1] 
      }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`relative group rounded-3xl p-8 overflow-hidden border border-white/5 flex flex-col justify-between transition-all duration-500 hover:border-white/20 ${bg} ${className}`}
    >
      {/* Background Decor */}
      <div className="absolute -right-4 -top-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
        {React.cloneElement(icon, { size: 120 })}
      </div>

      <div className="relative z-10">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-12 h-12 rounded-2xl bg-gray-900 flex items-center justify-center border border-white/10 mb-4 shadow-2xl"
        >
          {icon}
        </motion.div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      </div>

      <p className="relative z-10 text-gray-400 text-sm leading-relaxed max-w-[200px]">
        {description}
      </p>

      {/* Glass Overlay Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

export default HobbyCard;
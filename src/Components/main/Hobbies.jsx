import React from "react";
import { motion } from "framer-motion";
import { Palette, Map, Video, Sparkles } from "lucide-react";

// Updated content based on your personal interests!
// Replace the image URLs with your actual photos.
const hobbyData = [
  {
    title: "Canvas & Craft",
    description: "Bringing imagination to life through sketching, painting, and hands-on DIY creation. My space to step away from logic and let raw creativity take the wheel.",
    icon: <Palette size={24} className="text-pink-400" />,
    tags: ["Visual Arts", "Sketching", "DIY"],
    span: "md:col-span-2 md:row-span-1",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop", // Placeholder: Art desk
  },
  {
    title: "Global Gastronomy",
    description: "Exploring hidden geographical gems and tasting the world one local street-food stall or cafe at a time.",
    icon: <Map size={24} className="text-orange-400" />,
    tags: ["Wanderlust", "Culinary", "Culture"],
    span: "md:col-span-1 md:row-span-2",
    image: "/portfolio/Hobbies/GlobalGestro.png", // Placeholder: Food/Travel
  },
  {
    title: "Digital Storytelling",
    description: "Directing, shooting, and editing dynamic short-form reels. Turning fleeting moments into engaging visual stories.",
    icon: <Video size={24} className="text-cyan-400" />,
    tags: ["Videography", "Reels", "Content"],
    span: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop", // Placeholder: Camera setup
  },
  {
    title: "Curiosity Engine",
    description: "Always hunting for the next spark of inspiration, from aesthetic UI trends to new creative hobbies.",
    icon: <Sparkles size={24} className="text-yellow-400" />,
    tags: ["Inspiration", "Tech Trends"],
    span: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop", // Placeholder: Abstract/Tech
  },
];

const Hobbies = () => {
  return (
    <div className=" mainContainer">
      <div className="insideContainer">
        
        {/* --- Heading Section --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">The Pixels</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            When I'm not writing code, you'll find me exploring the world, capturing moments, and creating things by hand.
          </p>
        </motion.div>

        {/* --- Bento Grid Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[300px]">
          {hobbyData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`group relative rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 ${item.span}`}
            >
              {/* Background Image with Zoom on Hover */}
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/70 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content Container */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                
                {/* Top Icon (Floats to top right) */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  {item.icon}
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Text */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-medium line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
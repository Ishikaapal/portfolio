import React from "react";
import { motion } from "framer-motion";
import { Palette, Map, Video, Sparkles } from "lucide-react";

const hobbyData = [
  {
    title: "Canvas & Craft",
    description: "Bringing imagination to life through sketching, painting, and hands-on DIY creation.",
    icon: <Palette size={24} className="text-pink-400" />,
    tags: ["Visual Arts", "Sketching"],
    span: "md:col-span-2 md:row-span-1",
    image: "/portfolio/Hobbies/art.jpeg",
  },
  {
    title: "Global Gastronomy",
    description: "Exploring hidden gems and tasting the world one local street-food stall at a time.",
    icon: <Map size={24} className="text-orange-400" />,
    tags: ["Wanderlust", "Culinary"],
    span: "md:col-span-1 md:row-span-2",
    image: "/portfolio/Hobbies/GlobalGestro.png",
  },
  {
    title: "Digital Storytelling",
    description: "Directing, shooting, and editing short-form reels. Turning fleeting moments into stories.",
    icon: <Video size={24} className="text-cyan-400" />,
    tags: ["Videography", "Reels"],
    span: "md:col-span-1 md:row-span-1",
    // ADD YOUR VIDEO PATH HERE
    videoSrc: "/portfolio/Hobbies/isssshhh.mp4", 
  },
  {
    title: "Curiosity Engine",
    description: "Always hunting for the next spark of inspiration, from aesthetic UI to new tech.",
    icon: <Sparkles size={24} className="text-yellow-400" />,
    tags: ["Inspiration", "Tech"],
    span: "md:col-span-1 md:row-span-1",
    image: "/portfolio/Hobbies/tech.jpeg",
  },
];

const Hobbies = () => {
  return (
    <div className="mainContainer">
      <div className="insideContainer">
        
        {/* --- Heading Section --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter">
            Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">The Pixels</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
        </motion.div>

        {/* --- Bento Grid Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[300px]">
          {hobbyData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`group relative rounded-[2.5rem] overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 ${item.span}`}
            >
              {/* Conditional Rendering: Video or Image */}
              {item.videoSrc ? (
                <video
                  src={item.videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  {item.icon}
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-gray-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm line-clamp-2">
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
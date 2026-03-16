import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Utensils,
  Compass,
  Music,
  BookOpen,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";

const hobbyData = [
  {
    title: "Global Nomad",
    description:
      "Traveling to 15+ countries to understand diverse cultures and architectural designs.",
    icon: <Globe />,
    tags: ["Culture", "Architecture", "Adventure"],
    span: "md:col-span-2 md:row-span-2",
    accent: "from-blue-600/20 to-cyan-400/20",
    detail: "Currently exploring: SE Asia",
  },
  {
    title: "Gastronomy",
    description:
      "Exploring the intersection of chemistry and culture through street food and fine dining.",
    icon: <Utensils />,
    tags: ["Cuisine", "Chemistry"],
    span: "md:col-span-1 md:row-span-1",
    accent: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Curiosity Engine",
    description:
      "A lifelong student mindset—currently deep-diving into AI Ethics and System Design.",
    icon: <Lightbulb />,
    tags: ["Always Learning", "Tech Trends"],
    span: "md:col-span-1 md:row-span-2",
    accent: "from-yellow-400/10 to-emerald-500/20",
  },
  {
    title: "Soundscapes",
    description:
      "Curating atmospheric playlists that fuel deep-work focus sessions.",
    icon: <Music />,
    tags: ["Lo-Fi", "Focus", "Vinyl"],
    span: "md:col-span-1 md:row-span-1",
    accent: "from-pink-500/20 to-purple-600/20",
  },
  {
    title: "Literary Worlds",
    description:
      "Reading speculative fiction and technical deep-dives to broaden cognitive frameworks.",
    icon: <BookOpen />,
    tags: ["Philosophy", "Sci-Fi"],
    span: "md:col-span-1 md:row-span-1",
    accent: "from-indigo-500/20 to-blue-800/20",
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
          className="text-center mb-20 space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter">
            Beyond{"  "}
            <span className="websiteText">
              The Pixels
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[220px]">
          {hobbyData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className={`group relative p-8 rounded-[2.5rem] border border-text-primary/20  backdrop-blur-md flex flex-col justify-between overflow-hidden 
                shadow shadow-accent hover:border-primary/40 hover:shadow-md transition-all duration-500 ${item.span}`}
            >
              {/* Mesh Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              />

              <div className="relative z-10 flex justify-between items-start"></div>

              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 bg-text-primary/5 
                      border border-text-primary/10 rounded-full text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed font-medium group-hover:text-secondary/80">
                  {item.description}
                </p>
                {item.detail && (
                  <p className="mt-4 text-[11px] text-accent font-mono italic opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.detail}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hobbies;

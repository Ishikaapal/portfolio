import { motion } from "framer-motion";
import { frontend, tools, softskills } from "../../assets/data";

import LogoLoop from './SkillsLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';

export const SkillsSection = () => {
 
const imageLogos = [
  { src: "/portfolio/skills/c++.png", alt: "C++",},
  { src: "/portfolio/skills/python.png", alt: "Python",},
  { src: "/portfolio/skills/html.png", alt: "HTML",},
  { src: "/portfolio/skills/css.png", alt: "CSS",},
  { src: "/portfolio/skills/js.png", alt: "JavaScript",},
  { src: "/portfolio/skills/react.png", alt: "React",},
  { src: "/portfolio/skills/tailwind.png", alt: "Tailwind CSS",},
  { src: "/portfolio/skills/django.png", alt: "Django",},
  { src: "/portfolio/skills/vscode.png", alt: "Vs Code",},
  { src: "/portfolio/skills/canva.png", alt: "Canva",},
  { src: "/portfolio/skills/github.png", alt: "Github",},
  { src: "/portfolio/skills/sql.png", alt: "SQL",},
];



  return (
    <>
    {/* --- Heading Section --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-black text-text-primary tracking-tighter">
            Skills{" "} 
            <span className="websiteText">
              & Technologies
            </span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-accent to-blue-600 mx-auto rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
        </motion.div>

      <div style={{ height: '240px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={imageLogos}
        speed={100}
        direction="right"
        logoHeight={120}
        gap={32}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="text-primary"
        ariaLabel="Technology partners"
      />
    </div>
    </>
    
  );
};



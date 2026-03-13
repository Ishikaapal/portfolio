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
      <div className="w-full ipContainer flex flex-col items-center z-20 pb-20">
        <div className="text-center space-y-2">
        <h1 className="ipHeading">
                My <span className="ipHeadingSpan">Skills
                </span>
              </h1> 
              <div className="mt-2 w-20 h-1 bg-primary mx-auto rounded-full"></div>
              <p className="ipHeadingP">My Tech Stack Details</p>
        </div>        
      </div>

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



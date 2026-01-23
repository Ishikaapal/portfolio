

import ParallaxHero from "../Components/animations/ParallaxHero";
import project1 from "/portfolio/ishh.png"


export const NotFoundPage = () => {
  
  const images = [
    { src: project1, title: "3D Dashboard", desc: "React + Motion" },
    { src: project1, title: "Premium Landing", desc: "Awwwards Style" },
    { src: project1, title: "Product UI", desc: "Minimal + Elegant" },
    { src: project1, title: "Portfolio UI", desc: "Parallax Effects" },
  ];
  console.log("Images sent:", images);
  return (
    
      <>
      
      <ParallaxHero
        title="Hi, I'm Pankaj"
        subtitle="Frontend Developer • React • Tailwind • Framer Motion"
        image="/portfolio/ishh.png"
        height="100vh"
      />
      <ParallaxHero
        title="Hi, I'm Ishika Pal"
        subtitle="Frontend Developer • React • Tailwind • Framer Motion"
        image="projects/project1.png"
        height="100vh"
      />

      {/* Rest of page */}
      <section className="p-10 min-h-screen">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-2 text-gray-700">
          This section will appear normally while hero scrolls with parallax.
        </p>
      </section>
    </>
  );
};

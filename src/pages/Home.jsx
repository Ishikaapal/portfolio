import { NavBar } from "../Components/navbar/NavBar";

import HeroSection from "../Components/main/HeroSection";
import {AboutSection} from "../Components/main/AboutSection";
import {SkillsSection} from "../Components/main/SkillsSection";
import {ProjectsSection} from "../Components/main/ProjectsSection";

import Footer from "../Components/footer/Footer";
import ParallaxEffact from "../Components/main/ParallaxEffact";
import Hobbies from "../Components/main/Hobbies";
import Testimonial from "../Components/main/Testimonials";
import Contact from "../Components/main/Contact";
import ProjectTest from "../Components/main/ProjectTest";



export const Home = () => {
  return (
    <>
        {/* NavBar Code */}
        <NavBar />

        {/* Main Data Code */}
        <section id="hero"><HeroSection /> </section>
          <ParallaxEffact type="service" typeText="Who Am I ?"/>
          <section id="about" className="container"><AboutSection /> </section>
          <SkillsSection />
          <ParallaxEffact type="portfolio" typeText="My Work"/>
          {/* <section id="project" className="container"><ProjectsSection /></section> */}
          <div id="project"><ProjectTest /></div>
          <section id="intrests"className="container"><Hobbies /></section>
          <section id="testimonial"className="container"><Testimonial /></section>
          <ParallaxEffact type="service" typeText="Let's Connect"/>
          <section id="contact"className="container"><Contact /></section>

        {/* Footer Code */}
        <Footer />
    </>
  );
};

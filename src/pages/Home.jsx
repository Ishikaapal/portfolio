import {ParticleBackground} from "../Components/ParticleBackground"
import {NavBar} from "../Components/NavBar"
import { HeroSection } from "../Components/HeroSection";
import {Footer} from "../Components/Footer"
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../Components/SkillsSection";
import { ProjectsSection } from "../Components/ProjectsSection";
import { CertificationSection } from "../Components/CertificationSection";


export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary overflow_x_hidden">

        {/* Particle Background */}
        <ParticleBackground />

        {/* NavBar Code */}
        <NavBar />

        <main>
            <HeroSection />

            <AboutSection />

            <SkillsSection />

            <ProjectsSection />

            <CertificationSection />


        </main>

        <Footer />
    </div>
  );
};

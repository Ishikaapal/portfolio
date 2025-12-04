import { cn } from "../lib/util";
import { Briefcase, Code, User, Github, Linkedin, Youtube } from "lucide-react";
import { ProfileCard } from "./Files/ProfileCard";
import { PixelatedCanvasDemo } from "./PixelatedCanvasDemo";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Who <span className="text-primary">Am I ?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 gap-6">
            <ProfileCard />
           
          </div>
          <div className="space-y-6 animate-floatY">
            <h3 className="text-2xl font-semibold">
              Passionate Front-end Developer
            </h3>

            <p className="text-muted-foreground">
              Final-year B.Tech student in Electronics & Communication
              Engineering with AI, passionate about building impactful tech that
              blends intelligence with real-world usability. Focused on creating
              smart, scalable systems — from responsive frontends to efficient
              backends — while continuously exploring how AI can make everyday
              tasks smarter and smoother.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
              <a
                href="resume/Pankaj_Kumar_Resume_2025.pdf"
                download
                target="_blank"
                className={cn(
                  "px-6 py-2 rounded-full border border-primary",
                  "text-primary hover:bg-primary/40 transition-all duration-300"
                )}
              >
                {" "}
                Download Resume
              </a>
            </div>
            <div className="pt-8">
              <h4 className="font-large mb-4">Connect With Me</h4>
              <div className="flex justify-center space-x-5">
                <div className="p-3 rounded-full border border-foreground hover:bg-[#0A66C2] hover:border-0 hover:scale-110 transition-all duration-200">
                  <a
                    href="https://www.linkedin.com/in/ishikaapal/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={24} className="hover:scale-120" />
                  </a>
                </div>
                <div className="p-3 rounded-full border border-foreground hover:bg-white hover:text-black transition-all duration-200">
                  <a
                    href="https://github.com/ishikaapal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={24} className="hover:scale-120" />
                  </a>
                </div>
                <div className="p-3 rounded-full border border-foreground hover:bg-[#FF0000] hover:border-0 hover:scale-110 transition-all duration-200">
                  <a
                    href="https://www.youtube.com/@IPTechWorriers"
                    target="_blank"
                  >
                    <Youtube size={24} className="hover:scale-120" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

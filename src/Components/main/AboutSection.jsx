import { Timeline } from "./AboutTimeLine.jsx";
import {
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaDownload,
  FaBriefcase,
  FaGraduationCap,
  FaUserFriends,
} from "react-icons/fa";

export const AboutSection = () => {
  const data = [
    {
      title: (
        <div className="flex items-center gap-3">
          <FaBriefcase className="text-primary" />
          Experience
        </div>
      ),
      content: (
        <div className="space-y-10">

          {/* Experience Card */}
          <div className="border border-primary rounded-xl p-6 backdrop-blur-md shadow shadow-accent hover:shadow-md transition">

            <h3 className="text-xl font-bold text-text-primary">
              Co-Founder & Web Developer
            </h3>

            <p className="text-primary font-semibold">IP Vertex</p>

            <p className="text-sm text-secondary mb-4">
              Jan 2026 – Present
            </p>

            <h4 className="font-semibold mb-2 text-text-primary">
              Key Achievements
            </h4>

            <ul className="list-disc pl-5 text-secondary space-y-1">
              <li>Developed and launched company portfolio and client websites</li>
              <li>Built responsive UI using React and Tailwind CSS</li>
              <li>Improved website performance and SEO optimization</li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="skillBadge">React</span>
              <span className="skillBadge">Tailwind</span>
              <span className="skillBadge">JavaScript</span>
              <span className="skillBadge">REST APIs</span>
            </div>

          </div>

          {/* Experience Card */}
          <div className="border border-primary rounded-xl p-6 backdrop-blur-md shadow shadow-accent hover:shadow-md transition">

            <h3 className="text-xl font-bold text-text-primary">
              Freelance Front-End Developer
            </h3>

            <p className="text-sm text-secondary mb-4">
              Sep 2025 – Jan 2026
            </p>

            <ul className="list-disc pl-5 text-secondary space-y-1">
              <li>Designed modern UI for small business websites</li>
              <li>Created responsive layouts for mobile and desktop</li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="skillBadge">HTML</span>
              <span className="skillBadge">CSS</span>
              <span className="skillBadge">JavaScript</span>
              <span className="skillBadge">Bootstrap</span>
            </div>

          </div>

          {/* Experience Card */}
          <div className="border border-primary rounded-xl p-6 backdrop-blur-md shadow shadow-accent hover:shadow-md transition">

            <h3 className="text-xl font-bold text-text-primary">
              Full-Stack Developer Intern
            </h3>

            <p className="text-sm text-secondary mb-4">
              June 2025 – Mar 2026
            </p>

            <ul className="list-disc pl-5 text-secondary space-y-1">
              <li>Developed full-stack applications using Django & React</li>
              <li>Built REST APIs and authentication systems</li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="skillBadge">Django</span>
              <span className="skillBadge">React</span>
              <span className="skillBadge">PostgreSQL</span>
              <span className="skillBadge">REST API</span>
            </div>

          </div>

        </div>
      ),
    },

    {
      title: (
        <div className="flex items-center gap-3">
          <FaGraduationCap className="text-primary" />
          Education
        </div>
      ),

      content: (
        <div className="space-y-8">

          <div className="eduCard">
            <h3>B.Tech (ECE – Artificial Intelligence)</h3>
            <p className="text-primary">
              Indira Gandhi Delhi Technical University for Women
            </p>
            <p className="eduMeta">2022 – 2026 • CGPA 7.32</p>
          </div>

          <div className="eduCard">
            <h3>Senior Secondary (12th)</h3>
            <p className="text-primary">
              Govt. Sarvodaya Kanya Vidyalaya
            </p>
            <p className="eduMeta">2022 • 80%</p>
          </div>

          <div className="eduCard">
            <h3>Secondary (10th)</h3>
            <p className="text-primary">
              Govt. Sarvodaya Kanya Vidyalaya
            </p>
            <p className="eduMeta">2020 • 87.8%</p>
          </div>

        </div>
      ),
    },

    {
      title: (
        <div className="flex items-center gap-3">
          <FaUserFriends className="text-primary" />
          Let's Connect
        </div>
      ),

      content: (
        <div className="flex flex-col items-center gap-8 text-center">

          <p className="text-secondary max-w-xl">
            Interested in collaborating or discussing a project?
            Feel free to connect with me through these platforms.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            <a href="https://www.linkedin.com/in/ishikaapal/" target="_blank" className="connectCard">
              <FaLinkedin size={26} />
              LinkedIn
            </a>

            <a href="https://github.com/ishikaapal" target="_blank" className="connectCard">
              <FaGithub size={26} />
              GitHub
            </a>

            <a href="https://www.youtube.com/@IPTechWarriors" target="_blank" className="connectCard">
              <FaYoutube size={26} />
              YouTube
            </a>

            <a href="/portfolio/Ishika_pal_resume_2026.pdf" download className="connectCard">
              <FaDownload size={26} />
              Resume
            </a>

          </div>

        </div>
      ),
    },
  ];

  return (
    <div className="mainContainer">
      <div className="insideContainer">
        <Timeline data={data} />
      </div>
    </div>
  );
};
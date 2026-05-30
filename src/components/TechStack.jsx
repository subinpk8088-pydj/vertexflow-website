import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiDjango,
  SiMysql,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import { motion } from "framer-motion";
import "../styles/techstack.css";

function TechStack() {
  const techs = [
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Python", icon: <FaPython /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <section className="tech-stack-section">
      <div className="container">

        <div className="section-header">
          <span>Technology</span>
          <h2>Tech Stack</h2>
        </div>

        <div className="tech-grid">
          {techs.map((tech, index) => (
            <div className="tech-card" key={index}>
              <div className="tech-icon">
                {tech.icon}
              </div>

              <h3>{tech.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TechStack;
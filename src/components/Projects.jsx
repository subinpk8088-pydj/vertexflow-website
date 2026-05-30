import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import "../styles/projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">

        <div className="section-header">
          <span>Portfolio</span>
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
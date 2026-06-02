import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import "../styles/projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="projects-grid-bg"></div>

      <div className="projects-inner">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>Portfolio</span>

          <h2>
            Featured
            <span> Projects</span>
          </h2>
        </motion.div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <motion.div
              key={project.id || index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;
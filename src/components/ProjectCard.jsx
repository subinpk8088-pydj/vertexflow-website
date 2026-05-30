import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <img
        src={project.image}
        alt={project.title}
      />

      <div className="project-content">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tech-stack">
          {project.tech.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>

        <div className="project-links">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="github-btn"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="demo-btn"
          >
            Live Demo
          </a>

        </div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;
function ProjectCard({ project }) {
  return (
    <div className="project-card">

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
          <a href={project.github} target="_blank">
            GitHub
          </a>

          <a href={project.demo} target="_blank">
            Live Demo
          </a>
        </div>
      </div>

    </div>
  );
}

export default ProjectCard;
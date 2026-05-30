function TechStack() {
  const techs = [
    "React",
    "JavaScript",
    "Django",
    "Python",
    "MySQL",
    "Bootstrap",
    "Tailwind CSS",
    "Git",
    "GitHub"
  ];

  return (
    <section className="tech-stack-section">
      <div className="container">

        <div className="section-header">
          <span>Technology</span>
          <h2>Our Tech Stack</h2>
        </div>

        <div className="tech-grid">
          {techs.map((tech, index) => (
            <div key={index} className="tech-card">
              {tech}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TechStack;
function About() {
  return (
    <section className="about" id="about">
      <div className="container">

        <div className="section-header">
          <span>About VertexFlow</span>
          <h2>Building Digital Solutions That Drive Business Growth</h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <p>
              VertexFlow is focused on developing modern web applications,
              business management systems, and custom software solutions that
              help organizations improve efficiency and streamline operations.
            </p>

            <p>
              Our expertise includes ERP platforms, inventory management
              systems, educational management software, blood bank platforms,
              e-commerce applications, and responsive business websites.
            </p>

            <p>
              We combine powerful technologies such as React, Django, and
              MySQL to create scalable and reliable software tailored to
              business requirements.
            </p>
          </div>

          <div className="about-cards">

            <div className="about-card">
              <h3>8+</h3>
              <p>Projects Completed</p>
            </div>

            <div className="about-card">
              <h3>React</h3>
              <p>Frontend Development</p>
            </div>

            <div className="about-card">
              <h3>Django</h3>
              <p>Backend Development</p>
            </div>

            <div className="about-card">
              <h3>MySQL</h3>
              <p>Database Solutions</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
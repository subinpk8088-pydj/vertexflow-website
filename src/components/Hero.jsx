import { COMPANY } from "../constants/company";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <span className="hero-badge">
          🚀 Modern Software Solutions
        </span>

        <h1>
          {COMPANY.name}
        </h1>

        <h2>
          {COMPANY.tagline}
        </h2>

        <p>
          We build modern web applications, ERP systems,
          inventory management solutions, and business websites
          that help organizations streamline operations and grow.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            View Projects
          </button>

          <button className="secondary-btn">
            Contact Us
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <h3>8+</h3>
            <span>Projects</span>
          </div>

          <div>
            <h3>React</h3>
            <span>Frontend</span>
          </div>

          <div>
            <h3>Django</h3>
            <span>Backend</span>
          </div>

          <div>
            <h3>MySQL</h3>
            <span>Database</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
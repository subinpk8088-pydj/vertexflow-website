import "../styles/about.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-grid"></div>

      <div className="container">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>About VertexFlow</span>

          <h2>
            Transforming Ideas Into
            <span> Scalable Digital Solutions</span>
          </h2>
        </motion.div>

        <div className="about-content">

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p>
              VertexFlow develops modern websites,
              enterprise software and custom digital
              products that help businesses streamline
              operations and accelerate growth.
            </p>

            <p>
              From ERP platforms and inventory systems
              to e-commerce solutions and portfolio
              websites, we focus on creating scalable,
              secure and future-ready applications.
            </p>

            <p>
              Our technology stack combines React,
              Django and MySQL with modern UI/UX
              principles to deliver premium digital
              experiences.
            </p>

            <div className="about-tech">
              <span>React</span>
              <span>Django</span>
              <span>MySQL</span>
              <span>REST API</span>
              <span>Bootstrap</span>
              <span>Flutter</span>
            </div>
          </motion.div>

          <motion.div
            className="about-cards"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="about-card">
              <h3>ERP</h3>
              <p>Business Automation Solutions</p>
            </div>

            <div className="about-card">
              <h3>E-Commerce</h3>
              <p>Online Store Platforms</p>
            </div>

            <div className="about-card">
              <h3>Web Apps</h3>
              <p>Custom Development</p>
            </div>

            <div className="about-card">
              <h3>Portfolio</h3>
              <p>Personal Branding Websites</p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;
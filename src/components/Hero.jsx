import { motion } from "framer-motion";
import "../styles/hero.css";

import img1 from "../assets/images/project1.jpg";
import img2 from "../assets/images/project2.png";
import img3 from "../assets/images/project3.png";
import img4 from "../assets/images/project4.png";

const projectImages = {
  erp:       img1,
  business:  img2,
  portfolio: img3,
  ecommerce: img4,
}

function Hero() {
  return (
    <section className="hero">

      <div className="grid-bg"></div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
      >
        <div className="hero-badge">
          🚀 VertexFlow Digital Solutions
        </div>

        <h1>
          Building
          <span> Powerful Digital </span>
          Experiences
        </h1>

        <p>
          We help startups, businesses and professionals launch
          modern websites, ERP systems, portfolio platforms and
          scalable web applications that drive real growth.
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            <button className="primary-btn">View Projects</button>
          </a>
          <a href="#contact">
            <button className="secondary-btn">Start Project</button>
          </a>
        </div>

        <div className="trust-bar">
          <div>
            <h3>Websites</h3>
            <span>Modern & Responsive</span>
          </div>
          <div>
            <h3>ERP</h3>
            <span>Business Automation</span>
          </div>
          <div>
            <h3>E-Commerce</h3>
            <span>Online Selling</span>
          </div>
          <div>
            <h3>Portfolio</h3>
            <span>Personal Branding</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>

        {/* Card 1 — ERP Dashboard */}
        <div className="hero-card project1">
          <img src={projectImages.erp} alt="ERP Dashboard" />
          <div className="hero-card-overlay">
            <h4>ERP System</h4>
            <span>Inventory • HR • Billing</span>
          </div>
        </div>

        {/* Card 2 — Business Website */}
        <div className="hero-card project2">
          <img src={projectImages.business} alt="Business Website" />
          <div className="hero-card-overlay">
            <h4>Business Website</h4>
            <span>Corporate Solutions</span>
          </div>
        </div>

        {/* Card 3 — Portfolio */}
        <div className="hero-card project3">
          <img src={projectImages.portfolio} alt="Portfolio Website" />
          <div className="hero-card-overlay">
            <h4>Portfolio Site</h4>
            <span>Personal Branding</span>
          </div>
        </div>

        {/* Card 4 — E-Commerce */}
        <div className="hero-card project4">
          <img src={projectImages.ecommerce} alt="Ecommerce Platform" />
          <div className="hero-card-overlay">
            <h4>E-Commerce</h4>
            <span>Online Store</span>
          </div>
        </div>

        <div className="center-circle">
          <span>VF</span>
        </div>

      </motion.div>
    </section>
  );
}

export default Hero;
import "../styles/founders.css";
import { motion } from "framer-motion";
function Founders() {
  return (
    <section className="founders">
      <div className="container">

        <div className="section-header">
          <span>Leadership</span>
          <h2>Meet The Founders</h2>
        </div>

        <div className="founders-grid">

          <div className="founder-card">
            <h3>Subin PK</h3>
            <p>
              Full Stack Developer specializing in
              React, Django, MySQL, and business software solutions.
            </p>
          </div>

          <div className="founder-card">
            <h3>Nihara Dhanesh</h3>
            <p>
              Co-Founder of VertexFlow, focused on
              client relations, business growth, and project management.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Founders;
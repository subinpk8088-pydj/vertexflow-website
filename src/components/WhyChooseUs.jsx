import "../styles/whychooseus.css";
import { motion } from "framer-motion";

import {
  FaLaptopCode,
  FaRocket,
  FaTools,
  FaHeadset
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaLaptopCode />,
      title: "Modern Technologies",
      description:
        "Scalable solutions built with React, Django, Node.js, MySQL and modern cloud architecture."
    },
    {
      icon: <FaRocket />,
      title: "Fast Delivery",
      description:
        "Streamlined development workflows help launch your project faster without sacrificing quality."
    },
    {
      icon: <FaTools />,
      title: "Custom Development",
      description:
        "Every website, ERP system and web application is designed around your unique business goals."
    },
    {
      icon: <FaHeadset />,
      title: "Dedicated Support",
      description:
        "Ongoing maintenance, updates and technical assistance after deployment."
    }
  ];

  return (
    <section className="why-choose-us" id="why-us">
      <div className="grid-bg"></div>

      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>Why VertexFlow</span>

          <h2>
            Why Choose <span>Us</span>
          </h2>
        </motion.div>

        <div className="why-grid">
          {features.map((feature, index) => (
            <motion.div
              className="why-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}
            >
              <div className="why-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
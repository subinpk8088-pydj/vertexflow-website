import { motion } from "framer-motion";
import "../styles/services.css";

function Services() {
  const services = [
    {
      title: "Business Websites",
      desc: "Modern responsive websites for businesses and startups."
    },
    {
      title: "ERP Solutions",
      desc: "Complete management systems for business operations."
    },
    {
      title: "Inventory Management",
      desc: "Track products, stock levels, purchases, and sales."
    },
    {
      title: "E-Commerce Solutions",
      desc: "Online stores with product management and payments."
    },
    {
      title: "Custom Web Applications",
      desc: "Tailored software solutions for unique business needs."
    },
    {
      title: "Maintenance & Support",
      desc: "Continuous updates and technical support."
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">

        <div className="section-header">
          <span>Services</span>
          <h2>What We Offer</h2>
        </div>

        <div className="services-grid">

          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              whileHover={{
                scale: 1.05
              }}
            >
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;
import { motion } from "framer-motion";
import "../styles/services.css";

const services = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: "Business Websites",
    desc: "Modern, responsive websites for businesses and startups that convert visitors into customers.",
    accent: "#2563EB",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: "ERP Solutions",
    desc: "Complete enterprise management systems that streamline business operations end-to-end.",
    accent: "#38BDF8",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    title: "Inventory Management",
    desc: "Track products, stock levels, purchases, and sales with real-time dashboards.",
    accent: "#7C3AED",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
    title: "E-Commerce Solutions",
    desc: "Fully-featured online stores with product management, carts, and payment integration.",
    accent: "#0891B2",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: "Custom Web Applications",
    desc: "Tailored software solutions built specifically for your unique business requirements.",
    accent: "#2563EB",
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: "Maintenance & Support",
    desc: "Continuous updates, performance monitoring, and dedicated technical support.",
    accent: "#38BDF8",
  },
];

function Services() {
  return (
    <section className="services" id="services">

      {/* Same grid background as hero, about, projects */}
      <div className="services-grid-bg" />

      <div className="services-inner">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>Services</span>
          <h2>
            What We
            <span> Offer</span>
          </h2>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              style={{ "--accent": service.accent }}
            >
              {/* Icon box */}
              <div className="service-icon">
                {service.icon}
              </div>

              {/* Number */}
              <div className="service-num">0{index + 1}</div>

              <h3>{service.title}</h3>
              <p>{service.desc}</p>

              {/* Bottom accent line */}
              <div className="service-line" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
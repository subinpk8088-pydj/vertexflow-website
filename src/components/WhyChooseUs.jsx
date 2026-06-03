import { motion } from "framer-motion";
import "../styles/whychooseus.css";

const features = [
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <polyline points="16 8 12 12 8 8"/>
      </svg>
    ),
    title: "Modern Technologies",
    desc: "Built with React, Django, MySQL and modern development best practices for scalable results.",
    accent: "#2563EB",
    num: "01",
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: "Fast Delivery",
    desc: "Streamlined development process that launches your project on time without compromising quality.",
    accent: "#38BDF8",
    num: "02",
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    title: "Custom Development",
    desc: "Every solution is uniquely tailored to your exact business requirements and goals.",
    accent: "#7C3AED",
    num: "03",
  },
  {
    icon: (
      <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: "Long-Term Support",
    desc: "Ongoing maintenance, performance updates, and dedicated technical assistance after launch.",
    accent: "#0891B2",
    num: "04",
  },
];

function WhyChooseUs() {
  return (
    <section className="why-section">

      {/* Same grid bg as all sections */}
      <div className="why-grid-bg" />

      <div className="why-inner">

        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>Why VertexFlow</span>
          <h2>
            Why Choose
            <span> Us</span>
          </h2>
        </motion.div>

        <div className="why-grid">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="why-card"
              style={{ "--accent": f.accent }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              {/* Corner number */}
              <div className="why-num">{f.num}</div>

              {/* Icon */}
              <div className="why-icon">{f.icon}</div>

              <h3>{f.title}</h3>
              <p>{f.desc}</p>

              {/* Bottom accent line */}
              <div className="why-line" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
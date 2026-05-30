import "../styles/whychooseus.css";

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
        "Built with React, Django, MySQL and modern development practices."
    },
    {
      icon: <FaRocket />,
      title: "Fast Delivery",
      description:
        "Efficient development process to launch your project quickly."
    },
    {
      icon: <FaTools />,
      title: "Custom Development",
      description:
        "Every solution is tailored to your business requirements."
    },
    {
      icon: <FaHeadset />,
      title: "Long-Term Support",
      description:
        "Maintenance, updates and continuous technical assistance."
    }
  ];

  return (
    <section className="why-choose-us">
      <div className="container">

        <div className="section-header">
          <span>Why VertexFlow</span>
          <h2>Why Choose Us</h2>
        </div>

        <div className="why-grid">
          {features.map((feature, index) => (
            <div className="why-card" key={index}>

              <div className="why-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
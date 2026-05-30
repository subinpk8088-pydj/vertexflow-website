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
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
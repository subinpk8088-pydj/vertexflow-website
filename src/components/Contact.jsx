import { COMPANY } from "../constants/company";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">

        <div className="section-header">
          <span>Contact</span>
          <h2>Let's Build Something Great</h2>
        </div>

        <div className="contact-box">

          <h3>{COMPANY.name}</h3>

          <p>{COMPANY.email}</p>

          <p>{COMPANY.phone}</p>

          <button>
            Get In Touch
          </button>

        </div>

      </div>
    </section>
  );
}

export default Contact;
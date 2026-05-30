import { COMPANY } from "../constants/company";
import "../styles/footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container footer-content">

        <img
          src="/logo.png"
          alt={COMPANY.name}
          className="footer-logo"
        />


        <p className="footer-tagline">
          {COMPANY.tagline}
        </p>

        <p className="footer-founders">
          Founded by <strong>Subin PK</strong> & <strong>Nihara Dhanesh</strong>
        </p>

        <div className="footer-socials">

          <a
            href={COMPANY.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href={COMPANY.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href={`mailto:${COMPANY.email}`}
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="footer-email">
          {COMPANY.email}
        </p>

        <p className="footer-copy">
          © {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
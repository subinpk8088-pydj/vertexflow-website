import { useState, useEffect } from "react";
import { COMPANY } from "../constants/company";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/navbar.css";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);

    window.addEventListener("scroll", fn, { passive: true });

    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", fn);

    return () => window.removeEventListener("resize", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`nav-header ${scrolled ? "scrolled" : ""}`}
        role="banner"
      >
        <nav className="nav-wrap" aria-label="Main navigation">
          {/* Logo */}
          <a href="#" className="nav-logo" aria-label={COMPANY.name}>
            <img src="/logo.png" alt={COMPANY.name} />
          </a>

          {/* Desktop Links */}
          <ul className="nav-links" role="list">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="nav-link">
                  {link.label}
                  <span
                    className="nav-link-bar"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#contact"
            className="nav-cta"
            aria-label="Start a project"
          >
            Start a Project

            <svg
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

          {/* Hamburger */}
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="bar" aria-hidden="true" />
            <span className="bar" aria-hidden="true" />
            <span className="bar" aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="mob-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={close}
              aria-hidden="true"
            />

            <motion.div
              id="mobile-menu"
              className="mob-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 28,
              }}
            >
              <div className="mob-top">
                <img
                  src="/logo.png"
                  alt={COMPANY.name}
                  className="mob-logo"
                />

                <button
                  className="mob-close"
                  onClick={close}
                  aria-label="Close menu"
                >
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <ul className="mob-links" role="list">
                {links.map((link, index) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.07 + 0.08,
                    }}
                  >
                    <a
                      href={link.href}
                      className="mob-link"
                      onClick={close}
                    >
                      <span className="mob-num">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {link.label}

                      <svg
                        className="mob-arrow"
                        width="15"
                        height="15"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                className="mob-cta"
                onClick={close}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36 }}
              >
                Start a Project

                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>

              <p className="mob-foot">
                VertexFlow Digital Solutions
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
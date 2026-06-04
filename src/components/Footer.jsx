import { COMPANY } from "../constants/company";
import { motion } from "framer-motion";
import "../styles/footer.css";

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)
const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
const EnvelopeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)
const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26C.157 5.335 5.495 0 12.05 0c6.554 0 11.89 5.335 11.893 11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
)

const navLinks = [
  { label: "About",    href: "#about"    },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact",  href: "#contact"  },
]

const socials = [
  { icon: <GithubIcon />,   href: COMPANY.github,                       label: "GitHub",    accent: "#a78bfa" },
  { icon: <LinkedinIcon />, href: COMPANY.linkedin,                     label: "LinkedIn",  accent: "#38bdf8" },
  { icon: <EnvelopeIcon />, href: `mailto:${COMPANY.email}`,           label: "Email",     accent: "#2563eb" },
  { icon: <WhatsAppIcon />, href: `https://wa.me/${COMPANY.whatsapp}`, label: "WhatsApp",  accent: "#22c55e" },
]

const fadeUp = (delay = 0) => ({
  initial:   { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:  { once: true },
  transition: { duration: 0.55, delay, ease: [0.4, 0, 0.2, 1] },
})

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid-bg" />

      <div className="footer-inner">

        {/* Top grid */}
        <div className="footer-top">

          {/* Brand */}
          <motion.div className="footer-brand" {...fadeUp(0)}>
            <img src="/logo.png" alt={COMPANY.name} className="footer-logo" />
            <p className="footer-tagline">{COMPANY.tagline}</p>
            <p className="footer-founders">
              Founded by <strong>Subin PK</strong> &amp; <strong>Nihara Dhanesh</strong>
            </p>
            <div className="footer-socials">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  className="social-btn"
                  style={{ "--sc": s.accent }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, type: "spring", stiffness: 260, damping: 20 }}
                  whileHover={{ y: -4, scale: 1.12 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div className="footer-col" {...fadeUp(0.1)}>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-list">
              {navLinks.map((l, i) => (
                <motion.li key={l.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.07 }}>
                  <a href={l.href} className="footer-link">
                    <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div className="footer-col" {...fadeUp(0.2)}>
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-list">
              {[
                { icon: <EnvelopeIcon />, href: `mailto:${COMPANY.email}`,           label: COMPANY.email },
                { icon: <WhatsAppIcon />, href: `https://wa.me/${COMPANY.whatsapp}`, label: COMPANY.phone },
                { icon: <LinkedinIcon />, href: COMPANY.linkedin,                    label: "LinkedIn"    },
                { icon: <GithubIcon />,   href: COMPANY.github,                      label: "GitHub"      },
              ].map((item, i) => (
                <motion.li key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.07 }}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="footer-link">
                    {item.icon} {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Divider */}
        <motion.div
          className="footer-divider"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="footer-copy">
            © {new Date().getFullYear()} <strong>{COMPANY.name}</strong>. All Rights Reserved.
          </span>
          <span className="footer-made">
            Built with React &amp; Django &nbsp;✦&nbsp; Kerala, India
          </span>
        </motion.div>

      </div>
    </footer>
  )
}
import { useState } from "react";
import { COMPANY } from "../constants/company";
import { motion } from "framer-motion";
import "../styles/contact.css";

function Contact() {
  const [tab,     setTab]     = useState("email");
  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sent,    setSent]    = useState(false);
  const [focused, setFocused] = useState("");

  const isEmail = tab === "email";

  const handleSend = () => {
    if (!name || !subject || !message) return;
    if (isEmail) {
      if (!email) return;
      const mailto =
        `mailto:${COMPANY.email}` +
        `?subject=${encodeURIComponent(`[VertexFlow] ${subject} — from ${name}`)}` +
        `&body=${encodeURIComponent(`Hi VertexFlow,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`)}`;
      window.location.href = mailto;
    } else {
      const text = [`👋 Hi, I am ${name}.`, ``, `*${subject}*`, ``, message].join("\n");
      window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
    }
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inp = (field) => ({
    width: "100%", padding: "13px 16px",
    background: focused === field ? "rgba(37,99,235,0.08)" : "rgba(255,255,255,0.03)",
    border: `1px solid ${focused === field ? "rgba(37,99,235,0.5)" : "rgba(255,255,255,0.1)"}`,
    borderRadius: 10, color: "#e2e0ea", fontSize: 14,
    outline: "none", transition: "all .2s",
    boxSizing: "border-box", fontFamily: "inherit",
  });

  const contactCards = [
    {
      icon: (
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ),
      label: "Email", value: COMPANY.email,
      href: `mailto:${COMPANY.email}`, accent: "#2563eb",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26C.157 5.335 5.495 0 12.05 0c6.554 0 11.89 5.335 11.893 11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      ),
      label: "WhatsApp", value: COMPANY.phone,
      href: `https://wa.me/${COMPANY.whatsapp}`, accent: "#22c55e",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      ),
      label: "LinkedIn", value: "VertexFlow",
      href: COMPANY.linkedin, accent: "#0ea5e9",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      ),
      label: "GitHub", value: "VertexFlow",
      href: COMPANY.github, accent: "#a78bfa",
    },
  ];

  const subjects = ["🌐 Website Project", "⚙️ ERP System", "🛒 E-Commerce", "📁 Portfolio", "💬 General Inquiry"];

  return (
    <section className="contact" id="contact">
      <div className="contact-grid-bg"></div>
      <div className="contact-container">

        {/* Header */}
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-label">Get In Touch</span>
          <h2>Let's Build Something <span>Great Together</span></h2>
          <p>Have a project idea or need a custom software solution? We're ready to help.</p>
        </motion.div>

        {/* Two column layout */}
        <div className="contact-grid">

          {/* LEFT: info */}
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* 2×2 cards */}
            <div className="contact-cards">
              {contactCards.map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noreferrer"
                  className="contact-card"
                  style={{ "--accent": c.accent }}>
                  <div className="cc-icon" style={{ background: `${c.accent}18`, border: `1px solid ${c.accent}30`, color: c.accent }}>
                    {c.icon}
                  </div>
                  <div>
                    <div className="cc-label">{c.label}</div>
                    <div className="cc-value">{c.value}</div>
                  </div>
                  <svg className="cc-arrow" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className="avail-card">
              <div className="avail-dot" />
              <div>
                <div className="avail-title">Available for Projects</div>
                <div className="avail-sub">Websites · ERP · E-Commerce · Portfolios</div>
              </div>
            </div>

            {/* Response */}
            <div className="response-card">
              <span>⚡</span>
              <div>
                <div className="response-title">Fast Response</div>
                <div className="response-sub">We reply within 24 hrs via Email · instant on WhatsApp</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: form */}
          <motion.div
            className="contact-form-box"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-title">Send a Message</div>
            <p className="form-sub">Choose how you'd like to reach us.</p>

            {/* Tab switcher */}
            <div className="tab-switch">
              {["email", "whatsapp"].map(t => (
                <button key={t} onClick={() => { setTab(t); setSent(false); }}
                  className={`tab-btn ${tab === t ? "active" : ""}`}
                  style={tab === t ? { "--tc": t === "email" ? "#2563eb" : "#22c55e" } : {}}>
                  {t === "email" ? (
                    <><svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg> Email</>
                  ) : (
                    <><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26C.157 5.335 5.495 0 12.05 0c6.554 0 11.89 5.335 11.893 11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg> WhatsApp</>
                  )}
                </button>
              ))}
            </div>

            <div className="form-fields">
              {/* Name + Email */}
              <div className={`fields-row ${isEmail ? "two-col" : "one-col"}`}>
                <div>
                  <label className="field-label">Your Name *</label>
                  <input type="text" placeholder="John Doe" value={name}
                    onChange={e => setName(e.target.value)}
                    onFocus={() => setFocused("name")} onBlur={() => setFocused("")}
                    style={inp("name")} />
                </div>
                {isEmail && (
                  <div>
                    <label className="field-label">Your Email *</label>
                    <input type="email" placeholder="you@example.com" value={email}
                      onChange={e => setEmail(e.target.value)}
                      onFocus={() => setFocused("email")} onBlur={() => setFocused("")}
                      style={inp("email")} />
                  </div>
                )}
              </div>

              {/* Subject pills */}
              <div>
                <label className="field-label">Subject *</label>
                <div className="subject-pills">
                  {subjects.map(s => (
                    <button key={s} onClick={() => setSubject(s)}
                      className={`pill ${subject === s ? "pill-active" : ""}`}
                      style={subject === s ? { "--pc": isEmail ? "#2563eb" : "#22c55e" } : {}}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="field-label">Message *</label>
                <textarea rows={5}
                  placeholder={isEmail ? "Hi VertexFlow, I'd like to discuss..." : "Hi VertexFlow 👋, I need help with..."}
                  value={message} onChange={e => setMessage(e.target.value)}
                  onFocus={() => setFocused("msg")} onBlur={() => setFocused("")}
                  style={{ ...inp("msg"), resize: "vertical", minHeight: 120 }} />
              </div>

              {/* Send button */}
              <button onClick={handleSend} className={`send-btn ${sent ? "sent" : ""} ${!isEmail ? "wa-btn" : ""}`}>
                {sent ? (
                  <><svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                  {isEmail ? "Email Client Opened!" : "Opening WhatsApp!"}</>
                ) : (
                  <><svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24"><path d="m22 2-7 20-4-9-9-4 20-7z"/><path d="M22 2 11 13"/></svg>
                  {isEmail ? "Send via Email" : "Send via WhatsApp"}</>
                )}
              </button>

              <p className="form-note">
                {isEmail ? "Opens your default email app · No data stored" : "Opens WhatsApp with your message pre-filled · No data stored"}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
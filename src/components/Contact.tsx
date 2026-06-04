import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { MdArrowForward, MdEmail } from "react-icons/md";
import "./styles/Contact.css";

const TYPEWRITER_WORDS = ["together.", "your vision.", "the future.", "something great."];

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // ── Typewriter state ──
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = TYPEWRITER_WORDS[wordIndex];

    if (!isDeleting) {
      setDisplayText(currentWord.substring(0, charIndex + 1));
      setCharIndex((c) => c + 1);
    } else {
      setDisplayText(currentWord.substring(0, charIndex - 1));
      setCharIndex((c) => c - 1);
    }
  }, [wordIndex, charIndex, isDeleting]);

  useEffect(() => {
    const currentWord = TYPEWRITER_WORDS[wordIndex];
    let delay: number;

    if (!isDeleting && charIndex === currentWord.length) {
      // pause at end of word
      delay = 2200;
      const t = setTimeout(() => setIsDeleting(true), delay);
      return () => clearTimeout(t);
    } else if (isDeleting && charIndex === 0) {
      // move to next word
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % TYPEWRITER_WORDS.length);
      delay = 350;
      const t = setTimeout(() => {}, delay);
      return () => clearTimeout(t);
    }

    delay = isDeleting ? 45 : 90;
    const t = setTimeout(tick, delay);
    return () => clearTimeout(t);
  }, [charIndex, isDeleting, wordIndex, tick]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:rmanubag308@gmail.com?subject=Portfolio Inquiry from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `From: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoLink, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <div className="contact-hero">
          <h2 className="contact-headline">
            From concept to creation
            <br />
            <em>let's make it happen.</em>
          </h2>

          <button
            className="contact-cta"
            onClick={() => setModalOpen(true)}
            data-cursor="disable"
          >
            GET IN TOUCH <MdArrowForward />
          </button>

          <p className="contact-availability">
            I'm available for full-time roles & freelance projects.
          </p>
          <p className="contact-description">
            I thrive on crafting dynamic web applications, and delivering
            <br />
            seamless user experiences.
          </p>
        </div>
      </div>

      {/* ── Reach Out Modal (portaled to body) ── */}
      {createPortal(
        <div
          className={`reachout-overlay ${modalOpen ? "reachout-open" : ""}`}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="reachout-modal"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="reachout-header">
              <div className="reachout-header-info">
                <h2 className="reachout-title">
                  Let's build{" "}
                  <span className="typewriter-viewport">
                    <span className="typewriter-text">{displayText}</span>
                    <span className="typewriter-cursor"></span>
                  </span>
                </h2>
              </div>
              <button
                className="reachout-close"
                onClick={() => setModalOpen(false)}
                data-cursor="disable"
                aria-label="Close modal"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Form Card */}
            <div className="reachout-form-card">
              <div className="reachout-form-header">
                <h4 className="reachout-form-title">Send Rhett a message</h4>
                <p className="reachout-form-sub">I READ EVERY ONE</p>
              </div>

              <form className="reachout-form" onSubmit={handleSubmit}>
                <div className="reachout-field">
                  <label htmlFor="modal-name">NAME</label>
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    data-cursor="disable"
                  />
                </div>
                <div className="reachout-field">
                  <label htmlFor="modal-email">EMAIL</label>
                  <input
                    type="email"
                    id="modal-email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    data-cursor="disable"
                  />
                </div>
                <div className="reachout-field">
                  <label htmlFor="modal-message">MESSAGE</label>
                  <textarea
                    id="modal-message"
                    name="message"
                    placeholder="Hey Rhett, I have a project idea..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    data-cursor="disable"
                  />
                </div>
                <button
                  type="submit"
                  className={`reachout-submit ${submitted ? "reachout-submit-sent" : ""}`}
                  data-cursor="disable"
                >
                  {submitted ? "SENT!" : "SEND MESSAGE"} <MdArrowForward />
                </button>
              </form>
            </div>

            {/* Secondary Actions Grid */}
            <div className="reachout-grid">
              {/* Resume Card */}
              <a
                href="/CV/CV - RHETT WAYNE MANUBAG.pdf"
                target="_blank"
                rel="noreferrer"
                className="reachout-action-card"
                data-cursor="disable"
              >
                <div className="reachout-card-content">
                  <h3 className="reachout-card-title">View Resume</h3>
                  <p className="reachout-card-subtitle">30 seconds read</p>
                </div>
                <span className="reachout-card-arrow">→</span>
              </a>

              {/* Email Card */}
              <div className="reachout-action-card">
                <div className="reachout-card-content">
                  <h3 className="reachout-card-title">Email me</h3>
                  <p className="reachout-card-subtitle">Direct line</p>
                </div>
                <a
                  href="mailto:rmanubag308@gmail.com"
                  className="reachout-card-email-link"
                  data-cursor="disable"
                >
                  <MdEmail size={16} />
                  <span>rmanubag308@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Footer Socials */}
            <div className="reachout-footer">
              <a
                href="https://github.com/wayne2604"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/rhett-wayne-manubag-207654319/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/share/1CfGPicueW/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/wayneer26?igsh=cGp0dzh3cjh5ZTJu&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Contact;

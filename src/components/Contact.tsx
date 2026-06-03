import { useState } from "react";
import { MdArrowForward, MdClose, MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import "./styles/Contact.css";

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

      {/* ── Reach Out Modal ── */}
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
            <div>
              <h2 className="reachout-title">Reach out</h2>
              <p className="reachout-subtitle">LET'S BUILD SOMETHING TOGETHER</p>
            </div>
            <button
              className="reachout-close"
              onClick={() => setModalOpen(false)}
              data-cursor="disable"
            >
              CLOSE <MdClose />
            </button>
          </div>

          {/* Form Card */}
          <div className="reachout-form-card">
            <h4 className="reachout-form-title">Send me a message</h4>
            <p className="reachout-form-sub">I READ EVERY ONE</p>

            <form className="reachout-form" onSubmit={handleSubmit}>
              <div className="reachout-field">
                <label>NAME</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  data-cursor="disable"
                />
              </div>
              <div className="reachout-field">
                <label>EMAIL</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  data-cursor="disable"
                />
              </div>
              <div className="reachout-field">
                <label>MESSAGE</label>
                <textarea
                  name="message"
                  placeholder="Hey, I have a project idea..."
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

          {/* Bottom Info Cards */}
          <div className="reachout-info-row">
            <a
              href="https://github.com/wayne2604"
              target="_blank"
              rel="noreferrer"
              className="reachout-info-card"
              data-cursor="disable"
            >
              <h5>GitHub</h5>
              <p>CHECK OUT MY WORK</p>
              <FaGithub className="reachout-info-icon" />
            </a>
            <a
              href="mailto:rmanubag308@gmail.com"
              className="reachout-info-card"
              data-cursor="disable"
            >
              <h5>Email me</h5>
              <p>DIRECT LINE</p>
              <MdEmail className="reachout-info-icon" />
              <span className="reachout-email-text">rmanubag308@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

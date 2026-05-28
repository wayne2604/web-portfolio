import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:rmanubag308@gmail.com"
                data-cursor="disable"
              >
                Email — rmanubag308@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.S. Computer Engineering, Jose Rizal Memorial State University (JRMSU) — Present
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/wayne2604"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Rhett Wayne Manubag</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

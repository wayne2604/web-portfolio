import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              RHETT WAYNE
              <br />
              <span>MANUBAG</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Computer Engineer &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-skill"><span className="gradient-text">Embedded</span> Systems</div>
              <div className="landing-skill"><span className="gradient-text">Full Stack</span> Developer</div>
              <div className="landing-skill"><span className="gradient-text">Automation</span> Specialist</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;

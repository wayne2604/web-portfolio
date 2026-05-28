import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Support Role</h4>
                <h5>Balancer — Remote</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Conducted thorough research and managed accurate data entry tasks to support organizational goals.
              Utilized Make.com and other automation workflows to streamline tasks and improve overall process efficiency.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>OJT-Technical Support Intern</h4>
                <h5>Sangguniang Panlungsod — Dapitan City</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Completed a required 240-hour internship, supporting daily office operations by actively troubleshooting
              and fixing hardware, specifically desktop computers and printers. Contributed to visual design projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tech Support Specialist</h4>
                <h5>PhilEx Logistics — Philippines</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Provided technical support to promptly resolve user issues, maintain optimal system efficiency, and
              perform consistent technical troubleshooting and hardware maintenance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Retail Customer Associate</h4>
                <h5>Tourney Biker Shop — Philippines</h5>
              </div>
              <h3>2020–23</h3>
            </div>
            <p>
              Managed daily point-of-sale transactions and tracked store inventory to ensure smooth operations.
              Delivered exceptional customer support by assisting clients with bike compatibility inquiries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

import { useState } from "react";
import { createPortal } from "react-dom";
import { FiZoomIn, FiX, FiAward } from "react-icons/fi";
import "./styles/Certificates.css";

const certificatesList = [
  {
    title: "AI Engineer Masterclass Bootcamp: 21 Courses in 1",
    issuer: "Udemy",
    image: "/Certificates/AI_Engineer.png",
    category: "AI & ML",
  },
  {
    title: "Vibe Coding",
    issuer: "Sololearn",
    image: "/Certificates/Vibe_Coding.png",
    category: "Programming",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "Cisco Networking Academy",
    image: "/Certificates/Artificial intelligence Fundamentals.png",
    category: "AI & ML",
  },
  {
    title: "AI-Powered Sales Specialist",
    issuer: "Udemy",
    image: "/Certificates/Ai_Sales.png",
    category: "AI & ML",
  },
  {
    title: "Cyber Threat Management",
    issuer: "Cisco Networking Academy",
    image: "/Certificates/Cyber Threat Management.png",
    category: "Cybersecurity",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    image: "/Certificates/Introduction to Cybersecurity.png",
    category: "Cybersecurity",
  },
  {
    title: "Introduction to IoT (Internet of Things)",
    issuer: "Cisco Networking Academy",
    image: "/Certificates/Introduction to IOT.png",
    category: "IoT & Networking",
  },
  {
    title: "Cisco Packet Tracer Resource Guide",
    issuer: "Cisco Networking Academy",
    image: "/Certificates/Packet Tracer.png",
    category: "IoT & Networking",
  },
  {
    title: "C++ Programming (Intermediate)",
    issuer: "Sololearn",
    image: "/Certificates/C++ Intermediate.png",
    category: "Programming",
  },
  {
    title: "Introduction to C++",
    issuer: "Sololearn",
    image: "/Certificates/Introduction to C++.png",
    category: "Programming",
  },
  {
    title: "Introduction to Python",
    issuer: "Sololearn",
    image: "/Certificates/Introduction to Python.png",
    category: "Programming",
  },
  {
    title: "Introduction to Visual Graphic Design",
    issuer: "Technical Education and Skills Development Authority (TESDA)",
    image: "/Certificates/Introduction to Visual Graphic Design.png",
    category: "Design",
  }
];

const categories = ["All", "AI & ML", "Cybersecurity", "Design", "Programming", "IoT & Networking"];

const Certificates = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCert, setSelectedCert] = useState<typeof certificatesList[0] | null>(null);

  const filteredCerts = activeFilter === "All"
    ? certificatesList
    : certificatesList.filter(cert => cert.category === activeFilter);

  return (
    <div className="certificates-section" id="certificates">
      <div className="certificates-container section-container">
        <h2>
          Certifications & <span>Training</span>
        </h2>

        {/* Categories filter */}
        <div className="cert-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`cert-filter-btn ${activeFilter === category ? "active" : ""}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificate Grid */}
        <div className="cert-grid">
          {filteredCerts.map((cert, index) => (
            <div
              key={index}
              className="cert-glow-card"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="cert-card-inner">
                {/* Image Container */}
                <div className="cert-img-container">
                  <img src={cert.image} alt={cert.title} loading="lazy" />
                  <div className="cert-hover-overlay">
                    <FiZoomIn className="cert-zoom-icon" />
                    <span>View Certificate</span>
                  </div>
                </div>

                {/* Info block */}
                <div className="cert-info">
                  <div className="cert-badge">
                    <FiAward className="cert-badge-icon" />
                    {cert.category}
                  </div>
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Preview Modal */}
      {selectedCert && createPortal(
        <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>
              <FiX />
            </button>
            <div className="cert-modal-body">
              <img src={selectedCert.image} alt={selectedCert.title} />
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Certificates;

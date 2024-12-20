import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Hero.css";
// import heroImage from "./images/Vamsi.jpg";
import CvPath from "./images/Sai_Vamsi_Resume.pdf";

// Importing social media icons
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero d-flex align-items-center" id="hero">
      <div className="container">
        <div className="row">
          {/* Text Section */}
          <div className="col-lg-6 d-flex flex-column justify-content-center pe-lg-5 py-4">
            <h1 className="hero-title">
              Welcome to <span className="brand">My Portfolio</span>
            </h1>
            <p className="hero-subtitle">
              I’m a passionate <strong>Software Engineer</strong> creating amazing experiences.
            </p>
            <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
              <a href="#projects" className="btn btn-primary me-md-2 mb-2 mb-md-0">
                View Projects
              </a>
              <a
                href={CvPath} // Add your CV file link here
                download
                className="btn btn-outline-light"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Image and Social Media Section */}
          <div className="col-lg-6 d-flex flex-column align-items-center py-4">
            {/* Image */}
            {/* <img
              src={heroImage}
              alt="Hero"
              className="img-fluid mb-3"
              style={{
                width: "100%",
                maxWidth: "300px",
                height: "auto",
                borderRadius: "30%",
              }}
            /> */}

            {/* Social Media Icons */}
            <div className="social-icons text-center mt-2">
              
              <a
                href="https://www.linkedin.com/in/sai-vamsi-352122281/"
                className="me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={80} className="icon-bg" />
              </a>
              <a
                href="https://github.com/SaiVamsiKamma"
                className="me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={80} className="icon-bg" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100008601852728"
                className="me-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={80} className="icon-bg" />
              </a>

              <a
                href="https://www.instagram.com/vamsichowdarykamma?igsh=emY1bmczbzg0YXZ1"
                className="me-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={80} className="icon-bg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

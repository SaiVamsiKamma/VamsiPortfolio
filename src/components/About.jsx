import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about py-5">
      <div className="container text-center">
        <h2 className="about-heading">About Me</h2>
        <p className="about-description mt-4">
          A dedicated <strong>Software Trainee Engineer</strong> with 3 months of professional experience specializing in{" "}
          <span className="highlight">HTML, CSS, JAVASCRIPT, MYSQL, C#, .NET</span>,REACT, API, and other modern technologies. 
          Proven ability to develop robust web applications, implement user-friendly interfaces, and deliver high-quality code 
          in fast-paced environments.
        </p>
        
      </div>
    </section>
  );
}

export default About;

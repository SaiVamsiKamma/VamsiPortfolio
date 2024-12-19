import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Projects.css"; 

function Projects() {
  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 projects-heading">My Projects</h2>
        <div className="row">
          {/* Project 1 */}
          <div className="col-md-4 mb-4">
            <div className="card project-card">
              <img src="./src/assets/images/SeatingConvocation.jpeg" className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">The project is a web-based application designed to optimize seating arrangements for events, 
            classrooms, or offices. It allows users to create, manage, and customize seating layouts efficiently. 
            The system ensures organized allocation of seats, enhances visibility, and improves space utilization.</p>
              </div>
            </div>
          </div>

          
          <div className="col-md-4 mb-4">
            <div className="card project-card">
              <img src="./src/assets/images/QrCode.jpg" className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                
                <p className="card-text">A QR code scanner is a tool or application used to read and interpret QR codes (Quick Response codes), which are two-dimensional barcodes. The scanner uses a camera or an imaging device to capture the QR code and decode the encoded information, such as URLs, text, contact details, or other data.</p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-4 mb-4">
            <div className="card project-card">
              <img src="./src/assets/images/PatientManagementSystem.jpeg" className="card-img-top" alt="Project 3" />
              <div className="card-body">
                <h5 className="card-title">Project 3</h5>
                <p className="card-text">A Patient Management System (PMS) is a software solution designed to streamline and organize healthcare operations by managing patient information, appointments, billing, and medical records. It enables healthcare providers to efficiently store, retrieve, and update patient data, ensuring better coordination and communication among medical staff.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

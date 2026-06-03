import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Drug Recommendation System",
    tag: "Final Year Project",
    description: "System uses sentiment analysis of drug reviews to suggest drugs based on patient experience.",
    tech: ["Jupyter Notebook", "VS Code", "Python", "Machine Learning"],
  },
  {
    id: 2,
    title: "IIT-NIT Seat Prediction",
    tag: "Prediction Project",
    description: "Built a model to predict whether a student may get a seat using KNeighbors Classifier and SVC.",
    tech: ["Jupyter Notebook", "Python", "SVC", "KNN"],
  },
  {
    id: 3,
    title: "Employee Management System",
    tag: "Backend Development",
    description: "Overseeing backend development for an integrated employee management system.",
    tech: ["Eclipse", "Tomcat Server", "Java", "MySQL"],
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title animate-on-scroll">Featured Projects</h2>
      
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card-container animate-on-scroll stagger-child">
            <div className="project-card-inner">
              
              {/* Front of Card */}
              <div className="project-card-front glass">
                <span className="project-tag">{project.tag}</span>
                <h3 className="project-title">{project.title}</h3>
                <div className="flip-hint">Hover to view details</div>
              </div>

              {/* Back of Card */}
              <div className="project-card-back glass">
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href="#" className="project-link" aria-label="GitHub Repository">
                    <FaGithub size={20} />
                  </a>
                  <a href="#" className="project-link" aria-label="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

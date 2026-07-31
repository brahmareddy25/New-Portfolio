import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Drug Recommendation System",
    tag: "Sentimental Analysis Project",
    description: "System uses sentiment analysis of drug reviews to suggest drugs based on patient experience.",
    tech: ["Jupyter Notebook", "VS Code", "Python", "Machine Learning"],
    githubLink: "#",
    demoLink: "#"
  },
  {
    id: 2,
    title: "IIT-NIT Seat Prediction",
    tag: "Prediction Project",
    description: "Built a model to predict whether a student may get a seat using KNeighbors Classifier and SVC.",
    tech: ["Jupyter Notebook", "Python", "SVC", "KNN"],
    githubLink: "#",
    demoLink: "#"
  },
  {
    id: 3,
    title: "PureScribe",
    tag: "Web Development",
    description: "A modern, highly interactive and responsive website featuring smooth GSAP and Framer Motion animations.",
    tech: ["Next.js", "GSAP", "Framer Motion", "React"],
    githubLink: null,
    demoLink: "https://www.purescribe.in"
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
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target={project.githubLink !== "#" ? "_blank" : undefined} 
                      rel={project.githubLink !== "#" ? "noopener noreferrer" : undefined} 
                      className="project-link" 
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                  {project.demoLink && project.demoLink !== "#" ? (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-btn-link glass"
                    >
                      <span>View Website</span>
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <a 
                      href={project.demoLink || "#"} 
                      className="project-link" 
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
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

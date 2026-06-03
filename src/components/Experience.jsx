import React from 'react';
import { Briefcase } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: "Java Developer",
    company: "Tata Consultancy Services (TCS) - Client: Verizon",
    duration: "July 2025 - Present",
    description: "Building backend services, developing microservices, and supporting CI/CD pipelines.",
  },
  {
    id: 2,
    role: "AI/ML/DS Intern",
    company: "Blackbuck Engineers Pvt. Ltd.",
    duration: "February 2024 - April 2024",
    description: "Focused on Natural Language Processing and Deep Learning fundamentals.",
  },
  {
    id: 3,
    role: "Java Full Stack Intern",
    company: "Henotic Technology Pvt. Ltd.",
    duration: "June 2023 - August 2023",
    description: "Coding, debugging, and executing end-to-end full stack development practices.",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title animate-on-scroll" style={{ textAlign: 'center' }}>Work Experience</h2>
      
      <div className="experience-banner animate-on-scroll">
        <img src="/experience_portrait.png" alt="Working Portrait" className="experience-banner-img" />
        <div className="experience-banner-overlay"></div>
      </div>

      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="timeline-item animate-on-scroll">
            <div className="timeline-icon">
              <Briefcase size={20} />
            </div>
            <div className="timeline-content glass">
              <h3 className="timeline-role">{exp.role}</h3>
              <h4 className="timeline-company">{exp.company}</h4>
              <span className="timeline-duration">{exp.duration}</span>
              <p className="timeline-description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: "AI & Data Science",
    skills: ["Machine Learning", "Deep Learning", "Gen AI", "Python", "Data Science"]
  },
  {
    title: "Backend Development",
    skills: ["Core Java", "Advanced Java", "Microservices", "Spring Boot", "REST APIs"]
  },
  {
    title: "Database & DevOps",
    skills: ["MySQL", "CI/CD Pipelines", "Git", "Docker"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title animate-on-scroll">Technical Skills</h2>
      
      <div className="skills-container">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category glass animate-on-scroll stagger-child">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-list">
              {category.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-name">{skill}</div>
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill"
                      style={{ 
                        width: `${Math.floor(Math.random() * (95 - 75 + 1) + 75)}%`,
                        animationDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

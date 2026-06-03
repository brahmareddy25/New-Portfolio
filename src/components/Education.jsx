import React from 'react';
import { Award, GraduationCap } from 'lucide-react';
import './Education.css';

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Artificial Intelligence and Data Science",
    institution: "SRKR Engineering College, Bhimavaram, AP",
    duration: "2020 - 2024",
    score: "CGPA: 8.72"
  },
  {
    degree: "Intermediate",
    major: "MPC",
    institution: "Sri Chaitanya College, Vijayawada, AP",
    duration: "2018 - 2020",
    score: "GPA: 9.5"
  },
  {
    degree: "SSC",
    major: "High School",
    institution: "Sri Chaitanya School, Kaikaluru, AP",
    duration: "2018",
    score: "GPA: 8.8"
  }
];

const awards = [
  "IIT Madras | Python for Data Science",
  "Infosys Springboard | Data Science",
  "HackerRank | 5 Star Python (Profile ID: chinthapallisvn1)",
  "Research Paper Publication | London Metropolitan University",
  "Young Intrapreneur Award | TCS"
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <div className="edu-awards-grid">
        <div className="education-col">
          <h2 className="section-title animate-on-scroll" style={{ textAlign: 'left' }}>Education</h2>
          <div className="edu-list">
            {education.map((edu, idx) => (
              <div key={idx} className="edu-card glass animate-on-scroll stagger-child">
                <div className="edu-header">
                  <GraduationCap className="edu-icon" size={24} />
                  <h3 className="edu-degree">{edu.degree}</h3>
                </div>
                <div className="edu-body">
                  <h4 className="edu-major">{edu.major}</h4>
                  <p className="edu-institution">{edu.institution}</p>
                  <div className="edu-footer">
                    <span className="edu-duration">{edu.duration}</span>
                    <span className="edu-score">{edu.score}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="awards-col">
          <div className="education-image-wrapper animate-on-scroll">
            <img src="/education_portrait.png" alt="Education Portrait" className="education-portrait" />
            <div className="education-image-glow"></div>
          </div>
          <h2 className="section-title animate-on-scroll" style={{ textAlign: 'left', marginTop: '3rem' }}>Certifications & Awards</h2>
          <div className="awards-list">
            {awards.map((award, idx) => (
              <div key={idx} className="award-item glass animate-on-scroll stagger-child">
                <Award className="award-icon" size={24} />
                <span className="award-text">{award}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

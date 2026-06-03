import React from 'react';
import { User, Mail, MapPin, Phone } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title animate-on-scroll">About Me</h2>
      
      <div className="about-grid">
        <div className="about-content animate-on-scroll">
          <p className="about-text">
            I am a Java developer with experience in backend services, microservices, CI/CD pipelines, and intelligent systems. I enjoy building reliable applications and combining software engineering with AI-driven problem solving.
          </p>
          <p className="about-text">
            In addition to building robust backends, I have a strong passion for WebApp Design. I enjoy crafting modern, responsive, and highly animated frontend interfaces that seamlessly connect to powerful APIs.
          </p>
          <p className="about-text">
            Alongside full-stack development, I am actively building toward AI-focused roles where I can apply Machine Learning, Deep Learning, Gen AI, and Python to create impactful solutions.
          </p>
        </div>

        <div className="about-details glass animate-scale-scroll">
          <ul className="details-list">
            <li className="detail-item">
              <User className="detail-icon" />
              <div>
                <span className="detail-label">Name</span>
                <span className="detail-value">Chinthapalli S V N Brahma Reddy</span>
              </div>
            </li>
            <li className="detail-item">
              <MapPin className="detail-icon" />
              <div>
                <span className="detail-label">Location</span>
                <span className="detail-value">Bhimavaram, AP, India</span>
              </div>
            </li>
            <li className="detail-item">
              <Phone className="detail-icon" />
              <div>
                <span className="detail-label">Phone</span>
                <span className="detail-value">+91 9573064992</span>
              </div>
            </li>
            <li className="detail-item">
              <Mail className="detail-icon" />
              <div>
                <span className="detail-label">Email</span>
                <span className="detail-value">chinthapallivenkat33@gmail.com</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

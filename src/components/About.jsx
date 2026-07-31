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

        <div className="id-card-wrapper animate-scale-scroll">
          {/* Swinging Arm Group (Animates all components in perfect unison) */}
          <div className="id-card-swinging-arm">
            {/* Lanyard Woven Rope Loop */}
            <div className="id-card-lanyard">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path 
                  d="M 15 0 C 35 110, 65 110, 85 0" 
                  fill="none" 
                  stroke="#151515" 
                  strokeWidth="5" 
                  strokeLinecap="round"
                />
                <path 
                  d="M 15 0 C 35 110, 65 110, 85 0" 
                  fill="none" 
                  stroke="var(--accent)" 
                  strokeWidth="1.5" 
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Lanyard Metal Clasp Clip */}
            <div className="id-card-clip"></div>
            
            {/* ID Card Badge */}
            <div className="id-card glass">
              {/* Slot Cutout */}
              <div className="id-card-slot"></div>

              {/* Hologram Flare Overlay */}
              <div className="hologram-overlay"></div>
              
              {/* Header banner */}
              <div className="id-card-header">
                <span className="badge-logo">DEVELOPER</span>
                <span className="badge-type">ACTIVE PASS</span>
              </div>
              
              {/* Profile Photo */}
              <div className="id-photo-container">
                <img src="/hero_video_cover.jpg" alt="Chinthapalli S V N Brahma Reddy" className="id-photo" />
                <div className="id-photo-glare"></div>
              </div>
              
              {/* Details */}
              <div className="id-info">
                <h3 className="id-name">Chinthapalli S V N Brahma Reddy</h3>
                <p className="id-role">Working in TCS</p>
                
                <div className="id-details-grid">
                  <div className="id-detail-row">
                    <span className="id-label">LOC:</span>
                    <span className="id-value">Bhimavaram, AP, IN</span>
                  </div>
                  <div className="id-detail-row">
                    <span className="id-label">TEL:</span>
                    <span className="id-value">+91 9573064992</span>
                  </div>
                  <div className="id-detail-row">
                    <span className="id-label">MAIL:</span>
                    <span className="id-value">chinthapallivenkat33@gmail.com</span>
                  </div>
                </div>
              </div>
              
              {/* Barcode Footer */}
              <div className="id-footer">
                <div className="barcode">
                  <div className="bar line-1"></div>
                  <div className="bar line-2"></div>
                  <div className="bar line-3"></div>
                  <div className="bar line-4"></div>
                  <div className="bar line-5"></div>
                  <div className="bar line-6"></div>
                  <div className="bar line-7"></div>
                  <div className="bar line-8"></div>
                </div>
                <span className="id-serial">ID: CS2026VN</span>
              </div>
            </div>
          </div>
          {/* Real shadow swinging in sync */}
          <div className="id-card-shadow"></div>
        </div>
      </div>
    </section>
  );
};

export default About;

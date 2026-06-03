import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Volume2, VolumeX } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Ensure the video plays and its muted state is strictly controlled
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
      // Many browsers require interaction to play unmuted video, but will autoplay muted.
      videoRef.current.play().catch(error => {
        console.warn("Autoplay was prevented by the browser:", error);
      });
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section className="hero-section">
      <div className="video-background">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          playsInline
          muted={isMuted}
          className="hero-video"
        >
          <source src="/intro-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      
      {/* Mute/Unmute Toggle Button */}
      <button 
        className="mute-toggle-btn" 
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
      
      <div className="hero-content">
        <h1 className="hero-title animate-on-scroll">
          Chinthapalli S V N<br />
          <span className="hero-title-highlight">Brahma Reddy</span>
        </h1>
        <p className="hero-subtitle animate-on-scroll stagger-child">
          Java Developer | Backend Engineer | WebApp Designer
        </p>
        <div className="hero-cta animate-on-scroll stagger-child">
          <a href="#about" className="glass hero-btn">Discover My Work</a>
        </div>
      </div>

      <div className="scroll-indicator animate-on-scroll">
        <span className="scroll-text">Scroll to explore</span>
        <ChevronDown className="scroll-icon" />
      </div>
    </section>
  );
};

export default Hero;

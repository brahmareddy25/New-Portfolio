import React, { useState } from 'react';
import { Mail, Phone, Heart, Send, CheckCircle2 } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState(''); // '' | 'submitting' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.target);
    // Replace with your Web3Forms Access Key
    formData.append("access_key", "670effa2-0c7d-483a-a293-7215bc90929f"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        e.target.reset();
      } else {
        console.error("Form error", data);
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission failed", error);
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content glass animate-on-scroll">
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-desc">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div className="contact-form-container">
            {status === 'success' ? (
              <div className="success-message">
                <CheckCircle2 size={48} className="success-icon" />
                <h3>Thank you for choosing me!</h3>
                <p>I will connect with you.</p>
                <button className="contact-btn" onClick={() => setStatus('')}>
                  Go Back
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" id="name" name="name" required placeholder="John Doe" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" required placeholder="john@example.com" />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+1 234 567 8900" />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Note *</label>
                  <textarea id="message" name="message" required placeholder="How can I help you?" rows={4}></textarea>
                </div>

                {status === 'error' && (
                  <p className="error-message">Oops! Something went wrong. Please try again.</p>
                )}

                <button 
                  type="submit" 
                  className="contact-btn submit-btn" 
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending...' : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/chinthapalli-s-v-n-brahma-reddy-bb1aba24b/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/brahmareddy25" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="tel:+919573064992" className="social-link" aria-label="Phone">
              <Phone size={24} />
            </a>
            <a href="mailto:chinthapallivenkat33@gmail.com" className="social-link" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            Designed & Built by Chinthapalli S V N Brahma Reddy
          </p>
          <p className="made-with">
            Made with <Heart size={14} className="heart-icon" /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;

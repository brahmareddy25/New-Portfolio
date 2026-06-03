import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  // Intersection Observer Fallback for browsers that don't support scroll-timeline
  useEffect(() => {
    if (!CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('fallback-visible');
            }
          }
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll('.animate-on-scroll, .animate-scale-scroll, .stagger-child').forEach((el) => {
        el.classList.add('fallback-hidden');
        observer.observe(el);
      });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className="portfolio-app">
      <Hero />
      <main className="container">
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Contact />
    </div>
  );
}

export default App;

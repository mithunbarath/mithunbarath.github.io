
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sectionRefs = {
    about: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    education: useRef<HTMLElement>(null),
    certifications: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      // The scroll listener below handles the 'home' section.
      // This observer should only take over when we've scrolled past the hero.
      if (window.scrollY > window.innerHeight * 0.5) {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }
    }, observerOptions);

    const refsToObserve = Object.values(sectionRefs).map(ref => ref.current).filter(Boolean);
    refsToObserve.forEach(ref => observer.observe(ref!));

    return () => {
      refsToObserve.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  // Add a separate effect for handling the 'home' section at the top
  useEffect(() => {
    const handleScroll = () => {
      // If we are in the top half of the page, the active section is 'home'.
      if (window.scrollY <= window.innerHeight * 0.5) {
        setActiveSection('home');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header activePage={activeSection} />
      <main>
        <About ref={sectionRefs.about} />
        <Skills ref={sectionRefs.skills} />
        <Projects ref={sectionRefs.projects} />
        <Experience ref={sectionRefs.experience} />
        <Education ref={sectionRefs.education} />
        <Certifications ref={sectionRefs.certifications} />
        <Contact ref={sectionRefs.contact} />
      </main>
      <Footer />
    </>
  );
};

export default App;
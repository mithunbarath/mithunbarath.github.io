
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  activePage: string;
}

const NAV_LINKS = ['about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];

const Header: React.FC<HeaderProps> = ({ activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/80 backdrop-blur-md shadow-lg shadow-black/20 h-16' : 'h-20'}`;

  const linkClasses = (section: string) =>
    `capitalize relative font-mono cursor-pointer transition-colors duration-300 hover:text-accent ${
      activePage === section ? 'text-accent' : 'text-slate-light'
    }`;

  const mobileLinkClasses = (section: string) =>
    `block py-3 text-center capitalize text-lg transition-colors duration-300 font-mono ${
      activePage === section ? 'text-accent font-bold' : 'text-slate-light'
    }`;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-6 h-full flex justify-between items-center">
        <a href="#home" className="text-2xl font-mono font-bold text-accent hover:text-white transition-colors">
          MB
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link, index) => (
            <a key={link} href={`#${link}`} className={linkClasses(link)}>
             <span className="text-accent">0{index+1}.</span> {link}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="space-y-1.5">
            <span className={`block w-7 h-0.5 bg-accent transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-7 h-0.5 bg-accent transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-7 h-0.5 bg-accent transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Nav Menu */}
        <div
          className={`md:hidden fixed top-0 right-0 w-2/3 max-w-sm h-full bg-light-bg/95 backdrop-blur-lg shadow-xl transition-transform duration-500 ease-in-out transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
            {NAV_LINKS.map((link, index) => (
              <a key={link} href={`#${link}`} className={mobileLinkClasses(link)} onClick={() => setIsMenuOpen(false)}>
                <span className="block text-accent text-sm">0{index+1}.</span> {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

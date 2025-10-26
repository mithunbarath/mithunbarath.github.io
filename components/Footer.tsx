import React from 'react';
import { GithubIcon, LinkedinIcon } from '../constants';

const Footer: React.FC = () => {
  const socialLinks = [
    { href: 'https://www.github.com/mithunbarath', icon: <GithubIcon className="w-6 h-6" /> },
    { href: 'https://www.linkedin.com/in/mithunbarathmr13/', icon: <LinkedinIcon className="w-6 h-6" /> },
  ];
  return (
    <>
      {/* Floating social links for desktop */}
      <div className="hidden md:flex flex-col items-center fixed bottom-0 left-12 z-10">
          <div className="flex flex-col items-center gap-6">
              {socialLinks.map(link => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-accent transform hover:-translate-y-1 transition-all duration-300">
                      {link.icon}
                  </a>
              ))}
          </div>
          <div className="w-px h-24 bg-slate mt-6"></div>
      </div>
      
      <footer className="py-6 text-center">
        <div className="md:hidden flex justify-center space-x-6 mb-4">
            {socialLinks.map(link => (
                  <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-accent">
                      {link.icon}
                  </a>
              ))}
        </div>
        <a href="https://github.com/mithunbarath" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-slate hover:text-accent transition-colors duration-300">
          Designed & Built by Mithun Barath M R
        </a>
      </footer>
    </>
  );
};

export default Footer;
import React, { useState } from 'react';
import { EXPERIENCE } from '../constants';
import type { ExperienceItem } from '../types';

const SectionTitle: React.FC<{ number: string; title: string; }> = ({ number, title }) => (
    <div className="flex items-center gap-4 mb-12 animate-fade-in-up w-full">
        <h2 className="text-2xl md:text-3xl font-sans font-bold text-slate-light whitespace-nowrap">
            <span className="text-accent font-mono text-xl md:text-2xl mr-2">{number}.</span>
            {title}
        </h2>
        <div className="w-full h-px bg-slate-700/50"></div>
    </div>
);


const Experience = React.forwardRef<HTMLElement>((_, ref) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section ref={ref} id="experience" className="page-container experience-bg">
      <div className="container mx-auto px-6 max-w-3xl">
        <SectionTitle number="04" title="Where I've Worked" />
        <div className="flex flex-col md:flex-row gap-8 min-h-[300px]">
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible">
            {EXPERIENCE.map((item, index) => (
              <button 
                key={index}
                onClick={() => setActiveTab(index)}
                className={`group relative text-left font-mono text-sm px-4 py-3 w-full whitespace-nowrap border-b-2 md:border-b-0 md:border-l-2 transition-colors duration-300 ${
                  activeTab === index ? 'text-accent border-accent bg-light-bg' : 'text-slate border-slate-700 hover:bg-light-bg/50 hover:text-accent'
                }`}
              >
                {item.company}
              </button>
            ))}
          </div>
          <div className="animate-fade-in-up w-full">
            {EXPERIENCE.map((item, index) => (
              <div key={index} className={`${activeTab === index ? 'block' : 'hidden'}`}>
                <h3 className="text-xl font-bold text-slate-light">
                  {item.role} <span className="text-accent">@ {item.company}</span>
                </h3>
                <p className="font-mono text-sm text-slate mb-4 mt-1">{item.duration}</p>
                <ul className="space-y-2">
                  {item.description.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent mr-3 mt-1">▹</span>
                      <span className="text-slate leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Experience.displayName = "Experience";
export default Experience;
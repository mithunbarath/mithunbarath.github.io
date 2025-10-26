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
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionTitle number="04" title="Where I've Worked" />
        <div className="flex flex-col md:flex-row gap-8 min-h-[350px]">
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible -mx-4 px-4 md:mx-0 md:px-0">
            {EXPERIENCE.map((item, index) => (
              <button 
                key={index}
                onClick={() => setActiveTab(index)}
                className={`group relative text-left font-mono text-sm px-4 py-3 w-full min-w-max md:min-w-full whitespace-nowrap border-b-2 md:border-b-0 md:border-l-2 transition-colors duration-300 ${
                  activeTab === index ? 'text-accent border-accent bg-light-bg' : 'text-slate border-slate-700 hover:bg-light-bg/50 hover:text-accent'
                }`}
              >
                {item.company}
              </button>
            ))}
          </div>
          <div className="w-full">
            {EXPERIENCE.map((item, index) => (
              activeTab === index && (
                <div key={index} className="animate-fade-in-up">
                  <h3 className="text-xl font-bold text-slate-light">
                    {item.role} <span className="text-accent">@ {item.company}</span>
                  </h3>
                  <p className="font-mono text-sm text-slate mb-4 mt-1">{item.duration}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                    <ul className="space-y-2 lg:col-span-3">
                      {item.description.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-accent mr-3 mt-1">▹</span>
                          <span className="text-slate leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {item.image1Url && item.image2Url && (
                       <div className="hidden lg:block lg:col-span-2 relative h-56 group mt-4 lg:mt-0">
                          <img
                              src={item.image1Url}
                              alt={`${item.company} visual 1`}
                              className="absolute top-0 left-0 w-4/5 h-auto rounded-lg shadow-lg border-2 border-slate-800/50 transition-all duration-300 ease-in-out transform -rotate-6 group-hover:rotate-2 group-hover:scale-105"
                          />
                          <img
                              src={item.image2Url}
                              alt={`${item.company} visual 2`}
                              className="absolute bottom-0 right-0 w-4/5 h-auto rounded-lg shadow-xl border-2 border-slate-800/50 transition-all duration-300 ease-in-out transform rotate-6 group-hover:-rotate-2 group-hover:scale-105 z-10"
                          />
                      </div>
                    )}
                  </div>

                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Experience.displayName = "Experience";
export default Experience;
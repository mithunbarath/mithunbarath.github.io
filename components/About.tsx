import React, { useState } from 'react';
import { generateBio } from '../services/geminiService';

const SectionTitle: React.FC<{ number: string; title: string; }> = ({ number, title }) => (
    <div className="flex items-center gap-4 mb-12 animate-fade-in-up w-full">
        <h2 className="text-2xl md:text-3xl font-sans font-bold text-slate-light whitespace-nowrap">
            <span className="text-accent font-mono text-xl md:text-2xl mr-2">{number}.</span>
            {title}
        </h2>
        <div className="w-full h-px bg-slate-700/50"></div>
    </div>
);


const About = React.forwardRef<HTMLElement>((_, ref) => {
  const [bio, setBio] = useState(`
    Motivated and innovative computer science graduate specializing in data analytics, machine learning, and full-stack development. 
    Experienced in developing AI-powered healthcare systems and scalable web platforms through hands-on internships and projects. 
    Passionate about leveraging data-driven insights and technology to solve real-world problems with creativity and precision.
  `);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateBio = async () => {
    setIsLoading(true);
    const newBio = await generateBio("Mithun Barath M R");
    setBio(newBio);
    setIsLoading(false);
  };

  const achievements = [
    'Co-founded "MedClara" – Startup for Automation in Healthcare.',
    'Selected at District Level - Smart India Hackathon 2024.',
    'Ideathon 2024 - Maximum Automation Scripts (Python).',
    'Coursera-Google Certified Data Analyst, 2024.',
  ];

  return (
    <section ref={ref} id="about" className="page-container about-bg">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionTitle number="01" title="About Me" />
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 opacity-0 animate-slide-in-left">
            <div className="space-y-4 text-slate leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: bio.replace(/\n/g, '<br/><br/>') }}></p>
              <h3 className="text-xl font-bold text-slate-light pt-4">Professional Achievements</h3>
              <ul className="space-y-2">
                {achievements.map((item, index) => (
                  <li key={index} className="flex items-start">
                     <span className="text-accent mr-3 mt-1">▹</span>
                     <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
             <div className="mt-8">
              <button 
                onClick={handleGenerateBio} 
                disabled={isLoading}
                className="group relative inline-flex items-center justify-center px-6 py-2 text-sm font-mono text-accent border border-accent rounded-md hover:bg-accent/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </>
                ) : (
                  <>
                    <img src="https://www.gstatic.com/a/guides/images/gemini-icon.svg" alt="Gemini" className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:rotate-12"/>
                    Generate AI Bio
                  </>
                )}
              </button>
            </div>
          </div>
          <div className="md:col-span-2 relative opacity-0 animate-slide-in-right">
             <div className="group w-full max-w-xs mx-auto">
                 <div className="absolute -inset-0.5 bg-accent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src="https://picsum.photos/seed/mithun-avatar/400/400" 
                  alt="Mithun Barath M R"
                  className="relative rounded-lg w-full h-auto object-cover"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";
export default About;
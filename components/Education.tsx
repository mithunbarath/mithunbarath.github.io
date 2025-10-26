import React from 'react';
import { GraduationCapIcon } from '../constants';

const SectionTitle: React.FC<{ number: string; title: string; }> = ({ number, title }) => (
    <div className="flex items-center gap-4 mb-12 animate-fade-in-up w-full">
        <h2 className="text-2xl md:text-3xl font-sans font-bold text-slate-light whitespace-nowrap">
            <span className="text-accent font-mono text-xl md:text-2xl mr-2">{number}.</span>
            {title}
        </h2>
        <div className="w-full h-px bg-slate-700/50"></div>
    </div>
);

const Education = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="education" className="page-container education-bg">
      <div className="container mx-auto px-6 max-w-3xl">
        <SectionTitle number="05" title="Education" />
        <div className="space-y-6">
            <div className="glass-card p-8 rounded-lg animate-fade-in-up" style={{animationDelay: '100ms'}}>
                <div className="flex items-start gap-4">
                    <div className="mt-1">
                        <GraduationCapIcon className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-light">B.Sc. Computer Science with Data Analytics</h3>
                        <p className="text-md text-accent font-medium">PSG College of Arts & Science, Coimbatore</p>
                        <p className="text-slate-light font-mono text-sm mt-1">2022 - 2025</p>
                        <p className="text-slate mt-2">CGPA: 9.4</p>
                    </div>
                </div>
            </div>
             <div className="glass-card p-8 rounded-lg animate-fade-in-up" style={{animationDelay: '200ms'}}>
                <div className="flex items-start gap-4">
                    <div className="mt-1">
                        <GraduationCapIcon className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-light">Higher Secondary Certificate (HSC)</h3>
                        <p className="text-md text-accent font-medium">Veveaham Matric hr sec school</p>
                        <p className="text-slate-light font-mono text-sm mt-1">2022</p>
                        <p className="text-slate mt-2">Percentage: 90.6%</p>
                    </div>
                </div>
            </div>
             <div className="glass-card p-8 rounded-lg animate-fade-in-up" style={{animationDelay: '300ms'}}>
                <div className="flex items-start gap-4">
                    <div className="mt-1">
                        <GraduationCapIcon className="w-8 h-8 text-accent" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-light">Secondary School Leaving Certificate (SSLC)</h3>
                        <p className="text-md text-accent font-medium">Veveaham Matric hr sec school</p>
                        <p className="text-slate-light font-mono text-sm mt-1">2020</p>
                        <p className="text-slate mt-2">Percentage: 92%</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
});

Education.displayName = "Education";
export default Education;
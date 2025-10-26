import React from 'react';
import { SKILLS } from '../constants';
import type { Skill } from '../types';

const SectionTitle: React.FC<{ number: string; title: string; }> = ({ number, title }) => (
    <div className="flex items-center gap-4 mb-12 animate-fade-in-up w-full">
        <h2 className="text-2xl md:text-3xl font-sans font-bold text-slate-light whitespace-nowrap">
            <span className="text-accent font-mono text-xl md:text-2xl mr-2">{number}.</span>
            {title}
        </h2>
        <div className="w-full h-px bg-slate-700/50"></div>
    </div>
);


const SkillItem: React.FC<{ skill: Pick<Skill, 'name'>, index: number }> = ({ skill, index }) => (
  <li 
    className="flex items-center gap-2 font-mono text-slate"
    style={{ animationDelay: `${index * 50}ms` }}
  >
    <span className="text-accent">▹</span> {skill.name}
  </li>
);

const Skills = React.forwardRef<HTMLElement>((_, ref) => {
  const half = Math.ceil(SKILLS.length / 2);
  const firstHalf = SKILLS.slice(0, half);
  const secondHalf = SKILLS.slice(half);

  return (
    <section ref={ref} id="skills" className="page-container skills-bg">
      <div className="container mx-auto px-6 max-w-3xl z-10">
        <SectionTitle number="02" title="My Tech Stack" />
        <p className="text-slate leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          Here are a few technologies I’ve been working with recently:
        </p>
        <div className="grid grid-cols-2 gap-4 stagger-in">
          <ul className="space-y-3">
            {firstHalf.map((skill, index) => (
              <SkillItem key={skill.name} skill={skill} index={index} />
            ))}
          </ul>
           <ul className="space-y-3">
            {secondHalf.map((skill, index) => (
              <SkillItem key={skill.name} skill={skill} index={index + firstHalf.length} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";
export default Skills;

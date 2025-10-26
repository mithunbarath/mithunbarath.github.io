import React from 'react';
import { PROJECTS } from '../constants';
import { GithubIcon, ExternalLinkIcon } from '../constants';
import type { Project } from '../types';

const SectionTitle: React.FC<{ number: string; title: string; }> = ({ number, title }) => (
    <div className="flex items-center gap-4 mb-12 animate-fade-in-up w-full">
        <h2 className="text-2xl md:text-3xl font-sans font-bold text-slate-light whitespace-nowrap">
            <span className="text-accent font-mono text-xl md:text-2xl mr-2">{number}.</span>
            {title}
        </h2>
        <div className="w-full h-px bg-slate-700/50"></div>
    </div>
);


const ProjectCard: React.FC<{ project: Project, index: number }> = ({ project, index }) => {
  return (
    <div 
      className="group glass-card rounded-lg p-6 shadow-lg transition-all duration-300 hover:!opacity-100 hover:shadow-accent/10 hover:-translate-y-2"
    >
      <div className="flex justify-between items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
        <div className="flex items-center space-x-4">
          {project.sourceUrl && (
            <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-accent transition-colors duration-300" aria-label="Source Code">
              <GithubIcon className="w-6 h-6" />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-accent transition-colors duration-300" aria-label="Live Demo">
              <ExternalLinkIcon className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
      <h3 className="text-xl font-bold text-slate-light mb-2 group-hover:text-accent transition-colors duration-300">{project.title}</h3>
      <p className="text-slate text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-slate">
        {project.tags.map((tag) => (
          <span key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref} id="projects" className="page-container projects-bg">
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionTitle number="03" title="Things I've Built" />
        <div className="grid md:grid-cols-2 gap-6 group">
          {PROJECTS.map((project, index) => (
            <div key={index} className="opacity-0 animate-fade-in-up transition-opacity duration-300 md:group-hover:opacity-50 md:hover:!opacity-100" style={{ animationDelay: `${index * 100}ms` }}>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";
export default Projects;
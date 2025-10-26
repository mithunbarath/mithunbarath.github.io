import React from 'react';
import type { Skill, Project, ExperienceItem, Certificate } from './types';

// Generic Icon component props
interface IconProps {
  className?: string;
}

// --- ICONS ---

export const GraduationCapIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 1.66 4 3 10 0v-5"></path></svg>
);

export const GithubIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export const ExternalLinkIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
);

export const CertificateIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="8" r="6"/>
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
  </svg>
);


// --- SKILLS DATA ---
export const SKILLS: Pick<Skill, 'name'>[] = [
  { name: 'Python' },
  { name: 'React' },
  { name: 'Node.js' },
  { name: 'Deep Learning' },
  { name: 'Django' },
  { name: 'MySQL' },
  { name: 'AWS' },
  { name: 'Git' },
  { name: 'Java' },
  { name: 'NLP' },
  { name: 'Power BI' },
  { name: 'C' },
];

// --- PROJECTS DATA ---
export const PROJECTS: Project[] = [
  {
    title: 'Ultrasound Report Generation for Pregnant Women',
    description: 'Flask-based ML application processing 8,000 images to auto-generate fetal reports using Deep Learning. A publication and patent have been filed for this work.',
    tags: ['Python', 'Flask', 'Deep Learning', 'Computer Vision'],
    imageUrl: 'https://picsum.photos/seed/ultrasound/600/400',
  },
  {
    title: 'EMR and Fetal Health Portal',
    description: 'A telemedicine web app for over 1,500 pregnant women, featuring AI-driven scheduling and report generation to serve rural areas effectively.',
    tags: ['React', 'Node.js', 'AI', 'Telemedicine', 'Healthcare'],
    imageUrl: 'https://picsum.photos/seed/emr/600/400',
    sourceUrl: 'https://github.com/mithunbarath/opnmr',
  },
  {
    title: 'E-Waste Management System',
    description: 'A Django-based platform connecting users to over 400 recycling locations, which has improved recycling efficiency by 25%. Submitted to the Yukti-National Innovation Repository.',
    tags: ['Python', 'Django', 'Sustainability', 'Web Platform'],
    imageUrl: 'https://picsum.photos/seed/ewaste/600/400',
  },
   {
    title: 'MedClara - Healthcare Automation',
    description: 'Co-founded a startup aimed at providing automation solutions in the healthcare sector, demonstrating entrepreneurial and leadership skills.',
    tags: ['Startup', 'Healthcare', 'Automation', 'Leadership'],
    imageUrl: 'https://picsum.photos/seed/medclara/600/400',
  },
];

// --- EXPERIENCE DATA ---
export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Machine Learning Developer Intern',
    company: 'PSG Hospitals, Coimbatore',
    duration: 'Dec 2024 - July 2025',
    description: [
      'Applied deep learning techniques for healthcare diagnostics and automation.',
      'Managed and preprocessed over 10,000 ultrasound images for fetal report generation.',
      'Co-developed healthcare reports that automate fetal health and nutrition analysis.',
    ],
    image1Url: 'https://picsum.photos/seed/psg1/500/300',
    image2Url: 'https://picsum.photos/seed/psg2/500/300',
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Net Tel Solutions, Coimbatore',
    duration: 'Apr 2024 - Jun 2024',
    description: [
      'Designed and implemented backend APIs, databases, and web servers.',
      'Debugged, optimized, and documented scalable web applications using React and Node.js.',
      'Contributed to the full software development lifecycle in a professional setting.',
    ],
    image1Url: 'https://picsum.photos/seed/nettel1/500/300',
    image2Url: 'https://picsum.photos/seed/nettel2/500/300',
  },
  {
    role: 'Technical Trainer',
    company: 'J-Impact Creative Learning and Consultancy Services',
    duration: 'Aug 2023 - Dec 2023',
    description: [
      'Instructed and mentored students in AIML, DevOps, and Full-Stack development with IoT integration.',
      'Led seminars and hands-on workshops on emerging technologies for over 200 students.',
      'Developed curriculum and hands-on projects to enhance practical learning.',
    ],
    image1Url: 'https://picsum.photos/seed/jimpact1/500/300',
    image2Url: 'https://picsum.photos/seed/jimpact2/500/300',
  },
];

// --- CERTIFICATIONS DATA ---
export const CERTIFICATIONS: Certificate[] = [
  { title: 'Google Certified Data Analyst', issuer: 'Google', year: '2024', imageUrl: 'https://picsum.photos/seed/cert-google/800/600' },
  { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2023', imageUrl: 'https://picsum.photos/seed/cert-aws/800/600' },
  { title: 'Deep Learning Specialization', issuer: 'DeepLearning.AI (Coursera)', year: '2023', imageUrl: 'https://picsum.photos/seed/cert-dl/800/600' },
  { title: 'React - The Complete Guide', issuer: 'Udemy', year: '2023', imageUrl: 'https://picsum.photos/seed/cert-react/800/600' },
  { title: 'Certified Python Developer', issuer: 'Python Institute', year: '2022', imageUrl: 'https://picsum.photos/seed/cert-python/800/600' },
  { title: 'Node.js and Express.js', issuer: 'Udemy', year: '2023', imageUrl: 'https://picsum.photos/seed/cert-node/800/600' },
  { title: 'Machine Learning by Stanford', issuer: 'Stanford Online (Coursera)', year: '2022', imageUrl: 'https://picsum.photos/seed/cert-ml/800/600' },
  { title: 'Git Essential Training', issuer: 'LinkedIn Learning', year: '2022', imageUrl: 'https://picsum.photos/seed/cert-git/800/600' },
  { title: 'SQL for Data Science', issuer: 'IBM (Coursera)', year: '2022', imageUrl: 'https://picsum.photos/seed/cert-sql/800/600' },
  { title: 'Power BI Data Analyst Associate', issuer: 'Microsoft', year: '2024', imageUrl: 'https://picsum.photos/seed/cert-powerbi/800/600' },
  { title: 'Scrum Foundation Professional', issuer: 'CertiProf', year: '2023', imageUrl: 'https://picsum.photos/seed/cert-scrum/800/600' },
];
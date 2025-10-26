// FIX: Import ReactNode to resolve 'JSX' namespace error and use a more idiomatic type for renderable icons.
import type { ReactNode } from 'react';

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface Project {
  title:string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string[];
  image1Url?: string;
  image2Url?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  imageUrl: string;
}
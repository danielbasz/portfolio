// TypeScript type definitions for the portfolio
export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  tags: string[];
  logo?: string;
  status?: 'completed' | 'incomplete';
  type: 'work' | 'education';
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  profileImage: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  socialLinks: SocialLink[];
  work: Experience[];
  education: Experience[];
}
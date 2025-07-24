// ============================================
// PORTFOLIO DATA MODELS & INTERFACES
// ============================================

// Core Data Models
export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  period: string;
  location?: string;
  description: string;
  tags: string[];
  image?: string;
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

// Component Props Types
export interface HeroProps {
  name: string;
  title: string;
  bio: string;
  profileImage: string;
  socialLinks: SocialLink[];
  resumeUrl?: string;
}

export interface SectionProps {
  title: string;
  description?: string;
  headerImages?: string[]; // Support multiple header images
  children: React.ReactNode;
  className?: string;
  backgroundColor?: 'light' | 'white';
}

export interface FooterProps {
  socialLinks: SocialLink[];
  copyrightText?: string;
}

// Utility Types
export type Theme = 'light' | 'dark';
export type DeviceType = 'mobile' | 'tablet' | 'desktop';

// Component State Types
export interface LoadingState {
  isLoading: boolean;
  error?: string;
}

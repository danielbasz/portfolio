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
  resumeUrl?: string;
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
  resumeUrl?: string; // Optional for future resume download feature
  email: string;
}

export interface SectionProps {
  title: string;
  description?: string;
  headerImages?: string[]; // Support multiple header images
  children: React.ReactNode;
  className?: string;
  backgroundColor?: 'light' | 'white' | 'transparent';
  hideHeader?: boolean; // When true, the section header (title/description/images) is not rendered
  zIndex?: number; // Optional z-index override for stacking between adjacent sections
  // Decorative, non-semantic backdrop word that scrolls with the section
  backdropText?: string;
  /** Negative upward offset in viewport height units (vh), e.g., 15 means -15vh */
  backdropOffsetY?: number;
  /** Negative upward offset in pixels, e.g., 100 means -100px. Takes precedence over backdropOffsetY. */
  backdropOffsetPx?: number;
  /** Parallax rate (negative moves up as you scroll down) */
  backdropRate?: number;
  /** Alignment of backdrop text ('left' or 'right', default 'right') */
  backdropAlign?: 'left' | 'right';
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

// ============================================
// PORTFOLIO APPLICATION CONSTANTS
// ============================================

// Application Meta
export const APP_NAME = 'Daniel Porto Portfolio';
export const APP_DESCRIPTION = 'Full Stack Software Developer & Multimedia Specialist';
export const APP_URL = 'https://danielporto.dev'; // Update with actual URL

// Contact Information
export const CONTACT = {
  EMAIL: 'danielbassporto@gmail.com',
  RESUME_URL: 'assets/daniel-porto-resume.pdf' // Update with actual path
} as const;

// Social Media Platform Constants
export const SOCIAL_PLATFORMS = {
  LINKEDIN: 'linkedin',
  GITHUB: 'github',
  TWITTER: 'twitter',
  EMAIL: 'email',
  PORTFOLIO: 'portfolio'
} as const;

// Experience Type Constants
export const EXPERIENCE_TYPES = {
  WORK: 'work',
  EDUCATION: 'education'
} as const;

// Experience Status Constants
export const EXPERIENCE_STATUS = {
  COMPLETED: 'completed',
  INCOMPLETE: 'incomplete',
  IN_PROGRESS: 'in_progress'
} as const;

// Theme Constants
export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
} as const;

// Layout Constants
export const LAYOUT = {
  CONTAINER_MAX_WIDTH: '1200px',
  SECTION_PADDING: '100px',
  CARD_PADDING: '32px',
  GRID_GAP: '40px'
} as const;

// Breakpoint Constants (matching SCSS variables)
export const BREAKPOINTS = {
  MOBILE: 480,
  TABLET: 768,
  DESKTOP: 1200
} as const;

// Animation Constants
export const ANIMATIONS = {
  TRANSITION_DURATION: '0.3s',
  HOVER_TRANSFORM: 'translateY(-8px)',
  FOCUS_OUTLINE_WIDTH: '2px'
} as const;

// Asset Paths
export const ASSETS = {
  IMAGES: 'assets/',
  ICONS: 'icons/',
  DOCUMENTS: 'documents/'
} as const;

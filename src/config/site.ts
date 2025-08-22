export const siteConfig = {
  name: "Daniel Porto",
  title: "Daniel Porto - Developer & Multimedia Specialist", 
  description: "Full Stack Software Developer & Multimedia Specialist passionate in bridging technology and art through code and creative media.",
  url: "https://danielbasz.github.io/portfolio-nextjs/",
  
  author: {
    name: "Daniel Porto",
    email: "danielbassporto@gmail.com",
    bio: "Passionate in bridging technology and art through code and creative media.",
    profileImage: "assets/profile-picture.jpg"
  },

  contact: {
    email: "danielbassporto@gmail.com",
    resumeUrl: "assets/daniel-porto-resume.pdf"
  },

  social: {
    linkedin: "https://linkedin.com/in/danielbza",
    github: "https://github.com/danielbasz"
  },

  deployment: {
    basePath: "/portfolio-nextjs",
    assetPrefix: "/portfolio-nextjs"
  },

  seo: {
    keywords: [
      "Full Stack Developer", 
      "Software Engineer", 
      "Multimedia", 
      "Angular", 
      "Java", 
      "React", 
      "Next.js", 
      "Web Development"
    ],
    twitterHandle: "@danielbasz", // Update if you have one
    googleVerificationCode: "your-google-verification-code"
  }
} as const;

export type SiteConfig = typeof siteConfig;
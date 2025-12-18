// Structured data for the portfolio - real content from version 1
import { PortfolioData } from '../models';
import { siteConfig } from '../config/site';

export const portfolioData: PortfolioData = {
  resumeUrl: siteConfig.contact.resumeUrl,
  personal: {
    name: siteConfig.author.name,
    title: "Software Development & Multimedia",
    bio: siteConfig.author.bio,
    email: siteConfig.author.email,
    profileImage: siteConfig.author.profileImage
  },
  socialLinks: [
    {
      name: "LinkedIn",
      url: siteConfig.social.linkedin,
      icon: "linkedin"
    },
    {
      name: "GitHub", 
      url: siteConfig.social.github,
      icon: "github"
    }
  ],
  work: [
    {
      id: "cra-fullstack-2023",
      title: "CS1 Full Stack Developer",
      organization: "Canada Revenue Agency",
      period: "Sep 2023 - Mar 2025",
      location: "Ottawa, ON",
      description: "Modernized legacy tax auditing systems, driving digital transformation and improved government service. Developed and maintained enterprise web applications using Angular frontend and Java backend. Championed Agile, CI/CD, and DevOps best practices, leading to faster, more reliable deployments.",
      tags: ["Java", "Maven", "Angular", "SQL", "Playwright", "JUnit", "Jasmine", "Microsoft 365"],
      image: "assets/cra-logo.png",
      type: "work"
    },
    {
      id: "cra-coop-2022",
      title: "Co-op Full Stack Developer",
      organization: "Canada Revenue Agency",
      period: "Aug 2022 - Sep 2023",
      location: "Ottawa, ON",
      description: "Contributed to development of legacy tax auditing systems using Java Weblogic and Swing. Developed RESTful APIs and backend services for critical tax processing operations. Created and maintained JUnit test cases to ensure high code quality.",
      tags: ["Java", "Maven", "Swing", "JUnit", "SQL", "Microsoft 365"],
      image: "assets/cra-logo.png",
      type: "work"
    },
    {
      id: "globo-web-content-2019",
      title: "Web Content Editor II",
      organization: "Globo TV",
      period: "Jul 2019 - Aug 2020",
      location: "Rio de Janeiro, Brazil",
      description: "Developed Python and JavaScript automation tools for high-volume short-form video content at a leading broadcast network. Engineered reusable templates in Adobe Premiere and After Effects, enhancing production efficiency. Reduced daily production time from 40 to 6 minutes through automation.",
      tags: ["Python", "JavaScript", "Adobe Premiere", "After Effects", "Automation"],
      image: "assets/globo-logo.webp",
      type: "work"
    },
    {
      id: "globo-cinema-editor-2017",
      title: "Cinema Editor I",
      organization: "Globo TV",
      period: "Jan 2017 - Jul 2019",
      location: "Rio de Janeiro, Brazil",
      description: "Edited and adapted broadcast series and feature films under tight deadlines. Optimized longer media content for diverse broadcast timeslots to ensure continuous programming. Spearheaded editing for Globoplay original content, reimagining TV shows for online media.",
      tags: ["Video Editing", "Broadcast", "Media Management", "Post-Production"],
      image: "assets/globo-logo.webp",
      type: "work"
    },
    {
      id: "andarilho-creative-director-2012",
      title: "Creative Director/Co-Founder",
      organization: "Andarilho Filmes",
      period: "Jan 2012 - Jan 2017",
      location: "Rio de Janeiro, Brazil",
      description: "Co-founded and led a film production company, managing creative, technical, and business operations. Directed editing and cinematography, delivering high-quality content for diverse projects. Managed IT and equipment infrastructure, optimizing efficiency and resource allocation.",
      tags: ["Film Production", "Cinematography", "Creative Direction", "Business Management", "IT Management"],
      image: "assets/andarilho-logo.png",
      type: "work"
    }
  ],
  education: [
    {
      id: "algonquin-computer-programming",
      title: "Computer Programming Diploma",
      organization: "Algonquin College",
      period: "Sep 2021 - Sep 2023",
      location: "Ottawa, ON",
      description: "Java OOP, Database Systems, Web Development, Data Analysis, Technical Writing. Dean's Honours List (GPA 3.5-4.0).",
      tags: ["Java", "OOP", "Database Systems", "Web Development", "Data Analysis", "Technical Writing"],
      image: "assets/algonquin.jpg",
      status: "completed",
      type: "education"
    },
    {
      id: "mitx-python-certification",
      title: "Intro to Computer Science and Programming using Python",
      organization: "MITx/edX.org",
      period: "Jan 2016 - Mar 2016",
      location: "Online",
      description: "Object-oriented programming concepts, data structures, visualization, and analysis.",
      tags: ["Python", "OOP", "Data Structures", "Visualization", "Analysis"],
      image: "assets/mitx-logo.jpg",
      status: "completed",
      type: "education"
    },
    {
      id: "pucpr-social-communication",
      title: "B.A. Social Communication",
      organization: "PUCPR",
      period: "Feb 2005 - Feb 2010",
      location: "Curitiba, Brazil",
      description: "Advertising, Marketing, Digital Media, Film Production.",
      tags: ["Advertising", "Marketing", "Digital Media", "Film Production"],
      image: "assets/pucpr.png",
      status: "completed",
      type: "education"
    },
    {
      id: "pucpr-graphic-design",
      title: "B.A. Graphic Design",
      organization: "PUCPR",
      period: "Feb 2004 - Feb 2005",
      location: "Curitiba, Brazil",
      description: "Art history, color theory, design and composition principles, digital media.",
      tags: ["Art History", "Color Theory", "Design Principles", "Composition", "Digital Media"],
      image: "assets/pucpr.png",
      status: "incomplete",
      type: "education"
    },
    {
      id: "pucrj-computer-science",
      title: "B.A. Computer Science",
      organization: "PUCRJ",
      period: "Feb 2002 - Feb 2003",
      location: "Rio de Janeiro, Brazil",
      description: "Introduction to C Programming, Data Structures and Algorithms.",
      tags: ["C Programming", "Data Structures", "Algorithms"],
      image: "assets/puc-rio-logo-png_seeklogo-234369.png",
      status: "incomplete",
      type: "education"
    }
  ]
};

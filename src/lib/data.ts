// Structured data for the portfolio - real content from version 1
import { PortfolioData } from '../models';
import { siteConfig } from '../config/site';

export const portfolioData: PortfolioData = {
  resumeUrl: siteConfig.contact.resumeUrl,
  personal: {
    name: siteConfig.author.name,
    title: "Development & Multimedia",
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
      id: "cra-software-developer",
      title: "Software Developer",
      organization: "Canada Revenue Agency",
      period: "Aug 2022 - Mar 2025",
      location: "Ottawa, ON",
      roles: [
        {
          title: "CS1 Software Developer",
          period: "Sep 2023 - Mar 2025",
          bullets: [
            "Developed and maintained large-scale enterprise applications using Java and Angular, collaborating with cross-functional teams to deliver reliable solutions for the federal government",
            "Provided production support and joined on-call rotations, troubleshooting incidents and analyzing logs to ensure system reliability and minimize downtime",
            "Demonstrated technical leadership by training new hires, driving modernization initiatives, and acting as Team Lead when needed",
            "Drove legacy system refactoring, migrating from Swing/Weblogic architecture to modern JavaScript frameworks"
          ],
          tags: ["Java", "Angular", "TypeScript", "SQL", "Playwright", "JUnit", "Jasmine", "Jenkins"]
        },
        {
          title: "Co-op Software Developer",
          period: "Aug 2022 - Sep 2023",
          bullets: [
            "Built Swing interfaces, RESTful APIs and business logic in Java with relational database integration for critical government operations",
            "Created comprehensive technical documentation and collaborated in stakeholder meetings to analyze requirements and communicate technical concepts",
            "Investigated and resolved code errors and production incidents by analyzing logs and partnering with QA teams on debugging"
          ],
          tags: ["Java", "Swing", "REST APIs", "SQL", "JUnit", "Maven"]
        }
      ],
      tags: ["Java", "Angular", "TypeScript", "SQL", "REST APIs"],
      image: "assets/cra-logo.png",
      type: "work"
    },
    {
      id: "globo-film-editor",
      title: "Film Editor",
      organization: "Globo TV",
      period: "Jan 2017 - Aug 2020",
      location: "Rio de Janeiro, Brazil",
      roles: [
        {
          title: "Web Content Editor II",
          period: "Jul 2019 - Aug 2020",
          bullets: [
            "Developed Python and JavaScript automation tools for high-volume short-form video content creation",
            "Engineered reusable templates in Adobe Premiere and After Effects, enhancing production efficiency",
            "Edited and delivered up to 25 minutes of daily short-form video content for Globo's Media Out of Home",
            "Collaborated cross-functionally to ensure consistent file review and deployment"
          ],
          tags: ["Python", "JavaScript", "Adobe Premiere", "After Effects", "Automation"]
        },
        {
          title: "Cinema Editor I",
          period: "Jan 2017 - Jul 2019",
          bullets: [
            "Edited series and feature films under tight deadlines for Brazil's leading broadcast network",
            "Optimized longer media content for diverse television timeslots to ensure continuous programming",
            "Spearheaded editing for Globoplay original content, reimagining TV shows for online media",
            "Managed extensive media databases with strict naming conventions for efficient asset management"
          ],
          tags: ["Video Editing", "Broadcast", "Media Management", "Post-Production"]
        }
      ],
      tags: ["Python", "Video Editing", "Adobe Creative Suite"],
      image: "assets/globo-logo.webp",
      type: "work"
    },
    {
      id: "andarilho-technical-director",
      title: "Technical Director",
      organization: "Andarilho Filmes",
      period: "Jan 2012 - Present",
      location: "Rio de Janeiro, Brazil",
      roles: [
        {
          title: "Technical Director / Co-Founder",
          period: "Jan 2012 - Present",
          bullets: [
            "Co-founded a film production company with two partners, directing technical operations including IT and Post-Production",
            "Produced generative AI assets for theatrical production pitches displayed to prospective investors",
            "Managed IT and camera equipment infrastructure, optimizing efficiency and resource allocation"
          ],
          tags: ["Film Production", "Generative AI", "IT Management", "Cinematography", "Business Management"]
        }
      ],
      tags: ["Film Production", "IT Management", "Generative AI"],
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
      description: "Dean's Honours List (GPA 3.5-4.0)",
      tags: ["Java", "OOP", "Database Systems", "Web Development", "Data Analysis", "Technical Writing"],
      image: "assets/algonquin.jpg",
      status: "completed",
      type: "education"
    },
    {
      id: "pucpr-social-communication",
      title: "B.A. Social Communication",
      organization: "PUCPR",
      period: "Feb 2005 - Feb 2010",
      location: "Curitiba, Brazil",
      tags: ["Advertising", "Marketing", "Digital Media", "Film Production"],
      image: "assets/pucpr.png",
      status: "completed",
      type: "education"
    }
  ],
  misc: [
    {
      id: "mitx-python-certification",
      title: "Intro to Computer Science and Programming using Python",
      organization: "MITx/edX.org",
      period: "Jan 2016 - Mar 2016",
      location: "Online",
      tags: ["Python", "OOP", "Data Structures", "Visualization", "Analysis"],
      image: "assets/mitx-logo.jpg",
      status: "completed",
      type: "misc"
    },
    {
      id: "pucpr-graphic-design",
      title: "B.A. Graphic Design",
      organization: "PUCPR",
      period: "Feb 2004 - Feb 2005",
      location: "Curitiba, Brazil",
      tags: ["Art History", "Color Theory", "Design Principles", "Composition", "Digital Media"],
      image: "assets/pucpr.png",
      status: "incomplete",
      type: "misc"
    },
    {
      id: "pucrj-computer-science",
      title: "B.A. Computer Science",
      organization: "PUCRJ",
      period: "Feb 2002 - Feb 2003",
      location: "Rio de Janeiro, Brazil",
      tags: ["C Programming", "Data Structures", "Algorithms"],
      image: "assets/puc-rio-logo-png_seeklogo-234369.png",
      status: "incomplete",
      type: "misc"
    }
  ]
};

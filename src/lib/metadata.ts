import type { Metadata } from "next";
import { siteConfig } from "../config/site";

export function generateMetadata(): Metadata {
  return {
    title: siteConfig.title,
    description: siteConfig.description,
    keywords: [...siteConfig.seo.keywords],
    authors: [{ 
      name: siteConfig.author.name, 
      url: siteConfig.url 
    }],
    creator: siteConfig.author.name,
    
    openGraph: {
      title: siteConfig.title,
      description: siteConfig.description,
      url: siteConfig.url,
      siteName: siteConfig.name + " Portfolio",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: siteConfig.author.profileImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.author.name} - Full Stack Developer`,
        },
      ],
    },
    
    twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      images: [siteConfig.author.profileImage],
    },
    
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    
    verification: {
      google: siteConfig.seo.googleVerificationCode,
    },
  };
}

export function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    jobTitle: "Full Stack Software Developer & Multimedia Specialist",
    email: siteConfig.contact.email,
    url: siteConfig.url,
    image: siteConfig.author.profileImage,
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.github
    ],
    worksFor: {
      "@type": "Organization",
      name: "Canada Revenue Agency"
    }
  };
}
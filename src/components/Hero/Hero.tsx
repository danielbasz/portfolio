'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { HeroProps } from '../../models';
import { useParallax } from '../../hooks';
import VideoBackground from '../VideoBackground/VideoBackground';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Hero.module.scss';

export default function Hero({ 
  name, 
  title, 
  bio, 
  profileImage, 
  socialLinks, 
  resumeUrl,
  email
}: HeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const heroSectionRef = useParallax({ rate: -0.5 });

  useEffect(() => {
    const heroTitle = titleRef.current;
    if (heroTitle) {
      const text = name;
      heroTitle.innerHTML = '';
      let i = 0;

      function typeWriter() {
        if (i < text.length) {
          i++;
          heroTitle!.innerHTML = `<mark>${text.substring(0, i)}&nbsp;</mark>`;
          setTimeout(typeWriter, 100);
        }
      }
      
      // Start typing effect after a short delay
      setTimeout(typeWriter, 500);
    }
  }, [name]);


  return (
<section id="hero" ref={heroSectionRef} className={styles.hero}>
      <VideoBackground videoId="GY0AbSBwP5w" />
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 ref={titleRef}>
              {name}
            </h1>
            <p className={styles.subtitle}>{title}</p>
            <p className={styles.bio}>{bio}</p>
            
            <div className={styles.contactLinks}>
              <div className={styles.contactRow}>
                <a href={`mailto:${email}`} className={styles.btnPrimary}>
                  Get in Touch
                </a>
                {resumeUrl && (
                  <a href={resumeUrl} className={styles.btnSecondary} target="_blank" rel="noopener noreferrer">
                    Download Résumé
                  </a>
                )}
              </div>
              <div className={styles.socialLinksInline}>
                {socialLinks.map((link) => {
                  const key = (link.icon || link.name).toLowerCase();
                  const Icon = key.includes('github') ? FaGithub : key.includes('linkedin') ? FaLinkedin : null;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      className={styles.socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      title={link.name}
                    >
                      {Icon ? <Icon size={24} /> : link.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className={styles.profileImageWrapper}>
            <Image
              src={profileImage}
              alt={`${name} profile photo`}
              width={300}
              height={300}
              className={styles.profilePhoto}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

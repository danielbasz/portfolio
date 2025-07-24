'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { HeroProps } from '../../models';
import styles from './Hero.module.scss';

export default function Hero({ 
  name, 
  title, 
  bio, 
  profileImage, 
  socialLinks, 
  resumeUrl 
}: HeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);

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

  // Parallax scroll effect – replicate behaviour from v1 site
  useEffect(() => {
    const heroEl = heroSectionRef.current;
    if (!heroEl) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      heroEl.style.transform = `translateY(${rate}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
<section ref={heroSectionRef} className={styles.hero}>
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
                <a href="mailto:danielbassporto@gmail.com" className={styles.btnPrimary}>
                  Get in Touch
                </a>
                <span className={styles.separator}>|</span>
                <div className={styles.socialLinksInline}>
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      className={styles.socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
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

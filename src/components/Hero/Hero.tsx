'use client';

import Image from 'next/image';
import { HeroProps } from '../../models';
import { useParallax } from '../../hooks';
import VideoBackground from '../VideoBackground/VideoBackground';
import styles from './Hero.module.scss';

export default function Hero({ 
  name, 
  title, 
  bio, 
  profileImage, 
  resumeUrl,
  email
}: HeroProps) {
  const heroSectionRef = useParallax({ rate: -0.5 });


  return (
<section id="hero" ref={heroSectionRef} className={styles.hero}>
      <VideoBackground videoId="GY0AbSBwP5w" />
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>
              <mark>{name}</mark>
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

'use client';

import { useState } from 'react';
import { HeroProps } from '../../models';
import { useParallax } from '../../hooks';
import VideoBackground from '../VideoBackground/VideoBackground';
import ContactModal from '../ui/ContactModal';
import styles from './Hero.module.scss';

export default function Hero({ 
  name, 
  title, 
  bio, 
  resumeUrl
}: HeroProps) {
  const heroSectionRef = useParallax({ rate: -0.5 });
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <section id="hero" ref={heroSectionRef} className={styles.hero}>
        <VideoBackground videoId="GY0AbSBwP5w" />
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>
                <mark>{name}&nbsp;</mark>
              </h1>
              <p className={styles.subtitle}>{title}</p>
              <p className={styles.bio}>{bio}</p>
              
              <div className={styles.contactLinks}>
                <div className={styles.contactRow}>
                  <button onClick={() => setIsContactOpen(true)} className={styles.btnPrimary}>
                    Get in Touch
                  </button>
                  {resumeUrl && (
                    <a href={resumeUrl} className={styles.btnSecondary} download="Daniel-Porto-Resume.pdf">
                      Download Résumé
                    </a>
                  )}
                </div>
              </div>
            </div>
          
          {/* <div className={styles.profileImageWrapper}>
            <Image
              src={profileImage}
              alt={`${name} profile photo`}
              width={300}
              height={300}
              className={styles.profilePhoto}
              priority
            />
          </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

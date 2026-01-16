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
              <div className={styles.titleRow}>
                <h1>
                  <mark>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name}&nbsp;</mark>
                </h1>
                <div className={styles.iconButtons}>
                  <button
                    onClick={() => setIsContactOpen(true)}
                    className={styles.iconBtnOutline}
                    aria-label="Get in touch"
                    title="Get in Touch"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 6L12 13L2 6" />
                    </svg>
                  </button>
                  {resumeUrl && (
                    <a
                      href={resumeUrl}
                      className={styles.iconBtnOutline}
                      download="Daniel-Porto-Resume.pdf"
                      aria-label="Download CV"
                      title="Download CV"
                    >
                      CV
                    </a>
                  )}
                </div>
              </div>
              <p className={styles.subtitle}>{title}</p>
            </div>
          </div>
        </div>
        {/* White separator line at bottom of hero */}
        <div className={styles.separator} />
      </section>
    </>
  );
}

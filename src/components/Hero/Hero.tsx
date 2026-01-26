'use client';

import { useState, useRef, useEffect } from 'react';
import { HeroProps } from '../../models';
import { useParallax } from '../../hooks';
import VideoBackground from '../VideoBackground/VideoBackground';
import ContactModal from '../ui/ContactModal';
import styles from './Hero.module.scss';

const CV_OPTIONS = [
  { label: 'Developer', url: 'assets/daniel-porto-resume.pdf', filename: 'Daniel-Porto-Resume-Developer.pdf' },
  { label: 'Film Editor', url: 'assets/daniel-porto-resume-video.pdf', filename: 'Daniel-Porto-Resume-Film-Editor.pdf' },
];

export default function Hero({
  name,
  title,
}: HeroProps) {
  const heroSectionRef = useParallax({ rate: -0.5 });
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isCvDropdownOpen, setIsCvDropdownOpen] = useState(false);
  const cvDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cvDropdownRef.current && !cvDropdownRef.current.contains(event.target as Node)) {
        setIsCvDropdownOpen(false);
      }
    };

    if (isCvDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCvDropdownOpen]);

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
                  <div className={styles.cvDropdownWrapper} ref={cvDropdownRef}>
                    <button
                      onClick={() => setIsCvDropdownOpen(!isCvDropdownOpen)}
                      className={styles.iconBtnOutline}
                      aria-label="Download CV"
                      title="Download CV"
                      aria-expanded={isCvDropdownOpen}
                      aria-haspopup="true"
                    >
                      CV
                    </button>
                    {isCvDropdownOpen && (
                      <div className={styles.cvDropdown}>
                        {CV_OPTIONS.map((option) => (
                          <a
                            key={option.label}
                            href={option.url}
                            download={option.filename}
                            className={styles.cvDropdownItem}
                            onClick={() => setIsCvDropdownOpen(false)}
                          >
                            {option.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
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

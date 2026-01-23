'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import Image from 'next/image';
import { Experience } from '../../models';
import styles from './ExperienceCard.module.scss';

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export default function ExperienceCard({ 
  experience, 
  className = '',
  isExpanded = false,
  onToggle
}: ExperienceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const {
    title,
    organization,
    period,
    location,
    description,
    roles,
    tags,
    image
  } = experience;

  // Intersection observer for scroll-in animation
  useEffect(() => {
    const element = cardRef.current;
    if (!element || isVisible) return; // Skip if already visible

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // React state instead of classList
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible]);

  // Dock magnification effect - scales card based on mouse proximity
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const cardCenterY = rect.top + rect.height / 2;
    const mouseY = e.clientY;

    // Calculate distance from mouse to card center (Y axis only for vertical dock effect)
    const distance = Math.abs(mouseY - cardCenterY);
    const maxDistance = 200; // pixels - range of magnification effect

    // Calculate scale: 1.0 at maxDistance, up to 1.05 when mouse is on the card
    const proximity = Math.max(0, 1 - distance / maxDistance);
    const scale = 1 + (proximity * 0.05); // max 5% scale increase

    // Apply the scale via CSS custom property
    cardRef.current.style.setProperty('--dock-scale', scale.toString());
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (cardRef.current) {
      cardRef.current.style.setProperty('--dock-scale', '1');
    }
  }, []);

  useEffect(() => {
    const container = cardRef.current?.parentElement;
    if (!container) return;

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  // Determine if the passed className corresponds to a CSS-module export.
  const additionalClass = className && (styles as Record<string, string>)[className] ? (styles as Record<string, string>)[className] : className;

  // Handle keyboard navigation for accessibility
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle?.();
    }
  }, [onToggle]);

  // Handle click to toggle expansion
  const handleClick = useCallback(() => {
    onToggle?.();
  }, [onToggle]);

  return (
    <div 
      ref={cardRef} 
      className={`${styles.projectCard} ${styles.horizontal} ${additionalClass} ${isVisible ? styles.visible : ''} ${isExpanded ? styles.expanded : ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      data-experience-card
    >
      {image && (
        <div className={styles.cardImage}>
          <Image
            src={image}
            alt={organization}
            width={300}
            height={280}
            className={styles.image}
          />
        </div>
      )}
      <div className={styles.cardContent}>
        <h3>
          {title}
          {(experience.type === 'education' || experience.type === 'misc') && experience.status === 'incomplete' && (
            <span className={styles.incomplete}>Incomplete</span>
          )}
        </h3>
        <p className={styles.jobTitle}>
          {organization} • {period}
          {location && ` • ${location}`}
        </p>
        
        {/* Expanded content - timeline for work, description for education */}
        <div className={styles.descriptionWrapper}>
          {roles && roles.length > 0 ? (
            <div className={styles.roleTimeline}>
              {roles.map((role, index) => (
                <div key={index} className={styles.roleEntry}>
                  <div className={styles.roleMeta}>
                    <span className={styles.roleDate}>{role.period}</span>
                    <span className={styles.roleTitle}>{role.title}</span>
                  </div>
                  <ul className={styles.roleBullets}>
                    {role.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                  {/* Tags per role */}
                  <div className={styles.roleTags}>
                    {role.tags.map((tag) => (
                      <span key={tag} className={styles.techTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              <p className={styles.description}>{description}</p>
              {/* Tags for education entries */}
              <div className={styles.techStack}>
                {tags.map((tag) => (
                  <span key={tag} className={styles.techTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      
      {/* Expand indicator */}
      <div className={styles.expandIndicator} aria-hidden="true">
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </div>
  );
}

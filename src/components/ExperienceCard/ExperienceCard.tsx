'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Experience } from '../../models';
import styles from './ExperienceCard.module.scss';

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export default function ExperienceCard({ experience, className = '' }: ExperienceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  const {
    title,
    organization,
    period,
    location,
    tags,
    image
  } = experience;

  // Intersection observer for scroll-in animation
  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          element.classList.add(styles.visible);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

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

  return (
    <div ref={cardRef} className={`${styles.projectCard} ${styles.horizontal} ${additionalClass}`}>
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
          {experience.type === 'education' && experience.status === 'incomplete' && (
            <span className={styles.incomplete}>Incomplete</span>
          )}
        </h3>
        <p className={styles.jobTitle}>
          {organization} • {period}
          {location && ` • ${location}`}
        </p>
        <div className={styles.techStack}>
          {tags.map((tag) => (
            <span key={tag} className={styles.techTag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

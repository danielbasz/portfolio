'use client';

import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { Experience } from '../../models';
import styles from './ExperienceCard.module.scss';

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export default function ExperienceCard({ experience, className = '' }: ExperienceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Initial animation - slide up when card appears
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            card.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  const {
    title,
    organization,
    period,
    location,
    description,
    tags,
    image
  } = experience;

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
        <h3>{title}</h3>
        <p className={styles.jobTitle}>
          {organization} • {period}
          {location && ` • ${location}`}
        </p>
        <p>{description}</p>
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

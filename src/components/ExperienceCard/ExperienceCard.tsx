'use client';

import Image from 'next/image';
import { Experience } from '../../models';
import { useIntersectionObserver } from '../../hooks';
import styles from './ExperienceCard.module.scss';

interface ExperienceCardProps {
  experience: Experience;
  className?: string;
}

export default function ExperienceCard({ experience, className = '' }: ExperienceCardProps) {
  const { ref: cardRef, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const {
    title,
    organization,
    period,
    location,
    tags,
    image
  } = experience;

  // Determine if the passed className corresponds to a CSS-module export.
  const additionalClass = className && (styles as Record<string, string>)[className] ? (styles as Record<string, string>)[className] : className;

  return (
    <div ref={cardRef} className={`${styles.projectCard} ${styles.horizontal} ${additionalClass} ${isVisible ? styles.visible : ''}`}>
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

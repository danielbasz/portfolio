'use client';

import Image from 'next/image';
import { SectionProps } from '../../models';
import styles from './Section.module.scss';

export default function Section({
  title,
  description,
  headerImages,
  children,
  className = '',
  backgroundColor = 'white'
}: SectionProps) {
  return (
    <section className={`${styles.section} ${styles[backgroundColor]} ${className}`}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
          </div>
          {headerImages && headerImages.length > 0 && (
            <div className={styles.sectionImages}>
              {headerImages.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${title} work ${index + 1}`}
                  width={100}
                  height={100}
                  className={styles.headerImage}
                />
              ))}
            </div>
          )}
        </div>
        
        <div className={styles.projectsGrid}>
          {children}
        </div>
      </div>
    </section>
  );
}

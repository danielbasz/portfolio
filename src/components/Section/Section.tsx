'use client';

import Image from 'next/image';
import { SectionProps } from '../../models';
import { useParallax } from '../../hooks';
import styles from './Section.module.scss';

export default function Section({
  title,
  description,
  headerImages,
  children,
  className = '',
  backgroundColor = 'white',
  hideHeader,
  zIndex,
  backdropText,
  backdropOffsetY,
  backdropOffsetPx,
  backdropRate = -0.15,
}: SectionProps) {
  const parallaxEnabled = Boolean(backdropText && backdropRate !== 0);
const backdropRef = useParallax<HTMLDivElement>({ rate: backdropRate, enabled: parallaxEnabled });
  const topStyle = backdropOffsetPx !== undefined
    ? `-${backdropOffsetPx}px`
    : backdropOffsetY !== undefined
    ? `-${backdropOffsetY}vh`
    : '-1px';

  return (
    <section className={`${styles.section} ${styles[backgroundColor]} ${className}`} style={zIndex !== undefined ? { zIndex } : undefined}>
{backdropText && (
        <div
ref={backdropRef}
          className={styles.backdropWord}
          style={{ top: topStyle }}
          aria-hidden="true"
        >
          <span className={styles.backdropText}>{backdropText}</span>
        </div>
      )}
      <div className={styles.container}>
        {!hideHeader && (
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
        )}
        
        <div className={styles.projectsGrid}>
          {children}
        </div>
      </div>
    </section>
  );
}

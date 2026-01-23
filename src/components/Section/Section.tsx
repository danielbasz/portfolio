'use client';

import { useEffect, useRef } from 'react';
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
  backdropAlign = 'right',
}: SectionProps) {
  const parallaxEnabled = Boolean(backdropText && backdropRate !== 0);
  const backdropRef = useParallax<HTMLDivElement>({ rate: backdropRate, enabled: parallaxEnabled });
  const textRef = useRef<HTMLSpanElement>(null);

  // Scroll-based gradient animation
  useEffect(() => {
    if (!textRef.current) return;

    const handleScroll = () => {
      if (!textRef.current) return;

      // Get scroll position and calculate gradient angle
      const scrollY = window.scrollY;
      // Faster angle oscillation with wider range (90deg to 180deg)
      const angle = 135 + Math.sin(scrollY * 0.006) * 45;
      // 3x faster gradient position shift for more noticeable movement
      const position = (scrollY * 0.3) % 200;

      textRef.current.style.background = `linear-gradient(${angle}deg, var(--primary-color) ${position}%, var(--secondary-color) ${position + 100}%)`;
      textRef.current.style.backgroundClip = 'text';
      textRef.current.style.webkitBackgroundClip = 'text';
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Only apply custom top offset if explicitly set to a non-zero value
  const hasCustomOffset = (backdropOffsetPx !== undefined && backdropOffsetPx !== 0) ||
    (backdropOffsetY !== undefined && backdropOffsetY !== 0);
  const topStyle = hasCustomOffset
    ? backdropOffsetPx !== undefined
      ? `-${backdropOffsetPx}px`
      : `-${backdropOffsetY}vh`
    : undefined;

  return (
    <section className={`${styles.section} ${styles[backgroundColor]} ${className}`} style={zIndex !== undefined ? { zIndex } : undefined}>
      {backdropText && (
        <div
          ref={backdropRef}
          className={`${styles.backdropWord} ${backdropAlign === 'left' ? styles.backdropWordLeft : ''}`}
          style={topStyle ? { top: topStyle } : undefined}
          aria-hidden="true"
        >
          <span ref={textRef} className={styles.backdropText}>{backdropText}</span>
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

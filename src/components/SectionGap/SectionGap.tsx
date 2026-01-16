'use client';

import styles from './SectionGap.module.scss';

interface SectionGapProps {
    backgroundImage: string;      // Palm trees
    patternImage?: string;        // Black and white pattern
    title?: string;
    className?: string;
}

export default function SectionGap({
    backgroundImage,
    patternImage = '/assets/white-space-addition.jpg',
    title = 'Hi!',
    className
}: SectionGapProps) {
    return (
        <section className={`${styles.sectionGap} ${className || ''}`}>
            {/* Base layer: Black and white pattern */}
            <div
                className={styles.patternLayer}
                style={{ backgroundImage: `url(${patternImage})` }}
            />

            {/* Top layer: Palm trees with blend mode */}
            <div
                className={styles.backgroundImage}
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />

            {/* Title coming from the right */}
            <div className={styles.content}>
                <div className={styles.titleWrapper}>
                    <h2>
                        <mark>{title}&nbsp;</mark>
                    </h2>
                </div>
            </div>
        </section>
    );
}

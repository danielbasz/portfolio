'use client';

import styles from './BackgroundContent.module.scss';

interface BackgroundContentProps {
    backgroundImage?: string;
    title?: string;
}

export default function BackgroundContent({
    backgroundImage = '/images/palm-trees.jpg',
    title = 'Hi!'
}: BackgroundContentProps) {
    return (
        <div className={styles.backgroundContent}>
            {/* Palm trees layer with blend mode */}
            <div
                className={styles.imageLayer}
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />

            {/* Title positioned in lower third, aligned right */}
            <div className={styles.content}>
                <div className={styles.titleWrapper}>
                    <h2>
                        <mark>{title}&nbsp;</mark>
                    </h2>
                </div>
            </div>
        </div>
    );
}

'use client';

import Section from '../Section/Section';
import styles from './DemoReelSection.module.scss';

interface DemoReelSectionProps {
  videoId: string;
}

export default function DemoReelSection({ videoId }: DemoReelSectionProps) {
  return (
    <Section
      title="Demo Reel"
      hideHeader={true}
      backdropText="REEL"
      backdropAlign="right"
      backdropOffsetPx={0}
      backdropRate={0}
    >
      <div className={styles.videoWrapper}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title="Demo Reel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.video}
        />
      </div>
    </Section>
  );
}

'use client';

import { memo } from 'react';
import { useParallax } from '../../hooks';
import styles from './ParallaxGap.module.scss';

interface ParallaxGapProps {
  height?: number; // px visible gap height
  overlap?: number; // px to overlap onto the next section (curtain covers top of next section)
  frontRate?: number; // faster moving front curtain
  backRate?: number;  // slower moving background tint
  className?: string;
}

function ParallaxGapBase({
  height = 180,
  overlap = 160,
  frontRate = -0.35,
  backRate = -0.12,
  className = ''
}: ParallaxGapProps) {
  const frontRef = useParallax({ rate: frontRate, enabled: true });
  const backRef = useParallax({ rate: backRate, enabled: true });

  // Total layer height must include the overlap so the curtain can cover the next section top
  const layerHeight = `calc(${height}px + ${overlap}px)`;

  return (
    <div
      className={`${styles.gap} ${className}`}
      style={{ height, marginBottom: `-${overlap}px` }}
      aria-hidden
    >
      <div ref={backRef} className={styles.backLayer} style={{ height: layerHeight }} />
      <div ref={frontRef} className={styles.frontLayer} style={{ height: layerHeight }}>
        <div className={styles.edge} />
      </div>
    </div>
  );
}

const ParallaxGap = memo(ParallaxGapBase);
export default ParallaxGap;

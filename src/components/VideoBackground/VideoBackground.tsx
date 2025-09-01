'use client';

import { useEffect, useRef } from 'react';
import styles from './VideoBackground.module.scss';

interface VideoBackgroundProps {
  videoId: string;
  className?: string;
}

export default function VideoBackground({ videoId, className }: VideoBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create the YouTube iframe programmatically for better control
    const container = containerRef.current;
    if (!container) return;

    // YouTube iframe parameters for autoplay background video
    const params = new URLSearchParams({
      autoplay: '1',
      mute: '1',
      loop: '1',
      playlist: videoId, // Required for loop to work
      controls: '0',
      showinfo: '0',
      rel: '0',
      modestbranding: '1',
      playsinline: '1',
      enablejsapi: '1',
      origin: window.location.origin,
      widget_referrer: window.location.href,
      vq: 'hd1080' // Request HD quality
    });

    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = false;
    iframe.loading = 'lazy';
    iframe.title = 'Background video';
    iframe.className = styles.videoIframe;

    container.appendChild(iframe);

    return () => {
      if (container && iframe) {
        container.removeChild(iframe);
      }
    };
  }, [videoId]);

  return (
    <div className={`${styles.videoBackground} ${className || ''}`}>
      <div ref={containerRef} className={styles.videoContainer} />
      <div className={styles.videoOverlay} />
    </div>
  );
}

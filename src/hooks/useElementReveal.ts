import { useEffect, useState } from 'react';

interface UseElementRevealOptions {
  targetId: string;
  revealRangePx?: number; // if omitted, uses 70% of viewport height
}

export function useElementReveal({ targetId, revealRangePx }: UseElementRevealOptions) {
  const [out, setOut] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1
  const [range, setRange] = useState<number>(revealRangePx ?? 0);

  useEffect(() => {
    const computeRange = () => {
      const dynamic = Math.round(window.innerHeight * 0.7);
      setRange(revealRangePx ?? dynamic);
    };
    computeRange();
    window.addEventListener('resize', computeRange);
    return () => window.removeEventListener('resize', computeRange);
  }, [revealRangePx]);

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const bottom = rect.bottom; // distance from bottom of element to viewport top
        const isOut = bottom <= 0;
        setOut(isOut);
        if (isOut && range > 0) {
          const pixelsPast = Math.min(Math.max(-bottom, 0), range);
          setProgress(pixelsPast / range);
        } else {
          setProgress(0);
        }
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [targetId, range]);

  return { out, progress };
}

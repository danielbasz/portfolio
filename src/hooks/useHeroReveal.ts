import { useEffect, useState } from 'react';

interface UseHeroRevealOptions {
  revealRange?: number; // px distance after hero fully out to reach full reveal; if omitted, uses 70% of viewport height
}

export function useHeroReveal({ revealRange }: UseHeroRevealOptions = {}) {
  const [heroOut, setHeroOut] = useState(false);
  const [progress, setProgress] = useState(0); // 0..1
  const [range, setRange] = useState<number>(revealRange ?? 0);

  useEffect(() => {
    const computeRange = () => {
      const dynamic = Math.round(window.innerHeight * 0.7); // 70% of viewport height
      setRange(revealRange ?? dynamic);
    };
    computeRange();
    window.addEventListener('resize', computeRange);
    return () => window.removeEventListener('resize', computeRange);
  }, [revealRange]);

  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const bottom = rect.bottom; // distance from bottom of hero to viewport top
        const out = bottom <= 0; // hero fully out when bottom <= 0
        setHeroOut(out);
        if (out && range > 0) {
          const pixelsPast = Math.min(Math.max(-bottom, 0), range);
          setProgress(pixelsPast / range);
        } else {
          setProgress(0);
        }
        ticking = false;
      });
    };

    // initial compute
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [range]);

  return { heroOut, progress };
}

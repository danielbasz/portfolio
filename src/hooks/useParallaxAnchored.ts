import { useEffect, useRef } from 'react';

interface UseParallaxAnchoredOptions {
  rate?: number; // negative moves up on scroll down
  enabled?: boolean;
  maxUpPx?: number; // cap maximum upward translate (negative direction) in px
}

// Like useParallax but anchors the transform at the moment it becomes enabled,
// preventing a visible jump when turning on. Supports clamping max upward shift.
export function useParallaxAnchored({ rate = -0.2, enabled = false, maxUpPx }: UseParallaxAnchoredOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const anchorRef = useRef<number | null>(null);
  const lastEnabledRef = useRef<boolean>(enabled);
  const lastRateRef = useRef<number>(rate);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const y = window.pageYOffset;
      // When enabling, capture anchor scrollY
      if (enabled && lastEnabledRef.current !== enabled) {
        anchorRef.current = y;
      }

      // Compute anchored transform
      if (enabled) {
        const anchor = anchorRef.current ?? y;
        const delta = y - anchor;
        let t = delta * rate; // translateY in px
        // Clamp maximum upward shift (negative translate) if requested
        if (typeof maxUpPx === 'number' && isFinite(maxUpPx) && maxUpPx >= 0) {
          // Do not allow t to be less than -maxUpPx (i.e., too far up)
          if (t < -maxUpPx) t = -maxUpPx;
        }
        el.style.transform = `translateY(${t}px)`;
      } else {
        // Reset when disabled
        el.style.transform = 'translateY(0px)';
        anchorRef.current = null;
      }

      lastEnabledRef.current = enabled;
      lastRateRef.current = rate;
    };

    // Initial set
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [enabled, rate, maxUpPx]);

  return ref;
}

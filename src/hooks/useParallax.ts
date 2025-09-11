import { useEffect, useRef, type RefObject } from 'react';

interface UseParallaxOptions {
  rate?: number;
  direction?: 'vertical' | 'horizontal';
  enabled?: boolean;
}

export function useParallax<T extends HTMLElement = HTMLDivElement>({
  rate = -0.5,
  direction = 'vertical',
  enabled = true
}: UseParallaxOptions = {}): RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!enabled) return;
    
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const transform = direction === 'vertical' 
        ? `translateY(${scrolled * rate}px)`
        : `translateX(${scrolled * rate}px)`;
      
      (element as HTMLElement).style.transform = transform;
    };

    // Add passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [rate, direction, enabled]);

  return ref as RefObject<T | null>;
}

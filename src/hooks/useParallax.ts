import { useEffect, useRef } from 'react';

interface UseParallaxOptions {
  rate?: number;
  direction?: 'vertical' | 'horizontal';
  enabled?: boolean;
}

export function useParallax({
  rate = -0.5,
  direction = 'vertical',
  enabled = true
}: UseParallaxOptions = {}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!enabled) return;
    
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const transform = direction === 'vertical' 
        ? `translateY(${scrolled * rate}px)`
        : `translateX(${scrolled * rate}px)`;
      
      element.style.transform = transform;
    };

    // Add passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [rate, direction, enabled]);

  return ref;
}
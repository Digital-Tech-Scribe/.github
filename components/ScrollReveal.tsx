'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const directionClass =
      direction === 'left'
        ? 'reveal-left'
        : direction === 'right'
        ? 'reveal-right'
        : 'reveal';

    el.classList.add(directionClass);
    if (delay) {
      el.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [direction, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  /** Extra Tailwind classes on the wrapper (e.g. stagger delay) */
  className?: string;
  /** IntersectionObserver threshold — default 0.12 */
  threshold?: number;
}

/**
 * Wraps children in a div that fades + slides up once it enters the viewport.
 * After triggering once the observer disconnects — no re-animation on scroll back.
 */
export default function ScrollReveal({
  children,
  className = '',
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref      = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={[
        'transition-all duration-1000 ease-out',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}

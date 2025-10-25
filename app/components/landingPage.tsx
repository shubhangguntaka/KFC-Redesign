'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Background from './ui/background';

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stripesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !stripesRef.current) return;

    const ctx = gsap.context(() => {
      // Create timeline for sequential animations
      const tl = gsap.timeline();

      // Animate stripes revealing from top to bottom
      tl.fromTo(
        stripesRef.current,
        {
          clipPath: 'inset(0 0 100% 0)',
          opacity: 0,
        },
        {
          clipPath: 'inset(0 0 0% 0)',
          opacity: 1,
          duration: 1.5,
          ease: 'power3.inOut',
        }
      );

      // Add a slight pause
      tl.to({}, { duration: 0.5 });

      // Optional: Add a subtle zoom effect
      tl.to(stripesRef.current, {
        scale: 1.05,
        duration: 0.5,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-white"
      aria-label="Loading Animation"
    >
      <div ref={stripesRef} className="w-full h-full">
        <Background />
      </div>
    </div>
  );
}
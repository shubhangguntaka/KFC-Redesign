'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis with enhanced smooth scrolling
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        lenisRef.current = lenis;

        // Expose Lenis instance globally for other components to use
        if (typeof window !== 'undefined') {
            (window as any).lenis = lenis;
        }

        // Sync Lenis scroll with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        // Integrate with GSAP ticker for smooth animation frame sync
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // Disable lag smoothing for better performance
        gsap.ticker.lagSmoothing(0);

        // Add smooth scroll to anchor links
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach((anchor) => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href');
                if (targetId && targetId !== '#') {
                    const targetElement = document.querySelector(targetId) as HTMLElement;
                    if (targetElement) {
                        lenis.scrollTo(targetElement, {
                            offset: -80,
                            duration: 2,
                            easing: (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
                        });
                    }
                }
            });
        });

        // Optional: Add keyboard controls for smooth scrolling
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowDown' || e.key === 'PageDown') {
                e.preventDefault();
                lenis.scrollTo(window.scrollY + window.innerHeight * 0.8, {
                    duration: 1.5,
                });
            } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
                e.preventDefault();
                lenis.scrollTo(window.scrollY - window.innerHeight * 0.8, {
                    duration: 1.5,
                });
            } else if (e.key === 'Home') {
                e.preventDefault();
                lenis.scrollTo(0, { duration: 2 });
            } else if (e.key === 'End') {
                e.preventDefault();
                lenis.scrollTo(document.body.scrollHeight, { duration: 2 });
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        // Cleanup
        return () => {
            lenis.destroy();
            gsap.ticker.remove((time) => {
                lenis.raf(time * 1000);
            });
            window.removeEventListener('keydown', handleKeyDown);
            if (typeof window !== 'undefined') {
                (window as any).lenis = null;
            }
            lenisRef.current = null;
        };
    }, []);

    return <>{children}</>;
}

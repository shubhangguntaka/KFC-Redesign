'use client';

import Image from 'next/image';
import { TextFade } from './ui/textFade';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroPage() {
    const bucketRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const subtextRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!bucketRef.current || !sectionRef.current || !headlineRef.current || !subtextRef.current) return;

        const ctx = gsap.context(() => {
            // Smooth fade in on load
            gsap.from(headlineRef.current, {
                opacity: 0,
                y: 100,
                duration: 1.2,
                ease: 'power3.out',
                delay: 0.3,
            });

            gsap.from(bucketRef.current, {
                opacity: 0,
                scale: 0.8,
                duration: 1.5,
                ease: 'power3.out',
                delay: 0.5,
            });

            gsap.from(subtextRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out',
                delay: 0.8,
            });

            // Parallax scroll up effect when menu enters
            gsap.to(bucketRef.current, {
                y: -800,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'bottom center',
                    end: 'bottom top',
                    scrub: 2,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    // Mouse parallax effect
    useEffect(() => {
        const section = sectionRef.current;
        const bucket = bucketRef.current;

        if (!section || !bucket) return;

        const handleMouseMove = (e: MouseEvent) => {
            const sectionRect = section.getBoundingClientRect();
            
            // Check if mouse is within the section
            if (
                e.clientY >= sectionRect.top &&
                e.clientY <= sectionRect.bottom &&
                e.clientX >= sectionRect.left &&
                e.clientX <= sectionRect.right
            ) {
                // Calculate mouse position relative to section center
                const sectionCenterX = sectionRect.left + sectionRect.width / 2;
                const sectionCenterY = sectionRect.top + sectionRect.height / 2;
                
                // Calculate movement as percentage from center (-1 to 1)
                const moveX = (e.clientX - sectionCenterX) / (sectionRect.width / 2);
                const moveY = (e.clientY - sectionCenterY) / (sectionRect.height / 2);
                
                // Apply parallax effect with GSAP for smooth animation
                // Bucket moves in opposite direction (parallax effect)
                gsap.to(bucket, {
                    x: moveX * 30, // Adjust multiplier for intensity
                    y: moveY * 30,
                    rotationY: moveX * 10, // 3D rotation effect
                    rotationX: -moveY * 10,
                    duration: 0.5,
                    ease: 'power2.out',
                });
            }
        };

        // Reset position when mouse leaves
        const handleMouseLeave = () => {
            gsap.to(bucket, {
                x: 0,
                y: 0,
                rotationY: 0,
                rotationX: 0,
                duration: 0.8,
                ease: 'power2.out',
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        section.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            section.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative min-h-screen w-full overflow-visible">
            {/* Scrolling Text Content */}
            <div className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-40">
                {/* Animated Text Content */}
                <TextFade direction="down" className="relative flex flex-col items-center justify-center" staggerChildren={0.2}>
                    {/* Container for headline + bucket + subtext */}
                    <div className="relative flex flex-col items-center justify-center">
                        {/* Headline behind bucket - centered horizontally */}
                        <h1 
                            ref={headlineRef}
                            className="absolute top-[10%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-black italic whitespace-nowrap md:text-7xl lg:text-8xl z-0 tracking-tight" 
                            style={{ fontFamily: "'Friz Quadrata', serif" }}
                        >
                            It&apos;s Finger Lickin&apos; Good
                        </h1>
                        
                        {/* KFC Bucket Image - pinned in place */}
                        <div 
                            ref={bucketRef}
                            className="relative z-20 will-change-transform parallax-3d"
                        >
                            <Image
                                src="/KFC-Bucket.png"
                                alt="KFC Bucket"
                                width={600}
                                height={600}
                                className="drop-shadow-2xl"
                                priority
                            />
                        </div>
                        
                        {/* Subtext overlapping bucket base (reduced size) */}
                        <p 
                            ref={subtextRef}
                            className="absolute bottom-[18%] left-1/2 -translate-x-1/2 z-30 text-base font-semibold text-black md:text-lg lg:text-xl text-center whitespace-nowrap"
                        >
                            Discover the World&apos;s Most Famous Fried Chicken
                        </p>
                    </div>
                </TextFade>
            </div>
        </section>
    );
}

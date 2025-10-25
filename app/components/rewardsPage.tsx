'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function RewardsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftDecoRef = useRef<HTMLDivElement>(null);
  const rightDecoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !leftDecoRef.current || !rightDecoRef.current) return;

    const container = containerRef.current;
    const leftDeco = leftDecoRef.current;
    const rightDeco = rightDecoRef.current;

    // Create a context for easier cleanup
    const ctx = gsap.context(() => {
      // Initial setup - decorations are absolutely positioned within container
      gsap.set([leftDeco, rightDeco], {
        position: 'absolute',
        zIndex: 0,
        willChange: 'transform',
        top: '50%',
        y: '-50%'
      });

      gsap.set(leftDeco, { left: '-250px' });
      gsap.set(rightDeco, { right: '-250px' });

      // Create separate ScrollTriggers for left and right decorations
      // This ensures both decorations are pinned independently
      
      // Left decoration pinning
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: () => {
          const containerRect = container.getBoundingClientRect();
          const containerTop = containerRect.top;
          const containerBottom = containerRect.bottom;
          const viewportHeight = window.innerHeight;
          const viewportCenter = viewportHeight / 2;
          
          // Check if container is in view
          if (containerTop <= viewportCenter && containerBottom >= viewportCenter) {
            // Container is in viewport - keep decoration centered vertically
            const containerScrolled = Math.abs(Math.min(containerTop, 0));
            const centerOffset = containerScrolled + viewportCenter;
            
            gsap.set(leftDeco, {
              top: centerOffset,
              y: '-50%',
              position: 'absolute'
            });
          } else if (containerBottom < viewportCenter) {
            // Container has scrolled past - decoration scrolls with container
            const distanceFromBottom = container.offsetHeight - viewportCenter;
            gsap.set(leftDeco, {
              top: distanceFromBottom,
              y: '-50%',
              position: 'absolute'
            });
          }
        }
      });

      // Right decoration pinning
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        onUpdate: () => {
          const containerRect = container.getBoundingClientRect();
          const containerTop = containerRect.top;
          const containerBottom = containerRect.bottom;
          const viewportHeight = window.innerHeight;
          const viewportCenter = viewportHeight / 2;
          
          // Check if container is in view
          if (containerTop <= viewportCenter && containerBottom >= viewportCenter) {
            // Container is in viewport - keep decoration centered vertically
            const containerScrolled = Math.abs(Math.min(containerTop, 0));
            const centerOffset = containerScrolled + viewportCenter;
            
            gsap.set(rightDeco, {
              top: centerOffset,
              y: '-50%',
              position: 'absolute'
            });
          } else if (containerBottom < viewportCenter) {
            // Container has scrolled past - decoration scrolls with container
            const distanceFromBottom = container.offsetHeight - viewportCenter;
            gsap.set(rightDeco, {
              top: distanceFromBottom,
              y: '-50%',
              position: 'absolute'
            });
          }
        }
      });

      // Add subtle floating animation for left decoration
      gsap.to(leftDeco, {
        x: '+=15',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Add subtle floating animation for right decoration
      gsap.to(rightDeco, {
        x: '-=15',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.5
      });

      // Animate sections on scroll
      const sections = container.querySelectorAll('section');
      sections.forEach((section, index) => {
        gsap.fromTo(section, 
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              end: 'top 60%',
              toggleActions: 'play none none reverse',
              scrub: 1,
            },
            delay: index * 0.1
          }
        );
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Decorative Food Items - Left Side */}
      <div 
        ref={leftDecoRef}
        className="hidden lg:block z-0 pointer-events-none"
        style={{ width: '500px', height: '900px' }}
      >
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="https://images.ctfassets.net/9tka4b3550oc/2cUN8MduVoNvlRaBLvMqig/a60b434f992b518aa7c5c49907bc3641/Untitled-1_4.png?q=75"
            alt="KFC Bucket"
            width={1000}
            height={900}
            className="absolute left-0 top-60 object-cover"
            style={{ 
              objectPosition: 'right center',
              clipPath: 'inset(0 0 0 40%)'
            }}
          />
        </div>
      </div>

      {/* Decorative Food Items - Right Side */}
      <div 
        ref={rightDecoRef}
        className="hidden lg:block z-0 pointer-events-none"
        style={{ width: '500px', height: '900px' }}
      >
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="https://images.ctfassets.net/9tka4b3550oc/2cUN8MduVoNvlRaBLvMqig/a60b434f992b518aa7c5c49907bc3641/Untitled-1_4.png?q=75"
            alt="KFC Chicken and Fries"
            width={1000}
            height={900}
            className="absolute right-0 top-60 object-cover"
            style={{ 
              objectPosition: 'left center',
              clipPath: 'inset(0 40% 0 0)'
            }}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          {/* KFC Rewards Title (SVG) */}
          <div className="mb-8">
            <div className="mx-auto w-full max-w-lg">
              <Image
                src="https://images.ctfassets.net/9tka4b3550oc/6sjCgo1BMZGHdpBIuRn6Uy/c080678f75c71c1fde26ab9e4e7faf2f/Text.svg?q=75"
                alt="KFC Rewards"
                width={900}
                height={300}
                className="mx-auto w-full h-auto"
                priority
              />
            </div>
          </div>
          
          <p className="text-lg md:text-xl text-gray-800 mb-12 max-w-2xl mx-auto leading-relaxed">
            KFC Rewards are finally here! Finger lickin&apos; good deals, exclusive member-only perks, and more are a tap away. Go on, get rewarded for your love of KFC and sign up today!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              className="px-10 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 text-lg shadow-lg"
              type="button"
            >
              Sign me up!
            </button>
            <button 
              className="text-black font-semibold cursor-pointer hover:underline text-lg underline"
              type="button"
            >
              Log In / Sign Up
            </button>
          </div>
        </div>
      </section>

      {/* Earn Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h5 className="text-[#E4002B] font-bold text-sm tracking-widest mb-4">EARN</h5>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-black" style={{ fontFamily: "'Friz Quadrata', serif" }}>
              EARN POINTS ON PURCHASES
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              As a KFC Rewards member you automatically earn 10 points per dollar you spend on eligible purchase through your KFC Rewards account. Sign up and start earning today.
            </p>
          </div>
          <div className="relative h-96">
            <Image
              src="https://images.ctfassets.net/9tka4b3550oc/6sjCgo1BMZGHdpBIuRn6Uy/c080678f75c71c1fde26ab9e4e7faf2f/Text.svg?q=75"
              alt="Earn Points on Purchases"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Redeem Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative h-96">
            <Image
              src="https://images.ctfassets.net/9tka4b3550oc/lihZjRvlgowdojTuo6ot3/bbb80e0dc120f95dc78cd0a7111292ab/slide4.png?q=75"
              alt="Get rewarded for your love of KFC"
              fill
              className="object-contain"
            />
          </div>
          <div className="order-1 lg:order-2 text-right">
            <h5 className="text-[#E4002B] font-bold text-sm tracking-widest mb-4">REDEEM</h5>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-black" style={{ fontFamily: "'Friz Quadrata', serif" }}>
              GET REWARDED FOR YOUR LOVE OF KFC
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Redeem your points to unlock FREE KFC and access exclusive, member-only offers in the Secret Recipe Vault.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

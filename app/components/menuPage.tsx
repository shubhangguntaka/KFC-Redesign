'use client';

import { HoverEffect } from './ui/card-hover-effect';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const menuCategories = [
  {
    title: 'DEALS',
    icon: 'https://digitaleat.kfc.com/menus/image/bare/kfc-DealsCategory.webp?q=75',
    link: '#deals',
  },
  {
    title: 'THE LATEST',
    icon: 'https://digitaleat.kfc.com/menus/image/bare/kfc-LatestCategoryImage.webp?q=75',
    link: '#latest',
  },
  {
    title: 'COMBOS',
    icon: 'https://digitaleat.kfc.com/menus/image/bare/kfc-2BWCombo.webp?q=75',
    link: '#combos',
  },
  {
    title: 'FAMILY MEALS',
    icon: 'https://digitaleat.kfc.com/menus/image/bare/kfc-FamilyMealCategory.webp?q=75',
    link: '#family-meals',
  },
  {
    title: 'FRIED CHICKEN',
    icon: 'https://digitaleat.kfc.com/menus/image/bare/kfc-2pc.webp?q=75',
    link: '#fried-chicken',
  },
  {
    title: 'TENDERS',
    icon: 'https://digitaleat.kfc.com/menus/image/bare/kfc-2pcORTenders.webp?q=75',
    link: '#tenders',
  },
  {
    title: 'NUGGETS',
    icon: 'https://digitaleat.kfc.com/menus/image/bare/kfc-8pcNuggetsALCV2.webp?q=75',
    link: '#nuggets',
  },
  {
    title: 'SANDWICHES',
    icon: 'https://digitaleat.kfc.com/menus/image/bare/kfc-cknsndalc.webp?q=75',
    link: '#sandwiches',
  },
  {
    title: 'POT PIES & BOWLS',
    icon: 'https://digitaleat.kfc.com/menus/image/bare/kfc-FamousBowlNuggetsV2.webp?q=75',
    link: '#pot-pies-and-bowls',
  },
  {
    title: 'SIDES, SWEETS, SAUCES',
    icon: 'https://digitaleat.kfc.com/menus/image/bare/kfc-SidesSweetsSaucesCategoryNEW.webp?q=75',
    link: '#sides-sweets-sauces',
  },
  {
    title: 'DRINKS',
    icon: 'https://digitaleat.kfc.com/menus/image/bare/kfc-Pepsi.webp?q=75',
    link: '#drinks',
  },
];

const latestItems = [
  {
    name: 'Original Honey BBQ Chicken Sandwich Combo',
    image: 'https://digitaleat.kfc.com/menus/image/bare/kfc-HBBQCknSandwichCombo.webp?q=75',
    calories: '800-1340',
  },
  {
    name: 'Wings and Wedges Fan Favorites Box',
    image: 'https://digitaleat.kfc.com/menus/image/bare/kfc-WingsWedgesFanFavBox.webp?q=75',
    calories: '2960-3500',
  },
  {
    name: '1 pc. Chicken Fill Up',
    image: 'https://digitaleat.kfc.com/menus/image/bare/kfc-1pcFillUp.webp?q=75',
    calories: '710-1320',
  },
  {
    name: '3 pc. Tenders Fill Up',
    image: 'https://digitaleat.kfc.com/menus/image/bare/kfc-3pcTendersFillUp.webp?q=75',
    calories: '1020-1310',
  },
  {
    name: 'Double Mash Meal',
    image: 'https://digitaleat.kfc.com/menus/image/bare/kfc-DblMashMeal.webp?q=75',
    calories: '2850-4130',
  },
  {
    name: '2 pc. Chicken & Waffles Combo',
    image: 'https://digitaleat.kfc.com/menus/image/bare/kfc-2pcCOBWaffleCombo.webp?q=75',
    calories: '720-1730',
  },
  {
    name: 'Famous Bowl Fill Up',
    image: 'https://digitaleat.kfc.com/menus/image/bare/kfc-FamousBowlFillUpfor7.webp?q=75',
    calories: '730-1020',
  },
];

export default function MenuPage() {
  const menuHeaderRef = useRef<HTMLDivElement>(null);
  const latestHeaderRef = useRef<HTMLDivElement>(null);
  const menuGridRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleFullMenuClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // Scroll 400px to reveal more items
      gsap.to(scrollContainerRef.current, {
        scrollLeft: `+=${scrollAmount}`,
        duration: 0.8,
        ease: 'power2.out',
      });
    }
  };

  useEffect(() => {
    if (!menuHeaderRef.current || !latestHeaderRef.current || !menuGridRef.current) return;

    const ctx = gsap.context(() => {
      // Animate menu header with clip-path reveal
      gsap.from(menuHeaderRef.current, {
        clipPath: 'inset(0 100% 0 0)',
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: menuHeaderRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Staggered menu grid animation with 3D effect
      const menuItems = menuGridRef.current?.querySelectorAll('.menu-card');
      if (menuItems && menuItems.length > 0) {
        gsap.from(menuItems, {
          opacity: 0,
          y: 60,
          rotationX: -45,
          scale: 0.8,
          duration: 0.8,
          stagger: {
            each: 0.1,
            from: 'start',
          },
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: menuGridRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });
      }

      // Animate latest header with slide and fade
      gsap.from(latestHeaderRef.current, {
        opacity: 0,
        x: -100,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: latestHeaderRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // Button micro-interactions
  useEffect(() => {
    const buttons = document.querySelectorAll('button, a[href]');
    
    buttons.forEach((btn) => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.05, duration: 0.2, ease: 'power2.out' });
      });
      
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, duration: 0.3, ease: 'elastic.out(1, 0.5)' });
      });
      
      btn.addEventListener('mousedown', () => {
        gsap.to(btn, { scale: 0.95, duration: 0.1 });
      });
      
      btn.addEventListener('mouseup', () => {
        gsap.to(btn, { scale: 1.05, duration: 0.1 });
      });
    });

    return () => {
      buttons.forEach((btn) => {
        btn.removeEventListener('mouseenter', () => {});
        btn.removeEventListener('mouseleave', () => {});
        btn.removeEventListener('mousedown', () => {});
        btn.removeEventListener('mouseup', () => {});
      });
    };
  }, []);

  return (
    <section className="relative w-full py-20 px-6 z-0">
      {/* Menu Categories */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={menuHeaderRef} className="flex items-center justify-between mb-8">
          <h2 className="text-5xl font-extrabold text-black tracking-tight" style={{ fontFamily: "'Friz Quadrata', serif" }}>
            MENU
          </h2>
          <button 
            onClick={handleFullMenuClick}
            className="flex items-center gap-2 text-lg font-medium hover:text-[#E4002B] transition-colors cursor-pointer bg-transparent border-none"
          >
            <span className="inline-block">📖 Scroll for</span>
            <span className="underline">Full Menu</span>
            <span>→</span>
          </button>
        </div>
        {/* Menu Grid with Hover Effect */}
        <div ref={menuGridRef} className="relative">
          <div ref={scrollContainerRef} className="overflow-hidden">
            <HoverEffect items={menuCategories} enableScroll={true} />
          </div>
        </div>
      </div>

      {/* The Latest Section */}
      <div className="w-full">
        <div ref={latestHeaderRef} className="max-w-7xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-extrabold text-black tracking-tight" style={{ fontFamily: "'Friz Quadrata', serif" }}>
              The Latest
            </h2>
            <a 
              href="#latest" 
              className="flex items-center gap-2 text-lg font-medium hover:text-[#E4002B] transition-colors"
            >
              <span>See All</span>
              <span>→</span>
            </a>
          </div>
        </div>
        <InfiniteMovingCards items={latestItems} direction="left" speed="slow" />
      </div>
    </section>
  );
}

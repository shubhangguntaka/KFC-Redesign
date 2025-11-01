'use client';

import { useState, useEffect } from 'react';
import LandingPage from "./components/landingPage";
import NavBar from "./components/navBar";
import HeroPage from './components/heroPage';
import MenuPage from './components/menuPage';
import Background from './components/ui/background';
import SmoothScroll from './components/ui/SmoothScroll';
import { EmojiPointer } from './components/ui/pointer';
import FooterPage from './components/footerPage';
import RewardsPage from './components/rewardsPage';
import CareersPage from './components/careersPage';
import GiftCardsPage from './components/giftCardsPage';

export default function Home() {
  const [showLanding, setShowLanding] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [showDesktopWarning, setShowDesktopWarning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Check if user is on mobile device
    const checkMobile = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      const mobileKeywords = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
      return mobileKeywords.test(userAgent) || window.innerWidth < 1024;
    };

    const mobile = checkMobile();
    setIsMobile(mobile);
    
    // Show landing page for 3 seconds, then show main content
    const timer = setTimeout(() => {
      setShowLanding(false);
      // Show desktop warning if on mobile
      if (mobile) {
        setShowDesktopWarning(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Don't render until client-side to prevent hydration mismatch
  if (!isClient) {
    return (
      <main className="w-full min-h-screen">
        <LandingPage />
      </main>
    );
  }

  return (
    <main className="w-full min-h-screen">
      <EmojiPointer />
      
      {/* Desktop Only Modal - Blocks Mobile Access */}
      {showDesktopWarning && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md">
          <div className="relative max-w-md mx-4 bg-white rounded-2xl p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="text-center">
              {/* KFC Logo */}
              <div className="mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/logo.png" 
                  alt="KFC Logo" 
                  className="w-20 h-20 mx-auto"
                />
              </div>
              
              <h2 className="text-2xl font-extrabold text-[#E4002B] mb-4" style={{ fontFamily: "'Friz Quadrata', serif" }}>
                Desktop Only
              </h2>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                This redesigned KFC website is currently optimized for desktop viewing only. 
                The full interactive features and animations require a larger screen.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-4 mb-6 border-l-4 border-[#E4002B]">
                <p className="text-sm font-semibold text-gray-800 mb-1">
                  🚀 Mobile Version Coming Soon!
                </p>
                <p className="text-xs text-gray-600">
                  We're working on a mobile-optimized version. Please visit us on a desktop or laptop computer.
                </p>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="px-6 py-3 bg-gray-100 text-gray-400 rounded-full font-semibold cursor-not-allowed">
                  Mobile Access Unavailable
                </div>
                
                <p className="text-sm text-gray-500">
                  💻 Please switch to a desktop device
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {showLanding ? (
        <LandingPage />
      ) : (
        <SmoothScroll>
          <Background />
          <NavBar />
          <div className="relative w-full overflow-visible">
            <div id="hero" className="relative min-h-screen overflow-visible">
              <HeroPage />
            </div>
            <div id="menu" className="relative z-10">
              <MenuPage />
            </div>
            <div id="rewards" className="relative z-10">
              <RewardsPage />
            </div>
            <div id="careers" className="relative z-10">
              <CareersPage />
            </div>
            <div id="gift-cards" className="relative z-10">
              <GiftCardsPage />
            </div>
            <div className="relative z-10">
              <FooterPage />
              <div className="bg-white mt-[-20px] mb-[-25px] w-full overflow-hidden">
                <h1 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-extrabold uppercase text-[#E4002B] text-center leading-tight break-words italic px-2" style={{ fontFamily: "'Friz Quadrata', serif" }}>Kentucky Fried Chicken</h1>
              </div>
            </div>
          </div>
        </SmoothScroll>
      )}
    </main>
  );
}

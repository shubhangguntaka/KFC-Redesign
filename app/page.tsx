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

  useEffect(() => {
    setIsClient(true);
    // Show landing page for 3 seconds, then show main content
    const timer = setTimeout(() => {
      setShowLanding(false);
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

'use client';

import React, { useState, useEffect } from 'react';
import { DollarTwoTone, ProfileTwoTone, ShoppingTwoTone, ShopTwoTone, SmileTwoTone, StarTwoTone, TrophyTwoTone } from '@ant-design/icons';
import { Breadcrumb, Button } from 'antd';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollToPlugin);
}

const NavBar: React.FC = () => {
    const kfcRed = '#E4002B';
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Button and icon micro-interactions
    useEffect(() => {
        const icons = document.querySelectorAll('.nav-icon');
        const startButton = document.querySelector('.start-order-btn');
        
        icons.forEach((icon) => {
            icon.addEventListener('mouseenter', () => {
                gsap.to(icon, { 
                    scale: 1.2, 
                    rotation: 5,
                    duration: 0.3, 
                    ease: 'back.out(2)' 
                });
            });
            
            icon.addEventListener('mouseleave', () => {
                gsap.to(icon, { 
                    scale: 1, 
                    rotation: 0,
                    duration: 0.4, 
                    ease: 'elastic.out(1, 0.5)' 
                });
            });
        });

        if (startButton) {
            startButton.addEventListener('mouseenter', () => {
                gsap.to(startButton, { 
                    scale: 1.08,
                    boxShadow: '0 8px 20px rgba(228, 0, 43, 0.4)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });
            
            startButton.addEventListener('mouseleave', () => {
                gsap.to(startButton, { 
                    scale: 1,
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                    duration: 0.4,
                    ease: 'elastic.out(1, 0.6)'
                });
            });

            startButton.addEventListener('mousedown', () => {
                gsap.to(startButton, { scale: 0.95, duration: 0.1 });
            });
            
            startButton.addEventListener('mouseup', () => {
                gsap.to(startButton, { scale: 1.08, duration: 0.1 });
            });
        }

        return () => {
            icons.forEach((icon) => {
                icon.removeEventListener('mouseenter', () => {});
                icon.removeEventListener('mouseleave', () => {});
            });
        };
    }, []);

    const scrollToSection = (sectionId: string) => {
        // Simply scroll to the section - Lenis will handle smooth scrolling
        const element = document.getElementById(sectionId);
        if (element) {
            // Get Lenis instance from window if available
            const lenis = (window as any).lenis;
            if (lenis) {
                lenis.scrollTo(element, {
                    offset: -80,
                    duration: 2,
                    easing: (t: number) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
                });
            } else {
                // Fallback to native smooth scroll if Lenis not available
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };
    
    return (
        <nav className={`fixed top-0 z-[100] w-full flex justify-center items-center py-4 px-6 text-black transition-all duration-300 ${
            isScrolled ? 'bg-white/25 backdrop-blur-sm shadow-md' : ''
        }`}>
            <div className="flex justify-between items-center w-full max-w-7xl">
                {/* Left side navigation items */}
                <div className="flex-1 text-black text-lg">
                    <Breadcrumb
                        className="[&_.ant-breadcrumb-separator]:text-black [&_.ant-breadcrumb-link]:text-lg"
                        items={[
                            {
                                title: (
                                    <span 
                                        onClick={() => scrollToSection('hero')}
                                        className="inline-flex items-center gap-2 hover:text-[#E4002B] transition-colors cursor-pointer text-lg font-medium"
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img 
                                            src="/logo.png" 
                                            alt="KFC Logo" 
                                            width={28}
                                            height={28}
                                            className="w-7 h-7"
                                        />
                                        <span>Kentucky Fried Chicken</span>
                                    </span>
                                ),
                            },
                            {
                                title: (
                                    <span 
                                        onClick={() => scrollToSection('menu')}
                                        className="inline-flex items-center gap-2 hover:text-[#E4002B] transition-colors cursor-pointer text-lg font-medium"
                                    >
                                        <ProfileTwoTone twoToneColor={kfcRed} />
                                        <span>Menu</span>
                                    </span>
                                ),
                            },
                            {
                                title: (
                                    <span 
                                        onClick={() => scrollToSection('rewards')}
                                        className="inline-flex items-center gap-2 hover:text-[#E4002B] transition-colors cursor-pointer text-lg font-medium"
                                    >
                                        <TrophyTwoTone twoToneColor={kfcRed} />
                                        <span>Rewards</span>
                                    </span>
                                ),
                            },
                            {
                                title: (
                                    <span 
                                        onClick={() => scrollToSection('careers')}
                                        className="inline-flex items-center gap-2 hover:text-[#E4002B] transition-colors cursor-pointer text-lg font-medium"
                                    >
                                        <DollarTwoTone twoToneColor={kfcRed} />
                                        <span>Careers</span>
                                    </span>
                                ),
                            },
                            {
                                title: (
                                    <span 
                                        onClick={() => scrollToSection('gift-cards')}
                                        className="inline-flex items-center gap-2 hover:text-[#E4002B] transition-colors cursor-pointer text-lg font-medium"
                                    >
                                        <StarTwoTone twoToneColor={kfcRed} />
                                        <span>Gift Cards</span>
                                    </span>
                                ),
                            },
                            {
                                title: (
                                    <span className="inline-flex items-center gap-2 hover:text-[#E4002B] transition-colors cursor-pointer text-lg font-medium">
                                        <span>Find a KFC</span>
                                        <ShopTwoTone twoToneColor={kfcRed} />
                                    </span>
                                ),
                            },
                        ]}
                    />
                </div>

                {/* Right side user actions */}
                <div className="flex gap-6 items-center ml-8 text-black">
                    <a href="" className="nav-icon transition-colors hover:text-[#E4002B]" title='Sign Up/Sign In' aria-label="User Profile">
                        <SmileTwoTone twoToneColor={kfcRed} className="text-2xl" />
                    </a>
                    <a href="" className="nav-icon transition-colors hover:text-[#E4002B]" title='Cart' aria-label="Shopping Cart">
                        <ShoppingTwoTone twoToneColor={kfcRed} className="text-2xl" />
                    </a>
                    <Button 
                        type="primary" 
                        size="large"
                        className="start-order-btn hover:!bg-[#c4002b] hover:!border-[#c4002b] text-base font-semibold"
                        style={{ backgroundColor: kfcRed, borderColor: kfcRed }}
                    >
                        Start Order
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
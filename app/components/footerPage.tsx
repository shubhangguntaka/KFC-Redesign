'use client';

import { useState } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { CardSpotlight } from './ui/card-spotlight';

export default function FooterPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <footer className="relative bg-white text-black py-16 px-6 mt-20">
      <div className="relative z-10">
        {/* Calorie Statement */}
        <div className="max-w-7xl mx-auto mb-12 mt-[-65px]">
          <CardSpotlight radius={400} color="#E4002B" className="border-gray-200 bg-white">
            <h3 className="text-lg font-bold mb-3 text-[#E4002B] relative z-20">Calorie Statement</h3>
            <p className="text-xs text-gray-700 leading-relaxed relative z-20">
              2,000 calories a day is used for general nutrition advice, but calorie needs vary. Additional nutrition information available upon request in-store and on kfc.com. Prices, participation, and product availability may vary. For allergen information, visit our{' '}
              <a href="https://www.kfc.com/food-allergies-and-sensitivities" target="_blank" rel="noopener noreferrer" className="text-[#E4002B] hover:text-red-400 underline transition-colors duration-300">
                Special Diets
              </a>{' '}
              page. We prepare and serve products containing egg, milk, soy, wheat or other allergens. Our products are prepared on shared equipment and in the same kitchen area and we cannot guarantee that cross contact with allergens will not occur.
            </p>
          </CardSpotlight>
        </div>

        {/* Footnotes */}
        <div className="max-w-7xl mx-auto mb-16">
          <CardSpotlight radius={350} color="#E4002B" className="border-gray-200 bg-white">
            <p className="text-[10px] text-gray-600 leading-relaxed relative z-20">
              Pepsi, Pepsi Globe, Mtn Dew, Mtn Dew Sweet Lightning, Starry are registered trademarks of PepsiCo, Inc.<br />
              Dr Pepper is a registered trademark of Dr Pepper/Seven Up, Inc.<br /><br />
              CAPRI-SUN® and the Pouch Shape™ are licensed trademarks of the Capri Sun Group
            </p>
          </CardSpotlight>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-16">
            {/* Logo Column */}
            <div className="lg:col-span-1">
              <figure aria-hidden="true" className="flex items-center gap-3 w-full transition-transform duration-300 hover:scale-105">
                <span className="text-sm font-bold text-black leading-tight" style={{ fontFamily: "'Friz Quadrata', serif" }}>Kentucky<br />Fried<br />Chicken</span>
                <svg viewBox="0 0 150 111" xmlns="http://www.w3.org/2000/svg" className="fill-black w-20 h-auto flex-shrink-0">
                  <path d="M87.861 69.186c-.07 1.612.043 2.765-.13 2.99a.397.397 0 0 1-.2.139c-.259.087-1.463.104-7.144-.693-.165-.061-.563-.096-1.118-.14.503 1.041 1.369 3.035 1.456 4.595.095 1.569.632 7.429.84 9.787.216 2.357.978 15.299 1.126 16.547.346 2.965-.079 4.889.233 5.938a.29.29 0 0 1-.164.347c-2.079.858-3.17.52-3.837 1.803-.052.095-.208.052-.234-.061l-.277-1.56c-1.091-3.892-1.464-19.582-1.464-19.582s-.762-11.555-.762-14.294v-.147c0-.182.078-.624.113-.754l.026-.087c.121-.45.294-.97.459-1.474-.58.113-1.265.07-1.499.052-.207.035-1.039.14-1.662-.208.199.616.398 1.283.502 1.96.017.103.043.554.026.866-.208 4.421-2.408 32.211-2.711 32.792-.26.971-.511 1.188-.797 1.56-.286.373-.753 1.543-1.256.971-.857-.971-.805-1.109-2.814-2.002a.286.286 0 0 1-.174-.277c.018-2.012.364-3.208.72-6.302.146-1.249 1.463-13.965 1.67-16.323.217-2.357.745-8.217.84-9.786.087-1.456.84-3.285 1.352-4.377-.615.06-1.187.112-1.403.156-4.443.52-6.938.485-7.137.485-.303.052-.26-.737-.338-2.575-.078-1.846-.147-2.678-.069-2.973.078-.303.33-.476 1.698-.433 1.368.043 5.785.217 6.963.485 1.542.364 1.923.746 1.923.746s.355-.902 1.178-.902c.744 0 .935.139 1.195.165h.45c.26-.026.45-.165 1.195-.165.823 0 1.178.902 1.178.902s.382-.382 1.923-.746c1.178-.277 5.127-.563 6.496-.606 1.368-.035 1.62.13 1.697.433.078.303.009.91-.069 2.748z"></path>
                </svg>
              </figure>
            </div>

            {/* KFC Food */}
            <div className="lg:col-span-1">
              <button
                onClick={() => toggleSection('food')}
                className="flex items-center justify-between w-full text-left mb-4 md:cursor-default group"
              >
                <h4 className="font-bold text-sm tracking-wide group-hover:text-[#E4002B] transition-colors duration-300">KFC FOOD</h4>
                <svg className="w-3 h-3 md:hidden transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.7 3.6" style={{ transform: expandedSection === 'food' ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path d="M2.9 3.6L0 .7.7 0l2.2 2.1L5 0l.7.7z" fill="currentColor" />
                </svg>
              </button>
              <div className={`space-y-2 ${expandedSection === 'food' || 'md:block'} ${expandedSection !== 'food' && 'hidden md:block'}`}>
                <a href="/menu" className="block text-xs text-gray-600 hover:text-[#E4002B] hover:translate-x-1 transition-all duration-300">Menu</a>
                <a href="/full-nutrition-guide" className="block text-xs text-gray-600 hover:text-[#E4002B] hover:translate-x-1 transition-all duration-300">Full Nutrition Guide</a>
                <a href="/nutrition" className="block text-xs text-gray-600 hover:text-[#E4002B] hover:translate-x-1 transition-all duration-300">Nutrition Calculator</a>
                <a href="/food-allergies-and-sensitivities" className="block text-xs text-gray-600 hover:text-[#E4002B] hover:translate-x-1 transition-all duration-300">Food Allergies & Sensitivities</a>
              </div>
            </div>

            {/* Company */}
            <div className="lg:col-span-1">
              <button
                onClick={() => toggleSection('company')}
                className="flex items-center justify-between w-full text-left mb-4 md:cursor-default group"
              >
                <h4 className="font-bold text-sm tracking-wide group-hover:text-[#E4002B] transition-colors duration-300">COMPANY</h4>
                <svg className="w-3 h-3 md:hidden transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.7 3.6" style={{ transform: expandedSection === 'company' ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path d="M2.9 3.6L0 .7.7 0l2.2 2.1L5 0l.7.7z" fill="currentColor" />
                </svg>
              </button>
              <div className={`space-y-2 ${expandedSection === 'company' || 'md:block'} ${expandedSection !== 'company' && 'hidden md:block'}`}>
                <a href="/about" className="block text-xs text-gray-600 hover:text-[#E4002B] hover:translate-x-1 transition-all duration-300">About KFC</a>
                <a href="/about/how-we-make-chicken" className="block text-xs text-gray-600 hover:text-[#E4002B] hover:translate-x-1 transition-all duration-300">How We Make Chicken</a>
                <a href="https://kfcfoundation.org/" target="_blank" className="block text-xs text-gray-600 hover:text-[#E4002B] hover:translate-x-1 transition-all duration-300">KFC Foundation</a>
                <a href="/about/company-responsibility" className="block text-xs text-gray-600 hover:text-[#E4002B] hover:translate-x-1 transition-all duration-300">Company Responsibility</a>
                <a href="/franchising" className="block text-xs text-gray-600 hover:text-[#E4002B] hover:translate-x-1 transition-all duration-300">Franchise a KFC</a>
                <a href="/newsroom" className="block text-xs text-gray-600 hover:text-[#E4002B] hover:translate-x-1 transition-all duration-300">KFC Newsroom</a>
                <a href="https://kfcshop.com/" target="_blank" className="block text-xs text-gray-600 hover:text-[#E4002B] hover:translate-x-1 transition-all duration-300">KFC Merch</a>
              </div>
            </div>

            {/* Careers */}
            <div className="lg:col-span-1">
              <button
                onClick={() => toggleSection('careers')}
                className="flex items-center justify-between w-full text-left mb-4 md:cursor-default group"
              >
                <h4 className="font-bold text-sm tracking-wide group-hover:text-[#E4002B] transition-colors duration-300">CAREERS</h4>
                <svg className="w-3 h-3 md:hidden transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.7 3.6" style={{ transform: expandedSection === 'careers' ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path d="M2.9 3.6L0 .7.7 0l2.2 2.1L5 0l.7.7z" fill="currentColor" />
                </svg>
              </button>
              <div className={`space-y-2 ${expandedSection === 'careers' || 'md:block'} ${expandedSection !== 'careers' && 'hidden md:block'}`}>
                <a href="/careers" className="block text-xs text-gray-600 hover:text-[#E4002B] hover:translate-x-1 transition-all duration-300">Restaurant Careers</a>
                <a href="/careers/corporate" className="block text-xs text-gray-600 hover:text-[#E4002B] hover:translate-x-1 transition-all duration-300">Corporate Careers</a>
                <a href="/careers/culture" className="block text-xs text-gray-600 hover:text-[#E4002B] hover:translate-x-1 transition-all duration-300">Culture</a>
                <a href="/careers/restaurant-career-growth" className="block text-xs text-gray-600 hover:text-[#E4002B] hover:translate-x-1 transition-all duration-300">Growth</a>
              </div>
            </div>

            {/* Resources */}
            <div className="lg:col-span-1">
              <button
                onClick={() => toggleSection('resources')}
                className="flex items-center justify-between w-full text-left mb-4 md:cursor-default group"
              >
                <h4 className="font-bold text-sm tracking-wide group-hover:text-[#E4002B] transition-colors duration-300">RESOURCES</h4>
                <svg className="w-3 h-3 md:hidden transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.7 3.6" style={{ transform: expandedSection === 'resources' ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path d="M2.9 3.6L0 .7.7 0l2.2 2.1L5 0l.7.7z" fill="currentColor" />
                </svg>
              </button>
              <div className={`space-y-2 ${expandedSection === 'resources' || 'md:block'} ${expandedSection !== 'resources' && 'hidden md:block'}`}>
                <a href="/faq" className="block text-xs text-gray-600 hover:text-[#E4002B] hover:translate-x-1 transition-all duration-300">FAQs</a>
                <a href="/contact" className="block text-xs text-gray-600 hover:text-[#E4002B] hover:translate-x-1 transition-all duration-300">Contact Us</a>
                <a href="/app" target="_blank" className="block text-xs text-gray-600 hover:text-[#E4002B] hover:translate-x-1 transition-all duration-300">KFC App</a>
              </div>
            </div>

            {/* Social Media */}
            <div className="lg:col-span-1">
              <button
                onClick={() => toggleSection('social')}
                className="flex items-center justify-between w-full text-left mb-4 md:cursor-default group"
              >
                <h4 className="font-bold text-sm tracking-wide group-hover:text-[#E4002B] transition-colors duration-300">SOCIAL MEDIA</h4>
                <svg className="w-3 h-3 md:hidden transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5.7 3.6" style={{ transform: expandedSection === 'social' ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                  <path d="M2.9 3.6L0 .7.7 0l2.2 2.1L5 0l.7.7z" fill="currentColor" />
                </svg>
              </button>
              <div className={`space-y-2 ${expandedSection === 'social' || 'md:block'} ${expandedSection !== 'social' && 'hidden md:block'}`}>
                <a href="https://facebook.com/kfc" target="_blank" className="block text-xs text-gray-600 hover:text-[#E4002B] hover:translate-x-1 transition-all duration-300">Facebook</a>
                <a href="https://x.com/kfc" target="_blank" className="block text-xs text-gray-600 hover:text-[#E4002B] hover:translate-x-1 transition-all duration-300">X</a>
                <a href="https://instagram.com/kfc" target="_blank" className="block text-xs text-gray-600 hover:text-[#E4002B] hover:translate-x-1 transition-all duration-300">Instagram</a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-200 pt-10">
            {/* Legal Links */}
            <div className="flex flex-wrap gap-3 mb-8 text-xs">
              <a href="https://privacy.kfc.com/policies" className="text-gray-600 hover:text-[#E4002B] transition-all duration-300 hover:underline">Privacy Center</a>
              <span className="text-gray-300">|</span>
              <a href="https://kfc.com/terms-of-use" className="text-gray-600 hover:text-[#E4002B] transition-all duration-300 hover:underline">Terms of Use</a>
              <span className="text-gray-300">|</span>
              <a href="https://privacy.kfc.com/policies?name=cookie-and-ads-policy#we-use-tracking-technologies" className="text-gray-600 hover:text-[#E4002B] transition-all duration-300 hover:underline">Our Cookies and Ads</a>
              <span className="text-gray-300">|</span>
              <a href="javascript:void(0)" className="text-gray-600 hover:text-[#E4002B] transition-all duration-300 hover:underline">Do Not Sell or Share My Personal Information</a>
              <span className="text-gray-300">|</span>
              <a href="https://kfc.com/accessibility" className="text-gray-600 hover:text-[#E4002B] transition-all duration-300 hover:underline">Accessibility Statement</a>
              <span className="text-gray-300">|</span>
              <a href="https://kfc.com/kfc-rewards-terms-of-use" className="text-gray-600 hover:text-[#E4002B] transition-all duration-300 hover:underline">KFC Rewards Terms</a>
              <span className="text-gray-300">|</span>
              <a href="https://www.kfc.com/faq" className="text-gray-600 hover:text-[#E4002B] transition-all duration-300 hover:underline">FAQ</a>
            </div>

            {/* Copyright */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-4">
              <p className="text-xs text-gray-600">Copyright © KFC ReDesign 2025 All Rights Reserved</p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-600 font-semibold tracking-wider">FOLLOW US</span>
                <div className="flex gap-3">
                  <a href="https://instagram.com/kfc" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#E4002B] hover:text-white transition-all duration-300 hover:scale-110">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a href="https://facebook.com/kfc" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#E4002B] hover:text-white transition-all duration-300 hover:scale-110">
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com/kfc" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#E4002B] hover:text-white transition-all duration-300 hover:scale-110">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
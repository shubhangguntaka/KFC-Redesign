"use client";

import Image from "next/image";

export default function GiftCardsPage() {
    return (
        <div className="relative mt-[-100px] min-h-screen py-16 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
                {/* header Gift Card Section */}
                <section className="py-20 px-6">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h5 className="text-[#E4002B] font-bold text-sm tracking-widest mb-4">Buy</h5>
                            <h3 className="text-4xl md:text-5xl font-extrabold mb-6 text-black" style={{ fontFamily: "'Friz Quadrata', serif" }}>
                                Gift Cards
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Share the magic of 11 herbs and spices with a KFC® gift card.
                            </p>
                        </div>
                        <div className="relative h-96">
                            <Image
                                src="https://kfccard.wolfe.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fgift-card-granny%2Fimage%2Fupload%2Ff_auto%2Cw_516%2Fv1721838275%2FWolfe%2520site%2Fkfc-site%2Fkfc-stack-of-cards_hbipkc&w=1080&q=75"
                                alt="KFC Gift Cards"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </section>

                {/* Gift Card Types */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* eGift Cards */}
                    <a 
                        href="https://kfc.wgiftcard.com/responsive_auto/KFC/virtual"
                        className="group relative flex flex-col items-center space-y-4 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-2xl hover:border-[#E4002B]/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer overflow-hidden"
                    >
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#E4002B]/5 via-transparent to-transparent rounded-2xl pointer-events-none" />
                        
                        <div className="relative w-full h-40 flex items-center justify-center z-10">
                            <Image
                                src="https://res.cloudinary.com/gift-card-granny/image/upload/f_auto/v1730319058/Wolfe%20site/kfc-site/h74mfaswps3xpwarvq8n"
                                alt="An iPhone showing a KFC eGift"
                                width={200}
                                height={200}
                                className="object-contain group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="text-center z-10">
                            <h2 className="text-2xl font-semibold text-[#E4002B] mb-2 group-hover:text-[#c20026] transition-colors">eGift Cards</h2>
                            <p className="text-gray-700 max-w-[280px] mx-auto">
                                Deliver eGift cards via email in minutes. Pick from a selection of designs and personalize with a message.
                            </p>
                        </div>
                        <button className="relative z-10 mt-4 px-6 py-3 bg-[#E4002B] text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                            Buy eGift Cards
                        </button>
                    </a>

                    {/* Physical Gift Cards */}
                    <a 
                        href="https://kfc.wgiftcard.com/responsive_auto/KFC/plastic"
                        className="group relative flex flex-col items-center space-y-4 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-2xl hover:border-[#E4002B]/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer overflow-hidden"
                    >
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#E4002B]/5 via-transparent to-transparent rounded-2xl pointer-events-none" />
                        
                        <div className="relative w-full h-40 flex items-center justify-center z-10">
                            <Image
                                src="https://res.cloudinary.com/gift-card-granny/image/upload/f_auto/v1730229561/Wolfe%20site/kfc-site/nzh98tfnl2rrmaa5mpuf"
                                alt="Two KFC physical gift cards"
                                width={300}
                                height={218}
                                className="object-contain group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="text-center z-10">
                            <h2 className="text-2xl font-semibold text-[#E4002B] mb-2 group-hover:text-[#c20026] transition-colors">Physical Gift Cards</h2>
                            <p className="text-gray-700 max-w-[280px] mx-auto">
                                Mail physical cards any value between $5 and $100.
                            </p>
                        </div>
                        <button className="relative z-10 mt-4 px-6 py-3 bg-[#E4002B] text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                            Buy Physical Gift Cards
                        </button>
                    </a>

                    {/* Corporate Gift Cards */}
                    <a 
                        href="https://storefront.wgiftcard.com/responsive_login/KFC"
                        className="group relative flex flex-col items-center space-y-4 p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-2xl hover:border-[#E4002B]/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer overflow-hidden"
                    >
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#E4002B]/5 via-transparent to-transparent rounded-2xl pointer-events-none" />
                        
                        <div className="relative w-full h-40 flex items-center justify-center z-10">
                            <Image
                                src="https://res.cloudinary.com/gift-card-granny/image/upload/f_auto/v1730229561/Wolfe%20site/kfc-site/v5pi2sfn8gzbh48cutwu"
                                alt="Stack of corporate gift cards"
                                width={200}
                                height={100}
                                className="object-contain group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <div className="text-center z-10">
                            <h2 className="text-2xl font-semibold text-[#E4002B] mb-2 group-hover:text-[#c20026] transition-colors">Corporate Gift Cards</h2>
                            <p className="text-gray-700 max-w-[280px] mx-auto">
                                Order multiple gift cards in one order for all your business needs.
                            </p>
                        </div>
                        <button className="relative z-10 mt-4 px-6 py-3 bg-[#E4002B] text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                            Buy Corporate Gift Cards
                        </button>
                    </a>
                </section>

                {/*<section className="bg-gray-50 rounded-2xl p-8 mb-12">
                    <h2 className="text-2xl font-bold mb-4">How it works</h2>
                    <ol className="list-decimal list-inside text-gray-700 space-y-2">
                        <li>Choose an amount and recipient email.</li>
                        <li>You will receive an instant e-gift card by email.</li>
                        <li>Recipient redeems at participating restaurants.</li>
                    </ol>
                </section>*/}

                {/* Contact Form Section */}
                <section className="py-16">
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    Need to contact us?
                                </h2>
                                <p className="text-lg text-gray-600">
                                    Please submit a ticket by filling out the form below.
                                </p>
                            </div>

                            <form className="space-y-6">
                                {/* Type of Question */}
                                <div className="space-y-2">
                                    <label htmlFor="typeOfQuestion" className="block text-sm font-medium text-gray-900">
                                        Type Of Question
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="typeOfQuestion"
                                            name="typeOfQuestion"
                                            className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#E4002B] focus:border-transparent transition-all outline-none appearance-none"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>Select One</option>
                                            <option value="Gift Card Issue">Gift Card Issue</option>
                                            <option value="Lost or Stolen Card">Lost or Stolen Card</option>
                                            <option value="Cashback Request">Cashback Request</option>
                                            <option value="Question About Cashback Request">Question about my Cashback Request</option>
                                            <option value="Never Received Digital Gift Card">Never Received Digital Gift Card</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Name Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-900">
                                            First Name
                                        </label>
                                        <input
                                            id="firstName"
                                            name="firstName"
                                            type="text"
                                            placeholder="Bonnie"
                                            className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#E4002B] focus:border-transparent transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-900">
                                            Last Name
                                        </label>
                                        <input
                                            id="lastName"
                                            name="lastName"
                                            type="text"
                                            placeholder="Green"
                                            className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#E4002B] focus:border-transparent transition-all outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Email and Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="name@example.com"
                                            className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#E4002B] focus:border-transparent transition-all outline-none"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                                            Phone Number
                                        </label>
                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="(123) 456-7890"
                                            className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#E4002B] focus:border-transparent transition-all outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                                        Send Us A Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        placeholder="Message"
                                        className="block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#E4002B] focus:border-transparent transition-all outline-none resize-none"
                                    />
                                </div>

                                {/* Submit Button */}
                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        className="w-full py-4 px-6 bg-gradient-to-r from-[#E4002B] to-[#c20026] text-white font-bold rounded-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E4002B] focus:ring-offset-2"
                                    >
                                        Submit →
                                    </button>
                                </div>

                                {/* Bottom gradient line */}
                                <div className="relative pt-4">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-200"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-4 bg-white text-gray-500">We&apos;ll respond within 24 hours</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}


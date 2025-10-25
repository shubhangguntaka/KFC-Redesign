'use client';

import { World } from './ui/globe';
import { Carousel, Card } from './ui/apple-cards-carousel';
import InfiniteMenu from './ui/InfiniteMenu'


const DummyContent = ({ title, description }: { title: string; description: string }) => {
    return (
        <>
            {[...new Array(1).fill(1)].map((_, index) => (
                <div
                    key={"dummy-content" + index}
                    className="bg-[#F7F6F4] p-8 md:p-14 rounded-3xl mb-4"
                >
                    <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                        <span className="font-bold text-neutral-700">
                            {title}
                        </span>{" "}
                        {description}
                    </p>
                    <div className="mt-8">
                        <h3 className="text-xl font-bold mb-4 text-[#E4002B]">What You'll Do:</h3>
                        <ul className="text-neutral-600 space-y-2 mb-6">
                            <li>🍗 Deliver exceptional customer service</li>
                            <li>🍗 Work in a fun, fast-paced team environment</li>
                            <li>🍗 Learn valuable skills and grow your career</li>
                            <li>🍗 Enjoy competitive pay and benefits</li>
                        </ul>
                        <button className="px-8 py-3 bg-[#E4002B] text-white rounded-full font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                            Apply Now
                        </button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default function CareersPage() {
    const data = [
        {
            category: "Team Member",
            title: "Cook",
            src: "https://images.ctfassets.net/9tka4b3550oc/2gCjL7qPDqysOrgf3H9vAA/71487ce4241a79c730cafe3e4b312f84/cook.jpg?w=470",
            content: <DummyContent
                title="Join Our Team!"
                description="Deliver great service, prepare delicious food, and create smiles. No experience required—just bring your energy and a positive attitude!"
            />,
        },
        {
            category: "Team Member",
            title: "Customer Service",
            src: "https://images.ctfassets.net/9tka4b3550oc/3kEbJ6F1XBJUd1sa4dzhH2/2fce139fc9a6b19a4c4651062d811b16/kfc_customer_sevice.jpg?w=470",
            content: <DummyContent
                title="Lead with Passion!"
                description="Lead a dynamic team, drive results, and make a difference every day. Restaurant or retail management experience preferred."
            />,
        },
        {
            category: "Supervisor",
            title: "Shift Supervisor",
            src: "https://images.ctfassets.net/9tka4b3550oc/4xLm9Q4797pqf7HpmC4saD/5802b9d05723df5b29e017c1510d5a97/shift-supervisor.jpg?w=470",
            content: <DummyContent
                title="Master the Kitchen!"
                description="Prepare our world-famous chicken to perfection. Learn our secret recipes and cooking techniques in a professional kitchen environment."
            />,
        },
        {
            category: "Manager",
            title: "Assistant Manager",
            src: "https://images.ctfassets.net/9tka4b3550oc/4HnWhgDCm3rJh0vBgiTPI0/49e7a06a569b3bee25d3af2382795885/assistant-manager.jpg?w=470",
            content: <DummyContent
                title="Step Up to Leadership!"
                description="Support restaurant operations and help manage the team. Perfect for those looking to advance their career in restaurant management."
            />,
        },
        {
            category: "Manager",
            title: "General Manager",
            src: "https://images.ctfassets.net/9tka4b3550oc/6FLb2pZ5kvgbt31ZU76z2R/fb1f085258e8fab90716922bc41ca371/general-manager.jpg?w=470",
            content: <DummyContent
                title="Be the Face of KFC!"
                description="Provide friendly service at the register, take orders, and ensure every customer leaves with a smile. Great communication skills required."
            />,
        },
        {
            category: "Career Opportunities",
            title: "Delivery Driver",
            src: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=2671&auto=format&fit=crop",
            content: <DummyContent
                title="Deliver Happiness!"
                description="Bring KFC's delicious meals directly to our customers' doors. Valid driver's license and reliable transportation required."
            />,
        },
    ];

    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
    ));

    const items = [
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Eo_circle_red_number-1.svg/768px-Eo_circle_red_number-1.svg.png?20200417173958',
            link: '#',
            title: 'Application',
            description: 'Your application will be reviewed by the restaurant leader.'
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Eo_circle_red_number-2.svg/768px-Eo_circle_red_number-2.svg.png?20200417174008',
            link: '#',
            title: 'Scheduling',
            description: 'One of the restaurant leaders will reach out to schedule an interview!'
        },
        {
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Eo_circle_red_number-3.svg/768px-Eo_circle_red_number-3.svg.png?20200417174018',
            link: '#',
            title: 'Interview',
            description: 'You will meet with a restaurant leader to go over your experience and learn more about the job opening. Don’t be afraid to ask questions!'
        }
    ];

    return (
        <div className="relative min-h-screen py-16 px-4 sm:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12 text-center">
                    <h1 className="text-5xl font-extrabold mb-4" style={{ fontFamily: "'Friz Quadrata', serif" }}>Careers at KFC</h1>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Join our team and help us serve the world's most famous fried chicken! We're always looking for passionate, energetic people to grow with us.
                    </p>
                </div>

                {/* Globe Visualization */}
                <div className="relative mt-[-150px] w-full h-[800px] mb-16 overflow-hidden rounded-2xl">
                    <World
                        globeConfig={{
                            pointSize: 6,
                            globeColor: "#1a1a1a",
                            showAtmosphere: true,
                            atmosphereColor: "#E4002B",
                            atmosphereAltitude: 0.25,
                            emissive: "#E4002B",
                            emissiveIntensity: 0.3,
                            shininess: 0.9,
                            polygonColor: "rgba(228, 0, 43, 0.5)",
                            ambientLight: "#ffffff",
                            directionalLeftLight: "#ffffff",
                            directionalTopLight: "#ffffff",
                            pointLight: "#E4002B",
                            arcTime: 1500,
                            arcLength: 0.9,
                            rings: 2,
                            maxRings: 3,
                            autoRotate: true,
                            autoRotateSpeed: 0.8
                        }}
                        data={[
                            {
                                order: 1,
                                startLat: 40.7128,
                                startLng: -74.0060,
                                endLat: 51.5074,
                                endLng: -0.1278,
                                arcAlt: 0.3,
                                color: "#E4002B"
                            },
                            {
                                order: 2,
                                startLat: 35.6762,
                                startLng: 139.6503,
                                endLat: -33.8688,
                                endLng: 151.2093,
                                arcAlt: 0.35,
                                color: "#E4002B"
                            },
                            {
                                order: 3,
                                startLat: 51.5074,
                                startLng: -0.1278,
                                endLat: 48.8566,
                                endLng: 2.3522,
                                arcAlt: 0.2,
                                color: "#ff6b6b"
                            },
                            {
                                order: 4,
                                startLat: -33.8688,
                                startLng: 151.2093,
                                endLat: 1.3521,
                                endLng: 103.8198,
                                arcAlt: 0.3,
                                color: "#E4002B"
                            },
                            {
                                order: 5,
                                startLat: 40.7128,
                                startLng: -74.0060,
                                endLat: 34.0522,
                                endLng: -118.2437,
                                arcAlt: 0.25,
                                color: "#ff6b6b"
                            },
                            {
                                order: 6,
                                startLat: 28.6139,
                                startLng: 77.2090,
                                endLat: 39.9042,
                                endLng: 116.4074,
                                arcAlt: 0.3,
                                color: "#E4002B"
                            },
                            {
                                order: 7,
                                startLat: -23.5505,
                                startLng: -46.6333,
                                endLat: 19.4326,
                                endLng: -99.1332,
                                arcAlt: 0.3,
                                color: "#ff6b6b"
                            }
                        ]}
                    />
                </div>
                <p className="text-center mt-[-160px] font-semibold px-6 py-2 mb-12">
                    🌍 150+ Countries | 🍗 27,000+ Locations Worldwide
                </p>
                <div className="mt-12 mb-12 text-center">
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Ready to apply?
                    </p>
                    <h2 className="mt-50 mb-[-50px] text-3xl font-extrabold mb-4" style={{ fontFamily: "'Friz Quadrata', serif" }}>Choose a restaurant job</h2>
                </div>
                <Carousel items={cards} />
                <div className="mt-16 mb-12 text-center">
                    <h2 className="text-3xl font-extrabold mb-6" style={{ fontFamily: "'Friz Quadrata', serif" }}>Restaurant Interview Process</h2>
                    <p className="text-lg text-gray-700 max-w-6xl mx-auto mb-8">
                        At KFC, we know your time is valuable and want to prepare you for what is next! See what happens after you fill out an application for one of our Restaurant Opportunities. Note: Most KFC restaurants are operated by independent franchisees who have their own hiring and benefits guidelines. These requirements may vary by location, and you&apos;ll learn more when you meet with the hiring manager.
                    </p>
                    <div className="w-full h-[500px] rounded-2xl overflow-hidden">
                        <InfiniteMenu items={items} />
                    </div>
                        <p>Click & Drag to move between steps in process</p>
                    <p className="mt-6 text-sm text-gray-600 max-w-4xl mx-auto">
                        Privacy Notice for California Applicants: We value your privacy and comply with all applicable regulations.
                    </p>
                </div>
            </div>
        </div>
    );
}

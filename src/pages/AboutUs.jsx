import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AboutUs1, AboutUs2, BgDotsBoth, HeroSectionBg3 } from '../assets/photos';
import { TeamSectionHome } from '../components';

const teamMembers = [
    {
        name: 'John Doe',
        position: 'CEO',
        image: 'path/to/john-image.jpg',
    },
    {
        name: 'Jane Smith',
        position: 'CTO',
        image: 'path/to/jane-image.jpg',
    },
    // Add more team members as needed
];

const AboutUs = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="bg-[#fff9f3] relative min-h-screen pb-20 w-full">
            <div className="absolute inset-0 -z-0" style={{ backgroundImage: `url(${BgDotsBoth})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

            <section className="relative w-full h-[400px] flex flex-col items-center justify-center overflow-hidden">
                {/* Parallax background image */}
                <div className="absolute inset-0 z-10 opacity-50" style={{ backgroundColor: 'black', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                <div className="absolute inset-0 z-0 " style={{ backgroundImage: `url(${HeroSectionBg3})`, backgroundColor: '#f2ba20', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                {/* Legacy text */}
                <div className="z-10 text-white garamond text-center text-5xl font-bold md:flex md:flex-row md:gap-4  " style={{ opacity: 1 - scrollY / 200 }}>
                    About Us
                </div>

            </section>
            <div className=" ">
                <div className='md:mx-24'>
                    <div className="text-center">
                        <img />
                        <p className="mt-4 text-lg text-gray-600">
                            At Zenone Studios, we are passionate about creating unforgettable entertainment experiences. Our team is dedicated to producing top-notch films, TV shows, and digital content that captivate audiences worldwide.
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="flex flex-row items-center ">
                            <div className="h-7 w-1 bg-[#ffac04] mt-1 mr-2"></div>
                            <h2 className="text-3xl font-bold text-black md:w-[179.8px]">Our Mission</h2>
                        </div>                    <p className="mt-4 text-gray-600">
                            Our mission is to be at the forefront of the entertainment industry, pushing the boundaries of creativity and innovation. We strive to deliver high-quality productions that inspire and entertain.
                        </p>
                    </div>
                </div>
                <TeamSectionHome />

                <div className="mt-10 md:mx-24">
                    <div className="flex flex-row items-center ">
                        <div className="h-7 w-1 bg-[#ffac04] mt-1 mr-2"></div>
                        <h2 className="text-3xl font-bold text-black ">Our Values</h2>
                    </div>                    <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
                        <li>Innovation in storytelling and production</li>
                        <li>Dedication to quality and excellence</li>
                        <li>Commitment to diversity and inclusion</li>
                        <li>Building lasting relationships with our audience</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;

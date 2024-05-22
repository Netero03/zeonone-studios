import React, { useEffect, useState } from 'react';
import { AboutUs1, BgDotsBoth, FilmCam, FilmCamO, HeroSectionBg3 } from '../assets/photos';
import TeamSectionHome from '../components/TeamSectionHome';

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
        <div className="bg-[#fff9f3] relative min-h-screen pb-20 w-full garamond">
            <div className="absolute inset-0 -z-0" style={{ backgroundImage: `url(${BgDotsBoth})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
            <div className=" absolute inset-0 overflow-hidden z-10 top-[600px] -left-40 opacity-60">
                <img
                    src={FilmCamO}
                    alt="Moving Element"
                    className="left-0 w-[700px] h-[600px]"
                    style={{
                        transform: `translateX(${scrollY * 0.1}px) scale(${1 + scrollY / 2000})`,
                        opacity: `${1 - scrollY / 1500}`,
                        transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
                    }}
                />
            </div>
            <section className="relative w-full h-[400px] flex flex-col items-center justify-center overflow-hidden ">
                <div className="absolute inset-0 z-10 opacity-50" style={{ backgroundColor: 'black', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                <div className="absolute inset-0 z-0 " style={{ backgroundImage: `url(${HeroSectionBg3})`, backgroundColor: '#f2ba20', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                <div className="z-10 text-white text-center text-5xl font-bold md:flex md:flex-row md:gap-4" style={{ opacity: 1 - scrollY / 200 }}>
                    About Us
                </div>
            </section>
            <div className="md:mx-24 flex flex-col -z-20 ">
                <div className="flex text-center mt-16 z-30">
                    <div className='w-[500px] h-[300px] bg-white' ></div>
                    <h6 className="mt-4 text-lg text-gray-600 ">
                        At Zenone Studios, we are passionate about creating unforgettable entertainment experiences. Our team is dedicated to producing top-notch films, TV shows, and digital content that captivate audiences worldwide.
                    </h6>
                </div>

                <div className="mt-10 ">
                    <div className="flex flex-row items-center ">
                        <div className="h-7 w-1 bg-[#ffac04] mt-1 mr-2"></div>
                        <h2 className="text-3xl font-bold text-black md:w-[179.8px] z-20">Our Mission</h2>

                    </div>
                    <div className='flex'>
                        <h6 className="mt-4 text-gray-600 text-lg z-20">
                            Our mission is to be at the forefront of the entertainment industry, pushing the boundaries of creativity and innovation. We strive to deliver high-quality productions that inspire and entertain.
                        </h6>
                    </div>
                </div>
            </div>

            <TeamSectionHome />

            <div className="mt-10 md:mx-24">
                <div className="flex flex-row items-center">
                    <div className="h-7 w-1 bg-[#ffac04] mt-1 mr-2"></div>
                    <h2 className="text-3xl font-bold text-black z-20">Our Values</h2>
                </div>
                <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
                    <li>Innovation in storytelling and production</li>
                    <li>Dedication to quality and excellence</li>
                    <li>Commitment to diversity and inclusion</li>
                    <li>Building lasting relationships with our audience</li>
                </ul>
            </div>
        </div>
    );
};

export default AboutUs;

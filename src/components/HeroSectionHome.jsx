import React, { useEffect, useState } from 'react';
import { AlferdHitchcock2 } from '../assets/photos';
import { TypeAnimation } from 'react-type-animation';
import FadeinAnimation from './FadeinAnimation';
import { ZenoneLogo } from '../assets/icons';

const HeroSectionHome = () => {
    const [showQuote, setShowQuote] = useState(false);
    const [showAdditionalText, setShowAdditionalText] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setShowQuote(true);
        }, 11000);

        const timer2 = setTimeout(() => {
            setShowAdditionalText(true);
        }, 12000); // Delay additional text by 1 second

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <section className="relative w-full h-screen flex flex-col lg:items-start items-center justify-center overflow-hidden " style={{ opacity: 1 - scrollY / 1000 }}>
            {/* Parallax background image */}
            <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#f7f7f7] opacity-0 via-[#f7f7f7] to-[#f7f7f7]" style={{ backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
            <img
                className="absolute inset-0 z-10 pointer-events-none"
                src={AlferdHitchcock2}
                alt="Hero Section Background"
                style={{ objectFit: 'cover', objectPosition: 'right', width: '100%', height: '100%', transform: `translateY(${scrollY * 0.5}px)` }}
            />
            {/* <div className='bg-white md:w-[300px] md:h-[100px] w-[100px] h-[100px] z-30 mb-10 ml-80 mr-24 md:block hidden'></div> */}
            <div className='lg:w-[300px] lg:h-[176.4px] md:w-[250px] md:h-[147px] z-30 mb-10 lg:ml-80 lg:mr-24 md:block hidden'>
                <FadeinAnimation >
                    <img src={ZenoneLogo} alt='ZenoneLogo' className='w-[300px] ' />
                </FadeinAnimation>
            </div>
            <div className="z-40 poppins-bold text-center text-4xl lg:flex lg:flex-row md:gap-4 justify-start items-start">

                <FadeinAnimation>
                    <div className='flex flex-col gap-1 drop-shadow-lg shadow-black min-w-[320px] min-h-[250px] lg:w-[900px] lg:max-h-[600px] md:mx-10 md:mt-0 md:text-center text-center justify-start'>
                        <TypeAnimation
                            cursor={false}
                            sequence={[
                                'To make a film,',
                                500,
                                'To make a film, you need three things',
                                1000,

                            ]}
                            wrapper="span"
                            speed={50}
                            className='md:text-2xl lg:text-[45px] text-[#2E2E2E] text-2xl my-5 poppins-bold lg:px-4 md:px-10 px-5 leading-10'
                        />
                        <TypeAnimation
                            cursor={false}
                            sequence={[
                                4000,
                                '"a great script,',
                                1000,
                                '"a great script, a great script',
                                1000,
                                '"a great script, a great script and a great script."'
                            ]}
                            wrapper="span"
                            speed={50}
                            className='font-bold dancing-script-bold text-5xl lg:text-[64px] md:text-5xl lg:px-28 md:px-0 px-3 quote-shadow'
                        />
                    </div>
                </FadeinAnimation>
                <div className='h-10'>
                    {showQuote && (
                        <div className="text-[#373D3B] h-10 garamond text-center lg:text-3xl md:text-2xl text-xl font-bold lg:absolute md:bottom-20 md:right-auto md:left-80 left-0 right-0 bottom-20 md:mb-0 mb-8 lg:ml-8 lg:mt-12 lg:pt-6 mt-5" style={{ opacity: showQuote ? 1 : 0, transition: 'opacity 2s ease-in' }}>
                            <FadeinAnimation>
                                ~ Alfred Hitchcock
                            </FadeinAnimation>
                        </div>
                    )}
                </div>
            </div>


        </section>
    );
};

export default HeroSectionHome;

import React, { useEffect, useState } from 'react';
import { AboutUsBg, AlferdHitchcock, AlferdHitchcock2, HeroQuoteBg, HeroQuoteBg2, HeroQuoteBg3, HeroQuoteBg4, HeroQuoteBg5, HeroSectionBg, RajSirImg1, RajSirImg3 } from '../assets/photos';
import { TypeAnimation } from 'react-type-animation';
import FadeinAnimation from './FadeinAnimation';

import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const PopupAnimation = ({ children }) => {
    const [ref, inView] = useInView({ triggerOnce: false });
    const animation = useSpring({
        opacity: inView ? 1 : 0,
        config: { duration: 1000 },
    });

    return (
        <animated.div ref={ref} style={animation}>
            {children}
        </animated.div>
    );
};

const HeroSectionHome = () => {
    const [showQuote, setShowQuote] = useState(false);
    const [showAdditionalText, setShowAdditionalText] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setShowQuote(true);
        }, 11000);

        const timer2 = setTimeout(() => {
            setShowAdditionalText(true);
        }, 11000 + 1000); // Delay additional text by 1 second

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-start overflow-hidden md:pt-20 pt-40">
            {/* Parallax background image */}
            <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#fff] opacity-0 bg-opacity-60 via-[#fff] to-[#fff]" style={{ backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
            <img
                className="absolute inset-0 z-10 pointer-events-none"
                src={AlferdHitchcock2}
                alt="Hero Section Background"
                style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%',  transform: `translateY(${scrollY * 0.5}px)` }}
                
                loading='lazy'
            />
            <div className='bg-white md:w-[300px] md:h-[100px] w-[100px] h-[100px] z-30 '></div>
            <div className="z-40 poppins-bold text-center text-4xl md:flex md:flex-row md:gap-4">
                {/* <div className="md:absolute md:text-5xl md:top-56 md:left-0 md:right-0">
                    {showAdditionalText && (
                        <PopupAnimation>
                            <div className=" font-bold">
                                To make a film, you need three things:
                            </div>
                        </PopupAnimation>
                    )}
                </div> */}
                <FadeinAnimation>
                    <div className='flex flex-col gap-1 drop-shadow-lg shadow-black w-min-[320px] h-min-[250px] lg:max-w-[1400px] lg:max-h-[400px] md:mx-5 md:mt-10 text-center justify-start'>
                        <TypeAnimation
                            cursor={false}
                            sequence={[
                                'To make a film,',
                                500,
                                'To make a film, you need three things:',
                                1000,

                            ]}
                            wrapper="span"
                            speed={50}
                            className='md:text-[38px] lg:text-[56px] text-[#2E2E2E] text-2xl my-5 lg:px-14 md:px-10 leading-10'
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
                            className=' text-[#032CD0] drop-shadow-lg font-bold dancing-script-bold text-5xl lg:text-[100px] md:text-[100px] lg:px-20 md:px-0 px-3 quote-shadow'
                        />
                    </div>
                </FadeinAnimation>
                {showQuote && (
                    <div className="text-[#373D3B] text-center md:text-4xl text-lg font-bold absolute bottom-0 left-0 right-0 mb-8" style={{ opacity: showQuote ? 1 : 0, transition: 'opacity 2s ease-in' }}>
                        <FadeinAnimation>
                            ~ Alfred Hitchcock
                        </FadeinAnimation>
                    </div>
                )}
            </div>


        </section>
    );
};

export default HeroSectionHome;

import React, { useEffect, useState } from 'react';
import { AlferdHitchcock2 } from '../assets/photos';
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
        <section className="relative w-full h-screen flex flex-row items-center justify-start overflow-hidden ">
            {/* Parallax background image */}
            <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#000] opacity-0 via-[#000] to-[#000]" style={{ backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
            <img
                className="absolute inset-0 z-10 pointer-events-none"
                src={AlferdHitchcock2}
                alt="Hero Section Background"
                style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%',  transform: `translateY(${scrollY * 0.5}px)` }}
                
                loading='lazy'
            />
            <div className='bg-white md:w-[300px] md:h-[100px] w-[100px] h-[100px] z-30 ml-40 mr-24'></div>
            <div className="z-40 poppins-bold text-center text-4xl md:flex md:flex-row md:gap-4 justify-start items-start">
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
                    <div className='flex flex-col gap-1 drop-shadow-lg shadow-black min-w-[320px] min-h-[250px] lg:w-[900px] lg:max-h-[600px] md:mx-10 md:mt-0 text-center justify-start'>
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
                            className='md:text-[38px] lg:text-[40px] text-[#2E2E2E] text-2xl my-5 playfair-display lg:px-14 md:px-10 leading-10'
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
                            className='font-bold dancing-script-bold text-5xl lg:text-[64px] md:text-[100px] lg:px-0 md:px-0 px-3 quote-shadow'
                        />
                    </div>
                </FadeinAnimation>
                {showQuote && (
                    <div className="text-[#373D3B] garamond text-center md:text-3xl text-lg font-bold absolute bottom-36 right-40 mb-8" style={{ opacity: showQuote ? 1 : 0, transition: 'opacity 2s ease-in' }}>
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

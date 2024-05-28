import React, { useEffect, useState } from 'react';
import { HeroSectionBg, RajSirImg1, RajSirImg3 } from '../assets/photos';
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
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Parallax background image */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#FCF3DD] bg-opacity-60 via-[#FCF3DD] to-[#FCF3DD]" style={{ backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
            {/* <img
                className="absolute inset-0 z-0"
                src={RajSirImg3}
                alt="Hero Section Background"
                style={{ objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%',  transform: `translateY(${scrollY * 0.5}px)` }}
                
                loading='lazy'
            /> */}
            <div className='bg-white hidden md:block md:w-[400px] md:h-[400px] w-[100px] h-[100px] z-10 ml-10'></div>
            <div className="z-10 text-[#373D3B] garamond text-center text-4xl md:flex md:flex-row md:gap-4">
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
                    <div className='flex flex-col gap-1 md:w-[900px] md:h-[400px] md:mx-5 md:mt-40 text-center md:text-center'>
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
                            className='md:text-5xl text-3xl md:px-14 '
                        />
                        <TypeAnimation
                            cursor={false}
                            sequence={[
                                4000,
                                'a great script,',
                                1000,
                                'a great script, a great script',
                                1000,
                                'a great script, a great script and a great script.'
                            ]}
                            wrapper="span"
                            speed={50}
                            className='md:text-6xl font-bold text-5xl md:px-12 '
                        />
                    </div>
                </FadeinAnimation>
                {showQuote && (
                    <div className="text-[#373D3B] garamond text-center md:text-3xl text-lg font-bold absolute bottom-10 right-36 mb-8" style={{ opacity: showQuote ? 1 : 0, transition: 'opacity 2s ease-in' }}>
                        <FadeinAnimation>
                            - Alfred Hitchcock
                        </FadeinAnimation>
                    </div>
                )}
            </div>


        </section>
    );
};

export default HeroSectionHome;

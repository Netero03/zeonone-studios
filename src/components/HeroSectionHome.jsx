import React, { useEffect, useState } from 'react';
import { HeroSectionBg } from '../assets/photos';
import { TypeAnimation } from 'react-type-animation';
import FadeinAnimation from './FadeinAnimation';

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
            <div className="absolute inset-0 z-10 opacity-30" style={{ backgroundColor: 'black', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
            <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${HeroSectionBg})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

            <div className="z-10 text-white garamond text-center text-4xl font-bold md:flex md:flex-row md:gap-4">
                <div className="md:absolute md:text-5xl md:top-56 md:left-0 md:right-0">
                    {showAdditionalText && (
                        <FadeinAnimation>
                            <div className=" font-bold">
                                To make a film, you need three things:
                            </div>
                        </FadeinAnimation>
                    )}
                </div>

                <TypeAnimation
                    cursor={false}
                    sequence={[
                        'To make a film,',
                        500,
                        'To make a film, you need three things:',
                        1000,
                        'a great script,',
                        1000,
                        'a great script, a great script',
                        1000,
                        'a great script, a great script and a great script.'
                    ]}
                    wrapper="span"
                    speed={50}
                    className='md:text-6xl text-[58px] '
                />
            </div>

            {showQuote && (
                <div className="text-white garamond text-center text-3xl font-bold absolute bottom-0 left-0 right-0 mb-8" style={{ opacity: showQuote ? 1 : 0, transition: 'opacity 2s ease-in' }}>
                    <FadeinAnimation>
                        ~ Hitchcock, Alfred
                    </FadeinAnimation>
                </div>
            )}
        </section>
    );
};

export default HeroSectionHome;

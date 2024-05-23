import React, { useEffect, useState } from 'react';
import { BgDotsBoth, FilmCam, FilmCamO, HeroSectionBg3, CaveArt1 } from '../assets/photos';
import TeamSectionHome from '../components/TeamSectionHome';
import FadeinAnimation from '../components/FadeinAnimation';

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
        <div className="bg-[#fff9f3] flex flex-col relative min-h-screen pb-20 w-full garamond">
            <div className="absolute inset-0 -z-0" style={{ backgroundImage: `url(${BgDotsBoth})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
            <div className="absolute inset-0 overflow-hidden z-10 top-[600px] -left-40 opacity-60">
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
            <section className="relative w-full h-[400px] flex flex-col items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-10 opacity-50" style={{ backgroundColor: 'black', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${HeroSectionBg3})`, backgroundColor: '#f2ba20', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

                <div className="z-20 text-white text-center text-5xl font-bold md:flex md:flex-row md:gap-4">
                    <FadeinAnimation >About Us</FadeinAnimation>

                </div>
            </section>
            <div className="md:mx-24 flex flex-col z-30">
                <FadeinAnimation>
                    <div className="flex md:text-center text-start mt-16 z-30 md:mx-0 mx-3">
                        <h6 className="mt-4 md:text-xl text-lg font-semibold text-gray-600 pb-20 ">
                            Zenone Studioz is in the business of art. We specialize in content production for both feature
                            films and web series, primarily working in the Hindi and Telugu industries. Collaborating with well-
                            known talents in these markets, we strive to create engaging narratives that resonate with audiences. Our
                            commitment to excellence extends to every aspect of filmmaking, from plotlines and characterizations to
                            dialogue and unique backdrops. With a team of prolific talent and skilled technicians, we transform
                            powerful scripts into captivating films and web series for a larger audience. At Zenone, we produce
                            content at a realistic price point, ensuring a positive return on investment.
                        </h6>
                    </div>
                </FadeinAnimation>

                <div className="mt-10 w-full flex flex-col">
                    <div className="flex flex-row items-center md:mx-0 mx-3">
                        <div className="h-7 w-1 bg-[#ffac04] mt-1 mr-2"></div>
                        <h2 className="text-3xl font-bold text-black md:w-[179.8px] z-20">Our Mission</h2>
                    </div>
                    <div className='flex md:mx-0 mx-3'>
                        <FadeinAnimation>
                            <h6 className="mt-4 text-gray-600 text-xl z-20">
                                From the dawn of humanity, when our ancestors huddled around flickering fires in ancient
                                caves, storytelling has been the sacred rite. At Zenone Studioz, we carry this torch forward. Our mission
                                is simple yet profound: to weave narratives that resonate across epochs. We believe that a well-crafted
                                script is the heartbeat of any production. While other elements contribute, it’s the script, directors, and
                                actors that shape our cinematic universe.
                            </h6>
                        </FadeinAnimation>
                    </div>
                    <div className="w-full h-[180px] relative mt-6 mb-6">
                        
                            <div className="absolute inset-0 z-10 opacity-40" style={{ backgroundColor: 'black', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

                            <div
                                className="absolute inset-0 z-0 "
                                style={{
                                    backgroundImage: `url(${CaveArt1})`,
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    backgroundAttachment: 'fixed',
                                }}
                            ></div>
                    </div>
                    <div className='flex md:mx-0 mx-3'>
                        <FadeinAnimation>
                            <h6 className="mt-4 text-gray-600 text-xl z-20">
                                We obsess over concepts and scripts, nurturing them like rare blooms. Our canvas spans genres—drama,
                                mystery, romance, and fantasy—each guided by passion and purpose. We collaborate with industry
                                luminaries, transforming ink into celluloid magic. Our commitment extends beyond the screen.
                            </h6>
                        </FadeinAnimation>
                    </div>
                </div>
            </div>
            <TeamSectionHome />
            <div className="mt-10 md:mx-24 mx-3">
                <FadeinAnimation>
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
                </FadeinAnimation>
            </div>
        </div>
    );
};

export default AboutUs;

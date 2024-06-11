import React from 'react'
import { AboutUsSectionBg, CaveArt1, CaveArt2, MissionBg, MovieImg, scriptBg } from '../assets/photos'
import { Link } from 'react-router-dom'
import { Slide } from 'react-awesome-reveal'
import FadeinAnimation from './FadeinAnimation'
import styled from 'styled-components'
import { FilmVideo1, FireVideo } from '../assets/videos'

const Highlight = styled.span`
    color: #ffac04;
    font-weight: bold;
`;

const AboutUsSectionHome = () => {
    return (
        <section className="w-full flex overflow-hidden flex-col items-center">
            <div className="relative w-full h-screen flex flex-col py-20">
                <div
                    className="absolute inset-0 z-0 w-full"
                    style={{
                        backgroundImage: `url(${MissionBg})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                    }}
                ></div>
                <div className="relative flex flex-row md:flex-row justify-center items-center md:justify-start w-full">
                    <div className="absolute flex flex-row items-center text-left justify-start md:mx-0 mx-3 md:mb-0 mb-40 left-10 w-full h-[200px] z-10">
                        <div className="h-7 w-1 bg-[#1C39BB] mt-1 mr-2 ml-5"></div>
                        <h2 className="font-bold md:text-[56px] text-[#373D3B] text-3xl md:px-5 poppins-bold drop-shadow-[0_4px_3px_rgba(247,247,247,247.25)]">
                            Our Mission
                        </h2>
                    </div>

                    <div className="relative w-full md:w-[80%] h-[380px] md:h-[80vh] flex items-center justify-end md:ml-auto mt-6 md:mt-0">
                        <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center top-40 md:top-0 rounded-s-xl">
                            <div className="w-[100%] h-[100%] bg-black opacity-0 bg-center bg-no-repeat bg-cover rounded-s-xl"></div>
                        </div>
                        <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center top-40 md:top-0 shadow-lg rounded-s-xl opacity-50">
                            <video
                                src={FireVideo}
                                className="w-full h-full object-cover rounded-xl"
                                autoPlay
                                loop
                                muted
                            ></video>
                        </div>
                        <div className="absolute inset-0 z-0 w-full h-full flex items-center justify-center top-40 md:top-0 shadow-lg rounded-s-xl">
                            <div className="w-[100%] h-[100%] bg-center bg-no-repeat bg-cover shadow-lg rounded-s-xl" style={{ backgroundImage: `url(${CaveArt1})` }}></div>
                        </div>
                        <div className="absolute flex 394px:mx-3 mt-10 mb-0 text-center left-5 394px:left-10 bottom-10 z-20 top-36 394px:top-44 md:top-auto">
                            <FadeinAnimation>
                                <Slide direction="left" duration={1000} delay={-500}>
                                    <h6 className="text-[#f7f7f7] text-justify text-base md:text-lg 1113px:text-2xl 875px:text-xl pr-5 394px:pr-10 z-20 poppins-regular drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)]">
                                        From the dawn of humanity, when our ancestors huddled around flickering fires in ancient
                                        caves, <span className="highlight">storytelling</span> has been the sacred rite. At <span className="highlight">Zenone Studioz</span>, we carry this torch forward. Our mission
                                        is simple yet profound: to weave <span className="highlight">narratives</span> that resonate across epochs. We believe that a well-crafted
                                        <span className="highlight"> script</span> is the heartbeat of any production. While other elements contribute, it’s the <span className="highlight">script</span>, <span className="highlight">directors</span>, and
                                        <span className="highlight"> actors</span> that shape our cinematic universe.
                                    </h6>
                                </Slide>
                            </FadeinAnimation>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative max-w-full h-[110vh] flex md:flex-row-reverse flex-col p-5 pt-20 pb-8 z-30">
                <div
                    className="absolute inset-0 z-0 w-full"
                    style={{
                        backgroundImage: `url(${AboutUsSectionBg})`,
                        backgroundPosition: 'right',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}
                ></div>
                <div className="flex flex-col justify-center items-center px-20">
                    <div className="flex flex-row items-center text-center justify-end md:mx-0 h-[100px] z-20">
                        <h2 className="font-bold md:text-[56px] text-[#373D3B] text-3xl leading-[45px] md:pr-14 poppins-bold">About Us</h2>
                        <div className="h-7 w-1 bg-[#1C39BB] mt-1 mr-2"></div>

                    </div>
                    <Link to="/about-us" className="arrow-link dancing-script-bold w-32 h-auto md:mr-5 rounded-md text-center text-2xl text-[#433801] self-center md:mt-0 transition-all duration-300 hover:text-lg">
                        See more
                    </Link>
                </div>
                <div className='w-full h-full'>

                    <div className="md:w-full h-[250px] relative mt-6 md:mt-24 mb-6 ml-5">
                        <div className="absolute inset-0 z-10 opacity-10 w-full rounded-xl" style={{ backgroundColor: 'black', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                        <div
                            className="absolute inset-0 z-0 rounded-xl"
                            style={{
                                backgroundImage: `url(${scriptBg})`,
                                backgroundAttachment: 'fixed',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <div className="absolute inset-0 z-10 rounded-xl opacity-50">
                            <video
                                src={FilmVideo1}
                                className="w-full h-full object-cover rounded-xl"
                                autoPlay
                                loop
                                muted
                            ></video>
                        </div>
                        <img
                            src={MovieImg}
                            alt="Img"
                            className='absolute right-0 h-full object-contain z-20 drop-shadow-2xl'
                        />
                    </div>

                    <div className='flex md:mx-0 text-center mx-3'>
                        <FadeinAnimation>
                            <Slide direction="down" duration={1000} delay={-500}>
                                <h6 className="mt-4 text-[#373D3B] poppins-regular text-sm sm:text-xl md:text-lg 900px:text-xl 1113px:2xl z-20 md:px-10">
                                    We obsess over concepts and scripts, nurturing them like rare blooms. Our canvas spans genres—drama,
                                    mystery, romance, and fantasy—each guided by passion and purpose. We collaborate with industry
                                    luminaries, transforming ink into celluloid magic. Our commitment extends beyond the screen.
                                </h6>
                            </Slide>
                        </FadeinAnimation>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default AboutUsSectionHome

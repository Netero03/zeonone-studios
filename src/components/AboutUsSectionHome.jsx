import React from 'react'
import { AboutUsSectionBg, CaveArt1, CaveArt2, MissionBg, MovieImg, scriptBg } from '../assets/photos'
import { Link } from 'react-router-dom'
import { Slide } from 'react-awesome-reveal'
import FadeinAnimation from './FadeinAnimation'
import styled from 'styled-components'

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
                <div className="relative flex flex-col md:flex-row justify-center items-center md:justify-start w-full">
                    <div className="absolute flex flex-row items-center text-left justify-start md:mx-0 mx-3 left-10 w-full h-[200px] z-10">
                        <div className="h-7 w-1 bg-[#1C39BB] mt-1 mr-2 ml-5"></div>
                        <h2 className="font-bold md:text-[56px] text-[#373D3B] text-3xl md:px-5 poppins-bold drop-shadow-[0_4px_3px_rgba(247,247,247,247.25)]">Our Mission</h2>
                    </div>

                    <div className="relative w-full md:w-[80%] h-[70%] md:h-[80vh] flex items-center justify-end ml-auto mt-6 md:mt-0">
                        <div className="absolute inset-0 z-10 w-full h-full flex items-center justify-center">
                            <div className="w-[100%] h-[100%] bg-black opacity-25 bg-center bg-no-repeat bg-cover"></div>
                        </div>
                        <div className="absolute inset-0 z-0 w-full h-full flex items-center justify-center">
                            <div className="w-[100%] h-[100%] bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${CaveArt1})` }}></div>
                        </div>
                        <div className='flex mx-3 my-10 text-center absolute left-10 bottom-10 z-20'>
                            <FadeinAnimation>
                                <Slide direction="left" duration={1000} delay={-500}>
                                    <h6 className="text-[#f7f7f7] text-justify text-base md:text-2xl mr-10 z-20 poppins-regular drop-shadow-[0_4px_3px_rgba(0,0,0,0.5)]">
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
            <div className="relative max-w-full h-screen flex flex-col p-5 pt-20 pb-8 z-30">
                <div
                    className="absolute inset-0 z-0 w-full"
                    style={{
                        backgroundImage: `url(${AboutUsSectionBg})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                    }}
                ></div>
                <div className='flex w-full'>
                    
                    <div className="w-[4000px] h-[250px] relative mt-6 mb-6">
                        <div className="absolute inset-0 z-10 opacity-10 w-full" style={{ backgroundColor: 'black', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                        <div
                            className="absolute inset-0 z-0"
                            style={{
                                backgroundImage: `url(${scriptBg})`,
                                backgroundAttachment: 'fixed',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover'
                            }}
                        ></div>
                        <img
                            src={MovieImg}
                            alt="Img"
                            className='absolute right-0 h-full object-contain z-10 drop-shadow-2xl'
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center w-full px-3 mt-52">
                        <div className="flex flex-row items-center text-center justify-end md:mx-0 mx-3 w-full h-[100px] z-20">
                            <h2 className="font-bold md:text-[56px] text-[#373D3B] text-3xl md:pr-14 poppins-bold">About Us</h2>
                            <div className="h-7 w-1 bg-[#1C39BB] mt-1 mr-2"></div>

                        </div>
                        <Link to="/about-us" className="arrow-link dancing-script-bold w-32 h-auto md:mr-5 rounded-md text-center text-2xl text-[#ffac04] self-center md:mt-0 transition-all duration-300 hover:text-lg">
                            See more
                        </Link>
                    </div>
                </div>
                <div className='flex md:mx-0 text-center mx-3'>
                    <FadeinAnimation>
                        <Slide direction="down" duration={1000}>
                            <h6 className="mt-4 text-[#373D3B] poppins-regular text-base md:text-3xl z-20 mr-96">
                                We obsess over concepts and scripts, nurturing them like rare blooms. Our canvas spans genres—drama,
                                mystery, romance, and fantasy—each guided by passion and purpose. We collaborate with industry
                                luminaries, transforming ink into celluloid magic. Our commitment extends beyond the screen.
                            </h6>
                        </Slide>
                    </FadeinAnimation>
                </div>
            </div>
        </section>
    )
}

export default AboutUsSectionHome

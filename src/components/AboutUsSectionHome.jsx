import React from 'react'
import { AboutUsSectionBg, CaveArt1, CaveArt2, MissionBg, MovieImg, scriptBg } from '../assets/photos'
import { Link } from 'react-router-dom'
import { Slide } from 'react-awesome-reveal'
import FadeinAnimation from './FadeinAnimation'

const AboutUsSectionHome = () => {
    return (
        <section className=" w-full flex overflow-hidden flex-col items-center">
            {/* <div className="absolute inset-0 -z-0" style={{ backgroundImage: `url(${BgDots})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div> */}
            <div className="relative w-full h-screen flex flex-col py-14">
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
                <div className="flex flex-col md:flex-row justify-center items-center px-3 md:justify-start w-full">
                    <div className="flex flex-row items-center text-center justify-center md:mx-0 mx-3 w-full h-[200px] "  >
                        {/* <div className="h-7 w-1 bg-[#ffac04] mt-1 mr-2"></div> */}
                        <div className="h-7 w-1 bg-[#1C39BB] mt-1 mr-2 z-10"></div>

                        <h2 className=" font-bold md:text-[56px] text-[#373D3B] text-3xl md:px-14 poppins-bold z-10">Our Mission</h2>
                    </div>

                </div>

                <div className="w-screen md:h-[250px] min-h-[220px] relative mt-6   ">

                    <div className="absolute inset-0 z-10 opacity-0 w-full" style={{ backgroundColor: 'black', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

                    <div
                        className="absolute inset-0 z-0 w-screen"
                        style={{
                            backgroundImage: `url(${CaveArt1})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundAttachment: 'fixed',
                        }}
                    ></div>
                    <img
                        src={CaveArt2}
                        alt="Img"
                        className='absolute md:h-[260px] h-[250px] lg:h-[280px] drop-shadow-xl inset-0 object-contain z-10 right-0'
                    />
                </div>
                <div className='flex max-w-4xl mx-3 md:mb-20 my-5 text-center self-center'>
                    <FadeinAnimation>
                        <Slide direction="down" duration={1000}>
                            <h6 className=" text-[#373D3B] text-base md:text-xl z-20 open-sans-regular">
                                From the dawn of humanity, when our ancestors huddled around flickering fires in ancient
                                caves, storytelling has been the sacred rite. At Zenone Studioz, we carry this torch forward. Our mission
                                is simple yet profound: to weave narratives that resonate across epochs. We believe that a well-crafted
                                script is the heartbeat of any production. While other elements contribute, it’s the script, directors, and
                                actors that shape our cinematic universe.
                            </h6>
                        </Slide>
                    </FadeinAnimation>
                </div>

            </div>
            <div className="relative max-w-full h-screen flex flex-col pb-8 z-30">
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
                <div className="flex flex-col md:flex-row justify-center items-center px-3 md:justify-start w-full md:pl-32">
                    <div className="flex flex-row items-center text-center justify-center md:mx-0 mx-3 w-full h-[200px]"  >
                        {/* <div className="h-7 w-1 bg-[#ffac04] mt-1 mr-2"></div> */}
                        <div className="h-7 w-1 bg-[#1C39BB] mt-1 mr-2 z-20"></div>

                        <h2 className=" font-bold md:text-[56px] text-[#373D3B] text-3xl md:px-14 poppins-bold z-20">About Us</h2>
                    </div>
                    <Link to="/about-us" className="arrow-link dancing-script-bold w-32 h-auto md:mr-5 rounded-md text-center text-2xl text-[#ffac04] self-center md:ml-auto mt-4 md:mt-0 transition-all duration-300 hover:text-lg">
                        See more
                    </Link>

                </div>
                <div className="w-full h-[250px] relative mt-6 mb-6">
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
                <div className='flex md:mx-40 text-center mx-3'>
                    <FadeinAnimation>
                        <Slide direction="down" duration={1000}>

                            <h6 className="mt-4 text-[#373D3B] open-sans-regular text-base md:text-xl z-20">
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
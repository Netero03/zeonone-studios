import React from 'react'
import { BgDots, MovieImg, scriptBg } from '../assets/photos'
import { Link } from 'react-router-dom'

const AboutUsSectionHome = () => {
    return (
        <section className=" bg-[#fff9f3] relative w-full h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 -z-0" style={{ backgroundImage: `url(${BgDots})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
            <div className="container md:mx-20 flex flex-col md:flex-row md:justify-between items-center w-full z-10">
                <div className="w-full mb-8 md:mb-0 garamond">
                    <div className="flex flex-col md:flex-row justify-center items-center px-3 md:justify-start w-full">
                        <div className="flex flex-row items-center">
                            <div className="h-7 w-1 bg-[#ffac04] mt-1 mr-2"></div>
                            <h2 className="text-3xl font-bold text-black w-[179.8px]">About Zenone</h2>
                        </div>
                        <Link to="/about-us" className=" rounded-md text-center text-sm inter-font text-black self-center md:ml-auto mt-4 md:mt-0">
                            See more ~
                        </Link>
                    </div>
                    <div className="w-full h-[180px] relative mt-6 mb-6">
                        <div
                            className="absolute inset-0 z-0 opacity-60"
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
                            className='absolute inset-0 w-full h-full object-contain z-10'
                        />
                    </div>
                    <p className="text-md md:text-lg mt-4 text-[#656565] text-center  px-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutUsSectionHome
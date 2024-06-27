import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ProfilePlaceholder } from '../assets/icons';
import { teamMembers } from '../constants/data';
import { Slide } from 'react-awesome-reveal';
import FadeinAnimation from './FadeinAnimation';
import { KeyTeamSectionBg } from '../assets/photos';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const TeamSectionHome = () => {
    const location = useLocation();

    const getBackgroundImage = () => {
        switch (location.pathname) {
            case '/about-us':
                return KeyTeamSectionBg;
            default:
                return KeyTeamSectionBg;
        }
    };

    return (
        <LazyLoadComponent>
            <section className="bg-[#F7F7F7] relative w-full md:h-[120hv] flex items-center justify-center overflow-hidden pb-32 pt-20">
                <div className="absolute inset-0 -z-0 opacity-50 animate-fadeIn" style={{ backgroundImage: `url(${getBackgroundImage()})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

                <div className="container md:mx-20 flex flex-col md:flex-row md:justify-between items-center w-full z-20">
                    <div className="w-full mb-8 md:mb-0 poppins-regular">
                        <div className="flex flex-col md:flex-row justify-center items-center px-3 md:justify-start w-full md:pl-32">
                            <div className="flex flex-row items-center text-center justify-center md:mx-0 mx-3 w-full md:h-[200px] h-[100px]">
                                <div className="h-7 w-1 mt-1 mr-2 "><Slide direction='up' duration={1000} ><div className="h-7 w-1 bg-[#1C39BB]"></div></Slide></div>
                                <h2 className=" font-bold md:text-[56px] text-[#373D3B] text-3xl md:px-14 poppins-bold z-20"><Slide direction='up' duration={1000} delay={-500} >Key Team</Slide></h2>
                            </div>
                            <Slide direction='up' duration={1000} >
                                <Link to="/key-team" className="arrow-link dancing-script-bold animate-pulse w-36 h-auto md:mr-5 rounded-md text-center text-2xl text-[#433801] self-center md:ml-auto mt-4 md:mt-0 transition-all duration-300 hover:text-lg">
                                    Know more
                                </Link>
                            </Slide>
                        </div>
                        {/* card section */}
                        <div className="flex flex-wrap justify-center md:justify-center md:gap-14 mt-8 mx-10">
                            {teamMembers.map(member => (
                                <div key={member.id}>
                                    <Link to='/key-team' >
                                        <div className=" p-6 w-full md:w-96 md:h-full ">
                                            {member.image ? (
                                                <img src={member.image} alt={member.name} className="w-full md:h-auto object-cover rounded-full hover:shadow-xl shadow-md transition-shadow duration-300 animate-fadeIn" />
                                            ) : (
                                                <div className="w-full h-40 flex justify-center items-center bg-gray-200 rounded-t-md animate-fadeIn">
                                                    <img src={ProfilePlaceholder} className="w-24 h-24 text-gray-400" /> {/* Replace with your profile placeholder SVG */}
                                                </div>
                                            )}
                                            <div className="text-center mt-4 ">
                                                <h3 className="text-2xl font-bold"><FadeinAnimation>{member.name}</FadeinAnimation></h3>
                                                <div className="text-gray-600 text-lg"><FadeinAnimation>{member.position}</FadeinAnimation></div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </LazyLoadComponent>
    );
}

export default TeamSectionHome;

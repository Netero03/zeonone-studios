import React from 'react';
import { Link } from 'react-router-dom';
import { ProfilePlaceholder } from '../assets/icons';
import { BgDotsBoth } from '../assets/photos';
import FadeinAnimation from './FadeinAnimation';
import { teamMembers } from '../constants/data';

const TeamSectionHome = () => {
    return (
        <section className="bg-[#F7F7F7] relative w-full md:h-screen flex items-center justify-center overflow-hidden pb-32 pt-20">
            <div className="absolute inset-0 -z-0" style={{ backgroundImage: `url(${BgDotsBoth})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

            <div className="container md:mx-20 flex flex-col md:flex-row md:justify-between items-center w-full z-20">
                <div className="w-full mb-8 md:mb-0 timesNew">
                    <div className="flex flex-col md:flex-row justify-center items-center px-3 md:justify-start w-full md:pl-32">
                        <div className="flex flex-row items-center text-center justify-center md:mx-0 mx-3 w-full md:h-[200px] h-[100px]"  >
                            {/* <div className="h-7 w-1 bg-[#1C39BB] mt-1 mr-2"></div> */}
                            <div className="h-7 w-1 bg-[#1C39BB] mt-1 mr-2"></div>

                            <h2 className=" font-bold md:text-[56px] text-[#373D3B] text-3xl md:px-14 poppins-bold z-20">Key Team</h2>
                        </div>
                        <Link to="/key-team" className="arrow-link dancing-script-bold w-32 h-auto md:mr-5 rounded-md text-center text-2xl text-[#ffac04] self-center md:ml-auto mt-4 md:mt-0 transition-all duration-300 hover:text-lg">
                            See more
                        </Link>
                    </div>
                    {/* card section */}
                    <div className="flex flex-wrap justify-center md:justify-center gap-14 mt-8 mx-10">
                        {teamMembers.map(member => (
                            <FadeinAnimation key={member.id}>
                                <Link to='/key-team'>
                                    <div className="bg-white rounded-md shadow-md p-6 w-full md:w-96 md:h-full hover:shadow-xl">
                                        {member.image ? (
                                            <img src={member.image} alt={member.name} className="w-full md:h-auto object-cover rounded-t-md" />
                                        ) : (
                                            <div className="w-full h-40 flex justify-center items-center bg-gray-200 rounded-t-md">
                                                <img src={ProfilePlaceholder} className="w-24 h-24 text-gray-400" /> {/* Replace with your profile placeholder SVG */}
                                            </div>
                                        )}
                                        <div className="text-center mt-4">
                                            <h3 className="text-lg font-bold">{member.name}</h3>
                                            <p className="text-gray-600">{member.position}</p>
                                        </div>
                                    </div>
                                </Link>
                            </FadeinAnimation>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamSectionHome;

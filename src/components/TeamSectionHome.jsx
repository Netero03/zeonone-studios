import React from 'react';
import { Link } from 'react-router-dom';
import { ProfilePlaceholder } from '../assets/icons';
import { BgDotsBoth } from '../assets/photos';
import FadeinAnimation from './FadeinAnimation';
import { teamMembers } from '../constants/data';

const TeamSectionHome = () => {
    return (
        <section className="bg-[#fff9f3] relative w-full md:h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 -z-0" style={{ backgroundImage: `url(${BgDotsBoth})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

            <div className="container md:mx-20 flex flex-col md:flex-row md:justify-between items-center w-full z-20">
                <div className="w-full mb-8 md:mb-0 timesNew">
                    <div className="flex flex-col md:flex-row justify-center items-center px-3 md:justify-start w-full mt-16 md:mt-0">
                        <div className="flex flex-row items-center">
                            <div className="h-7 w-1 bg-[#ffac04] mt-1 mr-2"></div>
                            <h2 className="text-3xl font-bold text-black md:w-[179.8px]">Key Team</h2>
                        </div>
                        <Link to="/key-team" className="arrow-link rounded-md text-center text-md hover:text-lg text-black self-center md:ml-auto mt-4 md:mt-0 transition-transform duration-1000">
                            See more
                        </Link>
                    </div>
                    {/* card section */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-8">
                        {teamMembers.map(member => (
                            <FadeinAnimation key={member.id}>
                                <div className="bg-white rounded-md shadow-md p-6 w-full md:w-64">
                                    {member.image ? (
                                        <img src={member.image} alt={member.name} className="w-full md:h-40 object-cover rounded-t-md" />
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
                            </FadeinAnimation>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamSectionHome;

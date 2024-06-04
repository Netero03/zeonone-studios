import React, { useEffect, useState } from 'react';
import { BgDotsBoth, KeyTeamBg } from '../assets/photos';
import FadeinAnimation from '../components/FadeinAnimation';
import { teamMembers } from '../constants/data';
import { FaGlobe, FaImdb, FaInstagram, FaLinkedin, FaTwitter, FaWikipediaW } from 'react-icons/fa';

const KeyTeam = () => {
  const [scrollY, setScrollY] = useState(0);
  const [memberScrollY, setMemberScrollY] = useState(teamMembers.map(() => 0));

  useEffect(() => {
    const handleScroll = () => {
      const isSmallScreen = window.innerWidth <= 768; // Adjust the breakpoint as needed
      setScrollY(window.scrollY);

      if (!isSmallScreen) {
        setMemberScrollY(prevScrollY =>
          prevScrollY.map((_, index) => window.scrollY * (0.1 - 0.05 * index))
        );
      } else {
        setMemberScrollY(teamMembers.map(() => 0)); // Reset scroll animation on small screens
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#F5F5F5] poppins-regular relative">
      <div className="absolute inset-0 -z-0" style={{ backgroundImage: `url(${BgDotsBoth})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

      <section className="relative w-full h-[400px] flex flex-col items-center justify-center overflow-hidden">
        {/* Parallax background image */}
        <div className="absolute inset-0 z-10 opacity-0" style={{ backgroundColor: 'black', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${KeyTeamBg})`, backgroundColor: '#1C39BB', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        {/* Legacy text */}
        <div className="z-10 text-white text-center text-5xl font-bold md:flex md:flex-row md:gap-4" style={{ opacity: 1 - scrollY / 200 }}>
          <FadeinAnimation>Key Team</FadeinAnimation>
        </div>
      </section>

      <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 ">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center justify-center text-center md:text-justify mb-32 transition transform hover:scale-105`}
          >
            <div className="md:w-1/2 ">
              <FadeinAnimation>
                <img src={member.image} alt={member.name} className="w-5/6 h-5/6 mx-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" />
              </FadeinAnimation>
            </div>
            <div className="md:w-1/2 md:pl-8 md:pr-8 mt-10 md:mt-0" style={{ transform: `translateY(-${memberScrollY[index]}px)` }}>
              <span className="md:text-3xl text-xl font-bold text-[#1C39BB]"><FadeinAnimation>{member.name}</FadeinAnimation></span>
              <span className="md:text-xl text-xs text-gray-700 mt-2"><FadeinAnimation>{member.position}</FadeinAnimation></span>
              <div className="md:text-lg text-xs text-gray-600 mt-4 md:mx-0 mx-3"><FadeinAnimation>{member.description}</FadeinAnimation></div>
              <div className="flex gap-4 mt-2">
                {member.socialLinks?.imdb && (
                  <a href={member.socialLinks.imdb} target="_blank" rel="noopener noreferrer">
                    <FaImdb className="text-4xl" />
                  </a>
                )}
                {member.socialLinks?.linkedin && (
                  <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-4xl" />
                  </a>
                )}
                {member.socialLinks?.twitter && (
                  <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-4xl" />  
                  </a>
                )}
                {member.socialLinks?.instagram && (
                  <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-4xl" />  
                  </a>
                )}
                {member.socialLinks?.website && (
                  <a href={member.socialLinks.website} target="_blank" rel="noopener noreferrer">
                    <FaGlobe className="text-4xl" />  
                  </a>
                )}
                {member.socialLinks?.wikipedia && (
                  <a href={member.socialLinks.wikipedia} target="_blank" rel="noopener noreferrer">
                    <FaWikipediaW className="text-4xl" />  
                  </a>
                )}
                {/* Add more social links as needed */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyTeam;

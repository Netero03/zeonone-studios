import React, { useEffect, useState } from 'react';
import { KeyTeamBg, KeyTeamPageBg } from '../assets/photos';
import FadeinAnimation from '../components/FadeinAnimation';
import { teamMembers } from '../constants/data';
import { FaGlobe, FaImdb, FaInstagram, FaLinkedin, FaTwitter, FaWikipediaW } from 'react-icons/fa';
import Loading from '../components/Loading';

const KeyTeam = () => {
  const [scrollY, setScrollY] = useState(0);
  const [memberScrollY, setMemberScrollY] = useState(teamMembers.map(() => 0));
  const [isLoading, setIsLoading] = useState(!localStorage.getItem('keyTeamContentLoaded'));

  useEffect(() => {
    if (!localStorage.getItem('keyTeamContentLoaded')) {
      // Simulate a delay to show the loading screen
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('keyTeamContentLoaded', 'true');
      }, 1000); // Adjust the delay as needed

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []);

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
  
  if (isLoading) {
    return <Loading />; // Render the loading screen while loading
  }
  
  return (
    <div className="bg-[#F5F5F5] poppins-regular relative">
      <div className="absolute inset-0 -z-0 opacity-50" style={{ backgroundImage: `url(${KeyTeamPageBg})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

      <section className="relative w-full h-[400px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10 opacity-30" style={{ backgroundColor: '#f7f7f7', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        <div className="absolute inset-0 z-0 " style={{ backgroundImage: `url(${KeyTeamBg})`, backgroundColor: '#f7f7f7', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

        <div className="z-20 text-[#373D3B] text-center text-6xl font-bold md:flex md:flex-row md:gap-4 tracking-tighter" style={{ opacity: 1 - scrollY / 200 }}>
          <FadeinAnimation >Key team</FadeinAnimation>

        </div>
      </section>

      <div className="relative max-w-7xl mx-auto px-4 py-40 pt-56 sm:px-6 lg:px-8 ">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className={`flex flex-col md:flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center justify-center text-center md:text-justify mb-32 transition transform hover:scale-105`}
          >
            <span className="md:text-5xl text-4xl font-bold text-[#373D3B] pb-10"><FadeinAnimation>{member.name}</FadeinAnimation></span>

            <div className='flex flex-col md:flex-row items-center'>
              <div className="md:w-1/2">
                <FadeinAnimation>
                  <img src={member.image} alt={member.name} className="w-5/6 h-5/6 mx-8 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 " />
                </FadeinAnimation>
              </div>
              <div className="md:w-1/2 md:pl-8 md:pr-8 mt-10 md:mt-0">
                <span className="md:text-xl text-xl text-gray-700 mt-2"><FadeinAnimation>{member.position}</FadeinAnimation></span>
                <div className="md:text-lg text-xs text-gray-600 mt-4 md:mx-0 mx-3"><FadeinAnimation>{member.description}</FadeinAnimation></div>
                <div className="flex gap-4 my-5 items-center justify-center md:justify-normal">
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
                {member.projects && member.projects.length > 0 && (
                  <div>
                    <div className="w-full h-full flex flex-row items-center justify-center gap-2">
                      {member.projects.map((project, index) => (
                        <FadeinAnimation key={index}>
                          <img src={project.image} alt={`Poster of ${project.name}`} className="object-cover w-full h-full" />
                        </FadeinAnimation>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyTeam;

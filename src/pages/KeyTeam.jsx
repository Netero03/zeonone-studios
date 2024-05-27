import React, { useEffect, useState } from 'react';
import { HeroSectionBg3 } from '../assets/photos';
import FadeinAnimation from '../components/FadeinAnimation';
import { Zoom } from 'react-awesome-reveal';

// Placeholder Profile SVG
const ProfilePlaceholder = () => (
  <svg
    className="w-48 h-48 text-gray-400"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 4a3 3 0 1 1-3 3 3 3 0 0 1 3-3zm0 14.9a8.968 8.968 0 0 1-7.5-4.008c.036-2.495 5-3.865 7.5-3.865s7.464 1.37 7.5 3.865A8.968 8.968 0 0 1 12 20.9z" />
  </svg>
);

// Sample member data
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO",
    image: null,
    description: "A Film & TV Industry Leader with 20 + years of experience. As the former Head of Film Vertical of Ramoji Group, produced Films for Ushakiron Movies and managed the Studio operations of Ramoji Film City. During 2007-2010 played a key role as the ‘Vice President-Creative & Production’ of Zee Motion Pictures (the Film Vertical of Zee group). During 2000-2006 as a key member of the core team, launched & lead ETV Bangla, ETV Hindi, ETV Marathi etc. These extensive experiences have helped him to develop a tenacious commitment to WOW the audience by facilitating the production of unique & engaging content, combined with an in depth understanding of the creative process and audience preferences."
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "CFO",
    image: null,
    description: "Jane Smith is a seasoned financial expert with a knack for strategic planning and fiscal management. She ensures that Zenone’s financial health remains robust."
  },
  {
    id: 1,
    name: "John Doe",
    position: "CEO",
    image: null,
    description: "A Film & TV Industry Leader with 20 + years of experience. As the former Head of Film Vertical of Ramoji Group, produced Films for Ushakiron Movies and managed the Studio operations of Ramoji Film City. During 2007-2010 played a key role as the ‘Vice President-Creative & Production’ of Zee Motion Pictures (the Film Vertical of Zee group). During 2000-2006 as a key member of the core team, launched & lead ETV Bangla, ETV Hindi, ETV Marathi etc. These extensive experiences have helped him to develop a tenacious commitment to WOW the audience by facilitating the production of unique & engaging content, combined with an in depth understanding of the creative process and audience preferences."
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "CFO",
    image: null,
    description: "Jane Smith is a seasoned financial expert with a knack for strategic planning and fiscal management. She ensures that Zenone’s financial health remains robust."
  },
  // Add more members as needed
];

const KeyTeam = () => {
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
    <div className="bg-[#fff9f3] garamond">
      <section className="relative w-full h-[400px] flex flex-col items-center justify-center overflow-hidden">
        {/* Parallax background image */}
        <div className="absolute inset-0 z-10 opacity-50" style={{ backgroundColor: 'black', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        <div className="absolute inset-0 z-0 " style={{ backgroundImage: `url(${HeroSectionBg3})`, backgroundColor: '#f2ba20', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        {/* Legacy text */}
        <div className="z-10 text-white  text-center text-5xl font-bold md:flex md:flex-row md:gap-4  " style={{ opacity: 1 - scrollY / 200 }}>
          <FadeinAnimation>Key Team</FadeinAnimation>
        </div>

      </section>
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {teamMembers.map((member, index) => (
          <div
            key={member.id}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-center mb-32 transition transform hover:scale-105`}
          >
            <div className="md:w-1/2">
              <FadeinAnimation>
                <img src={member.image} alt={member.name} className="w-full h-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300" />
              </FadeinAnimation>
            </div>
            <div className="md:w-1/2 md:pl-8 md:pr-8 mt-10 md:mt-0" style={{ transform: `translateY(-${scrollY * 0.1}px)` }}>
              <span className="text-3xl font-bold text-[#f2ba20]" ><FadeinAnimation>{member.name}</FadeinAnimation></span>
              <span className="text-xl text-gray-700 mt-2"> <FadeinAnimation>{member.position}</FadeinAnimation></span>
              <p className="text-lg text-gray-600 mt-4"><FadeinAnimation>{member.description}</FadeinAnimation></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyTeam;

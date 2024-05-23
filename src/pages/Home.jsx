import React, { useEffect, useState, useRef } from 'react';
import { AboutUsSectionHome, FilmSectionHome, HeroSectionHome, TeamSectionHome } from '../components';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if the user is still on the hero section after 14 seconds
      if (scrollY < window.innerHeight) {
        // Scroll to the about section
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, [scrollY]);

  return (
    <div>
      <HeroSectionHome />
      <div ref={aboutRef}>
        <AboutUsSectionHome />
      </div>
      <FilmSectionHome />
      <TeamSectionHome />
    </div>
  );
};

export default Home;

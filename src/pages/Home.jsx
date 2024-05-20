import React, { useEffect, useState } from 'react';
import { AboutUsSectionHome, FilmSectionHome, HeroSectionHome, TeamSectionHome } from '../components';

const Home = () => {
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
    <div>
      <HeroSectionHome />
      <AboutUsSectionHome />
      <FilmSectionHome />
      <TeamSectionHome />

    </div>
  );
};

export default Home;

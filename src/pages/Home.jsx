import { useEffect, useState, useRef } from 'react';
import { AboutUsSectionHome, FilmSectionHome, HeroSectionHome, TeamSectionHome } from '../components';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const aboutRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures effect runs only once

  useEffect(() => {
    const timer = setTimeout(() => {
      // Check if the user is still on the hero section after 14 seconds
      if (!hasScrolled && scrollY < window.innerHeight) {
        // Scroll to the about section
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        setHasScrolled(true);
      }
    }, 15000);

    return () => clearTimeout(timer);
  }, [scrollY, hasScrolled]);

  return (
    <div >
      <Helmet>
        <title>Zenone Studioz</title>
        <meta name='description' content='Know more about Zenone Studioz'/>
        <link rel='canonical' href='/'/>
      </Helmet>
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

import React, { useEffect, useState, useRef, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';

const HeroSectionHome = lazy(() => import('../components/HeroSectionHome'));
const AboutUsSectionHome = lazy(() => import('../components/AboutUsSectionHome'));
const FilmSectionHome = lazy(() => import('../components/FilmSectionHome'));
const TeamSectionHome = lazy(() => import('../components/TeamSectionHome'));

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
    <div>
      <Helmet>
        <title>Zenone Studioz</title>
        <meta name='description' content='Know more about Zenone Studioz'/>
        <link rel='canonical' href='/'/>
      </Helmet>
      <Suspense fallback={<div>Loading Hero Section...</div>}>
        <HeroSectionHome />
      </Suspense>
      <div ref={aboutRef}>
        <Suspense fallback={<div>Loading About Us Section...</div>}>
          <AboutUsSectionHome />
        </Suspense>
      </div>
      <Suspense fallback={<div>Loading Film Section...</div>}>
        <FilmSectionHome />
      </Suspense>
      <Suspense fallback={<div>Loading Team Section...</div>}>
        <TeamSectionHome />
      </Suspense>
    </div>
  );
};

export default Home;

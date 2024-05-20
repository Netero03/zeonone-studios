import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SortableCardSlider from '../components/FilmSectionHome';

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
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax background image */}
        <div className="absolute inset-0 z-10 opacity-30" style={{ backgroundColor: 'black', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url('src/assets/photos/HeroSectionBg.jpg')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        {/* Legacy text */}
        <div className="z-10 text-white garamond text-center text-5xl font-bold md:flex md:flex-row md:gap-4  " style={{ opacity: 1 - scrollY / 400 }}>
          <span className="block">Legacy</span>
          <span className="block">of</span>
          <span className="block">Storytelling</span>
          <span className="block">& Entertainment</span>
        </div>
      </section>
      <section class=" bg-[#fff9f3] relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-0" style={{ backgroundImage: `url('src/assets/photos/BgDots.svg')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        <div className="container md:mx-20 flex flex-col md:flex-row md:justify-between items-center w-full z-10">
          <div className="w-full mb-8 md:mb-0 garamond">
            <div className="flex flex-col md:flex-row justify-center items-center px-3 md:justify-start w-full">
              <div className="flex flex-row items-center">
                <div className="h-7 w-1 bg-[#ffac04] mt-1 mr-2"></div>
                <h2 className="text-3xl font-bold text-black w-[179.8px]">About Zenone</h2>
              </div>
              <Link to="/about-us" className=" rounded-md text-center text-sm inter-font text-black self-center md:ml-auto mt-4 md:mt-0">
                See more ~
              </Link>
            </div>
            <div className="w-full h-[180px] relative mt-6 mb-6">
              <div
                className="absolute inset-0 z-0 opacity-60"
                style={{
                  backgroundImage: `url('src/assets/photos/scriptBg.jpg')`,
                  backgroundAttachment: 'fixed',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
                }}
              ></div>
              <img
                src='src/assets/photos/movie-1290368_1920.png'
                alt="Img"
                className='absolute inset-0 w-full h-full object-contain z-10'
              />
            </div>
            <p class="text-md md:text-lg mt-4 text-[#656565] text-center  px-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>
      </section>
      <SortableCardSlider />
    </div>
  );
};

export default Home;

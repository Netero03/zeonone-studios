import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { ZenoneLogo } from '../assets/icons';

const Navbar = () => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      setShowNavbar(isScrollingUp || currentScrollPos === 0 || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);
      setIsAtTop(currentScrollPos === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isFilmPage = /\/film\/\d+/.test(location.pathname);

  const getLinkClass = (path) => (
    location.pathname === path ? 'fading-1-selected ' : ''
  );

  const getClassNames = (isAtTop, isFilmPage) => {
    if (isAtTop) {
      return 'bg-transparent';
    } else {
      return `${isFilmPage ? 'bg-[#373D3B] ' : 'bg-[#f7f7f7] '} bg-opacity-50`;
    }
  };

  return (
    <div>
      <nav
        className={`p-1 md:px-10 lg:pr-20 flex open-sans-regular text-center md:justify-between justify-center items-center fixed w-full z-50 transition-all duration-1000 ${showNavbar ? 'translate-y-0' : '-translate-y-full'} ${getClassNames(isAtTop, isFilmPage)}`}
      >
        <Link to="/" className={`md:block hidden drop-shadow-[0_0px_1px_rgba(247,247,247,1)] animate-fadeIn`}><img src={ZenoneLogo} className='w-[130px]' loading='lazy' /></Link>

        <div className="hidden md:flex items-center lg:space-x-12 space-x-8 text-[#373D3B] font-normal text-base lg:text-xl">
          <Link to="/" className={`lg:w-[90px] text-center ${getLinkClass('/')} ${isFilmPage ? 'text-[#f7f7f7] fading-2' : 'text-[#373D3B] fading-1'} `}>Home</Link>
          <Link to="/films" className={`  ${getLinkClass('/films')} ${isFilmPage ? 'text-[#f7f7f7] fading-2' : 'text-[#373D3B] fading-1'} `}>Projects</Link>
          <Link to="/key-team" className={`  ${getLinkClass('/key-team')} ${isFilmPage ? 'text-[#f7f7f7] fading-2' : 'text-[#373D3B] fading-1'} `}>Key Team</Link>
          <Link to="/about-us" className={`  ${getLinkClass('/about-us')} ${isFilmPage ? 'text-[#f7f7f7] fading-2' : 'text-[#373D3B] fading-1'} `}>About Us</Link>
          <Link to="/contact-us" className={`  ${getLinkClass('/contact-us')} ${isFilmPage ? 'text-[#f7f7f7] fading-2' : 'text-[#373D3B] fading-1'} `}>Contact Us</Link>
        </div>


      </nav >
      <nav
        className={`md:hidden p-4 md:px-20 flex open-sans-regular text-center md:justify-between justify-center items-center fixed w-full z-50 transition-transform duration-300 `}

      >
        <div className={` flex w-full text-center md:justify-between justify-center items-center transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-[122%]'}`}>
          <Link to="/" className={`drop-shadow-[0_0px_20px_rgba(255,255,255,1)] animate-fadeIn`}><img src={ZenoneLogo} className='w-[120px]' /></Link>

          <div className="md:hidden absolute right-5">
            <button onClick={toggleMenu} className={`${isFilmPage ? 'text-[#f7f7f7]' : 'text-[#373D3B]'} text-2xl`}>
              {isMenuOpen ? '' : <FaBars />}
            </button>
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 w-full rounded-b p-5 pt-6 ${isFilmPage ? 'bg-[#000]' : 'bg-[#f7f7f7]'} bg-opacity-70 flex flex-col items-center justify-center space-y-3 text-center z-10 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <button onClick={toggleMenu} className={`${isFilmPage ? 'text-[#f7f7f7]' : 'text-[#373D3B]'} absolute top-4 right-4 text-2xl`}>
            <FaTimes />
          </button>
          <Link to="/" className={`text-2xl ${isFilmPage ? 'text-[#f7f7f7]' : 'text-[#373D3B]'}`} onClick={toggleMenu}>Home</Link>
          <Link to="/films" className={`text-2xl ${isFilmPage ? 'text-[#f7f7f7]' : 'text-[#373D3B]'}`} onClick={toggleMenu}>Projects/Films</Link>
          <Link to="/about-us" className={`text-2xl ${isFilmPage ? 'text-[#f7f7f7]' : 'text-[#373D3B]'}`} onClick={toggleMenu}>About Us</Link>
          <Link to="/key-team" className={`text-2xl ${isFilmPage ? 'text-[#f7f7f7]' : 'text-[#373D3B]'}`} onClick={toggleMenu}>Key Team</Link>
          <Link to="/contact-us" className={`text-2xl ${isFilmPage ? 'text-[#f7f7f7]' : 'text-[#373D3B]'}`} onClick={toggleMenu}>Contact Us</Link>
        </div>
      </nav >
    </div>
  );
};

export default Navbar;

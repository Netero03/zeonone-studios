import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [bgOpacity, setBgOpacity] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      setShowNavbar(isScrollingUp || currentScrollPos === 0 || currentScrollPos < 100);
      setPrevScrollPos(currentScrollPos);

      // Calculate background opacity based on scroll position with a max opacity of 0.2
      const maxOpacity = 0.1;
      const opacity = Math.min(currentScrollPos / 1000, maxOpacity);
      setBgOpacity(opacity);
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
    location.pathname === path ? 'text-[#373D3B] ' : 'text-[#373D3B] '
  );

  return (
    <nav
      className={`p-4 md:px-20 flex open-sans-regular justify-between items-center fixed w-full z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
      style={{
        backgroundColor: `rgba(255,255,255, ${bgOpacity})`,
        backdropFilter: 'blur(5px)', // Add blur effect
        WebkitBackdropFilter: 'blur(5px)' // For Safari support 
      }}
    >
      <Link to="/" className={`font-bold text-4xl ${isFilmPage ? 'text-[#f7f7f7]' : 'text-[#373D3B]'}`}>Zenone</Link>

      <div className="hidden md:flex items-center space-x-12 text-[#373D3B] font-semibold">
        <Link to="/" className={`text-xl w-[100px] text-center ${getLinkClass('/')} ${isFilmPage ? 'text-[#f7f7f7] fading-2' : 'text-[#373D3B] fading-1'} `}>Home</Link>
        <Link to="/films" className={`text-xl  ${getLinkClass('/films')} ${isFilmPage ? 'text-[#f7f7f7] fading-2' : 'text-[#373D3B] fading-1'} `}>Projects</Link>
        <Link to="/key-team" className={`text-xl  ${getLinkClass('/key-team')} ${isFilmPage ? 'text-[#f7f7f7] fading-2' : 'text-[#373D3B] fading-1'} `}>Key Team</Link>
        <Link to="/about-us" className={`text-xl  ${getLinkClass('/about-us')} ${isFilmPage ? 'text-[#f7f7f7] fading-2' : 'text-[#373D3B] fading-1'} `}>About Us</Link>
        <Link to="/contact-us" className={`text-xl  ${getLinkClass('/contact-us')} ${isFilmPage ? 'text-[#f7f7f7] fading-2' : 'text-[#373D3B] fading-1'} `}>Contact Us</Link>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-[#373D3B] text-2xl">
          {isMenuOpen ? '' : <FaBars />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full rounded p-5 bg-white bg-opacity-30 flex flex-col items-center justify-center space-y-3 text-center z-10 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl">
          <FaTimes />
        </button>
        <Link to="/" className={`text-2xl pt-10 ${isFilmPage ? 'text-[#f7f7f7]' : 'text-[#373D3B]'}`} onClick={toggleMenu}>Home</Link>
        <Link to="/films" className={`text-2xl ${isFilmPage ? 'text-[#f7f7f7]' : 'text-[#373D3B]'}`} onClick={toggleMenu}>Projects/Films</Link>
        <Link to="/about-us" className={`text-2xl ${isFilmPage ? 'text-[#f7f7f7]' : 'text-[#373D3B]'}`} onClick={toggleMenu}>About Us</Link>
        <Link to="/key-team" className={`text-2xl ${isFilmPage ? 'text-[#f7f7f7]' : 'text-[#373D3B]'}`} onClick={toggleMenu}>Key Team</Link>
        <Link to="/contact-us" className={`text-2xl ${isFilmPage ? 'text-[#f7f7f7]' : 'text-[#373D3B]'}`} onClick={toggleMenu}>Contact Us</Link>
      </div>
    </nav >
  );
};

export default Navbar;

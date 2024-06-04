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
      const maxOpacity = 0.2;
      const opacity = Math.min(currentScrollPos / 500, maxOpacity);
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

  const isHomePage = location.pathname === '/';
  const textColor = isHomePage ? '#f2ba20' : 'white';

  return (
    <nav
      className={`p-4 md:px-20 flex poppins-regular justify-between items-center fixed w-full z-40 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
      style={{ backgroundColor: `rgba(26,35,126, ${bgOpacity})` }}
    >
      <Link to="/" className={`font-bold text-4xl ${isHomePage ? 'text-[#000]' : 'text-white'}`}>Zenone</Link>

      <div className="hidden md:flex items-center space-x-6 poppins-regular text-[#373D3B]">
        <Link to="/" className={`text-xl ${isHomePage ? 'text-[#373D3B]' : 'text-white'}`}>Home</Link>
        <Link to="/films" className={`text-xl ${isHomePage ? 'text-[#373D3B]' : 'text-white'}`}>Projects</Link>
        <Link to="/about-us" className={`text-xl ${isHomePage ? 'text-[#373D3B]' : 'text-white'}`}>About Us</Link>
        <Link to="/key-team" className={`text-xl ${isHomePage ? 'text-[#373D3B]' : 'text-white'}`}>Key Team</Link>
        <Link to="/contact-us" className={`text-xl ${isHomePage ? 'text-[#373D3B]' : 'text-white'}`}>Contact Us</Link>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-[#373D3B] text-2xl">
          {isMenuOpen ? "" : <FaBars />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full rounded p-5 bg-white bg-opacity-30 flex flex-col items-center justify-center space-y-3 text-center z-10 transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl">
          <FaTimes />
        </button>
        <Link to="/" className={`text-2xl pt-10 ${isHomePage ? 'text-[#373D3B]' : 'text-white'}`} onClick={toggleMenu}>Home</Link>
        <Link to="/films" className={`text-2xl ${isHomePage ? 'text-[#373D3B]' : 'text-white'}`} onClick={toggleMenu}>Projects/Films</Link>
        <Link to="/about-us" className={`text-2xl ${isHomePage ? 'text-[#373D3B]' : 'text-white'}`} onClick={toggleMenu}>About Us</Link>
        <Link to="/key-team" className={`text-2xl ${isHomePage ? 'text-[#373D3B]' : 'text-white'}`} onClick={toggleMenu}>Key Team</Link>
        <Link to="/contact-us" className={`text-2xl ${isHomePage ? 'text-[#373D3B]' : 'text-white'}`} onClick={toggleMenu}>Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;

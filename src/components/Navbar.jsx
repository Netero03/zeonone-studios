import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
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

  return (
    <nav
      className={`p-4 flex garamond justify-between items-center fixed w-full z-20 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
      style={{ backgroundColor: `rgba(128, 128, 128, ${bgOpacity})` }}
    >
      <Link to="/" className="text-[#f2ba20] font-bold text-3xl">Zenone</Link>
      
      <div className="hidden md:flex items-center space-x-6 garamond">
        <Link to="/" className="text-white text-lg">Home</Link>
        <Link to="/projects-films" className="text-white text-lg">Projects/Films</Link>
        <Link to="/key-team" className="text-white text-lg">Key Team</Link>
        <Link to="/about-us" className="text-white text-lg">About Us</Link>
        <Link to="/contact-us" className="text-white text-lg">Contact Us</Link>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white text-2xl">
          {isMenuOpen ? "" : <FaBars />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-full rounded p-5 bg-white bg-opacity-30 flex flex-col items-center justify-center space-y-3 text-center text-white z-10 transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-2xl">
          <FaTimes />
        </button>
        <Link to="/" className="text-2xl" onClick={toggleMenu}>Home</Link>
        <Link to="/projects-films" className="text-2xl" onClick={toggleMenu}>Projects/Films</Link>
        <Link to="/key-team" className="text-2xl" onClick={toggleMenu}>Key Team</Link>
        <Link to="/about-us" className="text-2xl" onClick={toggleMenu}>About Us</Link>
        <Link to="/contact-us" className="text-2xl" onClick={toggleMenu}>Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;

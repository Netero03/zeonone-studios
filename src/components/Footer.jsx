// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#1C39BB] py-4">
      <div className="container mx-auto flex justify-center">
        <p className="text-white text-sm md:md">&copy; {new Date().getFullYear()} Zenone Entertainment. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

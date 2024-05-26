// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f2ba20] py-4">
      <div className="container mx-auto flex justify-center">
        <p className="text-yellow-900 text-sm md:md">&copy; {new Date().getFullYear()} Zenone Entertainment. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

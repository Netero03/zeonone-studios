// src/components/PersonPopup.js

import React from 'react';
import { FaImdb, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Slide } from 'react-awesome-reveal';
import FadeinAnimation from './FadeinAnimation';

const PersonPopup = ({ person, onClose }) => {
  return (
    <Slide direction="up" triggerOnce>
      <div className="absolute bg-white p-4 rounded shadow-lg z-50">
        <button onClick={onClose} className="absolute md:-top-1 md:right-1 -top-1 right-1 text-2xl">&times;</button>
        <h2 className="text-lg font-bold mb-2">{person.name}</h2>
        {person.description2 && (
          <div className="text-black md:text-sm text-xs text-justify md:px-1 px-5 mb-5 h-[300px] overflow-y-auto custom-scrollbar"  >
            <FadeinAnimation>{person.description2}</FadeinAnimation>
          </div>
        )}
        <div className="flex gap-4">
          {person.socialLinks?.imdb && (
            <a href={person.socialLinks.imdb} target="_blank" rel="noopener noreferrer">
              <FaImdb className="text-2xl" />
            </a>
          )}
          {person.socialLinks?.linkedin && (
            <a href={person.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl" />
            </a>
          )}
          {person.socialLinks?.twitter && (
            <a href={person.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl" />
            </a>
          )}
          {/* Add more social links as needed */}
        </div>
      </div>
    </Slide>
  );
};

export default PersonPopup;

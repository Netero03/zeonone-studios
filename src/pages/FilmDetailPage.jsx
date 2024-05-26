// src/components/FilmDetailPage.js

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { films } from '../constants/data';
import { DownArrowOrange } from '../assets/icons';
import FadeinAnimation from '../components/FadeinAnimation';

const FilmDetailPage = () => {
  const { id } = useParams();
  const film = films.find(f => f.id === parseInt(id));

  if (!film) {
    return <div className="text-center text-red-600">Film not found</div>;
  }

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
    <div className='garamond'>
      <div className="bg-gray-500 shadow-lg overflow-hidden h-[600px] w-full relative justify-center items-center" style={{ opacity: 1 - scrollY / 1000 }}>
        <img src={film.image} alt={film.title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <img src={DownArrowOrange} alt="Down Arrow" className="w-20 " />
        </div>
        <div className="p-6 absolute bottom-0 left-0">
          <Link to="/films" className="text-[#f2ba20] border border-[#f2ba20] py-2 px-4 text-center">&larr; Back to Films</Link>
        </div>
        <div className=" text-white text-center text-5xl font-bold md:flex md:flex-row md:gap-4 absolute bottom-1/2 left-1/2 transform -translate-x-1/2">
          <FadeinAnimation>{film.title}</FadeinAnimation>
        </div>
      </div>
      <h1 className="text-4xl font-bold text-gray-800">Home - Projects - {film.title}</h1>
      <p className="text-gray-600 mb-4"><strong>Director:</strong> {film.director}</p>
      {film.releaseDate && (
      <p className="text-gray-600 mb-4"><strong>Release Date:</strong> {film.releaseDate}</p>
      )}
      {film.story && (
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Story</h2>
          <p className="text-gray-600">{film.story}</p>
        </div>
      )}
      {film.cast && (
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Cast</h2>
          <ul className="text-gray-600 list-disc list-inside">
            {film.cast.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilmDetailPage;

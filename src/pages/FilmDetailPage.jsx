// src/components/FilmDetailPage.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { films } from '../constants/data';

const FilmDetailPage = () => {
  const { id } = useParams();
  const film = films.find(f => f.id === parseInt(id));

  if (!film) {
    return <div className="text-center text-red-600">Film not found</div>;
  }

  return (
    <div className="bg-[#f2ba20] w-full p-20">
      <Link to="/films" className="text-black mt-20">&larr; Back to Films</Link>
      <div className="mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={film.image} alt={film.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-800">{film.title}</h1>
          <p className="text-gray-600 mb-4"><strong>Director:</strong> {film.director}</p>
          <p className="text-gray-600 mb-4"><strong>Release Date:</strong> {film.releaseDate}</p>
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
      </div>
    </div>
  );
};

export default FilmDetailPage;

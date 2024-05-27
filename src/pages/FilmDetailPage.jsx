// src/components/FilmDetailPage.js

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { films } from '../constants/data';
import { DownArrowOrange } from '../assets/icons';
import { Slide, Fade } from 'react-awesome-reveal';
import FadeinAnimation from '../components/FadeinAnimation';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const FilmDetailPage = () => {
  const { id } = useParams();
  const film = films.find(f => f.id === parseInt(id));

  if (!film) {
    return <div className="text-center text-red-600">Film not found</div>;
  }

  const [scrollY, setScrollY] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger the scale increase on mount
    setScale(1.1);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='garamond bg-[#fff9f3] '>
      <div
        className="bg-black shadow-lg overflow-hidden h-[650px] w-full relative justify-center items-center"
        style={{ opacity: 1 - scrollY / 2500 }}
      >
        <img
          src={film.image}
          alt={film.title}
          loading='lazy'
          className="w-full h-full object-cover opacity-70 transition-transform duration-0"
          style={{ transform: `translateY(${scrollY * 0.3}px) scale(${scale})` }}
        />
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <img src={DownArrowOrange} alt="Down Arrow" loading='lazy' className="w-20" />
        </div>
        <Slide direction="right" triggerOnce delay={-500}>
          <div className="p-6 absolute bottom-0 left-0">
            <Link to="/films" className="text-[#f2ba20] border border-[#f2ba20] py-2 px-4 text-center">&larr; Back to Films</Link>
          </div>
        </Slide>
        <Fade triggerOnce>
          <div className="text-white text-center text-5xl font-bold md:flex md:flex-row md:gap-4 absolute bottom-1/2 left-1/2 transform -translate-x-1/2">
            <FadeinAnimation>{film.title}</FadeinAnimation>
          </div>
        </Fade>
      </div>
      <div className="">

        <h1 className="text-lg font-bold text-gray-800 my-7 ml-6">Home - Projects - {film.title}</h1>
        <div className='h-px bg-[#f2ba20] mb-4'></div>
        <div className='m-20'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
            {film.director && (
              <div>
                <h2 className="text-xl font-bold text-gray-800">Director</h2>
                <p className="text-gray-600">{film.director}</p>
              </div>
            )}
            {film.releaseDate && (
              <div>
                <h2 className="text-xl font-bold text-gray-800">Release Date</h2>
                <p className="text-gray-600">{film.releaseDate}</p>
              </div>
            )}
          </div>

          {film.story && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Story</h2>
              <p className="text-gray-600">{film.story}</p>
            </div>
          )}

          {film.cast && film.cast.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Cast</h2>
              <ul className="text-gray-600 list-disc list-inside">
                {film.cast.map((member, index) => (
                  <li key={index}>{member}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {film.trailers && film.trailers.length > 0 && (
          <div className="mb-8">
            <div className='h-px bg-[#f2ba20] mb-4'></div>

            <h2 className="text-5xl font-bold text-gray-800 my-7 ml-6">Watch Trailer</h2>
            <div className='h-px bg-[#f2ba20]'></div>

            {film.trailers.length === 1 ? (
              <div className="aspect-w-16 aspect-h-9 h-[600px] overflow-hidden" onMouseEnter={(e) => { e.currentTarget.querySelector('iframe').style.transform = 'scale(1.02)'; }} onMouseLeave={(e) => { e.currentTarget.querySelector('iframe').style.transform = 'scale(1.01)'; }}>

                <iframe
                  src={`https://www.youtube.com/embed/${film.trailers[0]}?modestbranding=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Trailer"
                  className="w-full h-full transition-transform duration-300"
                ></iframe>
              </div>
            ) : (
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
              >
                {film.trailers.map((trailer, index) => (
                  <SwiperSlide key={index}>
                    <div className="aspect-w-16 aspect-h-9 h-[600px] overflow-hidden" onMouseEnter={(e) => { e.currentTarget.querySelector('iframe').style.transform = 'scale(1.02)'; }} onMouseLeave={(e) => { e.currentTarget.querySelector('iframe').style.transform = 'scale(1.01)'; }}>

                      <iframe
                        src={`https://www.youtube.com/embed/${trailer}?modestbranding=1`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={`Trailer ${index + 1}`}
                        className="w-full h-full"
                      ></iframe>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilmDetailPage;

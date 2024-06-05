// src/pages/FilmDetailPage.js

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { films } from '../constants/data';
import { DownArrowOrange } from '../assets/icons';
import { Slide, Fade } from 'react-awesome-reveal';
import PersonPopup from '../components/PersonPopup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import FadeinAnimation from '../components/FadeinAnimation';

const FilmDetailPage = () => {
  const { id } = useParams();
  const film = films.find(f => f.id === parseInt(id));
  const [popupPerson, setPopupPerson] = useState(null);

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

  const renderPerson = (name, image, description) => (
    <div className="flex flex-col items-center gap-4 max-w-[450px] px-10">
      {image ? (
        <FadeinAnimation><img src={image} alt={name} className="md:w-40 md:h-40 w-24 h-24 object-cover rounded-full" /></FadeinAnimation>
      ) : (
        <span className="md:w-40 md:h-40 w-24 h-24 bg-gray-200 flex items-center justify-center rounded-full text-gray-700 font-bold">
          <FadeinAnimation>{name.charAt(0)}</FadeinAnimation>
        </span>
      )}
      <div className="text-gray-600">{name}</div>
      {description && <div className="text-gray-500 md:text-sm text-xs text-center md:px-0 px-5 mb-5"><FadeinAnimation>{description}</FadeinAnimation></div>}
    </div>
  );

  const handlePersonClick = (person) => {
    setPopupPerson(person);
  };

  return (
    <div className='poppins-regular bg-[#fff9f3] flex flex-col'>
      {popupPerson && <div className='fixed z-50 bottom-5 md:right-2 w-[200px] h-[100px]'><FadeinAnimation><PersonPopup person={popupPerson} onClose={() => setPopupPerson(null)} /></FadeinAnimation></div>}

      <div
        className="bg-black shadow-lg overflow-hidden md:h-[650px] h-[625px] w-full relative justify-center items-center"
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
          <img src={DownArrowOrange} alt="Down Arrow" loading='lazy' className="w-16" />
        </div>
        <Slide direction="right" triggerOnce delay={-500}>
          <div className="md:p-6 md:pb-0 md:pl-0 pb-5 pl-2 absolute bottom-0 left-0 md:bottom-5 md:left-4">
            <Link to="/films" className="text-[#fff] border border-[#fff] py-2 px-4 text-center text-xs md:text-base"
              style={{ transition: 'background-color 0.3s, color 0.3s' }}
              onMouseEnter={(e) => { e.target.style.backgroundColor = '#fff'; e.target.style.color = 'black'; }}
              onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#fff'; }}>&larr; Back to Films</Link>
          </div>
        </Slide>
        <Fade triggerOnce>
          <div className="text-white text-center text-5xl font-bold md:flex md:flex-row md:gap-4 absolute bottom-1/2 left-1/2 transform -translate-x-1/2">
            <FadeinAnimation>{film.title}</FadeinAnimation>
          </div>
        </Fade>
      </div>
      <h1 className=" m-6 text-lg font-bold text-gray-800 mb-7">Home {'>'} Projects {'>'} {film.title}</h1>
      <div className='h-px bg-[#1C39BB] mb-4'></div>
      <div className="relative py-8 ">
        <div className="max-w-8xl md:mx-20 mb-20 items-center text-center">

          <div className='details-section items-center text-center'>
            <div className='flex'>
              {film.story && (
                <div className=" mb-16 w-[70%]">
                  <FadeinAnimation>
                    <div className="text-2xl font-bold text-gray-800 mb-5">About {film.title}</div>
                    <p className="text-gray-600 md:text-base text-xs px-5">{film.story}</p>
                  </FadeinAnimation>
                </div>
              )}
              <div className='w-[30%]'>
                {film.genre && (
                  <div className="mb-16">
                    <div className="text-2xl font-bold text-gray-800 mb-2">Genre</div>
                    <p className="text-gray-600">{film.genre}</p>
                  </div>
                )}

                {film.releaseDate && (
                  <div className="mb-16">
                    <div className="text-2xl font-bold text-gray-800 mb-2">Released Date</div>
                    <p className="text-gray-600">{film.releaseDate}</p>
                  </div>
                )}
              </div>
              
            </div>
            <div className='h-px bg-[#1C39BB] mb-20'></div>

            <div className=" text-center ">
              <div className='flex'>
                {film.director && film.director.length > 0 && (
                  <div>
                    <h2 className="text-3xl font-semibold mb-5">Directors</h2>
                    <div className="space-y-2 justify-center gap-10">
                      {film.director.map((director, index) => (
                        <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => handlePersonClick(director)}>
                          {renderPerson(director.name, director.image, director.description)}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {film.producer && film.producer.length > 0 && (
                  <div>
                    <h2 className="text-3xl font-semibold mb-5">Producers</h2>
                    <div className=" justify-center gap-10 flex">
                      {film.producer.map((producer, index) => (
                        <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => handlePersonClick(producer)}>
                          {renderPerson(producer.name, producer.image, producer.description)}
                        </div>
                      ))}
                    </div>
                  </div>
                )}


                {film.writer && film.writer.length > 0 && (
                  <div>
                    <h2 className="text-3xl font-semibold mb-5">Writers</h2>
                    <div className="space-y-2 justify-center gap-10">
                      {film.writer.map((writer, index) => (
                        <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => handlePersonClick(writer)}>
                          {renderPerson(writer.name, writer.image, writer.description)}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {film.scriptConsultant && film.scriptConsultant.length > 0 && (
                  <div>
                    <h2 className="text-3xl font-semibold mb-5">Script Consultant</h2>
                    <div className="space-y-2 justify-center gap-10">
                      {film.scriptConsultant.map((scriptConsultant, index) => (
                        <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => handlePersonClick(scriptConsultant)}>
                          {renderPerson(scriptConsultant.name, scriptConsultant.image, scriptConsultant.description)}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {film.cast && film.cast.length > 0 && (
                <div className='mt-10'>
                  <h2 className="text-3xl font-semibold mb-10">Cast</h2>
                  <div className="space-y-2 justify-start gap-10 flex">
                    {film.cast.map((cast, index) => (
                      <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => handlePersonClick(cast)}>
                        {renderPerson(cast.name, cast.image, cast.description)}
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

        {film.trailers && film.trailers.length > 0 && (
          <div className="bg-[#fff9f3]">
            <div className='h-px bg-[#1C39BB] mb-4'></div>

            <h2 className="text-5xl font-bold text-gray-800 my-7 ml-6">Watch Trailer</h2>
            <div className='h-px bg-[#1C39BB]'></div>

            {film.trailers.length === 1 ? (
              <div className="aspect-w-16 aspect-h-9 md:h-[600px] h-[200px] overflow-hidden" onMouseEnter={(e) => { e.currentTarget.querySelector('iframe').style.transform = 'scale(1.02)'; }} onMouseLeave={(e) => { e.currentTarget.querySelector('iframe').style.transform = 'scale(1.01)'; }}>

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
                    <div className="aspect-w-16 aspect-h-9 md:h-[600px] h-[200px] overflow-hidden" onMouseEnter={(e) => { e.currentTarget.querySelector('iframe').style.transform = 'scale(1.02)'; }} onMouseLeave={(e) => { e.currentTarget.querySelector('iframe').style.transform = 'scale(1.01)'; }}>

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

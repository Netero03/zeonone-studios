// src/components/FilmPage.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { films } from '../constants/data';

const FilmPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
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

  const filteredFilms = films.filter(film => {
    if (selectedCategory === 'all') return true;
    return film.status === selectedCategory;
  });

  const selectedFilms = films.slice(0, 5); // Modify as needed for selected films

  return (
    <div className="bg-[#fff9f3] flex flex-col garamond">
      <div className='flex flex-col w-full h-[550px] '>
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full object-cover -z-0"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <source src='src/assets/videos/BgVideo.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className="text-4xl font-bold text-center text-white z-10 mt-20">Our Films</h1>

        <section className="mt-8 w-full">

          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'2'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container mx-10"
          >
            {selectedFilms.map(film => (
              <SwiperSlide key={film.id}>
                <div className="relative h-80 bg-cover bg-center " style={{ backgroundImage: `url(${film.image || '#f2ba20'})` }}>
                  <div className="absolute inset-0  flex items-center justify-center w-full ">
                    <h2 className="text-3xl h-full w-11/12 text-white bg-black font-bold">{film.title}</h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </section>
      </div>
      <div className='z-10 bg-white '>
        <div className="mt-20 mb-16 text-center z-30 ">
          <button onClick={() => setSelectedCategory('all')} className={`px-4 py-2 mx-2 ${selectedCategory === 'all' ? 'bg-[#f2ba20]' : 'bg-gray-200'} text-black rounded-full`}>All Films</button>
          <button onClick={() => setSelectedCategory('upcoming')} className={`px-4 py-2 mx-2 ${selectedCategory === 'upcoming' ? 'bg-[#f2ba20]' : 'bg-gray-200'} text-black rounded-full`}>Upcoming Films</button>
          <button onClick={() => setSelectedCategory('released')} className={`px-4 py-2 mx-2 ${selectedCategory === 'released' ? 'bg-[#f2ba20]' : 'bg-gray-200'} text-black rounded-full`}>Released Films</button>
        </div>

        <div className="mt-8 mx-20 mb-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
          {filteredFilms.map(film => (
            <div key={film.id} className="relative bg-cover bg-center h-[500px] overflow-hidden shadow-lg" style={{ backgroundImage: `url(${film.image || '#f2ba20'})` }}>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <h2 className="text-2xl text-white font-bold">{film.title}</h2>
                <p className="text-white">{film.genre}</p>
                <Link to={`/film/${film.id}`} className="mt-2 bg-[#f2ba20] text-white py-1 px-4 rounded-md text-center">View More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmPage;

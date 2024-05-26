import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { films } from '../constants/data';
import FadeinAnimation from '../components/FadeinAnimation';
import { HeroSectionBg3 } from '../assets/photos';
import useIntersection from '../hooks/useIntersection';
import { Slide, Zoom } from 'react-awesome-reveal';

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
      <section className="relative w-full h-[400px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10 opacity-50" style={{ backgroundColor: 'black', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${HeroSectionBg3})`, backgroundColor: '#f2ba20', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

        <div className="z-20 text-white text-center text-5xl font-bold md:flex md:flex-row md:gap-4">
          <FadeinAnimation>Projects</FadeinAnimation>
        </div>
      </section>
      <div className='z-10 bg-white relative'>
        <section className="w-full absolute -top-9">
          <Slide direction="down" duration={800}>

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
              className="swiper_container"
            >
              {selectedFilms.map(film => (
                <SwiperSlide key={film.id}>
                  <div className="relative h-80 bg-cover bg-center" style={{ backgroundImage: `url(${film.image || '#f2ba20'})` }}>
                    <div className="absolute inset-0 flex items-center justify-center w-full ">
                      <h2 className="text-3xl h-full w-11/12 text-white bg-black font-bold text-center pt-20">
                        <FadeinAnimation>
                          {film.title}
                        </FadeinAnimation>
                      </h2>
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
          </Slide>
        </section>
        <div className="mt-[350px] mb-16 text-center z-30">
          <button onClick={() => setSelectedCategory('all')} className={`px-4 py-2 mx-2 ${selectedCategory === 'all' ? 'bg-[#f2ba20]' : 'bg-gray-200'} text-black rounded-full`}>All Films</button>
          <button onClick={() => setSelectedCategory('upcoming')} className={`px-4 py-2 mx-2 ${selectedCategory === 'upcoming' ? 'bg-[#f2ba20]' : 'bg-gray-200'} text-black rounded-full`}>Upcoming Films</button>
          <button onClick={() => setSelectedCategory('released')} className={`px-4 py-2 mx-2 ${selectedCategory === 'released' ? 'bg-[#f2ba20]' : 'bg-gray-200'} text-black rounded-full`}>Released Films</button>
        </div>

        <div className="mt-8 mx-20 mb-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {filteredFilms.map(film => {
            const [ref, isIntersecting] = useIntersection({ threshold: 0.1 });

            return (
              <div key={film.id} ref={ref} className={`film-container ${isIntersecting ? 'in-view' : ''}`}>
                <div className="relative bg-cover bg-center h-[650px] overflow-hidden shadow-lg" style={{ backgroundImage: `url(${film.image || '#f2ba20'})` }}>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4">
                    {isIntersecting && (
                      <Zoom duration={1000}>
                        <h2 className="text-2xl text-white font-bold z-20">{film.title}</h2>
                        <Link to={`/film/${film.id}`} className="mt-2 bg-transparent border border-[#f2ba20] text-[#f2ba20] w-[150px] py-1 px-4 text-center z-20">View More</Link>
                      </Zoom>
                    )}
                  </div>
                </div>
                {isIntersecting && (
                  <Slide direction="down" duration={1000}>
                    <h2 className="text-lg text-gray-600 font-bold">Project</h2>
                    <h5 className="text-2xl text-black font-bold">{film.title}</h5>
                    {film.genre && (
                      <div className="mt-2">
                        <h2 className="text-lg text-gray-600 font-bold">Genre</h2>
                        <p className="text-2xl text-black font-bold">{film.genre}</p>
                      </div>
                    )}
                  </Slide>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div >
  );
};

export default FilmPage;

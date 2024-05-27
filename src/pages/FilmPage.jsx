import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { films } from '../constants/data';
import FadeinAnimation from '../components/FadeinAnimation';
import { HeroSectionBg3 } from '../assets/photos';
import IntersectionObserverComponent from '../hooks/IntersectionObserverComponent';
import { Slide, Zoom } from 'react-awesome-reveal';

const FilmPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredFilms, setFilteredFilms] = useState(films);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    filterFilms(selectedCategory);
  }, [selectedCategory]);

  const filterFilms = (category) => {
    console.log(`Filtering films by category: ${category}`);
    if (category === 'all') {
      setFilteredFilms(films);
    } else {
      const filtered = films.filter(film => film.status === category);
      setFilteredFilms(filtered);
    }
  };

  return (
    <div className="bg-[#fff9f3] flex flex-col garamond">
      <section className="relative w-full h-[400px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10 opacity-50" style={{ backgroundColor: 'black', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        <div className="relative inset-0 z-0">
          <img
            src={HeroSectionBg3}
            alt="Background"
            className="absolute inset-0 object-cover w-full h-full bg-[#f2ba20]"
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
            loading="lazy"
          />
        </div>
        <div className="z-20 text-white text-center text-5xl font-bold md:flex md:flex-row md:gap-4" style={{ opacity: 1 - scrollY / 200 }}>
          <FadeinAnimation>Projects</FadeinAnimation>
        </div>
      </section>
      <div className="z-10 bg-[#fff9f3] relative">
        <section className="w-full absolute -top-9">
          <Slide direction="down" duration={1500} delay={-500}>
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
              autoplay={{
                delay: 3000, // Adjust the delay as needed
                disableOnInteraction: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="swiper_container"
            >
              {films.map(film => (
                <SwiperSlide key={film.id}>
                  <Link to={`/film/${film.id}`}>
                    <div className="relative h-80">
                      <img
                        className="absolute inset-0 object-cover object-center w-full h-full"
                        src={film.image || '#f2ba20'}
                        alt={film.title}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black opacity-20"></div>
                      <div className="absolute inset-0 flex items-center justify-center w-full">
                        <h2 className="text-3xl h-full w-full text-white font-bold text-center pt-20">
                          <FadeinAnimation>{film.title}</FadeinAnimation>
                        </h2>
                      </div>
                    </div>
                  </Link>
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
          <button onClick={() => setSelectedCategory('Upcoming')} className={`px-4 py-2 mx-2 ${selectedCategory === 'Upcoming' ? 'bg-[#f2ba20]' : 'bg-gray-200'} text-black rounded-full`}>Upcoming Films</button>
          <button onClick={() => setSelectedCategory('Released')} className={`px-4 py-2 mx-2 ${selectedCategory === 'Released' ? 'bg-[#f2ba20]' : 'bg-gray-200'} text-black rounded-full`}>Released Films</button>
        </div>
        <div className="mt-8 mx-20 mb-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {filteredFilms.length === 0 ? (
            <div className="text-center text-lg text-gray-600 col-span-full">
              No films found for the selected category.
            </div>
          ) : (
            filteredFilms.map(film => (
              <IntersectionObserverComponent key={film.id}>
                {(isIntersecting) => (
                  <Link
                    to={`/film/${film.id}`}
                    className={`film-container cursor-pointer ${isIntersecting ? 'in-view' : ''}`}
                  >
                    <div className="relative h-[650px] overflow-hidden shadow-lg" onMouseEnter={(e) => { e.currentTarget.querySelector('img').style.transform = 'scale(1.1)'; }} onMouseLeave={(e) => { e.currentTarget.querySelector('img').style.transform = 'scale(1)'; }}>
                      <img
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300"
                        src={film.image || '#f2ba20'}
                        alt={film.title}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center p-4">
                        {isIntersecting && (
                          <Zoom duration={1000}>
                            <h2 className="text-2xl text-white font-bold z-20">{film.title}</h2>
                            <div
                              className="mt-2 bg-transparent border border-[#f2ba20] text-[#f2ba20] w-[150px] py-1 px-4 text-center z-20 relative"
                              style={{ transition: 'background-color 0.3s, color 0.3s' }}
                              onMouseEnter={(e) => { e.target.style.backgroundColor = '#f2ba20'; e.target.style.color = 'white'; }}
                              onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#f2ba20'; }}
                            >
                              View More
                            </div>
                          </Zoom>
                        )}
                      </div>
                    </div>
                    {isIntersecting && (
                      <Slide direction="left" duration={1000} delay={-500} className='text-center mt-5'>
                        {/* <h2 className="text-lg text-gray-600 font-bold">Project</h2> */}
                        <h5 className="text-2xl text-black font-bold">{film.title}</h5>
                        {film.genre && (
                          <div className="mt-2">
                            {/* <h2 className="text-lg text-gray-600 font-bold">Genre</h2> */}
                            <p className="text-2xl text-black font-bold">{film.genre}</p>
                          </div>
                        )}
                      </Slide>
                    )}
                  </Link>
                )}
              </IntersectionObserverComponent>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FilmPage;

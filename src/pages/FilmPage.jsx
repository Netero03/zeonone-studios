import React, { useEffect, useState } from 'react';
import { Slide, Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import 'swiper/css/bundle';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FilmsBg } from '../assets/photos';
import { films } from '../constants/data';
import IntersectionObserverComponent from '../hooks/IntersectionObserverComponent';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { FadeinAnimation, Loading } from '../components';

const FilmPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Upcoming');
  const [filteredFilms, setFilteredFilms] = useState(films);
  const [isLoading, setIsLoading] = useState(!localStorage.getItem('filmPageContentLoaded'));

  useEffect(() => {
    if (!localStorage.getItem('filmPageContentLoaded')) {
      // Simulate a delay to show the loading screen
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('filmPageContentLoaded', 'true');
      }, 1000); // Adjust the delay as needed

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []);

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
    if (category === 'all') {
      setFilteredFilms(films);
    } else {
      const filtered = films.filter(film => film.status === category);
      setFilteredFilms(filtered);
    }
  };

  if (isLoading) {
    return <Loading />; // Render the loading screen while loading
  }

  return (
    <div className="bg-[#F7F7F7] flex flex-col poppins-regular">

      <section className="relative w-full h-[400px] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-10 opacity-30" style={{ backgroundColor: '#f7f7f7', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${FilmsBg})`, backgroundColor: '#f7f7f7', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

        <div className="z-20 text-[#373D3B] text-center text-6xl font-bold md:flex md:flex-row md:gap-4 tracking-tighter" style={{ opacity: 1 - scrollY / 200 }}>
          <FadeinAnimation >Projects</FadeinAnimation>

        </div>
      </section>

      <div className="z-10 bg-[#F7F7F7] relative">
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
                    <div className="relative h-80 flex items-center justify-center">
                      <img
                        className="absolute inset-0 object-cover object-center w-full h-full"
                        src={film.image || '#1C39BB'}
                        alt={film.title}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black opacity-30"></div>
                      <FadeinAnimation>
                        <div className="flex-row items-center justify-center w-full pb-6">
                          <h2 className="text-3xl h-full w-full text-white font-bold text-center ">
                            {film.title}
                          </h2>
                          <h2 className="text-xl h-full w-full text-[#ffffff] text-center">
                            {film.genre}
                          </h2>
                        </div>
                      </FadeinAnimation>
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
        <LazyLoadComponent>
          <div className="mt-[350px] mb-16 text-center items-center md:justify-center z-30 md:flex-none flex md:flex-row flex-col md:gap-0 gap-2">
            <button onClick={() => setSelectedCategory('all')} className={`px-4 py-2 mx-2 ${selectedCategory === 'all' ? 'bg-[#2f4bc7]' : 'bg-[#708090]'} text-white rounded-full transition-all duration-500`}>All Films</button>
            <button onClick={() => setSelectedCategory('Upcoming')} className={`px-4 py-2 mx-2 ${selectedCategory === 'Upcoming' ? 'bg-[#1C39BB]' : 'bg-[#708090]'} text-white rounded-full transition-all duration-1000`}>Upcoming Films</button>
            <button onClick={() => setSelectedCategory('Released')} className={`px-4 py-2 mx-2 ${selectedCategory === 'Released' ? 'bg-[#1C39BB]' : 'bg-[#708090]'} text-white rounded-full transition-all duration-1000`}>Released Films</button>
          </div>
          <div className="mt-8 md:mx-20 mb-8 grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
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
                      <div className="relative h-[350px] md:h-[650px] overflow-hidden shadow-lg" onMouseEnter={(e) => { e.currentTarget.querySelector('img').style.transform = 'scale(1.1)'; }} onMouseLeave={(e) => { e.currentTarget.querySelector('img').style.transform = 'scale(1)'; }}>
                        <img
                          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300"
                          src={film.image || '#1C39BB'}
                          alt={film.title}
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center p-4">
                          {isIntersecting && (
                            <Zoom duration={1000}>
                              <h2 className="text-3xl text-white font-bold z-20">{film.title}</h2>
                              <div
                                className="mt-2 bg-transparent border border-[#fff] text-[#fff] w-[200px]  py-2 px-4 text-center z-20 relative"
                                style={{ transition: 'background-color 0.3s, color 0.3s' }}
                                onMouseEnter={(e) => { e.target.style.backgroundColor = '#fff'; e.target.style.color = 'black'; }}
                                onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'white'; }}
                              >
                                View More
                              </div>
                            </Zoom>
                          )}
                        </div>
                      </div>
                      {isIntersecting && (
                        <Slide direction="left" duration={1000} delay={-500} className='text-center mt-4'>
                          {/* <h2 className="text-lg text-gray-600 font-bold">Project</h2> */}
                          <h5 className="text-2xl text-[#373D3B] font-bold">{film.title}</h5>
                          {film.genre && (
                            <div className="mt-1 mb-5">
                              {/* <h2 className="text-lg text-gray-600 font-bold">Genre</h2> */}
                              <p className="text-xl text-[#373D3B] font-bold">{film.genre}</p>
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
        </LazyLoadComponent>
      </div>

    </div>
  );
};

export default FilmPage;

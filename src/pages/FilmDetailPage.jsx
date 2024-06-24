import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import FadeinAnimation from '../components/FadeinAnimation';
import { films } from '../constants/data';
import { FaImdb, FaLinkedin, FaTwitter } from 'react-icons/fa';

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

  const [showMore, setShowMore] = useState({});

  const toggleShowMore = (name) => {
    setShowMore((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };
  const renderPerson = (name, image, description, socialLinks, projects, customWidth = "max-w-[450px]", nameTextSize = "text-sm md:text-xl", imageSize="md:w-40 md:h-40 w-20 h-20") => (
    <div className={`flex flex-col items-center gap-4 ${customWidth} md:h-fit h-fit px-3 hover:drop-shadow-2xl rounded mx-5 p-3 md:py-5`}>
      {image ? (
        <FadeinAnimation>
          <img src={image} alt={name} className={`${imageSize} object-cover rounded-full`} />
        </FadeinAnimation>
      ) : (
        <span className="md:w-40 md:h-40 w-24 h-24 bg-gray-400 flex items-center justify-center rounded-full text-white text-4xl font-bold">
          <FadeinAnimation>{name.charAt(0)}</FadeinAnimation>
        </span>
      )}
      <div className={`text-white ${nameTextSize}`}>{name}</div>
      {description ? (
        <div className="text-white md:text-sm text-xs text-center md:px-0 px-0">
          <FadeinAnimation>
            {showMore[name]
              ? description
              : `${description.substring(0, 200)}${description.length > 200 ? '...' : ''}`}
          </FadeinAnimation>
          {description.length > 200 && (
            <button
              onClick={() => toggleShowMore(name)}
              className="text-blue-500 hover:underline mt-2"
            >
              {showMore[name] ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>
      ) : (
        <div className="mb-20"></div> // This provides more margin when there's no description
      )}
      <div className="flex gap-4">
        {socialLinks?.imdb && (
          <a href={socialLinks.imdb} target="_blank" rel="noopener noreferrer">
            <FaImdb className="text-2xl text-white" />
          </a>
        )}
        {socialLinks?.linkedin && (
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-white" />
          </a>
        )}
        {socialLinks?.twitter && (
          <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl text-white" />
          </a>
        )}
        {/* Add more social links as needed */}
      </div>
      {projects && projects.length > 0 && (
        <div>
          <div className="text-white text-sm md:text-lg pb-10 ">By {name}</div>

          <div className="w-full h-full flex flex-row items-center justify-center gap-2">
            {projects.map((film, index) => (
              <a href={film.link} target="_blank" rel="noopener noreferrer" key={index} className="flex flex-col items-center h-full w-full">
                <FadeinAnimation>
                  <img src={film.poster} alt={`Poster of ${name}`} className=" object-cover md:h-[300px] " />
                </FadeinAnimation>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>

  );

  const handlePersonClick = (person) => {
    setPopupPerson(person);
  };

  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isBlurred && window.scrollY > 0) {
        setIsBlurred(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBlurred]);


  return (
    <div className='poppins-regular bg-[#000] flex flex-col relative overflow-hidden'>
      {/* {popupPerson && <div className='fixed z-50 left-0 right-0 top-20 md:top-20 md:left-auto md:right-2 w-[300px] md:w-[350px] h-[500px]'><FadeinAnimation><PersonPopup person={popupPerson} onClose={() => setPopupPerson(null)} /></FadeinAnimation></div>} */}
      <div
        className="absolute inset-0 w-full blur-md bg-black opacity-70 z-20"
        style={{

          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      ></div>
      <div
        className={`absolute inset-0 w-full z-10 transition-filter duration-500 ${isBlurred ? 'blur-md' : 'blur-none'}`}
        style={{
          backgroundImage: `url(${film.image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
        }}
      ></div>

      <div className='z-20 w-full items-center justify-center relative'>
        <div className='lg:flex w-full lg:pb-32 lg:px-40 px-5 pt-24 items-start text-start' >
          <div
            className="bg-black shadow-lg overflow-hidden lg:h-[500px] h-[300px] lg:w-[50%] relative justify-center items-center z-20 "
            style={{ opacity: 1 - scrollY / 2500 }}
          >
            <img
              src={film.image}
              alt={film.title}
              loading='lazy'
              className="w-full h-full object-cover opacity-70 transition-transform duration-0 animate-fadeIn"
              style={{ transform: `translateY(${scrollY * 0.1}px) scale(${scale})` }}
            />

          </div>
          <div className=' lg:w-[50%] lg:pl-20 lg:p-0 lg:px-0 px-5 pt-20 text-center lg:text-left'>
            {film.story && (
              <div className=" mb-10">
                <FadeinAnimation>
                  <div className="md:text-7xl text-5xl font-bold text-[#F7F7F7] mb-5">{film.title}</div>
                  <p className="text-[#F7F7F7] md:text-base text-xs">{film.story}</p>
                  <p className="text-[#F7F7F7] md:text-base text-xs">{film.story2}</p>
                </FadeinAnimation>
              </div>
            )}
            <div className=''>
              {film.genre && (
                <div className="mb-10">
                  <FadeinAnimation>
                    <div className="md:text-5xl text-3xl font-bold text-white mb-2">Genre</div>
                    <p className="text-white">{film.genre}</p>
                  </FadeinAnimation>
                </div>
              )}

              {film.releaseDate && (
                <div className="mb-10">
                  <FadeinAnimation>
                    <div className="md:text-5xl text-3xl font-bold text-white mb-2">Released Date</div>
                    <p className="text-white">{film.releaseDate}</p>
                  </FadeinAnimation>
                </div>
              )}
            </div>

          </div>
        </div>
        <div className="relative py-8 ">
          <div className="max-w-8xl md:mx-20 mb-20 items-center text-center">

            <div className='details-section items-center text-center'>

              <div className=" text-center ">
                {film.cast && film.cast.length > 0 ? (
                  <div className='md:flex flex-wrap justify-center gap-5'>
                    {film.director && film.director.length > 0 && (
                      <FadeinAnimation>
                        <h2 className="md:text-5xl text-4xl font-semibold mb-5 text-white md:pt-0 pt-10">Director</h2>
                        <div className="space-y-2 justify-center gap-10">
                          {film.director.map((director, index) => (
                            <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => handlePersonClick(director)}>
                              {renderPerson(director.name, director.image, director.description, director.socialLinks, director.projects)}
                            </div>
                          ))}
                        </div>
                      </FadeinAnimation>
                    )}

                    {film.producer && film.producer.length > 0 && (
                      <FadeinAnimation>
                        <h2 className="md:text-5xl text-4xl font-semibold mb-5 text-white md:pt-0 pt-10">Producers</h2>
                        <div className=" justify-center gap-10 flex">
                          {film.producer.map((producer, index) => (
                            <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => handlePersonClick(producer)}>
                              {renderPerson(producer.name, producer.image, producer.description, producer.socialLinks)}
                            </div>
                          ))}
                        </div>
                      </FadeinAnimation>
                    )}

                    {film.creativeProducer && film.creativeProducer.length > 0 && (
                      <FadeinAnimation>
                        <h2 className="md:text-5xl text-4xl font-semibold mb-5 text-white md:pt-0 pt-10">Creative Producer</h2>
                        <div className=" justify-center gap-10 flex">
                          {film.creativeProducer.map((creativeProducer, index) => (
                            <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => handlePersonClick(creativeProducer)}>
                              {renderPerson(creativeProducer.name, creativeProducer.image, creativeProducer.description, creativeProducer.socialLinks)}
                            </div>
                          ))}
                        </div>
                      </FadeinAnimation>
                    )}

                    {film.writer && film.writer.length > 0 && (
                      <FadeinAnimation>
                        <h2 className="md:text-5xl text-4xl font-semibold mb-5 text-white md:pt-0 pt-10">Writers</h2>
                        <div className=" justify-center flex gap-10">
                          {film.writer.map((writer, index) => (
                            <div key={index} className="items-center cursor-pointer " onClick={() => handlePersonClick(writer)}>
                              {renderPerson(writer.name, writer.image, writer.description, writer.socialLinks)}
                            </div>
                          ))}
                        </div>
                      </FadeinAnimation>
                    )}

                    {film.scriptConsultant && film.scriptConsultant.length > 0 && (
                      <FadeinAnimation>
                        <h2 className="md:text-5xl text-4xl font-semibold mb-5 text-white md:pt-0 pt-10">Script Consultant</h2>
                        <div className="space-y-2 justify-center gap-10">
                          {film.scriptConsultant.map((scriptConsultant, index) => (
                            <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => handlePersonClick(scriptConsultant)}>
                              {renderPerson(scriptConsultant.name, scriptConsultant.image, scriptConsultant.description, scriptConsultant.socialLinks)}
                            </div>
                          ))}
                        </div>
                      </FadeinAnimation>
                    )}
                  </div>
                ) : (
                  <div className='md:flex flex-col justify-center gap-5'>
                    {film.director && film.director.length > 0 && (
                      <FadeinAnimation>
                        <h2 className="md:text-6xl text-4xl font-semibold mb-5 text-white md:pt-0 pt-10">Director</h2>
                        <div className="space-y-2 justify-center gap-10">
                          {film.director.map((director, index) => (
                            <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => handlePersonClick(director)}>
                              {renderPerson(director.name, director.image, director.description, director.socialLinks, director.projects, "max-w-[700px]", "text-sm md:text-3xl","md:w-56 md:h-56 w-24 h-24")}
                            </div>
                          ))}
                        </div>
                      </FadeinAnimation>
                    )}

                    {film.producer && film.producer.length > 0 && (
                      <FadeinAnimation>
                        <h2 className="md:text-5xl text-4xl font-semibold mb-5 text-white md:pt-20 pt-10">Producers</h2>
                        <div className=" justify-center gap-10 flex">
                          {film.producer.map((producer, index) => (
                            <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => handlePersonClick(producer)}>
                              {renderPerson(producer.name, producer.image, producer.description, producer.socialLinks, producer.projects, "max-w-[700px]", "text-sm md:text-3xl","md:w-56 md:h-56 w-24 h-24")}
                            </div>
                          ))}
                        </div>
                      </FadeinAnimation>
                    )}

                    {film.creativeProducer && film.creativeProducer.length > 0 && (
                      <FadeinAnimation>
                        <h2 className="md:text-5xl text-4xl font-semibold mb-5 text-white md:pt-20 pt-10">Creative Producer</h2>
                        <div className=" justify-center gap-10 flex">
                          {film.creativeProducer.map((creativeProducer, index) => (
                            <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => handlePersonClick(creativeProducer)}>
                              {renderPerson(creativeProducer.name, creativeProducer.image, creativeProducer.description, creativeProducer.socialLinks, creativeProducer.projects, "max-w-[700px]", "text-sm md:text-3xl","md:w-56 md:h-56 w-24 h-24")}
                            </div>
                          ))}
                        </div>
                      </FadeinAnimation>
                    )}

                    {film.writer && film.writer.length > 0 && (
                      <FadeinAnimation>
                        <h2 className="md:text-5xl text-4xl font-semibold mb-5 text-white md:pt-20 pt-10">Writers</h2>
                        <div className=" justify-center flex gap-10">
                          {film.writer.map((writer, index) => (
                            <div key={index} className="items-center cursor-pointer " onClick={() => handlePersonClick(writer)}>
                              {renderPerson(writer.name, writer.image, writer.description, writer.socialLinks, writer.projects, "max-w-[700px]", "text-sm md:text-3xl","md:w-56 md:h-56 w-24 h-24")}
                            </div>
                          ))}
                        </div>
                      </FadeinAnimation>
                    )}

                    {film.scriptConsultant && film.scriptConsultant.length > 0 && (
                      <FadeinAnimation>
                        <h2 className="md:text-5xl text-4xl font-semibold mb-5 text-white md:pt-20 pt-10">Script Consultant</h2>
                        <div className="space-y-2 justify-center gap-10">
                          {film.scriptConsultant.map((scriptConsultant, index) => (
                            <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => handlePersonClick(scriptConsultant)}>
                              {renderPerson(scriptConsultant.name, scriptConsultant.image, scriptConsultant.description, scriptConsultant.socialLinks, scriptConsultant.projects, "max-w-[700px]", "text-sm md:text-3xl","md:w-56 md:h-56 w-24 h-24")}
                            </div>
                          ))}
                        </div>
                      </FadeinAnimation>
                    )}
                  </div>
                )}

                {film.cast && film.cast.length > 0 ? (
                  <div className='mt-10'>
                    <FadeinAnimation>
                      <h2 className="md:text-5xl text-4xl font-semibold mb-10 text-white md:pt-0 pt-10">Cast</h2>
                      <div className="md:justify-start md:gap-10 md:flex">
                        {film.cast.map((cast, index) => (
                          <div key={index} className="flex flex-col items-center cursor-pointer" onClick={() => handlePersonClick(cast)}>
                            {renderPerson(cast.name, cast.image, cast.description, cast.socialLinks)}
                          </div>
                        ))}
                      </div>
                    </FadeinAnimation>
                  </div>
                ) : (
                  <div className='mt-10'>
                    <FadeinAnimation>
                      <h2 className="md:text-5xl text-4xl font-semibold mb-10 text-white md:pt-20 pt-10">Cast</h2>
                      <div className="flex justify-center items-center h-48">
                        <span className="text-3xl text-gray-500">Under discussion</span>
                      </div>
                    </FadeinAnimation>
                  </div>
                )}
              </div>

            </div>
          </div>

          {film.trailers && film.trailers.length > 0 && (
            <div className=" items-center flex flex-col">

              <div className='animated-line h-px bg-[#fff] mb-4 '></div>
              <h2 className="md:text-5xl text-4xl font-bold text-white my-7 mb-10 text-center"><FadeinAnimation>Watch Trailer</FadeinAnimation></h2>
              <div className='h-px w-full bg-[#fff]'></div>

              {film.trailers.length === 1 ? (
                <div className="aspect-w-16 aspect-h-9 md:h-[600px] h-[200px] w-full overflow-hidden" onMouseEnter={(e) => { e.currentTarget.querySelector('iframe').style.transform = 'scale(1.02)'; }} onMouseLeave={(e) => { e.currentTarget.querySelector('iframe').style.transform = 'scale(1.01)'; }}>

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
    </div>
  );
};

export default FilmDetailPage;

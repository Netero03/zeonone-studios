import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FilmSectionBg } from '../assets/photos'; // Assuming you have a photo asset
import FadeinAnimation from './FadeinAnimation';
import { films } from '../constants/data'; // Assuming you have a data file
import { blackArrowLeft, blackArrowRight } from '../assets/icons';
import { Slide, Zoom } from 'react-awesome-reveal';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const statuses = ["Released", "Upcoming", "All"];

const FilmSectionHome = () => {
    const [selectedStatus, setSelectedStatus] = useState("Upcoming");
    const [currentIndex, setCurrentIndex] = useState(statuses.indexOf("Upcoming"));
    const [isHovered, setIsHovered] = useState(false);
    const sliderRef = useRef(null); // Add reference to Slider
    const intervalRef = useRef(null); // Reference for interval

    const startAutoSlide = () => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % statuses.length;
                handleStatusChange(nextIndex);
                return nextIndex;
            });
        }, 8000);
    };

    const handleStatusChange = (index) => {
        clearInterval(intervalRef.current);
        setSelectedStatus(statuses[index]);
        setCurrentIndex(index);

        if (sliderRef.current) {
            sliderRef.current.slickGoTo(index); // Use the ref to go to the specific slide
        }

        if (!isHovered) {
            startAutoSlide();
        }
    };

    useEffect(() => {
        startAutoSlide();

        return () => clearInterval(intervalRef.current);
    }, [isHovered]);

    useEffect(() => {
        // Synchronize the slider with the initial selected status
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(currentIndex);
        }
    }, [currentIndex]);

    const filteredCards = selectedStatus === "All"
        ? films
        : films.filter(card => card.status === selectedStatus);

    const statusSliderSettings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "350px",
        slidesToShow: 1,
        initialSlide: currentIndex,
        swipeToSlide: true,
        pauseOnHover: true,
        speed: 800,
        cssEase: 'ease-in-out',
        lazyLoad: true,
        beforeChange: (oldIndex, newIndex) => {
            setCurrentIndex(newIndex);
        },
        afterChange: (newIndex) => {
            setSelectedStatus(statuses[newIndex]);
        },
        responsive: [
            {
                breakpoint: 1380,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "280px"
                }
            },
            {
                breakpoint: 1231,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "240px"
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "200px"
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "190px"
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "190px"
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "150px"

                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "120px"
                }
            },
            {
                breakpoint: 483,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "90px"
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "70px"
                }
            },
            {
                breakpoint: 336,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "50px"
                }
            },
        ]
    };

    const cardSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 3000,
        lazyLoad: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <LazyLoadComponent>
            <div className="sortable-card-slider poppins-regular relative bg-[#f7f7f7] w-full flex flex-col items-center justify-center overflow-hidden pb-14">
                <div className="absolute inset-0 z-10 opacity-30" style={{ backgroundColor: 'white', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                <div
                    className="absolute inset-0 z-0 w-full blur-sm"
                    style={{
                        backgroundImage: `url(${FilmSectionBg})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                    }}
                ></div>
                <div className="flex flex-col md:flex-row items-center px-3 md:justify-start w-full md:pl-60 z-20">
                    <div className="flex flex-row items-center text-center justify-center md:mx-0 mx-3 w-full md:h-[100px] h-[100px]">
                        <div className="h-5 w-1 bg-[#1C39BB] mr-1 z-20"></div>
                        <h2 className="font-bold md:text-[20px] text-[#373D3B] text-[20px] md:px-10 poppins-bold z-20"><Slide direction='up' duration={1000} delay={-500}>Our Projects</Slide></h2>
                    </div>
                    <Slide direction='up' duration={1000} >
                        <Link to="/films" className="arrow-link dancing-script-bold animate-pulse w-32 h-auto md:mr-28 rounded-md text-center text-2xl text-[#433801] self-center md:ml-auto md:mt-0 md:mb-0 mb-5 transition-all duration-300 hover:text-lg">
                            See more
                        </Link>
                    </Slide>
                </div>
                {/* Category slider design */}
                <div className='z-30 w-full h-full text-center lg:text-8xl md:text-6xl sm:text-5xl text-[#1C39BB] open-sans-bold '>
                    <Slider {...statusSliderSettings} ref={sliderRef} className='status-slider'>
                        <div className={` ${currentIndex === 0 ? 'zoom-in ' : ''} pb-12 pt-4`}><FadeinAnimation >Released</FadeinAnimation></div>
                        <div className={` ${currentIndex === 1 ? 'zoom-in ' : ''} pb-12 pt-4`}><FadeinAnimation >Upcoming</FadeinAnimation></div>
                        <div className={` ${currentIndex === 2 ? 'zoom-in ' : ''} pb-12 pt-4`}><FadeinAnimation >All Films</FadeinAnimation></div>
                    </Slider>
                </div>
                <div
                    className="category-slider md:mb-8 mb-4 pt-5 w-full relative z-10 md:z-10 md:mr-20"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <FadeinAnimation>
                        <div className="flex md:flex-row flex-col justify-center items-center w-full md:gap-10">
                            {statuses.map((status, index) => (
                                <button
                                    key={status}
                                    className={`py-2 z-40 rounded-md transition duration-500 ${currentIndex === index ? ' text-black md:text-2xl transform scale-110 font-semibold md:px-0 my-[0.5px]' : ' text-black md:text-xl text-sm md:px-3'}`}
                                    onClick={() => handleStatusChange(index)}
                                    style={{ zIndex: currentIndex === index ? 1 : 0 }}
                                >
                                    <FadeinAnimation >{status}</FadeinAnimation>
                                </button>
                            ))}
                        </div>
                    </FadeinAnimation>
                </div>
                <div
                    className="card-slider w-full md:px-20 px-5 z-30"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Zoom duration={1000} delay={-500} >
                        <Slider {...cardSliderSettings}>
                            {filteredCards.map(card => (
                                <Link to={`/film/${card.id}`} key={card.id} className="px-2">
                                    <div
                                        className="p-4 h-[350px] bg-white rounded-md shadow-md relative overflow-hidden"
                                        onMouseEnter={(e) => { e.currentTarget.querySelector('img').style.transform = 'scale(1.1)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.querySelector('img').style.transform = 'scale(1)'; }}
                                    >
                                        <img
                                            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-300"
                                            src={card.image || '#1C39BB'}
                                            alt={card.title}
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-black opacity-40 rounded-md" id='overlay'></div>
                                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                                            <h3 className="font-bold text-4xl mb-10">{card.title}</h3>
                                            <div className="text-white">{card.genre}</div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </Slider>
                    </Zoom >
                </div>
            </div>
        </LazyLoadComponent>
    );
};

const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className={`slick-arrow slick-next rounded-full bg-white hover:bg-white shadow-md w-14 h-14 justify-center items-center flex absolute md:-right-5 z-10`}
            style={{ color: '#1C39BB' }}
            onClick={onClick}
        >
            <img src={blackArrowRight} className='absolute left-3 bottom-3' width={30} height={30} alt="Next Arrow" />
        </div>
    );
}

const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className={`slick-arrow slick-prev rounded-full bg-white hover:bg-white shadow-md w-14 h-14 justify-center items-center flex absolute md:-left-5 z-10`}
            style={{ color: '#1C39BB' }}
            onClick={onClick}
        >
            <img src={blackArrowLeft} className='absolute left-3 bottom-3' width={30} height={30} alt="Prev Arrow" />
        </div>
    );
}

export default FilmSectionHome;

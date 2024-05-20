import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BgDotsRev } from '../assets/photos';
import { blackArrowLeft, blackArrowRight, filmReel } from '../assets/icons';

const categories = ["Released Films", "Upcoming Films", "All Films"];
const allCards = [
    { id: 1, category: "Upcoming Films", title: "Upcoming Film 1" },
    { id: 2, category: "Released Films", title: "Released Film 1" },
    { id: 3, category: "Upcoming Films", title: "Upcoming Film 2" },
    { id: 4, category: "Released Films", title: "Released Film 2" },
    { id: 5, category: "All Films", title: "All Film 1" },
    // Add more cards as needed
];

const FilmSectionHome = () => {
    const [selectedCategory, setSelectedCategory] = useState("Upcoming Films");
    const [currentIndex, setCurrentIndex] = useState(categories.indexOf("Upcoming Films"));
    const [isHovered, setIsHovered] = useState(false);
    const [scrollRotation, setScrollRotation] = useState(0);

    const handleCategoryChange = (index) => {
        setSelectedCategory(categories[index]);
        setCurrentIndex(index);
    };

    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % categories.length;
            handleCategoryChange(nextIndex);
        }, 8000);

        return () => clearInterval(interval);
    }, [currentIndex, isHovered]);

    useEffect(() => {
        const handleScroll = () => {
            const rotation = window.scrollY / 5; // Adjust the divisor to control rotation speed
            setScrollRotation(rotation);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const filteredCards = selectedCategory === "All Films"
        ? allCards
        : allCards.filter(card => card.category === selectedCategory);

    const categorySliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: '0',
        cssEase: "linear",
        pauseOnHover: true,
        initialSlide: categories.indexOf("Upcoming Films"),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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

    const cardSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        pauseOnHover: true,
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
        <div className="sortable-card-slider garamond relative bg-[#fff9f3] w-full h-screen flex flex-col items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 z-10 md:m-20 m-5 mt-20 mb-8 top-24"
                style={{
                    backgroundColor: 'transparent',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    border: '1.6px solid #ffac04',
                    pointerEvents: 'none'
                }}
            ></div>
            <img
                src={filmReel}
                className="absolute -left-[200px] bottom-20 z-10"
                width={400}
                height={400}
                alt="Film Reel"
                style={{ transform: `rotate(${scrollRotation}deg)` }}
            />
            <div className="absolute inset-0 -z-0" style={{ backgroundImage: `url(${BgDotsRev})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

            <div className="flex flex-col md:flex-row justify-center items-center px-3 md:justify-start w-full md:px-24 ">
                <div className="flex flex-row items-center">
                    <div className="h-7 w-1 bg-[#ffac04] mt-1 mr-2"></div>
                    <h2 className="text-3xl font-bold text-black w-[179.8px]">Our Projects</h2>
                </div>
                <Link to="/projects" className="rounded-md text-center text-sm inter-font text-black self-center md:ml-auto mt-4 md:mt-0">
                    See more ~
                </Link>
            </div>
            <div
                className="category-slider md:mb-8 mb-4 w-full relative mt-14 z-20 md:z-0"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="flex md:flex-row flex-col justify-center items-center w-full md:gap-10">
                    <button
                        className={` py-2 rounded-md transition duration-500 ${currentIndex === 0 ? ' text-black md:text-2xl transform scale-110 font-semibold md:px-0 my-[0.5px]' : ' text-black md:text-xl text-sm md:px-3'}`}
                        onClick={() => handleCategoryChange(0)}
                    >
                        {categories[0]}
                    </button>
                    <button
                        className={`py-2 rounded-md transition duration-500 ${currentIndex === 1 ? ' text-black md:text-2xl transform scale-110 font-semibold md:px-0' : ' text-black md:text-xl text-sm md:px-3'}`}
                        onClick={() => handleCategoryChange(1)}
                    >
                        {categories[1]}
                    </button>
                    <button
                        className={`py-2 rounded-md transition duration-500 ${currentIndex === 2 ? ' text-black md:text-2xl transform scale-110 font-semibold md:px-0' : ' text-black md:text-xl text-sm md:px-3'}`}
                        onClick={() => handleCategoryChange(2)}
                    >
                        {categories[2]}
                    </button>
                </div>
            </div>

            <div
                className="card-slider w-full md:px-20 px-5 z-30"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Slider {...cardSliderSettings}>
                    {filteredCards.map(card => (
                        <div key={card.id} className="px-2">
                            <div className="p-4 h-[300px] bg-white rounded-md shadow-md">
                                <h3 className="text-lg font-bold">{card.title}</h3>
                                <p className="text-gray-600">{card.category}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-arrow slick-next rounded-full bg-white shadow-md w-14 h-14 justify-center items-center flex absolute md:-right-5 z-10 `}
            style={{ ...style, color: '#ffac04' }}
            onClick={onClick}
        >
            <img src={blackArrowRight} className='absolute left-3 bottom-3' width={30} height={30} alt="Next Arrow" />
        </div>
    );
}

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-arrow slick-prev rounded-full bg-white shadow-md w-14 h-14 justify-center items-center flex absolute md:-left-5 z-10`}
            style={{ ...style, color: '#ffac04' }}
            onClick={onClick}
        >
            <img src={blackArrowLeft} className='absolute left-3 bottom-3' width={30} height={30} alt="Prev Arrow" />
        </div>
    );
}

export default FilmSectionHome;

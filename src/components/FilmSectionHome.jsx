import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = ["Released Films", "Upcoming Films", "All Films"];
const allCards = [
    { id: 1, category: "Upcoming Films", title: "Upcoming Film 1" },
    { id: 2, category: "Released Films", title: "Released Film 1" },
    { id: 3, category: "Upcoming Films", title: "Upcoming Film 2" },
    { id: 4, category: "Released Films", title: "Released Film 2" },
    { id: 5, category: "All Films", title: "All Film 1" },
    // Add more cards as needed
];

const SortableCardSlider = () => {
    const [selectedCategory, setSelectedCategory] = useState("Upcoming Films");
    const [currentIndex, setCurrentIndex] = useState(categories.indexOf("Upcoming Films"));
    const [isHovered, setIsHovered] = useState(false);

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
        <div className="sortable-card-slider relative bg-[#fff9f3] w-full h-screen flex flex-col items-center justify-center overflow-hidden">
            <div
                className="absolute inset-0 z-10 m-20 top-32"
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
            <div className="absolute inset-0 -z-0" style={{ backgroundImage: `url('src/assets/photos/BgDotsRev.svg')`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

            <div className="flex flex-col md:flex-row justify-center items-center px-3 md:justify-start w-full md:px-24">
                <div className="flex flex-row items-center">
                    <div className="h-7 w-1 bg-[#ffac04] mt-1 mr-2"></div>
                    <h2 className="text-3xl font-bold text-black w-[179.8px]">Our Projects</h2>
                </div>
                <Link to="/projects" className="rounded-md text-center text-sm inter-font text-black self-center md:ml-auto mt-4 md:mt-0">
                    See more ~
                </Link>
            </div>
            <div
                className="category-slider mb-8 w-full relative mt-14"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="flex justify-center items-center w-full gap-10">
                    <button
                        className={` py-2 rounded-md transition duration-500 ${currentIndex === 0 ? ' text-black text-xl transform scale-110 font-semibold md:px-0' : ' text-black text-sm md:px-4'}`}
                        onClick={() => handleCategoryChange(0)}
                    >
                        {categories[0]}
                    </button>
                    <button
                        className={`py-2 rounded-md transition duration-500 ${currentIndex === 1 ? ' text-black text-xl transform scale-110 font-semibold md:px-0' : ' text-black text-sm md:px-4'}`}
                        onClick={() => handleCategoryChange(1)}
                    >
                        {categories[1]}
                    </button>
                    <button
                        className={`py-2 rounded-md transition duration-500 ${currentIndex === 2 ? ' text-black text-xl transform scale-110 font-semibold md:px-0' : ' text-black text-sm md:px-4'}`}
                        onClick={() => handleCategoryChange(2)}
                    >
                        {categories[2]}
                    </button>
                </div>
            </div>

            <div
                className="card-slider w-full px-20"
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
            className={className}
            style={{ ...style, display: 'block', zIndex: 1, color: '#ffac04' }}
            onClick={onClick}
        >
            <div className='rounded-full bg-white shadow-md w-14 h-14 justify-center items-center flex'>
                <img src="src/assets/icons/black-right-arrow.svg" width={40} height={40} ></img>
            </div>
        </div>
    );
}

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', zIndex: 1, color: '#ffac04', }}
            onClick={onClick}
        >
            <div className='rounded-full bg-white shadow-md w-14 h-14 justify-center items-center flex'>
                <img src="src/assets/icons/black-left-arrow.svg" width={40} height={40} ></img>
            </div>
        </div>
    );
}

export default SortableCardSlider;
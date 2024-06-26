import React, { useEffect, useState } from 'react';
import { Slide, Zoom } from 'react-awesome-reveal';
import { AboutUsBg, CaveArt1, CaveArt2, RajSirImg1 } from '../assets/photos';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { FadeinAnimation, Loading, TeamSectionHome } from '../components';

const AboutUs = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scale, setScale] = useState(2);
  const [stillScale, setStillScale] = useState(1.6);
  const [isLoading, setIsLoading] = useState(!localStorage.getItem('aboutUsContentLoaded'));

  useEffect(() => {
    if (!localStorage.getItem('aboutUsContentLoaded')) {
      // Simulate a delay to show the loading screen
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('aboutUsContentLoaded', 'true');
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

  if (isLoading) {
    return <Loading />; // Render the loading screen while loading
  }

  return (
    <div className="bg-[#F5F5F5] flex flex-col relative min-h-screen pb-20 w-full poppins-bold overflow-hidden">
      <section className="relative w-full h-[400px] flex flex-col items-center justify-center overflow-hidden z-40">
        <div className="absolute inset-0 z-10 opacity-30" style={{ backgroundColor: '#f7f7f7', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        <div className="absolute inset-0 z-0 " style={{ backgroundImage: `url(${AboutUsBg})`, backgroundColor: '#f7f7f7', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

        <div className="z-20 text-[#373D3B] text-center text-6xl font-bold md:flex md:flex-row md:gap-4 tracking-tighter" style={{ opacity: 1 - scrollY / 200 }}>
          <FadeinAnimation >About Us</FadeinAnimation>

        </div>
      </section>
      <div className="flex md:flex-row flex-col z-30 lg:p-20 md:p-10 p-5 md:pt-0 pt-20">
        <LazyLoadComponent>
          <div className="relative flex flex-col md:text-center text-justify md:w-[90%] w-full lg:pl-10 md:pl-0 lg:pr-20 md:pr-10">
            {/* <div
            className="absolute inset-0 z-0 w-full opacity-60"
            style={{
              backgroundImage: `url(${AboutMissionSection})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          ></div> */}
            <div className="flex flex-col items-center text-center justify-center md:mx-0 px-3 md:my-10 md:mt-16 w-full "  >
              {/* <div className="h-[2px] w-7 bg-[#1C39BB] mb-10 z-10"></div> */}

              <div className=" font-bold lg:text-[50px] md:text-[46px] text-[#373D3B] text-3xl md:px-14 poppins-semibold z-10"><Slide direction='up' duration={1000} delay={-500} >Our Mission</Slide></div>
            </div>
            <Zoom className='self-center z-10 md:my-0 my-5'><div className='lg:h-[120px] md:h-[100px] h-[60px] w-[2px] bg-[#1C39BB] '></div></Zoom>
            <div className='flex md:mx-0 '>
              {/* 623100 */}
              <FadeinAnimation>
                <h6 className="mt-4 text-[#47311b] text-xs lg:text-lg md:text-base px-2 z-20 open-sans-regular md:px-0">
                  From the dawn of humanity, when our ancestors huddled around flickering fires in ancient
                  caves, storytelling has been the sacred rite. At Zenone Studioz, we carry this torch forward. Our mission
                  is simple yet profound: to weave narratives that resonate across epochs. We believe that a well-crafted
                  script is the heartbeat of any production. While other elements contribute, it’s the script, directors, and
                  actors that shape our cinematic universe.
                </h6>
              </FadeinAnimation>
            </div>

            <div className='flex md:mx-0 px-0'>
              <FadeinAnimation>
                <h6 className="lg:mt-10 mt-5 md:mb-16 mb-5 text-[#47311b] text-xs lg:text-lg md:text-base px-2 z-20 open-sans-regular md:px-0">
                  We obsess over concepts and scripts, nurturing them like rare blooms. Our canvas spans genres—drama,
                  mystery, romance, and fantasy—each guided by passion and purpose. We collaborate with industry
                  luminaries, transforming ink into celluloid magic. Our commitment extends beyond the screen.
                </h6>
              </FadeinAnimation>
            </div>
          </div>
          <div className="lg:w-[50%] md:w-[60%] md:h-[550px] w-full h-[200px] relative md:mt-10 md:mb-0 mb-10">
            <div className='relative w-full h-full overflow-hidden rounded-xl'>
              <div className="absolute inset-0 z-10 opacity-10 " style={{ backgroundColor: 'black', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

              <img
                src={CaveArt1}
                alt='caveart'
                loading='lazy'
                className="w-full h-full object-cover transition-transform duration-0 animate-fadeIn"
                style={{
                  transform: `translateY(${scrollY * 0.1}px) scale(${scale})`,
                  ...(window.innerWidth >= 768 && {
                    // Example additional styles for larger screens
                    transform: `translateY(${scrollY * 0.4}px) scale(${scale})`,
                  }),
                }}
              />
            </div>
            <img
              src={CaveArt2}
              alt="Img"
              className='absolute md:-right-10 md:-bottom-10 -right-5 -bottom-5 lg:h-[300px] md:h-[200px] h-[150px] object-contain z-10 drop-shadow-2xl animate-fadeIn'
              loading='lazy'
            />
          </div>
        </LazyLoadComponent>
      </div>
      <LazyLoadComponent>
        <div className="md:px-20 flex flex-col z-30  md:pb-5 pb-10">
          {/* <div
          className="absolute inset-0 z-0 w-full opacity-80 blur-sm"
          style={{
            backgroundImage: `url(${AboutAboutSection})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></div> */}

          <div className="pt-10 w-full flex flex-col">

            <div className="flex flex-row items-center text-center justify-center md:mx-0 mx-3 w-full md:py-5 "  >
              <div className="h-7 w-1 mt-1 mr-2 z-10"><Slide direction='up' duration={1000} > <div className="h-7 w-1 bg-[#1C39BB] z-10">  </div></Slide>
              </div>

              <div className=" font-bold md:text-[56px] text-[#373D3B] text-3xl md:px-14 poppins-semibold z-10"><Slide direction='up' duration={1000} delay={-500} >About Us</Slide></div>
            </div>
            <FadeinAnimation>
              <Zoom duration={1000} delay={-500}>
                <div className="flex flex-col poppins-regular text-center md:mt-16 z-30 md:mx-0 mx-5 md:px-10">
                  <div className="mt-4 lg:text-2xl md:text-lg text-xs text-gray-600 ">
                    Zenone Studioz is in the business of art. We specialize in content production for both feature
                    films and web series, primarily working in the Hindi and Telugu industries. Collaborating with well-
                    known talents in these markets, we strive to create engaging narratives that resonate with audiences.
                  </div>
                  <div className="mt-4 lg:text-2xl md:text-lg text-xs text-gray-600 ">
                    Our commitment to excellence extends to every aspect of filmmaking, from plotlines and characterizations to
                    dialogue and unique backdrops. With a team of prolific talent and skilled technicians, we transform
                    powerful scripts into captivating films and web series for a larger audience. At Zenone, we produce
                    content at a realistic price point, ensuring a positive return on investment.
                  </div>
                </div>
              </Zoom>
            </FadeinAnimation>
          </div>

        </div>
        <FadeinAnimation>
          <div className="flex w-full justify-center items-center pb-10 ">
            {/* <div className='absolute bg-[#fff] md:h-3 h-1 w-full z-20'></div>
          <img src={RajSirImg3} className="absolute inset-0 w-full h-full object-cover z-0" loading='lazy'
            style={{
              transform: `translateY(${scrollY * 0.1}px) scale(${stillScale})`,
              ...(window.innerWidth >= 768 && {
                // Example additional styles for larger screens
                transform: `translateY(${scrollY * 0.1}px) scale(${stillScale})`,
              }),
            }} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 via-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/60 via-transparent z-10"></div>
          <div className='absolute bottom-0 bg-[#fff] md:h-3 h-1 w-full z-20'></div> */}

            <div className="item w-[70%] md:w-[40%]">
              <div className="polaroid">
                <img src={RajSirImg1} alt='Anil Kapoor and Raj still' loading='lazy' />
                <div className="caption text-base md:text-2xl md:py-5 py-2">Anil Kapoor and Raj still</div>
              </div>
            </div>

          </div>
        </FadeinAnimation>
      </LazyLoadComponent>
      <LazyLoadComponent>
        <TeamSectionHome />
      </LazyLoadComponent>
    </div>
  );
};

export default AboutUs;

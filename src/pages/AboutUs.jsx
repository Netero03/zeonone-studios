import React, { useEffect, useState } from 'react';
import { FilmCamO, CaveArt1, RajSirImg3, AboutUsBg, FilmsBg, CaveArt2, MissionBg, AboutMissionSection, AboutAboutSection } from '../assets/photos';
import TeamSectionHome from '../components/TeamSectionHome';
import FadeinAnimation from '../components/FadeinAnimation';
import { Slide, Zoom } from 'react-awesome-reveal';

const AboutUs = () => {
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

  return (
    <div className="bg-[#F5F5F5] flex flex-col relative min-h-screen pb-20 w-full poppins-bold overflow-hidden">
      {/* <div className="absolute inset-0 -z-0" style={{ backgroundImage: `url(${BgDotsBoth})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div> */}
      {/* <div className="absolute inset-0 overflow-hidden z-10 top-[600px] -left-56 opacity-60">
        <img
          src={FilmCamO}
          alt="Moving Element"
          className="left-0 w-[700px] h-[600px]"
          style={{
            transform: `translateX(${scrollY * 0.1}px) scale(${1 + scrollY / 2000})`,
            opacity: `${1 - scrollY / 1500}`,
            transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
          }}
          loading='lazy'
        />
      </div> */}
      <section className="relative w-full h-[400px] flex flex-col items-center justify-center overflow-hidden z-40">
        <div className="absolute inset-0 z-10 opacity-30" style={{ backgroundColor: '#f7f7f7', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${AboutUsBg})`, backgroundColor: '#1C39BB', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

        <div className="z-20 text-[#373D3B] text-center text-6xl font-bold md:flex md:flex-row md:gap-4" style={{ opacity: 1 - scrollY / 200 }}>
          <FadeinAnimation >About Us</FadeinAnimation>

        </div>
      </section>
      <div className="flex flex-col z-30 h-full">

        <div className="relative pt-20 w-full flex flex-col text-center">
          <div
            className="absolute inset-0 z-0 w-full opacity-60"
            style={{
              backgroundImage: `url(${AboutMissionSection})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          ></div>
          <div className="flex flex-row items-center text-center justify-center md:mx-0 px-3 md:my-10 w-full "  >
            <div className="h-7 w-1 bg-[#1C39BB] mt-1 mr-2 z-10"></div>

            <h2 className=" font-bold md:text-[56px] text-[#373D3B] text-3xl md:px-14 poppins-bold z-10">Our Mission</h2>
          </div>
          <div className='flex md:mx-0 mx-3'>
            <FadeinAnimation>
              <Slide direction="up" duration={1000}>
                <h6 className="mt-4 text-gray-900 text-xs md:text-2xl px-2 z-20 open-sans-regular md:px-20">
                  From the dawn of humanity, when our ancestors huddled around flickering fires in ancient
                  caves, storytelling has been the sacred rite. At Zenone Studioz, we carry this torch forward. Our mission
                  is simple yet profound: to weave narratives that resonate across epochs. We believe that a well-crafted
                  script is the heartbeat of any production. While other elements contribute, it’s the script, directors, and
                  actors that shape our cinematic universe.
                </h6>
              </Slide>
            </FadeinAnimation>
          </div>
          <div className="w-full md:h-[250px] h-[100px] relative mt-6 mb-6">

            <div className="absolute inset-0 z-10 opacity-20" style={{ backgroundColor: 'black', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

            <div
              className="absolute inset-0 z-0 "
              style={{
                backgroundImage: `url(${CaveArt1})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
              }}
            ></div>
            <img
              src={CaveArt2}
              alt="Img"
              className='absolute -left-10 -top-5 md:h-[300px] h-[150px] object-contain z-10 drop-shadow-2xl '
              loading='lazy'
            />
          </div>
          <div className='flex md:mx-0 px-5'>
            <FadeinAnimation>
              <Slide direction="down" duration={1000}>

                <h6 className="mt-4 mb-20 text-gray-900 text-xs md:text-2xl z-20 open-sans-regular md:px-20">
                  We obsess over concepts and scripts, nurturing them like rare blooms. Our canvas spans genres—drama,
                  mystery, romance, and fantasy—each guided by passion and purpose. We collaborate with industry
                  luminaries, transforming ink into celluloid magic. Our commitment extends beyond the screen.
                </h6>
              </Slide>
            </FadeinAnimation>
          </div>
        </div>
      </div>
      <div className="relative md:px-20 flex flex-col z-30 pt-20 md:pb-20 pb-10">
        <div
          className="absolute inset-0 z-0 w-full opacity-80 blur-sm"
          style={{
            backgroundImage: `url(${AboutAboutSection})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        ></div>
        <div className="relative pt-10 w-full flex flex-col">

          <div className="flex flex-row items-center text-center justify-center md:mx-0 mx-3 w-full md:py-10 "  >
            <div className="h-7 w-1 bg-[#1C39BB] mt-1 mr-2 z-10"></div>

            <h2 className=" font-bold md:text-[56px] text-[#373D3B] text-3xl md:px-14 poppins-bold z-10">About Us</h2>
          </div>
          <FadeinAnimation>
            <Zoom duration={1000} delay={-500}>
              <div className="flex text-center md:mt-16 z-30 md:mx-0 mx-5 md:px-10">
                <h6 className="mt-4 md:text-2xl text-xs font-medium text-gray-600 ">
                  Zenone Studioz is in the business of art. We specialize in content production for both feature
                  films and web series, primarily working in the Hindi and Telugu industries. Collaborating with well-
                  known talents in these markets, we strive to create engaging narratives that resonate with audiences. Our
                  commitment to excellence extends to every aspect of filmmaking, from plotlines and characterizations to
                  dialogue and unique backdrops. With a team of prolific talent and skilled technicians, we transform
                  powerful scripts into captivating films and web series for a larger audience. At Zenone, we produce
                  content at a realistic price point, ensuring a positive return on investment.
                </h6>
              </div>
            </Zoom>
          </FadeinAnimation>
        </div>
      </div>
      <FadeinAnimation>
        <div className="relative md:h-[550px] h-[200px] ">
          <div className='absolute bg-[#fff] md:h-3 h-1 w-full z-20'></div>
          <img src={RajSirImg3} className="absolute inset-0 w-full h-full object-cover z-0" loading='lazy' />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 via-transparent z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/60 via-transparent z-10"></div>
          <div className='absolute bottom-0 bg-[#fff] md:h-3 h-1 w-full z-20'></div>

        </div>
      </FadeinAnimation>

      <TeamSectionHome />

    </div>
  );
};

export default AboutUs;

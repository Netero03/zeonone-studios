import React, { useEffect, useState } from "react";
import { ContactUsSectionBg } from "../assets/photos";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Loading } from "../components";

const ContactSection = () => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const [isLoading, setIsLoading] = useState(!localStorage.getItem('contactUsContentLoaded'));

  useEffect(() => {
    if (!localStorage.getItem('contactUsContentLoaded')) {
      // Simulate a delay to show the loading screen
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem('contactUsContentLoaded', 'true');
      }, 1000); // Adjust the delay as needed

      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []);

  function handleTextChange(text) {
    setValue(text);
    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const response = await fetch('https://zenonemail.vercel.app/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: value, email, message })
    });

    const result = await response.json();
    if (response.ok) {
      setStatus('Message sent successfully!');
      setValue('');
      setEmail('');
      setMessage('');
    } else {
      setStatus(`Failed to send message: ${result.error}`);
    }
  };

  if (isLoading) {
    return <Loading />; // Render the loading screen while loading
  }

  return (
    <section className="relative h-full justify-center pb-16 bg-[#f7f7f7] ">
      <div className="flex flex-col w-full max-md:max-w-full z-10">
        <div className="flex justify-center items-center px-16 py-20 pt-40 w-full text-center text-gray-800 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col mt-5 mb-10 max-md:mb-10">
            <h1 className="text-7xl tracking-tighter leading-[72.1px] max-md:text-4xl poppins-bold text-[#373D3B] z-10">Contact Us</h1>
            <p className="self-center mt-8 text-lg leading-6">Get in touch.</p>
          </div>
        </div>
        <form className="flex flex-col self-center px-5 pb-14 mt-9 max-w-full w-[648px] h-full z-10" aria-label="Contact form" onSubmit={handleSubmit}>
          <h2 className="self-center text-2xl leading-6 text-center poppins-semibold text-gray-800">Send us a message</h2>
          <div className="flex flex-col mt-10 text-neutral-400 max-md:max-w-full gap-5">
            <div className="flex flex-col text-lg max-md:max-w-full gap-5">
              <div id="float-label" className=" ">
                <input id="nameInput" type="text" placeholder="" className="mt-1 max-md:mr-1.5 max-md:max-w-full outline-none text-[#373D3B]" aria-label="Your name"
                  value={value}
                  onChange={(e) => handleTextChange(e.target.value)} />
                <label htmlFor="nameInput" className={isActive ? "Active" : ""} >Your Name*</label>
              </div>
              <div id="float-label" className="">
                <input id="emailInput" type="email" placeholder="" className="mt-1 max-md:mr-1.5 max-md:max-w-full outline-none text-[#373D3B]" aria-label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="emailInput" className={email ? "Active" : ""} >Email Address*</label>
              </div>
            </div>
            <div id="" className="">
              <textarea id="messageInput" placeholder="Message*" className="mb-2 mr-2 max-md:mr-1.5 pb-32 max-md:mb-10 max-md:max-w-full outline-none text-[#373D3B]" aria-label="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit" className="flex flex-col justify-center items-center self-center mt-8 max-w-full text-lg font-normal leading-5 text-center text-white rounded-[1920px] w-[248px]">
              <span className="justify-center px-9 py-5 bg-blue-800 rounded-[1920px] max-md:px-5">Send your message</span>
            </button>
            <p className="self-center mt-4">{status}</p>
          </div>
        </form>
      </div>
      <div className="absolute inset-0 z-0 opacity-50" style={{ backgroundImage: `url(${ContactUsSectionBg})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
    </section>
  );
}


const AddressSection = () => (
  <LazyLoadComponent>
    <section className="flex relative justify-center items-center px-16 pt-11 pb-20 w-full h-full max-md:px-5 max-md:max-w-full z-10">
      <div className="absolute inset-0 z-0 opacity-50" style={{ backgroundImage: `url(${ContactUsSectionBg})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

      <div className="flex flex-col items-center mb-4 w-full max-w-[1320px] max-md:max-w-full z-10">
        <p className="text-sm tracking-wider leading-4 text-center uppercase text-neutral-400">INDIA</p>
        <h2 className="mt-9 text-6xl tracking-tighter text-center text-gray-800 leading-[67.84px] max-md:max-w-full max-md:text-4xl">Get in touch with Zenone</h2>
        <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
              <div className="shrink-0 mx-auto max-w-full bg-zinc-300 md:h-full h-[200px] rounded-[5px] w-[864px] max-md:mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25355.253000383287!2d72.8330879514657!3d19.147935342986482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b78aaf9d1dff%3A0x3167f187b3a5fb04!2sMeera%20Towers!5e0!3m2!1sen!2sin!4v1718780205329!5m2!1sen!2sin"
                  className='w-full h-full rounded-[5px]'
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <address className="flex flex-col ml-5 w-[33%] h-max max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow 900px:px-8 px-5 py-9 w-full bg-stone-200 rounded-[5px] max-md:px-5 max-md:mt-6 max-md:max-w-full poppins-regular">
                <p className="text-base lg:text-lg leading-6 text-neutral-400 ">Address</p>
                <p className="mt-2 text-base lg:text-xl font-medium tracking-tight leading-7 text-gray-800">ZENONE STUDIOZ PVT. LTD. FLAT 601 C WING, MEERA TOWER, OSHIWARA, ANDHERI WEST, MUMBAI 400053</p>
                <p className="mt-11 text-base lg:text-lg leading-6 text-neutral-400 max-md:mt-5">Email address</p>
                <p className="justify-center mt-2 text-lg lg:text-xl font-medium tracking-tight leading-7 text-gray-800 whitespace-nowrap">hi@zenone.com</p>
                <p className="mt-5 text-base lg:text-lg leading-6 text-neutral-400">Phone</p>
                <p className="justify-center mt-2 text-lg lg:text-xl font-medium tracking-tight leading-7 text-gray-800">+91 00000 00000</p>
                {/* <div className="flex gap-2 mt-14 max-md:mt-10">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5603230797f19f8cea97e559a47439de602635b5062bf11d6a252fced3fb4f06?apiKey=fdc97f1298d9417ba73f632a312daddd&" alt="social icon 1" className="shrink-0 aspect-square w-[52px]" />
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3f634323f869cb72c7982d58974ada6d641d7a42b02bf38848c84a0c6fa0321?apiKey=fdc97f1298d9417ba73f632a312daddd&" alt="social icon 3" className="shrink-0 aspect-square w-[52px]" />
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4845733091e7c6fc25cc4168f4ef916b80c9812e820aefd7b3da64b2fe6e393?apiKey=fdc97f1298d9417ba73f632a312daddd&" alt="social icon 4" className="shrink-0 aspect-square w-[52px]" />
              </div> */}
              </div>
            </address>
          </div>
        </div>
      </div>

    </section>
  </LazyLoadComponent>
);

function ContactUs() {
  return (
    <div className="bg-[#f7f7f7] ">

      <ContactSection />
      <AddressSection />
    </div>
  );
}

export default ContactUs;

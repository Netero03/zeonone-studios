// import React, { useEffect, useState } from 'react';
// import { ContactUsBg } from '../assets/photos';

// const ContactUs = () => {
//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     alert('Thank you for your message!');
//     setFormData({
//       name: '',
//       email: '',
//       message: ''
//     });
//   };

//   return (
//     <div>
//       <section className="relative w-full h-[400px] flex flex-col items-center justify-center overflow-hidden poppins-regular">
//         <div className="absolute inset-0 z-10 opacity-30" style={{ backgroundColor: '#f7f7f7', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
//         <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${ContactUsBg})`, backgroundColor: '#f7f7f7', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
//         <div className="z-10 text-[#373D3B] text-center text-5xl font-bold " style={{ opacity: 1 - scrollY / 200 }}>
//           Contact Us
//         </div>
//       </section>

//       <div className="w-full bg-[#F5F5F5] p-6 md:px-20 poppins-regular">



//         <div className="container mx-auto py-14">
//           <div className="flex flex-col md:flex-row md:justify-between">
//             {/* Contact Information */}
//             <div className="md:w-1/2 p-6 text-center md:text-left">
//               <h3 className="text-2xl font-semibold text-black mb-4">Get in Touch</h3>
//               <p className="text-gray-800 mb-4">We'd love to hear from you!</p>
//               <div className="mb-4">
//                 <h4 className="text-xl font-bold text-black">Address:</h4>
//                 <p className="text-gray-800">ZENONE STUDIOZ PVT. LTD.
//                   FLAT 601 C WING,
//                   MEERA TOWER,
//                   OSHIWARA ANDHERI WEST
//                   MUMBAI 400053</p>
//               </div>
//               <div className="mb-4">
//                 <h4 className="text-xl font-bold text-black">Email:</h4>
//                 <p className="text-gray-800">info@zenone.com</p>
//               </div>
//               <div className="mb-4">
//                 <h4 className="text-xl font-bold text-black">Phone:</h4>
//                 <p className="text-gray-800">+1 (234) 567-8901</p>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="md:w-1/2 p-6 bg-white shadow-md rounded-lg">
//               <h3 className=" text-lg md:text-2xl font-semibold text-black mb-4">Send Us a Message</h3>
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                   <label htmlFor="name" className="block text-gray-700 mb-2 text-sm">Name</label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1C39BB] text-xs"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="email" className="block text-gray-700 mb-2 text-sm">Email</label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1C39BB] text-xs"
//                     required
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="message" className="block text-gray-700 mb-2 text-sm">Message</label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1C39BB] text-xs"
//                     rows="5"
//                     required
//                   ></textarea>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full bg-[#1C39BB] text-white py-2 rounded-md hover:bg-[#577cff] transition duration-300"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//            <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25355.253000383287!2d72.8330879514657!3d19.147935342986482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b78aaf9d1dff%3A0x3167f187b3a5fb04!2sMeera%20Towers!5e0!3m2!1sen!2sin!4v1718780205329!5m2!1sen!2sin"
//           className='w-full h-[300px] mt-16'
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React, { useState } from "react";
import { ContactUsSectionBg } from "../assets/photos";

const ContactSection = () => {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

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

    const response = await fetch('http://localhost:5000/api/contact', {
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
          <h2 className="self-center text-2xl leading-6 text-center font-bold text-gray-800">Send us a message</h2>
          <div className="flex flex-col mt-10 text-neutral-400 max-md:max-w-full gap-5">
            <div className="flex flex-col text-lg max-md:max-w-full gap-5">
              <div id="float-label" className="">
                <input id="nameInput" type="text" placeholder="" className="mt-1 max-md:mr-1.5 max-md:max-w-full outline-none text-[#373D3B]" aria-label="Your name"
                  value={value}
                  onChange={(e) => handleTextChange(e.target.value)} />
                <label htmlFor="nameInput" className={isActive ? "Active" : ""} >Your Name</label>
              </div>
              <div id="float-label" className="">
                <input id="emailInput" type="email" placeholder="" className="mt-1 max-md:mr-1.5 max-md:max-w-full outline-none text-[#373D3B]" aria-label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="emailInput" className={email ? "Active" : ""} >Email Address</label>
              </div>
            </div>
            <div id="" className="">
              <textarea id="messageInput" placeholder="Message" className="mb-2 mr-2 max-md:mr-1.5 pb-32 max-md:mb-10 max-md:max-w-full outline-none text-[#373D3B]" aria-label="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
            <button type="submit" className="flex flex-col justify-center self-center mt-8 max-w-full text-lg font-normal leading-5 text-center text-white rounded-[1920px] w-[248px]">
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
  <section className="flex relative justify-center items-center px-16 pt-11 pb-20 w-full h-full max-md:px-5 max-md:max-w-full z-10">
    <div className="absolute inset-0 z-0 opacity-50" style={{ backgroundImage: `url(${ContactUsSectionBg})`, backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>

    <div className="flex flex-col items-center mb-4 w-full max-w-[1320px] max-md:max-w-full z-10">
      <p className="text-sm tracking-wider leading-4 text-center uppercase text-neutral-400">INDIA</p>
      <h2 className="mt-9 text-6xl tracking-tighter text-center text-gray-800 leading-[67.84px] max-md:max-w-full max-md:text-4xl">Get in touch with Zenone</h2>
      <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
            <div className="shrink-0 mx-auto max-w-full bg-zinc-300 h-[480px] rounded-[5px] w-[864px] max-md:mt-6">
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

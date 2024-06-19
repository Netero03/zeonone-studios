import React, { useEffect, useState } from 'react';
import { ContactUsBg, Map } from '../assets/photos';
import { Link } from 'react-router-dom';

const ContactUs = () => {
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div>
      <section className="relative w-full h-[400px] flex flex-col items-center justify-center overflow-hidden poppins-regular">
        <div className="absolute inset-0 z-10 opacity-30" style={{ backgroundColor: '#f7f7f7', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${ContactUsBg})`, backgroundColor: '#f7f7f7', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        <div className="z-10 text-[#373D3B] text-center text-5xl font-bold " style={{ opacity: 1 - scrollY / 200 }}>
          Contact Us
        </div>
      </section>

      <div className="w-full bg-[#F5F5F5] p-6 md:px-20 poppins-regular">

        

        <div className="container mx-auto py-14">
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* Contact Information */}
            <div className="md:w-1/2 p-6 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-black mb-4">Get in Touch</h3>
              <p className="text-gray-800 mb-4">We'd love to hear from you!</p>
              <div className="mb-4">
                <h4 className="text-xl font-bold text-black">Address:</h4>
                <p className="text-gray-800">ZENONE STUDIOZ PVT. LTD.
                  FLAT 601 C WING,
                  MEERA TOWER,
                  OSHIWARA ANDHERI WEST
                  MUMBAI 400053</p>
              </div>
              <div className="mb-4">
                <h4 className="text-xl font-bold text-black">Email:</h4>
                <p className="text-gray-800">info@zenone.com</p>
              </div>
              <div className="mb-4">
                <h4 className="text-xl font-bold text-black">Phone:</h4>
                <p className="text-gray-800">+1 (234) 567-8901</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="md:w-1/2 p-6 bg-white shadow-md rounded-lg">
              <h3 className=" text-lg md:text-2xl font-semibold text-black mb-4">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2 text-sm">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1C39BB] text-xs"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2 text-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1C39BB] text-xs"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 mb-2 text-sm">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1C39BB] text-xs"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1C39BB] text-white py-2 rounded-md hover:bg-[#577cff] transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
           <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25355.253000383287!2d72.8330879514657!3d19.147935342986482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b78aaf9d1dff%3A0x3167f187b3a5fb04!2sMeera%20Towers!5e0!3m2!1sen!2sin!4v1718780205329!5m2!1sen!2sin"
          className='w-full h-[300px] mt-16'
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
       
      </div>
    </div>
  );
};

export default ContactUs;

import React, { useEffect, useState } from 'react';
import { ContactUsBg } from '../assets/photos';

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
        <div className="absolute inset-0 z-10 bg-black opacity-0"></div>
        <div className="absolute inset-0 z-0" style={{ backgroundImage: `url(${ContactUsBg})`, backgroundColor: '#1C39BB', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
        <div className="z-10 text-white text-center text-5xl font-bold" style={{ opacity: 1 - scrollY / 200 }}>
          Contact Us
        </div>
      </section>

      <div className="w-full bg-[#F5F5F5] p-6 poppins-regular">
        <div className="container mx-auto py-10">
          <div className="flex flex-col md:flex-row md:justify-between">
            {/* Contact Information */}
            <div className="md:w-1/2 p-6">
              <h3 className="text-2xl font-semibold text-black mb-4">Get in Touch</h3>
              <p className="text-gray-800 mb-4">We'd love to hear from you!</p>
              <div className="mb-4">
                <h4 className="text-xl font-bold text-black">Address:</h4>
                <p className="text-gray-800">ZENONE ENTERTAINMENT ( OPC) PVT. LTD.
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
              <h3 className="text-2xl font-semibold text-black mb-4">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1C39BB]"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1C39BB]"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#1C39BB]"
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
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

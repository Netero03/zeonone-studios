import React from 'react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'CEO',
    image: 'path/to/john-image.jpg',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    image: 'path/to/jane-image.jpg',
  },
  // Add more team members as needed
];

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Zenone Studios</h2>
          <p className="mt-4 text-lg text-gray-600">
            At Zenone Studios, we are passionate about creating unforgettable entertainment experiences. Our team is dedicated to producing top-notch films, TV shows, and digital content that captivate audiences worldwide.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
          <p className="mt-4 text-gray-600">
            Our mission is to be at the forefront of the entertainment industry, pushing the boundaries of creativity and innovation. We strive to deliver high-quality productions that inspire and entertain.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-800">Our Team</h3>
          <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105 hover:bg-gray-50">
                <img className="h-40 w-40 rounded-full mx-auto" src={member.image} alt={member.name} />
                <h4 className="mt-4 text-xl font-semibold text-center text-gray-900">{member.name}</h4>
                <p className="mt-2 text-center text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/team" className="text-indigo-600 hover:underline text-lg font-medium">Meet the Team</Link>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-bold text-gray-800">Our Values</h3>
          <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
            <li>Innovation in storytelling and production</li>
            <li>Dedication to quality and excellence</li>
            <li>Commitment to diversity and inclusion</li>
            <li>Building lasting relationships with our audience</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

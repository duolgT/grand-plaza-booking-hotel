// src/Pages/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Title */}
      <div className="flex flex-col items-start text-left pl-3.5 mb-10">
        <h1 className="font-playfair text-4xl md:text-[40px]">About Us</h1>
        <p className="text-sm md:text-base text-gray-500/90 mt-3">
          Learn more about our story, values, and commitment to creating
          unforgettable stays for our guests.
        </p>
      </div>

      {/* About Content */}
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Image */}
        <img
          src="https://via.placeholder.com/500x350?text=About+Hotel"
          alt="about"
          className="rounded-xl shadow-lg object-cover w-full lg:w-1/2"
        />

        {/* Text */}
        <div className="flex flex-col gap-6 lg:w-1/2 text-gray-700">
          <p>
            At <span className="font-semibold text-gray-800">Grand Plaza</span>,
            we believe in redefining luxury and comfort. With years of
            experience in hospitality, our mission is to provide our guests with
            personalized services, modern facilities, and a memorable stay.
          </p>
          <p>
            From the moment you walk through our doors, you’ll feel the warmth
            of home combined with the elegance of world-class hospitality. Our
            team is dedicated to making every stay truly special, whether you’re
            here for business, leisure, or celebration.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
              <p className="text-sm">
                To create exceptional experiences that go beyond expectations by
                offering quality service, comfort, and innovation in every stay.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
              <p className="text-sm">
                To be recognized as a leading name in hospitality, where every
                guest feels valued, inspired, and at home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

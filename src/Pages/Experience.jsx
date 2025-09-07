// src/Pages/Experience.jsx
import React from "react";


const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Luxury Spa & Wellness",
      description:
        "Relax and rejuvenate with world-class spa treatments, massages, and wellness therapies designed to refresh your body and soul.",
      image: "https://via.placeholder.com/400x250?text=Spa+Experience",
    },
    {
      id: 2,
      title: "City Tours & Adventures",
      description:
        "Explore the hidden gems of the city with guided tours, cultural experiences, and exciting adventures tailored just for you.",
      image: "https://via.placeholder.com/400x250?text=City+Tour",
    },
    {
      id: 3,
      title: "Fine Dining Experience",
      description:
        "Indulge in a fine dining journey with curated menus, world-class chefs, and exquisite flavors from around the world.",
      image: "https://via.placeholder.com/400x250?text=Dining",
    },
  ];

  return (
    <div className="pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Page Title */}
      <div className="flex flex-col items-start text-left pl-3.5 mb-10">
        <h1 className="font-playfair text-4xl md:text-[40px]">Experiences</h1>
        <p className="text-sm md:text-base text-gray-500/90 mt-3">
          Discover unforgettable moments curated for you. 
          From wellness and adventure to fine dining, our experiences 
          make your stay truly memorable.
        </p>
      </div>

      {/* Experiences List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={exp.image}
              alt={exp.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="font-playfair text-xl mb-2">{exp.title}</h2>
              <p className="text-gray-600 text-sm">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

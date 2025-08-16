import React from 'react'
import { assets } from "../assets/assets.js";

const Hero = () => {
  return (
    <div
      className="flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-no-repeat bg-cover h-[90vh] style={{ backgroundImage: `url(${assets.heroImage})` }}">
      
    
      <h1 className="text-4xl md:text-6xl font-bold max-w-2xl leading-tight">
        Discover Luxury Stays Around the World
      </h1>
      <p className="mt-4 text-lg max-w-xl text-gray-200">
        Book your next adventure with exclusive deals and the best-rated hotels.
      </p>
      <button className="mt-6 px-6 py-3 bg-primary rounded-lg text-lg font-medium hover:bg-primary/90 transition">
        Explore Now
      </button>
    </div>
  )
}
export default Hero

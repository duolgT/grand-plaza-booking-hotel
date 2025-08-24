import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import { useNavigate } from "react-router-dom";

const FeaturedDestination = () => {

  const navigate = useNavigate();
  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        Featured Destinations
      </h2>
      <p className="text-gray-500 mt-2 text-sm mx-auto max-w-2xl text-center mb-8">
         Explore our most popular stays around the world
  </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id || index} room={room} index={index} />
        ))}
      </div>
      <button
  onClick={() => {
    navigate('/rooms');
    window.scrollTo(0,0);
  }}
  className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer text-center block mx-auto"
>
  View All Destinations
</button>

    </section>
  );
};

export default FeaturedDestination;

import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";

const FeaturedDestination = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        Featured Destinations
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id || index} room={room} index={index} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedDestination;

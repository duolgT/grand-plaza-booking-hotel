import React from "react";
import HotelCard from "../components/HotelCard";

// Later this will come from your backend / API
const dummyHotels = [
  {
    _id: "1",
    images: ["https://via.placeholder.com/400x250"],
    pricePerNight: 120,
    hotel: {
      name: "Grand Palace Hotel",
      address: "123 Main St, Nairobi",
    },
  },
  {
    _id: "2",
    images: ["https://via.placeholder.com/400x250"],
    pricePerNight: 95,
    hotel: {
      name: "Seaside Resort",
      address: "Beach Road, Mombasa",
    },
  },
  {
    _id: "3",
    images: ["https://via.placeholder.com/400x250"],
    pricePerNight: 150,
    hotel: {
      name: "Mountain View Lodge",
      address: "Mt. Kenya National Park",
    },
  },
];

const Hotels = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 mt-20">
      <h2 className="text-3xl font-playfair font-bold text-gray-800 mb-6">
        Explore Our Hotels
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {dummyHotels.map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Hotels;

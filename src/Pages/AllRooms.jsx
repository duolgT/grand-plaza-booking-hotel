import React from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from "../components/StarRating";
import { useState } from 'react'

const AllRooms = () => {
  const navigate = useNavigate(); 
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div className="pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      
      {/* Page Title */}
      <div className="flex flex-col items-start text-left pl-3.5 mb-10">
        <h1 className="font-playfair text-4xl md:text-[40px]">Hotels Rooms</h1>
        <p className="text-sm md:text-base text-gray-500/90 mt-3">
          Take advantage of our limited-time offers <br /> 
          and special packages to enhance your stay and create unforgettable memories
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* LEFT SIDE: Rooms */}
        <div className="flex-1">
          {roomsDummyData.map((room) => (
            <div 
              key={room._id} 
              className="flex flex-col md:flex-row items-start py-10 gap-8 border-b border-gray-300 last:pb-30 last:border-0 pl-3.5"
            >
              {/* Image */}
              <img
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
                src={room.images[0]}
                alt="hotel-img"
                title="View Room Details"
                className="w-40 h-40 rounded-xl shadow-lg object-cover cursor-pointer"
              />

              {/* Hotel Details */}
              <div className="flex flex-col justify-center gap-3 md:gap-4 pl-6">
                <p className="text-gray-500">{room.hotel.city}</p>
                <p
                  onClick={() => {
                    navigate(`/rooms/${room._id}`);
                    scrollTo(0, 0);
                  }}
                  className="text-gray-800 text-2xl md:text-3xl font-playfair cursor-pointer"
                >
                  {room.hotel.name}
                </p>
                <div className="flex items-center gap-2 text-gray-600">
                  <StarRating />
                  <p>150+ reviews</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <img src={assets.locationIcon} alt="location-icon" className="w-5 h-5" />
                  <span>{room.hotel.address}</span>
                </div>

                {/* Amenities */}
                <div className="flex flex-col gap-2">
                  {room.amenities.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <img src={facilityIcons[item]} alt={item} className="w-5 h-5" />
                      <p className="text-xs">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="text-xl font-medium text-gray-800 mt-3">
                  <p>${room.pricePerNight} /night</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE: Filter Box */}
        <div className="border-b border-gray-300">
  {/* Filter Header */}
  <div className="flex items-center justify-between px-5 py-2.5">
    <p className="font-semibold text-gray-700">FILTER</p>
    <div className="flex items-center gap-3">
      <span
        onClick={() => setOpenFilter(!openFilter)}
        className="lg:hidden text-sm text-gray-500 cursor-pointer"
      >
        {openFilter ? "HIDE" : "SHOW"}
      </span>
      <span className="hidden lg:block text-sm text-red-500 cursor-pointer">
        CLEAR
      </span>
    </div>
  </div>

  {/* Filter Box (hidden/shown) */}
  {openFilter && (
    <div className="px-5 py-3 bg-gray-50">
      {/* Example filter inputs */}
      <label className="block text-sm text-gray-600 mb-2">
        Price Range
      </label>
      <input type="range" min="50" max="500" className="w-full" />
    </div>
  )}
</div>

          </div>
          {/* filter content will go here */}
        </div>
  )
}

export default AllRooms

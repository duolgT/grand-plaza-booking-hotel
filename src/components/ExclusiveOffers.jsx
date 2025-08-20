import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';

const ExclusiveOffers = () => {
  const navigate = useNavigate();
 
  const offers = [
    {
      id: 1,
      title: "Summer Getaway - 20% Off",
      description: "Book your summer holiday now and enjoy a 20% discount on all rooms.",
      image: "https://images.unsplash.com/photo-1631048730670-ff5cd0d08f15?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 120,
    },
    {
      id: 2,
      title: "Romantic Escape",
      description: "Couple’s package with free spa & dinner included.",
      image: "https://images.unsplash.com/photo-1631049035115-f96132761a38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 200,
    },
    {
      id: 3,
      title: "Family Vacation Deal",
      description: "Stay 4 nights, pay for 3 – perfect for families.",
      image: "https://images.unsplash.com/photo-1631048835153-946fa051ceee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 150,
    },
  ]

  return (
    <section className="my-20 px-6 md:px-16">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10 font-playfair">
        Exclusive Offers
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <div 
            key={offer.id} 
            className="rounded-2xl shadow-md bg-white overflow-hidden hover:shadow-lg transition-all"
          >
            <img src={offer.image} alt={offer.title} className="w-full h-52 object-cover" />
            
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">{offer.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{offer.description}</p>
              
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-gray-800">${offer.price}/night</span>
                <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer">
                  Book Now
                </button>
              </div>
            </div>
            
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            navigate('/offers')
            window.scrollTo(0, 0)
          }}
          className="mt-12 px-6 py-3 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer"
        >
          View All Offers
         <img 
  src={assets.arrowIcon} 
  alt="arrow-icon" 
  className="mx-auto transition-transform duration-300 hover:scale-125 hover:rotate-90 hover:opacity-80 cursor-pointer"
/>
        </button>
      </div>
    </section>
  )
}

export default ExclusiveOffers

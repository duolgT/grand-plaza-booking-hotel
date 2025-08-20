import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Johnson",
    role: "Travel Blogger",
    text: "This platform made booking so simple! The rooms were exactly as shown and the experience was unforgettable.",
    image: "https://images.unsplash.com/photo-1708762551969-78844e9282af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fHRlc3RpbW9uaWFsJTIwcGhvdG9zfGVufDB8fDB8fHww",
    rating: 5,
  },
  {
    id: 2,
    name: "James Carter",
    role: "Business Traveler",
    text: "I loved the seamless process. The dashboard made it easy to manage my stays without stress.",
    image: "https://media.istockphoto.com/id/1409948380/photo/business-portrait.jpg?s=612x612&w=0&k=20&c=m2ivjMl1v_eK5n-yv-NM3OqpKMy8XZ_gFOv0pih2TPk=",
    rating: 4,
  },
  {
    id: 3,
    name: "Linda Walker",
    role: "Vacationer",
    text: "Exclusive offers helped me save money while still enjoying luxury rooms. Highly recommended!",
    image: "https://www.shutterstock.com/image-photo/portrait-young-investor-banker-workplace-260nw-2364566447.jpg",
    rating: 5,
  },
];

// ⭐ Function to render rating stars
const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center mb-3">
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < rating ? "gold" : "lightgray"}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.063 5.093a.563.563 0 00.475.345l5.43.393c.497.036.697.655.318.98l-4.153 3.602a.563.563 0 00-.182.557l1.248 5.287a.562.562 0 01-.837.61l-4.723-2.885a.563.563 0 00-.586 0l-4.723 2.885a.562.562 0 01-.837-.61l1.248-5.287a.563.563 0 00-.182-.557l-4.153-3.602a.563.563 0 01.318-.98l5.43-.393a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ))}
    </div>
  );
};

const TestimonialsCarousel = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Guests Say</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          loop={true}
          className="pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="bg-white shadow-lg rounded-2xl p-8 max-w-xl mx-auto">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-gray-200"
                />
                <p className="text-gray-600 italic mb-4">"{t.text}"</p>
                <StarRating rating={t.rating} />
                <h3 className="font-semibold text-lg">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

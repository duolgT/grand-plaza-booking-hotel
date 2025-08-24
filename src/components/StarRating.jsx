import React from "react";

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
      ★
    </span>
  ));

  return <div className="flex items-center space-x-1">{stars}</div>;
};

export default StarRating;

import React from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating, maxStars = 5 }) => {
  const roundedRating = Math.round(rating);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {Array.from({ length: maxStars }, (_, index) => (
        <FaStar
          key={index}
          size={20}
          color={
            index < roundedRating
              ? "var(--main-color)" 
              : "rgba(227, 227, 227, 1)" 
          }
        />
      ))}
    </div>
  );
};

export default StarRating;

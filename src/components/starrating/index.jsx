import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function StarRating({ noOfStars = 10 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (i) => setRating(i);
  const handleMouseEnter = (i) => setHover(i);
  const handleMouseLeave = () => setHover(0);

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, idx) => {
        const i = idx + 1;
        const filled = i <= (hover || rating);
        return (
          <FaStar
            key={i}
            className={`star ${filled ? "filled" : "empty"}`}
            size={40}
            onClick={() => handleClick(i)}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
}
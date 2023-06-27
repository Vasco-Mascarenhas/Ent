import React from "react";
import "./card.css";
import tvImg from "./imgs/icon-category-tv.svg";
import { useState } from "react";
import movieImg from "./imgs/icon-category-movie.svg";

const Card = ({ title, image, rating, year, category, alBookmarked }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmarkClick = () => {
    setBookmarked(!bookmarked);
  };
  return (
    <div
      className={`recommended-card ${
        alBookmarked || bookmarked ? "bookmarked" : ""
      }`}
    >
      <div className="recommended-image">
        <img src={image} alt="image" />
      </div>
      <div className="recommended-description">
        <span>{year}</span>•
        <span>
          <img src={category === "TV Series" ? tvImg : movieImg} alt="" />
          {category}
        </span>
        •<span>{rating}</span>
      </div>
      <div className="recommended-title">
        <h3>{title}</h3>
      </div>
      <div className="recommended-bookmark" onClick={handleBookmarkClick}>
        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
            stroke="#FFF"
            strokeWidth="1.5"
            fill="none"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Card;

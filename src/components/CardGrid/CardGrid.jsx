import React from "react";
import "./cardgrid.css";
import data from "../../../data.json";
import Card from "../Card/Card";

const CardGrid = ({ title, searchValue, contentType }) => {
  const filteredData = data.filter((item) => {
    if (contentType === "Movie") {
      return (
        item.title.toLowerCase().includes(searchValue.toLowerCase() || "") &&
        item.category === "Movie"
      );
    } else if (contentType === "TV Series") {
      return (
        item.title.toLowerCase().includes(searchValue.toLowerCase() || "") &&
        item.category === "TV Series"
      );
    } else if (contentType === "isBookmarked") {
      return item.isBookmarked;
    } else {
      return item.title.toLowerCase().includes(searchValue.toLowerCase() || "");
    }
  });

  return (
    <div className="card-content">
      <div className="recommended">
        <h1>{title}</h1>
        <div className="recommended-content">
          {filteredData?.map((item) => {
            return (
              <Card
                key={item.title}
                title={item.title}
                image={item.thumbnail.regular.medium}
                category={item.category}
                rating={item.rating}
                year={item.year}
                alBookmarked={item.isBookmarked}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;

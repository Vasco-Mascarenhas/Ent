import React from "react";
import "./cardgrid.css";
import data from "../../../data.json";
import Card from "../Card/Card";

const CardGrid = ({ title, searchValue }) => {
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase() || "")
  );

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

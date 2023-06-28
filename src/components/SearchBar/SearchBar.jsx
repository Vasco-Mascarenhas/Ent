import React from "react";
import "./searchbar.css";
import search from "./imgs/icon-search.svg";
const SearchBar = ({ value, onChange, placeholder }) => {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <div className="search-input">
      <img src={search} alt="" />
      <input
        type="text"
        name="search-input"
        id="search-input"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;

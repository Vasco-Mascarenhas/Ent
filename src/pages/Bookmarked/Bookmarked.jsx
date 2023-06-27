import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import CardGrid from "../../components/CardGrid/CardGrid";
import Slider from "../../components/Slider/Slider";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";
const Bookmarked = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="wrapper">
      <NavBar />
      <div className="content">
        <SearchBar value={searchValue} onChange={handleSearchChange} />

        <CardGrid
          title={"Bookmarked Movies"}
          searchValue={searchValue}
          contentType={"isBookmarked"}
        />
      </div>
    </div>
  );
};

export default Bookmarked;

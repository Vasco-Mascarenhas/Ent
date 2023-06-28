import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import CardGrid from "../../components/CardGrid/CardGrid";
import { useState } from "react";
const Series = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };
  return (
    <div className="wrapper">
      <NavBar />
      <div className="content">
        <SearchBar
          value={searchValue}
          onChange={handleSearchChange}
          placeholder={"Search for TV Series"}
        />

        <CardGrid
          contentType="TV Series"
          title={"TV Series"}
          searchValue={searchValue}
        />
      </div>
    </div>
  );
};

export default Series;

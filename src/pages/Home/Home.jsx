import React from "react";
import NavBar from "../../components/Navbar/NavBar";
import CardGrid from "../../components/CardGrid/CardGrid";
import "./home.css";
import Slider from "../../components/Slider/Slider";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";
const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="wrapper">
      <NavBar />
      <div className="content">
        <SearchBar value={searchValue} onChange={handleSearchChange} />
        {!searchValue ? (
          <div>
            <h1>Trending</h1>
            <Slider />
          </div>
        ) : null}

        <CardGrid title={"Recommended Movies"} searchValue={searchValue} />
      </div>
    </div>
  );
};

export default Home;

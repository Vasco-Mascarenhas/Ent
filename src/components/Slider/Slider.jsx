import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import data from "../../../data.json";
import tvImg from "./imgs/icon-category-tv.svg";
import movieImg from "./imgs/icon-category-movie.svg";

function Slider() {
  const isTrending = data.filter((item) => item.isTrending === true);

  return (
    <>
      <Swiper slidesPerView={2.5} spaceBetween={30} className="mySwiper">
        {isTrending.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="trending-image">
              <img src={item.thumbnail.trending.large} alt={item.title} />
            </div>
            <div className="trending-content">
              <div className="trending-description">
                <span>{item.year}</span>•
                <span>
                  <img
                    src={item.category === "TV Series" ? tvImg : movieImg}
                    alt=""
                  />
                  {item.category}
                </span>
                •<span>{item.rating}</span>
              </div>
              <div className="trending-title">
                <h4>{item.title}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider;

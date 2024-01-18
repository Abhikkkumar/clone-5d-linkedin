import React from "react";
import Card from "./Card";
import CardData from "./CardData";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";

import "../style/carousel.css";

export default function Caraousel2() {
  return (
    <div className="carousel2">
      <Swiper
        spaceBetween={20}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 320px
          600: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
      >
        {CardData.map((obj, i) => {
          return (
            <SwiperSlide>
              <Card obj={obj} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

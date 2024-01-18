import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/swiper-bundle.css";

import "../style/carousel.css";
import img1 from "../img/5feb5c987b9f08a56b9463e1_Screenshot_20200908-235446_Instagram-1.png";
import img2 from "../img/5feb5c987b9f0835999463e3_IMG_20201010_120341_055-1.png";
import img3 from "../img/5feb5c987b9f0889409463e7_Screenshot_20201009-140529_Instagram-1.png";
import img4 from "../img/5feb5c987b9f0860859463e5_Screenshot_20201001-053628_Instagram-1.png";

export default function Caraousel() {
  return (
    <div className="carousel">
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
        navigation={true}
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
        <SwiperSlide>
          <div className="image">
            <img src={img1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <img src={img2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <img src={img3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
            <img src={img4} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

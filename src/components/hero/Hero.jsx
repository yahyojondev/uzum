import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import heroimg1 from "../../assets/images/hero1.jpg";
import heroimg2 from "../../assets/images/hero2.jpg";
import heroimg3 from "../../assets/images/hero3.jpg";
import heroimg4 from "../../assets/images/hero4.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="swiper">
              <img src={heroimg1} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <img src={heroimg2} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <img src={heroimg3} alt="" />
            </SwiperSlide>
            <SwiperSlide className="swiper">
              <img src={heroimg4} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;

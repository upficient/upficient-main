"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import Image from "next/image";
import { getImagePath } from "@/services/common.service";

import "swiper/css";

interface Logo {
  logo: string;
  alt: string;
}

interface LogoInnerSliderProps {
  logos: Logo[];
}

const LogoInnerSlider: React.FC<LogoInnerSliderProps> = ({ logos }) => {
  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      loop
      freeMode
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      speed={3500}
      slidesPerView={5}
      spaceBetween={40}
      breakpoints={{
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
      className="logo-swiper"
    >
      {logos.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="logo-slide">
            <Image
              src={getImagePath(item.logo)}
              alt={item.alt}
              width={600}
              height={600}
              className="logo-img"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LogoInnerSlider;

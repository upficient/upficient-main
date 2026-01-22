"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";

interface ImageSliderProps {
  images: any[];
  itemsPerRow: number;
}

const ImageSlide: React.FC<ImageSliderProps> = ({ images, itemsPerRow }) => {
  return (
    <div className="image-slider">
      <Swiper
        slidesPerView={itemsPerRow}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className={images.length === 1 ? "centerImage" : ""}
          >
            <Image
              src={getImagePath("bgsec1img.webp", image?.image)}
              alt={image?.alt || ""}
              width={1000}
              height={1000}
              className="img-contain"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlide;

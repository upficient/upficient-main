"use client";
import { getImagePath } from "@/services/common.service";
import Image from "next/image";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CaseStudySliderMain.scss";

interface Props {
  images: { image: string; alt?: string; caption?: string }[];
  heading?: string;
}

const CaseStudySliderMain: React.FC<Props> = ({ images, heading }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="cs-slider">
      {heading && <h2 className="cs-slider__heading">{heading}</h2>}
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        navigation
        pagination={{ clickable: true }}
        loop={images.length > 1}
        modules={[Navigation, Pagination]}
        className="cs-slider__swiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="cs-slider__slide">
              <Image
                src={getImagePath("bgsec1img.webp", item.image)}
                alt={item.alt || `Slide ${index + 1}`}
                width={0}
                height={0}
                sizes="100vw"
                className="cs-slider__img"
                loading="lazy"
                unoptimized
              />
              {item.caption && (
                <div className="cs-slider__caption">{item.caption}</div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CaseStudySliderMain;

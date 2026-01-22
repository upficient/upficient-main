"use client";
import { getImagePath } from "@/services/common.service";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Testimonial {
  text: string;
  author: string;
  location: string;
  image: string;
}

interface SwiperSliderProps {
  testimonials: Testimonial[];
}

const SwiperSlider: React.FC<SwiperSliderProps> = ({ testimonials }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      loop
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          const testimonial = testimonials[index];
          return `
            <button class="${className}">
              <img
                class="img-contain"
                src=${getImagePath(testimonial.image)}
                alt="Profile Image ${index + 1}"
              />
            </button>
          `;
        },
      }}
      autoplay={{ delay: 5000 }}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <div>
            <h3>{testimonial.text}</h3>
            <p>{testimonial.author}</p>
            <small>{testimonial.location}</small>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperSlider;

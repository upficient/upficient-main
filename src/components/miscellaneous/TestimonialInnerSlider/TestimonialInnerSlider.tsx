"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { getImagePath } from "@/services/common.service";

import "swiper/css";
import "swiper/css/effect-fade";

interface Testimonial {
  text: string;
  name: string;
  company: string;
  location: string;
  image: string;
}

interface Props {
  testimonials: Testimonial[];
}

const TestimonialInnerSlider: React.FC<Props> = ({ testimonials }) => {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* MAIN TEXT SLIDER */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={800}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="testimonial-main"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <p className="testimonial-text">“{t.text}”</p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* THUMBNAILS (NO SWIPER HERE) */}
      <div className="testimonial-thumbs">
        {testimonials.map((t, index) => (
          <button
            key={index}
            className={`testimonial-thumb ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => swiperRef.current?.slideTo(index)}
          >
            <Image
              src={getImagePath(t.image)}
              alt={t.name}
              width={80}
              height={80}
            />
          </button>
        ))}
      </div>

      {/* META */}
      <div className="testimonial-meta">
        <strong className="meta-name">
          {testimonials[activeIndex].name}, {testimonials[activeIndex].company}
        </strong>
        <span className="meta-company">
          ({testimonials[activeIndex].location})
        </span>
      </div>
    </>
  );
};

export default TestimonialInnerSlider;

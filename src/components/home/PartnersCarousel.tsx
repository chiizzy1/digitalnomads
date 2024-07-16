"use client";

import { FC } from "react";
import * as React from "react";
import { partnersLogo } from "@/constants";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { A11y } from "swiper/modules";

interface PartnersCarouselProps {}

const PartnersCarousel: FC<PartnersCarouselProps> = ({}) => {
  return (
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      breakpoints={{
        500: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 30,
        },
      }}
      modules={[A11y]}
      className="mySwiper w-full"
    >
      {partnersLogo.map(({ id, logo }) => (
        <SwiperSlide key={id}>
          <Image src={logo} width={200} height={100} alt="our partner logo" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PartnersCarousel;

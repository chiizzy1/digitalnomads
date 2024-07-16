"use client";

import { FC } from "react";
import * as React from "react";
import Image from "next/image";
import SmallHeading from "../ui/SmallHeading";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation, A11y } from "swiper/modules";
import Paragraph from "../ui/Paragraph";
import { Products } from "@/types";
import Link from "next/link";
import MainButton from "../ui/MainButton";
import { SwiperNavButtons } from "../ui/SwiperNavButton";

interface ProductsCarouselProps {
  data: Products[];
}

const ProductsCarousel: FC<ProductsCarouselProps> = ({ data }) => {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      modules={[Navigation, Autoplay, A11y]}
      className="mySwiper w-full"
    >
      {data.map(({ id, icon, title, description, image, list }) => (
        <SwiperSlide key={id}>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col items-center md:items-start gap-6 w-full">
              <Image src={icon} width={90} height={90} alt="case study icon" />
              <SmallHeading>{title}</SmallHeading>
              <Paragraph className="text-center max-w-[60ch] md:text-start leading-loose">
                {description}
              </Paragraph>
              <ul className="flex justify-center md:justify-start gap-6 bg-gray-400/10 rounded-lg w-full p-4">
                {list.map(({ key, value }) => (
                  <li key={id} className="flex flex-col">
                    <span className="text-primary font-light block text-[14px] uppercase tracking-wide">
                      {key}
                    </span>
                    <span className="font-semibold text-lg">{value}</span>
                  </li>
                ))}
              </ul>

              <Link href={`/products/${id}`}>
                <MainButton text="View More" />
              </Link>
            </div>
            <div className="w-full flex items-center justify-center relative z-[1]">
              <div className="case_gradient hidden sm:block opacity-60 w-[450px] absolute right-0 top-0 h-[450px] rounded-full -z-[1]" />
              <Image
                src={image}
                width={1000}
                height={1000}
                alt="case study image"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="wfull flex justify-end">
        <SwiperNavButtons />
      </div>
    </Swiper>
  );
};

export default ProductsCarousel;

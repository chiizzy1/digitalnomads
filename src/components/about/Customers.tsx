"use client";

import { FC } from "react";
import TitleIntro from "../ui/TitleIntro";
import SmallHeading from "../ui/SmallHeading";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { customers } from "@/constants";
import Paragraph from "../ui/Paragraph";
import { customers_bg } from "@/assets";
import { A11y } from "swiper/modules";

interface CustomersProps {}

const Customers: FC<CustomersProps> = ({}) => {
  return (
    <section
      className="sm:py-24 py-16 sm:mt-24 mt-16 w-full bg-center bg-cover bg-no-repeat "
      style={{ backgroundImage: `url(${customers_bg.src})` }}
    >
      <div className="container max-w-6xl mx-auto flex flex-col justify-center items-center w-full">
        <div className="flex flex-col gap-6 w-full ">
          <div className="flex flex-col items-center gap-4 mb-12">
            <TitleIntro>CLIENT&apos;S FEEDBACK</TitleIntro>
            <SmallHeading size="lg" className="text-center">
              What Our Client&apos;s Say
            </SmallHeading>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              580: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              800: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[A11y]}
            className="mySwiper w-full"
          >
            {customers.map(({ id, image, comment, name, occupation, star }) => (
              <SwiperSlide key={id}>
                <div className="flex flex-col gap-4 p-6 rounded-xl bg-white">
                  {star}
                  <Paragraph className="leading-loose">{comment}</Paragraph>
                  <div className="flex gap-4 items-center">
                    <Image
                      src={image}
                      width={60}
                      height={60}
                      alt="our partner logo"
                    />
                    <div className="flex flex-col gap-1">
                      <span className="leading-8 text-primary tracking-tight font-medium block text-lg">{name}</span>
                      <span>{occupation}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Customers;

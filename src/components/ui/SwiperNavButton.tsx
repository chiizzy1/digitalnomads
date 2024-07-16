import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns flex gap-2">
      <button
        onClick={() => swiper.slidePrev()}
        className="p-[2px] bg-gray-400/10 rounded-md cursor-pointer"
      >
        <ChevronLeft size={36} strokeWidth={1} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="p-[2px] bg-gray-400/10 rounded-md cursor-pointer"
      >
        <ChevronRight size={36} strokeWidth={1} />
      </button>
    </div>
  );
};

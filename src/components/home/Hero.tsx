import { FC } from "react";
import { Button } from "../ui/Button";
import Image from "next/image";
import {
  mainHeroImg,
  shape2,
  time_icon,
  message_icon,
  wallet,
  hero_bg,
} from "@/assets";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface heroProps {}

const hero: FC<heroProps> = ({}) => {
  return (
    <section
      className="w-full bg-center bg-cover bg-no-repeat  pt-[200px] md:pt-[100px] relative z-[1]"
      style={{ backgroundImage: `url(${hero_bg.src})` }}
    >
      <div className="container max-w-6xl mx-auto flex items-center justify-center w-full h-full">
        <div className="flex flex-col md:grid grid-cols-12 gap-6 w-full ">
          <div
            className="col-span-5 flex flex-col justify-center items-center md:items-start gap-4 sm:gap-8 w-full relative "
            data-aos="fade-left"
            data-aos-delay="150"
            data-aos-once="true"
          >
            <span className="text-primary font-light block tracking-[1.5px] text-[14px]">
              AWARD WINNING COMPANY
            </span>
            <h1 className="text-4xl sm:text-5xl capitalize leading-loose text-center md:text-left font-medium">
              Innovation without borders
            </h1>
            <Link href={`/contact`}>
              <Button variant="cta" className="py-6 px-8 transform ">
                <span>Get Started Now</span>
                <ChevronRight />
              </Button>
            </Link>
          </div>
          <div className=" col-span-7 relative flex items-center justify-center">
            <div className="main-banner-image">
              <Image
                src={time_icon}
                alt="clock image"
                width={120}
                height={120}
                className="absolute left-[10%] top-[17%] image-bounce hidden sm:block"
              />
              <div
                className="overflow-hidden hidden sm:block"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-once="true"
              >
                <Image
                  src={mainHeroImg}
                  alt="Main hero image"
                  className="main-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating shapes */}
      <Image
        src={wallet}
        alt="wallet image"
        width={100}
        height={100}
        className="absolute left-[15px] top-[42%] hidden mm:block image-move -z-[1] opacity-50"
      />
      <Image
        src={shape2}
        alt="clock image"
        width={100}
        height={100}
        className="absolute left-[32%] top-[24%] right-16 hidden mm:block image-bounce -z-[1] opacity-50"
      />
      <Image
        src={wallet}
        alt="wallet image"
        width={100}
        height={100}
        className="absolute left-[40%] bottom-[15%] hidden mm:block image-move -z-[1] opacity-50"
      />
      <Image
        src={message_icon}
        alt="Message image"
        width={100}
        height={100}
        className="absolute right-[3%] bottom-[16%] hidden mm:block image-bounce -z-[1]"
      />
    </section>
  );
};

export default hero;

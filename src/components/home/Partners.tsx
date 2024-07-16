import { FC } from "react";
import SmallHeading from "../ui/SmallHeading";
import Paragraph from "../ui/Paragraph";
import PartnersCarousel from "./PartnersCarousel";
import TitleIntro from "../ui/TitleIntro";

interface PartnersProps {}

const Partners: FC<PartnersProps> = ({}) => {
  return (
    <section className="sm:pt-24 pt-16 w-full">
      <div className="container max-w-6xl mx-auto flex flex-col justify-center items-center w-full">
        <div className="flex flex-col gap-6 w-full ">
          <div className="flex flex-col mm:grid grid-cols-12 gap-6 w-full pb-6">
            <div
              className="col-span-5 flex flex-col items-center mm:items-start"
              data-aos="zoom-in-up"
              data-aos-delay="150"
              data-aos-once="true"
            >
              <TitleIntro className={`w-fit mb-4`}>OUR PARTNERS</TitleIntro>
              <SmallHeading size="lg" className="">
                A Trusted Partner For Ambitious Brands
              </SmallHeading>{" "}
            </div>
            <div
              className="col-span-7 flex items-center justify-center"
              data-aos="zoom-in-up"
              data-aos-delay="150"
              data-aos-once="true"
            >
              <Paragraph className="text-center leading-[1.9] md:text-left max-w-[70ch]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters. It is a long established fact
                that a reader will be distracted by the.
              </Paragraph>
            </div>
          </div>
          <div className="relative w-full h-full z-[1] transition-transform ease-in-out">
            <PartnersCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

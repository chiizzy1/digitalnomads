import { FC } from "react";
import { Button } from "../ui/Button";
import { ChevronRight } from "lucide-react";
import { getStarted_bg, man } from "@/assets";
import Image from "next/image";
import { styles } from "@/style";
import Paragraph from "../ui/Paragraph";
import TitleIntro from "../ui/TitleIntro";

interface GetStartedProps {}

const GetStarted: FC<GetStartedProps> = ({}) => {
  return (
    <section
      className="w-full relative  pt-[100px] md:pt-[0px] bg-center bg-cover bg-no-repeat "
      style={{ backgroundImage: `url(${getStarted_bg.src})` }}
    >
      <div className="container max-w-6xl mx-auto flex items-center justify-center w-full h-full">
        <div className="flex flex-col-reverse md:grid grid-cols-12 gap-6 w-full ">
          <div className="col-span-6 relative flex items-center justify-center">
            <div className="main-banner-image">
              <div data-aos="fade-up" data-aos-delay="150" data-aos-once="true">
                <Image src={man} alt="get started image" className="main-img" />
              </div>
            </div>
          </div>

          <div
            className="col-span-6 flex flex-col justify-center items-center md:items-start gap-4 sm:gap-6 w-full relative"
            data-aos="zoom-in-right"
            data-aos-delay="150"
            data-aos-once="true"
          >
            <TitleIntro className={`w-fit`}>READY TO GET STARTED?</TitleIntro>
            <h2 className="text-4xl sm:text-5xl  text-center md:text-left font-medium">
              Let&apos;s Talk Something Amazing Together
            </h2>
            <Paragraph className="text-center leading-loose md:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Paragraph>
            <div>
              <Button variant="cta" className="py-6 px-8 transform">
                <span>Get Started Now</span>
                <ChevronRight />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

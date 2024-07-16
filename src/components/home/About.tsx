import Image from "next/image";
import { FC } from "react";
import SmallHeading from "../ui/SmallHeading";
import Paragraph from "../ui/Paragraph";
import Link from "next/link";
import { about } from "@/constants";
import { aboutImg, about_bg, shape5, shape6 } from "@/assets";
import TitleIntro from "../ui/TitleIntro";
import MainButton from "../ui/MainButton";

interface AboutProps {
  page: string;
}

const About: FC<AboutProps> = async ({ page }) => {
  return (
    <section
      className="sm:py-24 py-16 w-full bg-center bg-cover bg-no-repeat  relative z-[1]"
      style={{ backgroundImage: `url(${about_bg.src})` }}
    >
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col mm:flex-row gap-6 ease-in-out transition-transform">
          <div
            className="w-full flex items-center justify-center relative"
            data-aos="zoom-in-up"
            data-aos-delay={300}
            data-aos-once="true"
          >
            <div className="rounded-full overflow-hidden about-image max-w-[600px] md:w-full">
              <Image
                width={1000}
                height={1000}
                loading="lazy"
                src={aboutImg}
                alt="about image"
              />
            </div>

            <Image
              src={shape5}
              alt="beautiful icon"
              width={90}
              height={90}
              className="absolute right-[15%] top-[3%] hidden mm:block image-move z-[1] opacity-80"
            />
          </div>
          <div className="w-full" data-aos="zoom-in-up" data-aos-delay={600}>
            <div className="flex flex-col items-center md:items-start gap-6">
              <TitleIntro className={`w-fit`}>ABOUT US</TitleIntro>
              <SmallHeading size="lg">
                We Are Award Winning Digital Marketing Company
              </SmallHeading>
              <Paragraph className="leading-[1.9]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Paragraph>

              <div className="grid grid-cols-4 gap-6">
                {about.map(({ id, title, icon }) => (
                  <div
                    key={id}
                    className="group flex flex-col md:flex-row items-center gap-4 col-span-2 ss:col-span-1 mm:col-span-2"
                  >
                    <div className="bg-white rounded-full mm:rounded-sm p-6 transform ease-in-out group-hover:rounded-full">
                      <Image
                        src={icon}
                        alt="about icon"
                        width={50}
                        height={50}
                      />
                    </div>
                    <SmallHeading size="sm" className="text-center mm:text-left">{title}</SmallHeading>
                  </div>
                ))}
              </div>

              {page === "about" ? (
                ""
              ) : (
                <Link href="/about">
                  <MainButton text="More About Us" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating shapes */}

      <Image
        src={shape6}
        alt="tire image"
        width={100}
        height={100}
        className="absolute left-[9%] bottom-[16%] hidden mm:block image-bounce -z-[1] opacity-80"
      />
    </section>
  );
};

export default About;
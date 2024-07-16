import { FC } from "react";
import { hero2, shape2, wallet } from "@/assets";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface HeroProps {
  title: string;
}

const Hero: FC<HeroProps> = ({ title }) => {
  const heroStyles = {
    backgroundImage: `url(${hero2.src})`,
  };

  return (
    <section
      className="w-full bg-center bg-cover bg-no-repeat pt-[200px] relative z-[1]"
      style={heroStyles}
    >
      <div className="container max-w-6xl mx-auto">
        <div className="flex items-center justify-center pb-16">
          <div className="flex flex-col gap-4 w-full items-center ">
            <h1 className="font-medium leading-[1.3] text-4xl text-center">
              {title}
            </h1>
            <div className="flex items-center gap-1">
              <Link href="/">
                <span className="text-primary text-base">Home</span>
              </Link>
              <ChevronRight size={16} strokeWidth={1.5} />
              <span className="text-base text-black/80 capitalize">{title}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating shapes */}
      <Image
        src={wallet}
        alt="wallet image"
        width={80}
        height={80}
        className="absolute left-[15px] top-[42%] hidden mm:block image-move -z-[1] opacity-40"
      />
      <Image
        src={shape2}
        alt="clock image"
        width={100}
        height={100}
        className="absolute right-[30px] bottom-[20%] hidden mm:block image-bounce -z-[1] opacity-40"
      />
    </section>
  );
};

export default Hero;

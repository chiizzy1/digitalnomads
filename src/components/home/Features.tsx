import { FC } from "react";
import SmallHeading from "../ui/SmallHeading";
import { Button } from "../ui/Button";
import { features } from "@/constants";
import Image from "next/image";
import { styles } from "@/style";
import Paragraph from "../ui/Paragraph";
import TitleIntro from "../ui/TitleIntro";

interface FeaturesProps {}

const Features: FC<FeaturesProps> = ({}) => {
  return (
    <section className="sm:py-24 py-16 w-full">
      <div className="container max-w-6xl mx-auto flex flex-col justify-center items-center w-full">
        <div className="flex flex-col items-center gap-4 mb-12">
          <TitleIntro>OUR FEATURES</TitleIntro>
          <SmallHeading size="lg" className="text-center">
            Be Everywhere Your Customers Are
          </SmallHeading>

          <Paragraph className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </div>
        <div className="grid grid-cols-12 justify-center gap-6 transition-all ease-in-out">
          {features.map(({ id, title, description, image, delay }) => (
            <div
              key={id}
              data-aos="zoom-in-up"
              data-aos-delay={delay}
              data-aos-once="true"
              className="col-span-12 ss:col-span-6 md:col-span-4 flex flex-col items-center single-features-box features_card_gradient gap-6 rounded-xl"
            >
              <Image src={image} alt="feature icon" width={75} height={75} />
              <h4 className="text-xl sm:text-2xl font-medium">{title}</h4>
              <Paragraph className="text-center">{description} </Paragraph>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

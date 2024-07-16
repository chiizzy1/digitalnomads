import { FC } from "react";
import SmallHeading from "../ui/SmallHeading";
import Paragraph from "../ui/Paragraph";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import TitleIntro from "../ui/TitleIntro";
import { getAllServices } from "@/lib/services";
import { Service } from "@/types";
import Link from "next/link";
import MainButton from "../ui/MainButton";

interface ServicesProps {
  page: string;
}

const Services: FC<ServicesProps> = async ({ page }) => {
  const { data } = await getAllServices();

  const allServices = data?.data as Service[];

  return (
    <section className="sm:py-24 py-16 w-full">
      <div className="container max-w-6xl mx-auto flex flex-col justify-center items-center w-full">
        <div className="flex flex-col items-center gap-4 mb-12">
          <TitleIntro>OUR SERVICES</TitleIntro>
          <SmallHeading size="lg" className="text-center">
            We Offer Professional Services For Business
          </SmallHeading>

          <Paragraph className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </div>

        <div className="grid grid-cols-12 gap-6 transition-[0.5s] ease-in-out">
          {allServices.map(
            ({ id, title, description, icon, list, cardBgImg }) => (
              <div
                key={id}
                data-aos="zoom-in-up"
                data-aos-once="true"
                className={`col-span-12 sm:col-span-6 md:col-span-4 flex flex-col items-center sm:items-start gap-6 p-6 ${
                  page === "services" ? "border" : ""
                } rounded-lg group hover:text-white single-services-box`}
                style={{ backgroundImage: `url(${cardBgImg})` }}
              >
                <div className="flex items-center gap-4">
                  <Image src={icon} alt="service icon" width={70} height={70} />
                  <SmallHeading size="sm">{title}</SmallHeading>
                </div>

                <Paragraph className=" group-hover:text-white">
                  {description}
                </Paragraph>
                <ul className="grid grid-cols-12 gap-4">
                  {list.map((item) => (
                    <li
                      key={item}
                      className="col-span-6 flex items-center gap-1 font-medium text-[15px] text-black/80 group-hover:text-white"
                    >
                      <CheckCircle2 size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Link href={`/services/${id}`}>
                  <MainButton text="Learn More" />
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
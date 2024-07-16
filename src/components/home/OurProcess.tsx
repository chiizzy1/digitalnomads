import { process_bg } from "@/assets";
import { process } from "@/constants";
import { styles } from "@/style";
import Image from "next/image";
import { FC } from "react";
import Paragraph from "../ui/Paragraph";
import SmallHeading from "../ui/SmallHeading";

interface OurProcessProps {
  page: string;
}

const OurProcess: FC<OurProcessProps> = ({ page }) => {
  return (
    <section className={page === "services" ? "" : "process-area"}>
      <div className="w-full container max-w-6xl mx-auto">
        <div
          className="bg-center bg-cover bg-no-repeat  rounded-xl overflow-hidden"
          style={{
            backgroundImage: `url(${
              page === "services" ? "" : process_bg.src
            })`,
          }}
        >
          <div
            className={`grid grid-cols-12 hover:bg-white ${
              page === "services" ? "bg-white" : ""
            } gap-6transition ease-in-out duration-500`}
          >
            {process.map(({ id, title, description, image }) => (
              <div
                key={id}
                data-aos="zoom-in-up"
                data-aos-once="true"
                className="col-span-12 ss:col-span-6 md:col-span-4 flex flex-col items-center md:items-start p-10 gap-4 group"
              >
                <Image
                  src={image}
                  alt="feature icon"
                  width={150}
                  height={150}
                  className="group-hover:-translate-y-2 transition-transform duration-500 ease-in-out"
                />
                <SmallHeading size="sm">{title}</SmallHeading>
                <Paragraph className="text-center md:text-start">
                  {description}{" "}
                </Paragraph>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;

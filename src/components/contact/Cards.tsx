import { contactPageCards } from "@/constants";
import { FC } from "react";

interface CardsProps {}

const Cards: FC<CardsProps> = ({}) => {
  return (
    <section className="sm:py-24 py-16 w-full">
      <div className="container max-w-6xl mx-auto flex flex-col justify-center items-center w-full">
        <div className="grid gap-6 grid-cols-1 ss:grid-cols-2 md:grid-cols-4 transform duration-500 ease-in-out">
          {contactPageCards.map(({ id, title, content, icon }, index) => (
            <div
              key={id}
              data-aos="zoom-in-up"
              data-aos-once="true"
              className="flex flex-col items-center group shadow-md py-10 px-5 bg-white hover:shadow-2xl transition-all ease-in-out duration-1000  gap-2 rounded-lg"
            >
              <div className="p-5 transition-colors duration-500 ease-in-out text-primary group-hover:text-white group-hover:bg-primary rounded-full bg-slate-100">
                {icon}
              </div>
              <h4 className="text-xl sm:text-2xl font-medium">{title}</h4>
              {content.map(({ line1, line2 }) => (
                <ul className="flex flex-col" key={index}>
                  <li className="text-black/80 text-center">
                    <span
                      className={`leading-loose text-base sm:text-[15px] text-black/70 tracking-tight ${
                        index > 1 ? "cursor-pointer hover:text-primary" : ""
                      }`}
                    >
                      {index > 1 ? (
                        index === 2 ? (
                          <a href={`mailto:${line1}`} target="_blank">
                            {line1}
                          </a>
                        ) : (
                          <a href={`tel:${line1}`} target="_blank">
                            {line1}
                          </a>
                        )
                      ) : (
                        line1
                      )}
                    </span>
                  </li>
                  <li className="text-black/80 text-center">
                    <span
                      className={`leading-loose text-base sm:text-[15px] text-black/70 tracking-tight ${
                        index > 1 ? "cursor-pointer hover:text-primary" : ""
                      }`}
                    >
                      {index > 1 ? (
                        index === 2 ? (
                          <a href={`mailto:${line2}`} target="_blank">
                            {line2}
                          </a>
                        ) : (
                          <a href={`tel:${line2}`} target="_blank">
                            {line2}
                          </a>
                        )
                      ) : (
                        line2
                      )}
                    </span>
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;

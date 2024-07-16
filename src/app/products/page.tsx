import Hero from "@/components/Hero";
import GetStarted from "@/components/home/GetStarted";
import Paragraph from "@/components/ui/Paragraph";
import SmallHeading from "@/components/ui/SmallHeading";
import TitleIntro from "@/components/ui/TitleIntro";
import { getAllProducts } from "@/lib/products";
import { Products } from "@/types";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function ProductsPage() {
  const { data } = await getAllProducts();
  const allProducts = data?.data as Products[];
  return (
    <main className="relative min-h-screen">
      <Hero title="Products" />

      <section className="sm:py-24 py-16 w-full relative z-[1]">
        <div className="container max-w-6xl mx-auto flex flex-col justify-center items-center w-full">
          <div className="flex flex-col items-center gap-4 mb-16">
            <TitleIntro>OUR PRODUCTS</TitleIntro>
            <SmallHeading size="lg" className="text-center">
              We Get you Higher Revenues, Not just Higher Ranks
            </SmallHeading>

            <Paragraph className="text-center leading-loose">
              Lorem Dolores suscipit esse, fugiat optio consequuntur deserunt
              velit? Nemo.
            </Paragraph>
          </div>

          <div className="flex flex-col gap-16 w-full">
            {allProducts.map(
              ({ id, icon, title, description, image, list }, index) => (
                <div key={id}>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex flex-col items-center md:items-start gap-4 w-full">
                      <Image
                        src={icon}
                        width={100}
                        height={100}
                        alt="case study icon"
                      />
                      <SmallHeading>{title}</SmallHeading>
                      <Paragraph className="text-center max-w-[60ch] md:text-start leading-loose">
                        {description}
                      </Paragraph>
                      <ul className="flex justify-center md:justify-start gap-6 bg-gray-400/10 rounded-lg w-full p-4">
                        {list.map(({ key, value }) => (
                          <li key={id} className="flex flex-col">
                            <span className="text-primary font-light block text-[14px] uppercase tracking-wide">
                              {key}
                            </span>
                            <span className="font-semibold text-lg">
                              {value}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={`/products/${id}`}
                        className="default-btn w-fit text-base font-thin"
                      >
                        <span className="bg-primary rounded-md p-1">
                          <ChevronRight size={40} />
                        </span>
                        View More
                      </Link>
                    </div>
                    <div className="w-full relative">
                      <div className="case_gradient hidden sm:block opacity-60 w-[450px] absolute right-0 top-0 h-[450px] rounded-full -z-[1]" />
                      <Image
                        src={image}
                        width={1000}
                        height={1000}
                        alt="our case icon"
                      />
                    </div>
                  </div>
                  {index === allProducts.length - 1 ? (
                    ""
                  ) : (
                    <div className="shrink-0 my-6 w-full h-[.5px] bg-[#e3e2ea]" />
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <GetStarted />
    </main>
  );
}

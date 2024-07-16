import { services_bg } from "@/assets";
import Hero from "@/components/Hero";
import GetStarted from "@/components/home/GetStarted";
import Paragraph from "@/components/ui/Paragraph";
import SmallHeading from "@/components/ui/SmallHeading";
import { getAllProducts, getProductByid } from "@/lib/products";
import { Products } from "@/types";
import Image from "next/image";

export const dynamicParams = false;

export async function generateStaticParams() {
  const { data } = await getAllProducts();
  const allProducts = data?.data as Products[];
  return allProducts.map((item) => ({ id: item.id }));
}

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getProductByid(params.id);
  const productsData = data.data as Products;

  const { id, content, description, icon, image, list, title } = productsData;

  return (
    <main className="relative min-h-screen">
      <Hero title="Product Details" />
      <div
        className="sm:py-24 py-16 w-full bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${services_bg.src})` }}
      >
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-12 items-center gap-6 w-full">
            <div className="col-span-12 md:col-span-6">
              <Image
                src={image}
                width={1000}
                height={1000}
                alt="our case icon"
              />
            </div>
            <div className=" col-span-12 md:col-span-6">
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
                <ul className="flex justify-center md:justify-start gap-6 bg-white shadow-lg rounded-lg w-full p-4">
                  {list.map(({ key, value }, index) => (
                    <div key={id} className="flex">
                      <li className="flex flex-col">
                        <span className="text-primary font-light block text-[14px] uppercase tracking-wider">
                          {key}
                        </span>
                        <span className="font-medium text-xl">{value}</span>
                      </li>
                      {index !== list.length - 1 ? (
                        <div className="shrink-0 h-full w-[.5px] mx-6 bg-[#e3e2ea]" />
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 p-8 bg-white rounded-lg">
            {content.map(
              ({ intro, description, title, list, quote, images }, index) => (
                <div key={index} className="grid grid-cols-12 gap-6 w-full">
                  <div className=" col-span-12 md:col-span-5">
                    <SmallHeading className="text-primary">
                      {title}
                    </SmallHeading>{" "}
                  </div>
                  <div className=" col-span-12 md:col-span-7">
                    <div className="flex flex-col gap-4">
                      <SmallHeading size="sm">{intro}</SmallHeading>
                      <Paragraph className=" leading-loose">
                        {description}
                      </Paragraph>
                      {quote.quote !== undefined ? (
                        <div className=" border-l-4 border-primary pl-6 py-6 bg-gray-100">
                          <p className="leading-[1.8] font-semibold text-xl italic">
                            {quote.quote}
                          </p>
                          <div className="flex items-center gap-2 pt-4">
                            <div className="shrink-0 w-6 h-[2px] bg-primary" />
                            <span className="font-medium capitalize italic leading-[1.6]">
                              {quote.author}
                            </span>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      {list ? (
                        <ul className="flex flex-col list-disc pl-4 list-inside">
                          {list.map(({ li }) => (
                            <li key={li}>
                              <span className="leading-loose text-base sm:text-[15px] text-black/70 tracking-tight">
                                {li}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        ""
                      )}
                      {images ? (
                        <div className="grid grid-cols-12 gap-4">
                          {images.map((image, index) => (
                            <div
                              key={index}
                              className="w-full overflow-hidden col-span-4"
                            >
                              <Image
                                src={image}
                                width={400}
                                height={400}
                                alt="detail image"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <GetStarted />
    </main>
  );
}

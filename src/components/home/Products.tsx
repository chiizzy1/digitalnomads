import { FC } from "react";
import SmallHeading from "../ui/SmallHeading";
import { shape5, shape6 } from "@/assets";
import Image from "next/image";
import Paragraph from "../ui/Paragraph";
import TitleIntro from "../ui/TitleIntro";

import ProductsCarousel from "./ProductsCarousel";
import { getAllProducts } from "@/lib/products";
import { Products } from "@/types";

interface ProductsProps {}

const Products: FC<ProductsProps> = async ({}) => {
  const { data } = await getAllProducts();
  const allProducts = data?.data as Products[];

  return (
    <section className="sm:py-24 py-16 w-full relative z-[1]">
      <div className="container max-w-6xl mx-auto flex flex-col justify-center items-center w-full">
        <div className="flex flex-col items-center gap-4 pb-12">
          <TitleIntro> OUR PRODUCTS</TitleIntro>
          <SmallHeading size="lg" className="text-center">
            We Get you Higher Revenues, Not just Higher Ranks
          </SmallHeading>

          <Paragraph className="text-center">
            Lorem Dolores suscipit esse, fugiat optio consequuntur deserunt
            velit? Nemo.
          </Paragraph>
        </div>
        <div className="relative w-full h-full z-[1] transition-transform ease-in-out">
          <ProductsCarousel data={allProducts} />
        </div>
      </div>

      {/* Floating shapes */}
      <div className="shape7">
        <Image
          src={shape5}
          alt="floating image"
          width={70}
          height={70}
          className="absolute right-[18%] top-[30%] hidden md:block z-[1]"
        />
      </div>
      <div className="shape8">
        <Image
          src={shape6}
          alt="floating image"
          width={70}
          height={70}
          className="absolute right-[42%] bottom-[10%] hidden md:block -z-[1]"
        />
      </div>
    </section>
  );
};

export default Products;

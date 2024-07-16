import Hero from "@/components/Hero";
import Paragraph from "@/components/ui/Paragraph";
import SmallHeading from "@/components/ui/SmallHeading";
import { serviceDetails, servicesList } from "@/constants";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getAllServices, getServiceByid } from "@/lib/services";
import { Service } from "@/types";
import GetStarted from "@/components/home/GetStarted";

export const dynamicParams = false;

export async function generateStaticParams() {
  const { data } = await getAllServices();
  const allServices = data?.data as Service[];
  return allServices.map((service) => ({ id: service.id }));
}

export default async function ServicePage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getServiceByid(params.id);
  const service = data?.data as Service;

  const allServicesData = await getAllServices();
  const allServices = allServicesData.data.data as Service[];

  const { id, content, contentImage } = service;

  return (
    <main className="min-h-screen">
      <Hero title="Service Details" />
      <div className="sm:py-24 py-16 w-full">
        <div className="container max-w-6xl mx-auto">
          <div className="grid grid-cols-12 gap-6 w-full">
            <div className="col-span-12 md:col-span-8">
              <Image
                src={contentImage}
                width={1000}
                height={1000}
                alt="service image"
              />
              <div className="pt-8 flex flex-col gap-4">
                {content.map(({ title, details, list }, index) => (
                  <div className="flex flex-col gap-4" key={title}>
                    <SmallHeading>{title}</SmallHeading>
                    <Paragraph className="leading-loose">{details}</Paragraph>
                    <ul className="flex flex-col list-disc pl-4 list-inside">
                      {list.map(({ li }) => (
                        <li key={li} className="leading-[1.8]">
                          <span className="leading-loose text-base sm:text-[15px] text-black/70 tracking-tight">
                            {li}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="p-8 border rounded-lg bg-gray-100 flex flex-col gap-2">
                <SmallHeading> Services List</SmallHeading>
                <hr />
                <ul>
                  {allServices.map(({ id, title }) => (
                    <li
                      key={id}
                      className="bg-white rounded-lg my-3 flex items-center transition-colors duration-500 ease-in-out hover:bg-primary/90 hover:text-white"
                    >
                      <Link
                        className="flex items-center p-2 px-4 justify-between w-full"
                        href={`/services/${id}`}
                      >
                        <span>{title}</span>
                        <ArrowRight size={16} strokeWidth={1.25} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetStarted />
    </main>
  );
}

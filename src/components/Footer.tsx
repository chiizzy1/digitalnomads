"use client";

import { quickLinks, servicesLink, socialMedia } from "@/constants";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import { logo } from "@/assets";
import Paragraph from "./ui/Paragraph";
import { usePathname } from "next/navigation";
import SmallHeading from "./ui/SmallHeading";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  // hide footer in studio admin page
  const pathname = usePathname();

  if (pathname.startsWith("/login")) return null;

  return (
    <section className="sm:py-16 py-8 w-full z-0  bg-white dark:bg-slate-900">
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-6 pb-6">
          <div className="col-span-12 xs:col-span-6 md:col-span-4 flex flex-col min-w-[150px]">
            <div className="flex gap-1 items-center">
              <div className="rounded-md overflow-hidden">
                <Image src={logo} alt="logo" width={80} height={80} />
              </div>
              <span className="uppercase font-bold">Afriwice</span>
            </div>
            <Paragraph className={`my-1 max-w-[312px]`}>
              We offer offer an unparalleled quality that guaraantees the best
              academic well being of your child
            </Paragraph>

            <SmallHeading size="sm">Connect with us</SmallHeading>
            <div className="flex flex-row gap-2 mt-1">
              {socialMedia.map((social, index) => (
                <Link
                  href={`${social.link}`}
                  key={social.id}
                  className="p-[6px] bg-primary/30 text-primary transition-colors duration-75 border border-primary  hover:bg-primary/90  hover:text-white rounded-full"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-12 xs:col-span-6 md:col-span-2">
            {servicesLink.map(({ links, title }) => (
              <div key={title} className={`flex flex-col min-w-[150px]`}>
                <SmallHeading size="sm">{title}</SmallHeading>
                <ul className="list-none mt-4 flex flex-col gap-1">
                  {links.map((link, index) => (
                    <li
                      key={link.name}
                      className={`text-black/80 leading-[1.8] text-base sm:text-[15px]  cursor-pointer w-fit hover:text-primary`}
                    >
                      <Link href={link.link}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="col-span-12 xs:col-span-6 md:col-span-3">
            {quickLinks.map(({ links, title }) => (
              <div key={title} className={`flex flex-col min-w-[150px]`}>
                <SmallHeading size="sm">{title}</SmallHeading>
                <ul className="list-none mt-4 flex flex-col gap-1">
                  {links.map((link, index) => (
                    <li
                      key={link.name}
                      className={`text-black/80 leading-[1.8] text-base sm:text-[15px]  cursor-pointer w-fit hover:text-primary`}
                    >
                      <Link href={link.link}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="col-span-12 xs:col-span-6 md:col-span-3">
            <SmallHeading size="sm">Contact Details</SmallHeading>

            <ul className="list-none mt-4">
              <li className="w-fit">
                <Paragraph className="mb-1">
                  Address: 2750, Quadra Street Victoria, Canada
                </Paragraph>
              </li>

              <li className="mb-1">
                <a href={`tel:+2348140267847`} target="_blank">
                  <span className="text-black/80 leading-[1.8] text-base sm:text-[15px]  cursor-pointer w-fit hover:text-primary">
                    {" "}
                    +234 814 026 7847
                  </span>
                </a>
              </li>

              <li>
                <a
                  className="w-full"
                  href={`mailto:hello@afriwice.com`}
                  target="_blank"
                >
                  <span className="text-black/80 leading-[1.8] text-base sm:text-[15px]  cursor-pointer w-fit hover:text-primary">
                    Email: hello@afriwice.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full flex justify-center items-center py-6 border-t-[1px] border-t-[#3F3E45]">
          <p className="text-center text-xs leading-[27px]">
            Copyright Ⓒ {new Date().getFullYear()}{" "}
            <span className="font-bold">AFRIWICE</span> . All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { navLinks } from "@/constants";
import Image from "next/image";
import { logo } from "@/assets";
import {
  Menu,
  X,
  PencilLine,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [stickyClass, setStickyClass] = useState<boolean>(false);
  const [active, setActive] = useState<string>("");

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 50 ? setStickyClass(true) : setStickyClass(false);
    }
  };

  //get active page
  const pathname = usePathname();

  useEffect(() => {
    setActive(pathname === "/" ? "home" : pathname.split("/")[1]);
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, [pathname]);

  return (
    <nav
      className={`top-0 left-0 right-0 fixed z-50 py-4 flex items-center justify-center transition-all ease-in-out duration-500
    ${
      stickyClass
        ? "bg-white backdrop-blur-sm border-b border-slate-300 shadow-lg"
        : ""
    }`}
    >
      <div className="container max-w-6xl mx-auto w-full transition">
        {/* Upper section */}
        <div
          className={`${
            stickyClass ? "hidden" : "flex"
          } items-center justify-center transition-all ease-in-out`}
        >
          <div className=" w-full flex justify-between items-center transition">
            <ul className="flex items-center gap-6 ">
              <li className="flex gap-2 items-center">
                <a
                  className="flex items-center rounded-lg group transition-colors ease-in-out duration-500 cursor-pointer"
                  href={`mailto:hello@afriwice.com`}
                  target="_blank"
                >
                  <div className="p-[6px] bg-primary/20 text-primary transition-colors duration-75 border border-primary  group-hover:bg-primary/90  group-hover:text-white rounded-md">
                    <Mail size={14} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-bold leading-loose pl-2  group-hover:text-primary">
                    hello@afriwice.com
                  </span>
                </a>
              </li>
              <div className="shrink-0 h-4 w-[.5px] bg-primary" />
              <li className="flex gap-2 items-center">
                <a
                  className="flex items-center rounded-lg group transition-colors ease-in-out duration-500 cursor-pointer"
                  href={`tel:+1-485-456-0102`}
                  target="_blank"
                >
                  <div className="p-[6px] bg-primary/20 text-primary transition-colors duration-75 border border-primary  group-hover:bg-primary/90  group-hover:text-white rounded-md">
                    <Phone size={14} strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-bold leading-loose pl-2  group-hover:text-primary">
                    +1-485-456-0102
                  </span>
                </a>
              </li>
              <div className="hidden sm:block shrink-0 h-4 w-[.5px] bg-primary" />
              <ul className="hidden sm:flex items-center gap-2">
                <li className="text-primary hover:-translate-y-1">
                  <a href={`facebook.com`} target="_blank">
                    <Facebook size={16} strokeWidth={1} />
                  </a>
                </li>
                <li className="text-primary hover:-translate-y-1">
                  <a href={`facebook.com`} target="_blank">
                    <Instagram size={16} strokeWidth={1} />
                  </a>
                </li>
                <li className="text-primary hover:-translate-y-1">
                  <a href={`facebook.com`} target="_blank">
                    <Twitter size={16} strokeWidth={1} />
                  </a>
                </li>
                <li className="text-primary hover:-translate-y-1">
                  <a href={`facebook.com`} target="_blank">
                    <Linkedin size={16} strokeWidth={1} />
                  </a>
                </li>
              </ul>
            </ul>
          </div>
        </div>

        {/* Main navbar content */}
        <div
          className={`flex justify-between items-center ${
            stickyClass ? "" : "pt-6"
          } transition`}
        >
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-4"
            data-aos="zoom-in-left"
            data-aos-delay="150"
            prefetch
          >
            <Image src={logo} alt="logo" width={80} height={80} />
            <span className={`uppercase text-sm sm:text-base font-bold`}>
              Afriwice
            </span>
          </Link>

          <ul
            className="hidden items-center gap-4 md:flex"
            data-aos="zoom-in-left"
            data-aos-delay="300"
          >
            {navLinks.map((navLink) => (
              <li
                key={navLink.id}
                className={`underline-offset-4 text-sm font-medium ${
                  active === navLink.title.toLowerCase()
                    ? "text-primary"
                    : "hover:text-primary"
                } `}
              >
                <Link href={navLink.page}>{navLink.title}</Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <div
              className="hidden xs:block"
              data-aos="zoom-in-left"
              data-aos-delay="600"
            >
              <Link href={`/contact`}>
                <Button className="py-[0.7rem] sm:py-[1.4rem] transform px-3 sm:px-6">
                  <PencilLine />
                  <span className="pl-2 text-xs sm:text-sm font-semibold">
                    Get in touch
                  </span>
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex justify-center items-center">
              <div>
                <button
                  className="flex items-center justify-center rounded-lg cursor-pointer transition-transform ease-in-out"
                  onClick={() => setToggle(!toggle)}
                >
                  {toggle ? <X size={40} /> : <Menu size={40} />}
                </button>

                <div
                  className={`${
                    !toggle ? "hidden" : "flex"
                  } p-6 bg-white border border-primary shadow-lg backdrop-blur-sm z-[999999] absolute top-[100px] right-0 left-0 mx-4 my-2 rounded-xl sidebar`}
                >
                  <ul className="list-none flex justify-end items-start flex-1 flex-col transition-all ease-in-out">
                    {navLinks.map((navLink, index) => (
                      <Link
                        href={navLink.page}
                        key={navLink.id}
                        className={`mb-4 w-full ${
                          active === navLink.title.toLowerCase()
                            ? "text-primary"
                            : "hover:text-primary"
                        }`}
                      >
                        <span>{navLink.title}</span>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

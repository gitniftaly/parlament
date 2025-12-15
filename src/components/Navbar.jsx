"use client";
import React from "react";
import Image from "next/image";
import flag from "../../images/qerb.jpg";
import logaaz from "../../images/pt.png";
import { FiMenu } from "react-icons/fi";
import { useEffect, useState } from "react";
import Container from "./Container";
import { language } from "@/constants/contents";
import useContextApi from "@/contextapi/useContextApi";
import ENavbar from "@/newdesign/Navbar";
import Link from "next/link";

const Navbar = () => {
  const { lang, setLang } = useContextApi();
  // eslint-disable-next-line no-unused-vars
  const [content, setContent] = useState(language[lang]);

  useEffect(() => {
    setContent(language[lang]);
  }, [lang]);

  const MenuIcon = () => (
    <FiMenu size={35} className="text-gray-200 cursor-pointer relative" />
  );

  return (
    <>
      <Container
        className="flex flex-col justify-between h-32 sm:h-48 sm:w-full rounded-t-md bg-nav-background
      .0"
      >
        <div className="flex  w-full  justify-between items-center mt-3 relative">
          <Image
            alt="azflag"
            src={logaaz}
            className="w-[60px]  sm:w-[100px] h-auto z-20"
          />
          <div className="flex flex-col sm:full">
            <article className=" text-white text-xl ml-5 sm:ml-0 flex font-bold font-serif sm:text-2xl sm:tracking-wide">
              Azərbaycan Xalq Parlamenti
            </article>
            <article className=" text-white ml-5 sm:flex text-italicized font-serif text-sm sm:text-xl sm:tracking-wide">
              {`Azerbaijan Popular Parliament`}
            </article>
          </div>

          <select
            className="bg-nav-background h-8 rounded-md border border-white text-white mr-2 sm:mr-0"
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="az" defaultValue>
              az
            </option>
            <option value="en">en</option>
          </select>

          <Image
            alt="flaq"
            src={flag}
            width="100"
            height="auto"
            className="rounded-md  hidden sm:flex"
          />
          <nav className="hidden sm:flex absolute mt-48 pl-10 text-white font-normal text-lg items-center">
            <ENavbar />
          </nav>
          <div className="pr-2 pl-2 sm:hidden">
            <Link href="/menuicon">
              <MenuIcon />
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;

"use client";
import Image from "next/image";
import logaaz from "../../images/logaaz.png";
import flag from "../../images/flag.png";
import bf from "../../images/bf.png";
import Link from "next/link";
import NavLink from "./NavLink";
import { FiMenu } from "react-icons/fi";
import { navContents, urls } from "@/constants/constan";
import Menu from "./Menu";
import { useState } from "react";
import Container from "./Container";
import InfoMenu from "./InfoMenu";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import MobileMenu from "./MobileMenu";
import Rules from "./Rules";
import ElectionsView from "./ElectionsView";

const Navbar = () => {
  const [mobMenu, setMobMenu] = useState(false);
  const [iconView, setIconView] = useState(false);

  const onSelectIterm = (e) => {
    setIconView(true);
  };

  const Bkg = () => (
    <Image
      alt="bf"
      src={bf}
      fill={true}
      quality="100"
      className="-z-0 mt-0 ml-0 w-full"
    />
  );

  const MenuIcon = () => (
    <FiMenu size={40} className="text-gray-200 cursor-pointer relative" />
  );
  return (
    <>
      <Container
        className="flex flex-row justify-between 
                           bg-green-900 sm:w-full m-0 p-0"
      >
        {/* <Bkg /> */}
        <section className="flex items-center gap-2">
          <Image alt="azflag" src={logaaz} width="60" height="60" />
          <article className="mt-1 text-white flex flex-col items-start">
            <div className="tracking-wider font-medium">Azərbaycan</div>
            <div className="tracking-wider font-medium">Xalq</div>
            <div className="tracking-wider font-medium">Parlamenti</div>
          </article>
        </section>

        <section
          className="hidden sm:w-[570px] sm:flex
             justify-around items-center h-8 m-auto
             font-serif font-normal"
        >
          {navContents.map((text, ind) => (
            <NavLink
              key={ind}
              text={
                text.substring(0, 5) === "Rules" ? (
                  <div className="flex justify-center items-center">
                    <Rules text={text} />
                    {!iconView ? (
                      <MdArrowDropUp size="20" />
                    ) : (
                      <MdArrowDropDown size="20" />
                    )}
                  </div>
                ) : text === "Info" ? (
                  <div className="flex justify-center items-center">
                    <InfoMenu text={text} />
                    {!iconView ? (
                      <MdArrowDropUp size="20" />
                    ) : (
                      <MdArrowDropDown size="20" />
                    )}
                  </div>
                ) : text === "Elections" ? (
                  <div className="flex justify-center items-center">
                    <ElectionsView text={text} />
                    {!iconView ? (
                      <MdArrowDropUp size="20" />
                    ) : (
                      <MdArrowDropDown size="20" />
                    )}
                  </div>
                ) : (
                  text
                )
              }
              url={urls[text.replace(/\s/g, "").toLowerCase()]}
              className="font-normal"
            />
          ))}
        </section>

        <section className="p-5 hidden sm:flex ">
          <Image
            alt="flaq"
            src={flag}
            width="60"
            height="60"
            className="rounded-md border border-blue-600"
          />
        </section>
        <section
          className="items-center  flex relative mx-[8px]
                    justify-center sm:hidden text-gray-400 
                  "
        >
          <MobileMenu obj={<MenuIcon />} />
        </section>
      </Container>
      {/* {mobMenu ? <Menu /> : ""} */}
    </>
  );
};

export default Navbar;

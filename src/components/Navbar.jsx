"use client";
import Image from "next/image";
import logaaz from "../../images/logaaz.png";
import flag from "../../images/flag.png";
import NavLink from "./NavLink";
import { FiMenu } from "react-icons/fi";
import { urls } from "@/constants/constan";

import { useEffect, useState, useContext } from "react";
import Container from "./Container";
import InfoMenu from "./InfoMenu";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

import MobileMenu from "./MobileMenu";
import Rules from "./Rules";
import ElectionsView from "./ElectionsView";
import { language } from "@/constants/contents";
import TartarMenuDrop from "@/components/menudropdown/TartarMenuDrop";
import { ContextApi } from "@/contextapi/CreateContexApi";

const Navbar = () => {
  const [iconView] = useState(false);
  const hrefList = Object.values(urls);
  const { lang, setLang } = useContext(ContextApi);
  const [content, setContent] = useState(language[lang]);

  useEffect(() => {
    setContent(language[lang]);
  }, [lang]);

  const MenuIcon = () => (
    <FiMenu size={40} className="text-gray-200 cursor-pointer relative" />
  );

  return (
    <>
      <Container className="flex flex-row justify-between h-32 bg-gradient-to-r from-blue-900 via-red-800 to-green-900 sm:w-full rounded-t-md">
        <section className="flex items-center gap-2">
          <Image alt="azflag" src={logaaz} className="w-[60px] h-auto" />
          <article className="mt-1 text-white flex flex-col items-start">
            <div className="tracking-wider font-bold">Azərbaycan</div>
            <div className="tracking-wider font-bold">Xalq</div>
            <div className="tracking-wider font-bold">Parlamenti</div>
          </article>
        </section>

        <section
          className="hidden sm:w-[570px] sm:flex flex-1
             justify-between items-center h-8 m-auto
             font-serif font-normal mx-20"
        >
          {content.map((text, ind) => (
            <NavLink
              key={ind}
              text={
                ind === 1 ? (
                  <div className="flex justify-center items-center">
                    <Rules text={text} />
                    {!iconView ? (
                      <MdArrowDropUp size="20" />
                    ) : (
                      <MdArrowDropDown size="20" />
                    )}
                  </div>
                ) : ind === 0 ? (
                  <div className="flex justify-center items-center">
                    <InfoMenu text={text} lang={lang} />
                    {!iconView ? (
                      <MdArrowDropUp size="20" />
                    ) : (
                      <MdArrowDropDown size="20" />
                    )}
                  </div>
                ) : ind === 2 ? (
                  <div className="flex justify-center items-center">
                    <ElectionsView text={text} lang={lang} />
                    {!iconView ? (
                      <MdArrowDropUp size="20" />
                    ) : (
                      <MdArrowDropDown size="20" />
                    )}
                  </div>
                ) : ind === 5 ? (
                  <div className="flex justify-center items-center">
                    <TartarMenuDrop text={text} lang={lang} />
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
              url={hrefList[ind]}
              className="font-normal"
            />
          ))}
        </section>
        <section className="flex h-8 items-center justify-center m-auto w-12">
          <select
            className="bg-nav-background h-8 w-12 rounded-md border border-white"
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="az" defaultValue>
              az
            </option>
            <option value="en">en</option>
          </select>
        </section>
        <section className="p-3 hidden sm:flex h-20  my-auto">
          <Image
            alt="flaq"
            src={flag}
            width="60"
            height="auto"
            className="rounded-md border border-blue-600"
          />
        </section>

        <section
          className="items-center  flex relative mx-[8px]
                    justify-center sm:hidden text-gray-400 
                  "
        >
          <MobileMenu lang={lang} obj={<MenuIcon />} />
        </section>
      </Container>
    </>
  );
};

export default Navbar;

"use client";
import Image from "next/image";
import flag from "../../images/qerb.jpg";
import logaaz from "../../images/pt.png";
// import flag from "../../images/flag.png";
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
import AboutSubLinks from "@/components/submenus/AboutSubLinks";
import DepDropdownMenue from "./deputies/DeputiesDropdown";

const Navbar = () => {
  const [iconView] = useState(false);
  const hrefList = Object.values(urls);
  const { lang, setLang } = useContext(ContextApi);
  const [content, setContent] = useState(language[lang]);

  useEffect(() => {
    setContent(language[lang]);
  }, [lang]);

  const MenuIcon = () => (
    <FiMenu size={35} className="text-gray-200 cursor-pointer relative" />
  );

  return (
    <>
      <Container className="flex flex-col justify-between h-32 sm:h-36 sm:w-full rounded-t-md bg-nav-background">
        <div className="flex  w-full  justify-between items-center mt-3 ">
          <Image
            alt="azflag"
            src={logaaz}
            className="w-[60px]  sm:w-[75px] h-auto z-20"
          />
          <div className="flex flex-col sm:full">
            <article className=" text-white text-xl ml-5 sm:ml-0 flex font-bold font-serif sm:text-2xl sm:tracking-wide">
              Azərbaycan Xalq Parlamenti
            </article>
            <article className=" text-white ml-5 sm:flex text-italicized font-serif text-sm sm:text-xl sm:tracking-wide">
              {`People's Parliament of Azerbaijan`}
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
            width="60"
            height="auto"
            className="rounded-md  hidden sm:flex"
          />
        </div>
        <div className="flex w-full justify-between items-center -mt-2">
          <section
            className="hidden sm:w-full sm:flex
             justify-between items-center h-8 sm:mb-3
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
                  ) : ind === 3 ? (
                    <div className="flex justify-center items-center">
                      <AboutSubLinks text={text} lang={lang} />

                      {!iconView ? (
                        <MdArrowDropUp size="20" />
                      ) : (
                        <MdArrowDropDown size="20" />
                      )}
                    </div>
                  ) : ind === 5 ? (
                    <div className="flex justify-center items-center">
                      <DepDropdownMenue text={text} lang={lang} />
                      {!iconView ? (
                        <MdArrowDropUp size="20" />
                      ) : (
                        <MdArrowDropDown size="20" />
                      )}
                    </div>
                  ) : ind === 6 ? (
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

          <section
            className="mb-14 h-8 w-[395px] flex  justify-end px-1 z-30
                     sm:hidden text-gray-400 absolute"
          >
            <MobileMenu lang={lang} obj={<MenuIcon />} />
          </section>
        </div>
      </Container>
    </>
  );
};

export default Navbar;

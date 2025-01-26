"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import Link from "next/link";

import st from "../../images/statement/st.png";
import rg from "../../images/rg.png";

import Image from "next/image";
import InfoLinks from "./submenus/InfoLinks";
import ElectionsLinks from "./submenus/ElectionsLinks";
import TartarSubLinks from "./submenus/TartarSubLinks";
import AboutMobileSubs from "./submenus/AboutMobileSubs";

const MobileMenu = ({ lang, obj }) => {
  const inputElement = React.useRef();
  const [showlinks, setShowLinks] = useState(false);
  const [subInfo, setSubInfo] = useState(true);
  const [subElection, setSubElection] = useState(false);
  const [subTartar, setSubTartar] = useState(false);
  const [subAbout, setAbout] = useState(false);

  const handleRules = (e) => {
    e.stopPropagation();
    setShowLinks((hell) => !hell);
    inputElement.current.click();
  };
  const handleInfoLinks = (e) => {
    e.stopPropagation();
    setSubInfo((hell) => !hell);
    inputElement.current.click();
  };
  const handleElectionLinks = (e) => {
    e.stopPropagation();
    setSubElection((hell) => !hell);
    inputElement.current.click();
  };
  const handleTartarLinks = (e) => {
    e.stopPropagation();
    setSubTartar((hell) => !hell);
    inputElement.current.click();
  };
  const handleAboutLinks = (e) => {
    e.stopPropagation();
    setAbout((hell) => !hell);
    inputElement.current.click();
  };

  return (
    <>
      <DropdownMenu className="">
        <DropdownMenuTrigger>{obj}</DropdownMenuTrigger>

        <DropdownMenuContent className="bg-blue-200 absolute ml-[-300px] shadow-lg w-[250px]">
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              alt="home"
              href="/"
              onClick={() => inputElement.current.click()}
            >
              {lang === "az" ? "Giriş" : "Home"}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
            className="flex flex-col"
            onClick={() => setSubInfo((ln) => !ln)}
          >
            <InfoLinks
              className=" w-full px-8"
              infolinks={subInfo}
              handleInfoLinks={handleInfoLinks}
              lang={lang}
            />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
            className="flex flex-col"
            onClick={() => setShowLinks((ln) => !ln)}
          >
            <div className="flex w-full">
              <span className={`flex`}>
                {lang === "az" ? "Sənədlər" : "Documents"}
                {showlinks ? (
                  <MdArrowDropDown size="20" />
                ) : (
                  <MdArrowDropUp size="20" />
                )}
              </span>
            </div>

            {showlinks ? (
              <div className="flex flex-col mt-[-5px]">
                <div className="text-gray-600 flex">
                  <Image
                    alt="statement"
                    src={st}
                    width="16"
                    height="16"
                    className="-ml-[15px] mr-2 "
                  />
                  <Link
                    href={"/documents/statement"}
                    alt="statement"
                    onClick={(e) => handleRules(e)}
                  >
                    Bəyannamə | Etik kodeksi
                  </Link>
                </div>
                <div
                  className="text-gray-600 flex"
                  onClick={(e) => handleRules(e)}
                >
                  <Image
                    alt="statement"
                    src={rg}
                    width="16"
                    height="16"
                    className="-ml-[15px] mr-2 "
                  />
                  <Link href={"/documents/regulations"} alt="regulations">
                    Nizamnamə | Reqlament
                  </Link>
                </div>
                <div
                  className="text-gray-600 flex"
                  onClick={(e) => handleRules(e)}
                >
                  <Image
                    alt="archive"
                    src={rg}
                    width="16"
                    height="16"
                    className="-ml-[15px] mr-2 "
                  />
                  <Link href={"/documents/archive"} alt="archive">
                    Arxiv
                  </Link>
                </div>
                {/* <div
                  className="text-gray-600 flex"
                  onClick={(e) => handleRules(e)}
                >
                  <FcNook size={16} />
                  <Link href={"/documents/regulations"} alt="regulations">
                    Document Templetləri
                  </Link>
                </div> */}
              </div>
            ) : (
              ""
            )}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
            className="flex flex-col"
            onClick={() => setSubElection((ln) => !ln)}
          >
            <ElectionsLinks
              className="-ml-14"
              electionLinks={subElection}
              handleElectionLinks={handleElectionLinks}
              lang={lang}
            />
            {/* </section> */}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
            className="flex flex-col"
            onClick={() => setAbout((ln) => !ln)}
          >
            <AboutMobileSubs
              className=""
              mlinks={subAbout}
              handleAbout={handleAboutLinks}
              lang={lang}
            />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              alt="media"
              href="/media"
              onClick={() => inputElement.current.click()}
            >
              Media
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              alt="media"
              href="/contact"
              onClick={() => inputElement.current.click()}
            >
              {lang === "az" ? "Əlaqə" : "Contact us"}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
            onClick={() => setSubTartar((ln) => !ln)}
          >
            <Link
              alt="tartar"
              href="/tartar"
              // onClick={() => inputElement.current.click()}
            >
              <TartarSubLinks
                tlinks={subTartar}
                handleTartarLinks={handleTartarLinks}
                lang={lang}
              />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="bg-red-100 font-extrabold">
            <span className="font-bold w-full flex items-center justify-center">
              <div ref={inputElement}>Close</div>
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default MobileMenu;

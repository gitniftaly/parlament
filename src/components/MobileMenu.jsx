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

const MobileMenu = ({ lang, obj }) => {
  const inputElement = React.useRef();
  const [showlinks, setShowLinks] = useState(false);
  const [subInfo, setSubInfo] = useState(true);
  const [subElection, setSubElection] = useState(false);
  const [subTartar, setSubTartar] = useState(false);

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
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>{obj}</DropdownMenuTrigger>

        <DropdownMenuContent className="bg-white absolute ml-[-300px] shadow-md w-[250px]">
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              alt="home"
              href="/"
              onClick={() => inputElement.current.click()}
            >
              Home
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
            />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
            className="flex flex-col"
            onClick={() => setShowLinks((ln) => !ln)}
          >
            <span className="flex items-center -ml-[73px]">
              Rules & Regulations
              {showlinks ? (
                <MdArrowDropDown size="20" />
              ) : (
                <MdArrowDropUp size="20" />
              )}
            </span>
            {showlinks ? (
              <div className="flex flex-col -ml-[20px] mt-[-5px]">
                <div className="text-gray-600 flex">
                  <Image
                    alt="statement"
                    src={st}
                    width="16"
                    height="16"
                    className="-ml-[5px] mr-2 "
                  />
                  <Link
                    href={"/regulation/statement"}
                    alt="statement"
                    onClick={(e) => handleRules(e)}
                  >
                    Statement - Bəyanət
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
                    className="-ml-[5px] mr-2 "
                  />
                  <Link href={"/regulation/regulations"} alt="regulations">
                    Regulations - Nizamnamə
                  </Link>
                </div>
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
            />
            {/* </section> */}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>About</DropdownMenuItem>
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
              Contact us
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onSelect={(e) => e.preventDefault()}
            className="flex flex-col"
            onClick={() => setSubTartar((ln) => !ln)}
          >
            <Link
              alt="tartar"
              href="/tartar"
              // onClick={() => inputElement.current.click()}
            >
              <TartarSubLinks
                className="-ml-14"
                tlinks={subTartar}
                handleTartarLinks={handleTartarLinks}
                lang={lang}
              />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="bg-gray-300 ">
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

"use client";
import React, { useState } from "react";
import useContextApi from "@/contextapi/useContextApi";
import { newNavBarContent } from "@/constants/contents";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import Link from "next/link";

const Navbar = () => {
  const { lang } = useContextApi();
  const [activeId, setActiveId] = useState(null);

  const toggleIcon = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full h-full">
      <ul className="flex w-full h-auto list-none gap-6 text-center">
        {newNavBarContent.map((nav, ind) => (
          <li
            key={ind}
            className="flex items-center"
            onClick={() => toggleIcon(nav.idn)}
            // onClick={() => console.log(ind)}
          >
            <Link href={nav.url}>
              {lang === "az" ? nav.infoaz : nav.infoen}
            </Link>
            {activeId === nav.idn ? <MdArrowDropUp /> : <MdArrowDropDown />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

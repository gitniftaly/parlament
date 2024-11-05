"use client";
import React, { useState } from "react";
import { navContents, urls } from "@/constants/constan";
import NavLink from "./NavLink";
import Head from "next/head";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

const Menu = () => {
  const [open, setOpen] = useState(true);

  const mobMenu = () => {
    return (
      <div
        className="p-5 grid grid-cols-1  sm:hidden absolute -mt-12 
                  gap-3 h-[450px] w-[300px] m-4 bg-gray-400
                  border-inherit border rounded-md"
      >
        <div className="flex justify-between">
          <h1 className="font-bold">Menu</h1>
          <h1
            className="font-bold text-red-500 "
            onClick={() => setOpen(false)}
          >
            X
          </h1>
        </div>
        <hr />
        {navContents.map((text, ind) => (
          <NavLink
            className="px-1"
            key={ind}
            text={
              text.substring(0, 5) === "Rules" ? (
                <>
                  {text}
                  <div className="flex flex-col px-5 text-whte/50 font-normal py-1">
                    <Link alt="statement" href={"/regulation/statement"}>
                      <span className="font-white text-sm">AzXP statement</span>
                    </Link>
                    <Link alt="regulation" href={"/regulation/regulations"}>
                      <span className="font-white text-sm">
                        AzXP Regulations
                      </span>
                    </Link>
                  </div>
                </>
              ) : (
                text
              )
            }
            url={urls[text.replace(/\s/g, "").toLowerCase()]}
            onClick={() => setOpen(false)}
          />
        ))}
        <hr />
        <div className="flex bg-slate-100 h-[50px] items-center justify-center rounded-md">
          <h1 className="font-semibold" onClick={() => setOpen(false)}>
            Close
          </h1>
        </div>
      </div>
    );
  };
  return open ? mobMenu() : "";
};

export default Menu;

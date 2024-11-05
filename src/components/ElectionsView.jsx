"use client";
import { useState } from "react";
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
import Link from "next/link";

const ElectionsView = ({ text }) => {
  const [iconView, setIconView] = useState(false);

  const onSelectIterm = (e) => {
    setIconView(true);
  };
  return (
    <DropdownMenu className="bg-green-800">
      <DropdownMenuTrigger
        onClick={() => setIconView(false)}
        onMouseOver={() => setIconView(false)}
      >
        {text}
      </DropdownMenuTrigger>
      {!iconView ? (
        <DropdownMenuContent>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              alt="commission"
              href={"/elections/electioncommision"}
              onClick={(e) => onSelectIterm(e)}
            >
              Election Commission
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              alt="election"
              href={"/elections/electionyear"}
              onClick={(e) => onSelectIterm(e)}
            >
              Election 2024
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      ) : (
        ""
      )}
    </DropdownMenu>
  );
};

export default ElectionsView;

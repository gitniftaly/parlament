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
} from "../ui/dropdown-menu";
import Link from "next/link";

const TartarMenuDrop = ({ text, lang }) => {
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
              alt="active"
              href={"/tartar/active"}
              onClick={(e) => onSelectIterm(e)}
            >
              {lang === "azn" ? "Activlər" : "Active"}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              alt="late"
              href={"/tartar/late"}
              onClick={(e) => onSelectIterm(e)}
            >
              {lang === "azn" ? "Qətil olunmuşlar" : "Not active"}
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      ) : (
        ""
      )}
    </DropdownMenu>
  );
};

export default TartarMenuDrop;

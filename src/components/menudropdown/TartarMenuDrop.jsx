"use client";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";

const TartarMenuDrop = ({ text, lang }) => {
  const [iconView, setIconView] = useState(false);

  const onSelectIterm = () => {
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
              className="sublinks"
              alt="active"
              href={"/tartar/ttorture"}
              onClick={(e) => onSelectIterm(e)}
            >
              {lang === "az" ? "Tərtər hadisələri" : "Tartar evnets"}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              className="sublinks"
              alt="late"
              href={"/tartar/nardaran"}
              onClick={(e) => onSelectIterm(e)}
            >
              {lang === "az" ? "Nardaran hadisələri" : "Nardaran events"}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              className="sublinks"
              alt="late"
              href={"/tartar/ganzha"}
              onClick={(e) => onSelectIterm(e)}
            >
              {lang === "az" ? "Gəncə hadisələri" : "Ganzha events"}
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

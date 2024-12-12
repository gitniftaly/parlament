"use client";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

const ElectionsView = ({ text, lang }) => {
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
              alt="commission"
              href={"/elections/electioncommision"}
              onClick={(e) => onSelectIterm(e)}
            >
              {lang === "az" ? "Seçki komissiyası" : "Election Commission"}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              className="sublinks"
              alt="election"
              href={"/elections/electionyear"}
              onClick={(e) => onSelectIterm(e)}
            >
              {lang === "az" ? "Namizədlər-2024" : "Candidates-2024"}
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

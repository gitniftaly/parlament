"use client";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const AboutSubLinks = ({ text, lang }) => {
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
              href={"/about/aboutazxp"}
              onClick={(e) => onSelectIterm(e)}
            >
              {lang === "az" ? "AzXP ilə tanışlıq" : "About AzXP"}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              className="sublinks"
              alt="election"
              href={"/about/initiativegroup"}
              onClick={(e) => onSelectIterm(e)}
            >
              {lang === "az" ? "Təşəbbüs qrupu" : "Initiative group"}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              className="sublinks"
              alt="election"
              href={"/about/founders"}
              onClick={(e) => onSelectIterm(e)}
            >
              {lang === "az" ? "Təsisçilər" : "Founders"}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              className="sublinks"
              alt="election"
              href={"/about/elccommision"}
              onClick={(e) => onSelectIterm(e)}
            >
              {lang === "az" ? "Seçki Komissiyası" : "Election commision"}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              className="sublinks"
              alt="election"
              href={"/about/discipline"}
              onClick={(e) => onSelectIterm(e)}
            >
              {lang === "az" ? "İntizam Komissiyası" : "Discipline commision"}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              className="sublinks"
              alt="election"
              href={"/about/counterteam"}
              onClick={(e) => onSelectIterm(e)}
            >
              {lang === "az" ? "Hesablayıcı Komissiyası" : "Counter commision"}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              className="sublinks"
              alt="election"
              href={"/about/deputies/deputies2024"}
              onClick={(e) => onSelectIterm(e)}
            >
              {lang === "az" ? "Deputatlar" : "Deputies"}
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      ) : (
        ""
      )}
    </DropdownMenu>
  );
};

export default AboutSubLinks;

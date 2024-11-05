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

const InfoMenu = ({ text }) => {
  const [iconView, setIconView] = useState(false);

  const onSelectIterm = (e) => {
    setIconView(true);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        onClick={() => setIconView(false)}
        onMouseOver={() => setIconView(false)}
      >
        {text}
      </DropdownMenuTrigger>
      {!iconView ? (
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link alt="news" href={"/news"} onClick={(e) => onSelectIterm(e)}>
              News
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              alt="announcements"
              href={"/announcements"}
              onClick={(e) => onSelectIterm(e)}
            >
              Announcements
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              alt="decisions"
              href={"/decisions"}
              onClick={(e) => onSelectIterm(e)}
            >
              Decisions
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      ) : (
        ""
      )}
    </DropdownMenu>
  );
};

export default InfoMenu;

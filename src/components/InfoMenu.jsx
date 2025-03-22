import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

const InfoMenu = ({ text, lang }) => {
  const [iconView, setIconView] = useState(false);

  const onSelectIterm = () => {
    setIconView(true);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        onClick={() => setIconView(false)}
        onMouseOver={() => setIconView(false)}
        className="focus:underline focus:underline-offset-8 decoration-2"
      >
        {text}
      </DropdownMenuTrigger>
      {!iconView ? (
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link
              className="sublinks"
              alt="news"
              href={"/news/newsLine"}
              onClick={(e) => onSelectIterm(e)}
            >
              {lang === "az" ? "Xəbərlər" : "News line"}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              className="sublinks"
              alt="announcements"
              href={"/news/announcements"}
              onClick={(e) => onSelectIterm(e)}
            >
              {lang === "az" ? "Elanlar" : "Announcements"}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              className="sublinks"
              alt="decisions"
              href={"/news/decisions"}
              onClick={(e) => onSelectIterm(e)}
            >
              {lang === "az" ? "Qərarlar" : "Decisions"}
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

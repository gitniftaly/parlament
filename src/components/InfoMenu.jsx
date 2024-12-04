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
      >
        {text}
      </DropdownMenuTrigger>
      {!iconView ? (
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link
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

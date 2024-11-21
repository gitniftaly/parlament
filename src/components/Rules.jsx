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

const Rules = ({ text }) => {
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
            <Link
              alt="statement"
              href={"/regulation/statement"}
              onClick={(e) => onSelectIterm(e)}
            >
              AzXP statement - Bəyanət
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              alt="regulation"
              href={"/regulation/regulations"}
              onClick={(e) => onSelectIterm(e)}
            >
              AzXP Regulations - Nizamnamə
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      ) : (
        ""
      )}
    </DropdownMenu>
  );
};

export default Rules;

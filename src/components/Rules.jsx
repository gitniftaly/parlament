import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

const Rules = ({ text }) => {
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
              className="sublinks"
              alt="statement"
              href={"/regulation/statement"}
              onClick={(e) => onSelectIterm(e)}
            >
              Bəyannamə
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              className="sublinks"
              alt="regulation"
              href={"/regulation/regulations"}
              onClick={(e) => onSelectIterm(e)}
            >
              Nizamnamə
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

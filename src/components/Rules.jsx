import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

const Rules = ({ text, lang }) => {
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
              alt="statement"
              href={"/documents/statement"}
              onClick={(e) => onSelectIterm(e)}
            >
              Bəyannamə | Etik kodeksi
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              className="sublinks"
              alt="documents"
              href={"/documents/regulations"}
              onClick={(e) => onSelectIterm(e)}
            >
              Nizamnamə | Reqlament
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              className="sublinks"
              alt="archive"
              href={"/documents/archive"}
              onClick={(e) => onSelectIterm(e)}
            >
              {lang === "az" ? "Arxiv" : "Archive"}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              className="sublinks"
              alt="Templates"
              href={"/documents/ebooks"}
              onClick={(e) => onSelectIterm(e)}
            >
              {lang === "az" ? "Electron kitablar" : "EBooks"}
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

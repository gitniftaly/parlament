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
              href={"/documents/doctemplates"}
              onClick={(e) => onSelectIterm(e)}
            >
              {lang === "az" ? "Document Templetləri" : "Document Templates"}
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

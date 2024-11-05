"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdArrowDropUp } from "react-icons/md";

const NavLink = ({ text, url, className, onClick, icon, ...props }) => {
  const param = usePathname();

  return (
    <div className="hover:bg-gray-400 rounded-sm  text-white">
      <Link
        className={clsx(
          `${
            param === url
              ? "underline underline-offset-8 decoration-2 decoration-slate-500 rounded-lg"
              : ""
          }`,
          className
        )}
        href={url}
        onClick={onClick}
        {...props}
      >
        {/* {text.substring(0, 5) === "Rules"
          ? `Rules & regulations ${icon}`
          : text} */}
        {text}
      </Link>
    </div>
  );
};

export default NavLink;

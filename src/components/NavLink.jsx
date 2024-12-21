"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ text, url, className, onClick, ...props }) => {
  const param = usePathname();

  return (
    <div className="hover:bg-gray-400 rounded-sm  text-white">
      <Link
        className={clsx(
          `${
            param === url
              ? "underline underline-offset-8 decoration-2 decoration-white rounded-lg"
              : ""
          }`,
          className
        )}
        href={url}
        onClick={onClick}
        {...props}
      >
        {text}
      </Link>
    </div>
  );
};

export default NavLink;

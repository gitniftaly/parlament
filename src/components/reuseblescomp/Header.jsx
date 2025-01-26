import React from "react";
import clsx from "clsx";

const Header = ({ text, className }) => {
  return (
    <header
      className={clsx("flex w-full items-center justify-center", className)}
    >
      <h1 className="font-bold font-sans">{text}</h1>
    </header>
  );
};

export default Header;

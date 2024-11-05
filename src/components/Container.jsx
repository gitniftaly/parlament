import React from "react";
import clsx from "clsx";
import Image from "next/image";
import bf from "../../images/bf.png";
const Container = ({ className, ...props }) => {
  return (
    <div
      className={clsx(
        "max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-8",
        className
      )}
      {...props}
    />
  );
};

export default Container;

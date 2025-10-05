"use client";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import React, { useState } from "react";
import useContextApi from "@/contextapi/useContextApi";

const ElectionsLinks = () => {
  const [icon, setIcon] = useState(false);
  const { lang } = useContextApi();

  return (
    <>
      <div className="w-full">
        <span className={`flex`} onClick={() => setIcon((isicon) => !isicon)}>
          {lang === "az" ? "Seçkilər" : "Elections"}
          {icon ? <MdArrowDropDown size="20" /> : <MdArrowDropUp size="20" />}
        </span>
      </div>
    </>
  );
};

export default ElectionsLinks;

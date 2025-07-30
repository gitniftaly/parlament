"use client";
import Image from "next/image";
import React from "react";
import useContextApi from "@/contextapi/useContextApi";

const Activists = () => {
  const { hide, setHide } = useContextApi();

  const hideOnClick = () => {
    setHide(false);
  };
  return (
    <div
      className={`flex flex-col w-[350px] h-[350px] my-56 justify-center items-center
      sm:w-[470px] sm:h-[470px] absolute sm:my-40 ${
        hide ? "visible" : "invisible"
      }`}
    >
      <Image
        alt="activists"
        width={300}
        height={300}
        src="/politics/activists.jpg"
        layout="responsive"
        className="sm:w-[400px]"
      />
      <div
        className="flex w-10 m-1 bg-red-600 h-10 rounded-full justify-center items-center"
        onClick={hideOnClick}
      >
        <span className="flex text-white justify-center items-center font-extrabold w-10 h-10">
          X
        </span>
      </div>
    </div>
  );
};

export default Activists;

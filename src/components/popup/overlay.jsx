"use client";
import React from "react";
import useContextApi from "@/contextapi/useContextApi";
import Image from "next/image";
import { useState } from "react";
import { politicsList } from "@/constants/politics";

const Overlay = () => {
  const { hide } = useContextApi();
  const [showPol, setShowPol] = useState(false);
  const [pol, setPol] = useState(politicsList[1]);

  const fetchPol = (num) => {
    const polInfo = politicsList[num];
    setPol(polInfo);
    setShowPol(true);
  };

  // const hideOnClick = () => {
  //   setHide(false);
  // };
  let arrLength = 25;
  let data = Array.from({ length: arrLength }, (_, index) => index + 1);

  return (
    <>
      <div
        className={`grid grid-cols-5 w-[325px] h-[325px] sm:w-[470px] sm:h-[470px] bg-transparent
      text-transparent font-bold absolute my-52 sm:my-32 z-40 gap-0 ${
        hide ? "visible" : "invisible"
      }`}
      >
        {data.map((item) => (
          <div
            className="flex justify-center items-center"
            key={item}
            onClick={() => fetchPol(item - 1)}
          >
            {item}
          </div>
        ))}
      </div>
      <div
        className={`font-bold text-yellow-300 z-50 w-[300px] h-auto mt-52  bg-blue-400 absolute
        sm:mt-36 flex flex-col justify-center items-center rounded-xl ${
          showPol ? "visible" : "invisible"
        }`}
      >
        <Image
          alt="pol"
          src={pol.img}
          width={200}
          height={200}
          layout="responsive"
          className="flex w-auto h-20 mb-2 rounded-xl"
        />
        <div className="w-full justify-start px-3">
          <p>Name:&nbsp;{pol.name}</p>
          <p>Since:&nbsp;{pol.since}</p>
          <p>Work:&nbsp;{pol.work}</p>
        </div>
        <div
          className=" flex justify-center items-center w-10 h-10 mb-1 rounded-full font-bold text-white bg-orange-800"
          onClick={() => setShowPol(false)}
        >
          X
        </div>
      </div>
    </>
  );
};

export default Overlay;

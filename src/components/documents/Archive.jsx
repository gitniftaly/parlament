import React from "react";

import LinkElement from "../reuseblescomp/LinkElement";
import { archive } from "@/constants/archive";
const Archive = () => {
  return (
    <section className="flex w-full mt-5 flex-col h-[70px] items-center gap-3 h-full w-full">
      <header className="flex justify-center w-full h-5">
        <h1 className="font-bold">Azxp arxivi</h1>
      </header>
      {archive.map((data) => (
        <LinkElement
          key={data.id}
          link={data.link}
          alt="parla"
          date={data.date}
          title={data.titleAz}
          className="h-32 shadow-md flex gap-10 p-2 font-bold w-[360px] sm:w-[600px] items-center"
        />
      ))}
    </section>
  );
};

export default Archive;

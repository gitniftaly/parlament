import React from "react";
import { committees } from "@/constants/commeettes";
import LinkElement from "@/components/reuseblescomp/LinkElement";
const Commeettees = () => {
  return (
    <div className="flex gap-1 flex-col">
      {committees.map((com, ind) => (
        <LinkElement
          key={ind}
          link={com.pdfLink}
          alt={com.alt}
          title={com.titleAz}
          date={com.date}
          target="_blank"
          className="flex w-full gap-3 sm:w-[780px] mx-auto p-2 font-bold"
        />
      ))}
    </div>
  );
};

export default Commeettees;

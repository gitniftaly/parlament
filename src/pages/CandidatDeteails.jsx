/* eslint-disable react/prop-types */
import React from "react";
import UserInfo from "./UserInfo";
import Image from "next/image";

const CandidatDeteails = ({ item }) => {
  return (
    <div className="sm:flex py-10 sm:gap-1 relative">
      <div
        className="h-[350px] w-[350px] border border-gray-300 flex justify-center 
                       items-center rounded-lg p-1 ml-6 mb-1"
      >
        {item?.img && (
          <Image
            alt={item.idn || "image"}
            src={item.img}
            height={340}
            width={340}
            className="rounded-lg"
          />
        )}
      </div>
      <UserInfo item={item} />
    </div>
  );
};

export default CandidatDeteails;

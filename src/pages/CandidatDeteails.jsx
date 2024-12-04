import React from "react";
import UserInfo from "./UserInfo";
import Image from "next/image";

const CandidatDeteails = ({ item }) => {
  return (
    <div className="sm:flex py-10 sm:gap-1">
      <div
        className="h-[320px] w-[320px] border border-gray-300 flex justify-center 
                       items-center rounded-lg p-4"
      >
        <Image
          alt={item?.id}
          src={item?.img}
          height={340}
          width={340}
          className="rounded-lg"
        />
      </div>
      <UserInfo item={item} />
    </div>
  );
};

export default CandidatDeteails;

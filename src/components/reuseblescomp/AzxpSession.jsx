import Image from "next/image";
import Link from "next/link";
import React from "react";

// eslint-disable-next-line react/prop-types
const AzxpSession = ({ src, text, link }) => {
  return (
    <div
      className="flex border border-gray-300 h-[200px] shadow-sm 
                           rounded-md items-center sm:h-[190px]"
    >
      <Link
        target="_blank"
        href={link}
        className="flex items-center flex-col gap-2 sm:h-[200px] sm:py-3"
      >
        <div className="font-bold mt-1">
          <p>{text}</p>
        </div>
        <Image
          src={src}
          alt="join"
          width={300}
          height={300}
          className="sm:flex h-[144px] rounded-md"
        />
      </Link>
    </div>
  );
};

export default AzxpSession;

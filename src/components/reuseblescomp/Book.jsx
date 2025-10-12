/* eslint-disable react/prop-types */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Book = ({ data }) => {
  return (
    <div className="h-[150px] sm:w-[780px] relative border-b shadow-md border-gray-300 rounded-lg max-w-lg mx-auto p-2 flex sm:gap-4">
      <Link href={data.pdfUrl} target="_blank" className="flex gap-5">
        <Image
          src={data.imgUrl}
          alt={data.titleAz}
          className="w-[100px] h-full rounded-md"
          width={100}
          height={140}
        />
        <article className="flex flex-col  justify-end font-bold">
          <div className="flex">
            <p className="w-[60px]">Year:</p>
            <span className="flex sm:pl-5 pl-2">{data.year}</span>
          </div>
          <div className="flex ">
            <p className="w-[60px]">Title:</p>
            <span className="sm:pl-5 pl-2 sm:max-w-64 max-w-56 truncate whitespace-nowrap overflow-hidden">
              {data.titleAz}
            </span>
          </div>
          <div className="flex">
            <p className="w-[60px]">Author:</p>
            <span className="flex sm:pl-5 pl-2">{data.author}</span>
          </div>
        </article>
      </Link>
      <Image
        src={data.qr}
        alt={data.title}
        className="w-[70px] h-[70px] absolute top-0 right-0 mt-2 mr-1"
        width={70}
        height={70}
      />
    </div>
  );
};

export default Book;

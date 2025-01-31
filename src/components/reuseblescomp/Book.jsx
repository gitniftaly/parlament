import React from "react";

import Image from "next/image";
import Link from "next/link";

const Book = ({ data }) => {
  return (
    <div className="h-[150px] sm:w-[780px] border-b shadow-md border-gray-300 rounded-lg max-w-lg mx-auto p-2 flex gap-4">
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
            <span className="flex pl-5">{data.year}</span>
          </div>
          <div className="flex">
            <p className="w-[60px]">Title:</p>
            <span className="flex pl-5">{data.titleAz}</span>
          </div>
          <div className="flex">
            <p className="w-[60px]">Author:</p>
            <span className="flex pl-5">{data.author}</span>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default Book;

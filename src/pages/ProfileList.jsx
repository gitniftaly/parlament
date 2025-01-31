import Image from "next/image";
import React from "react";

const ProfileList = ({ data }) => {
  return (
    <div
      className="h-24 flex w-full sm:w-[500px] items-start rounded-lg border border-gray-300 
                    mt-1 shadow-md sm:mt-2"
    >
      <div className=" flex px-3  mt-2 bg-inherit  gap-3 sm:gap-10  w-full h-auto">
        <section className="flex items-start h-full w-20 rounded-full bg-green-500">
          <Image
            src={data?.img}
            alt="pic1"
            width="100"
            height="100"
            sizes="(max-width: 500px) 70px, 320px"
            className="rounded-full"
          />
        </section>
        <section className="flex flex-col mt-3">
          <p
            className="font-bold font-serif text-italicized truncate
          overflow-ellipsis overflow-hidden whitespace-nowrap sm:max-w-fit max-w-72"
          >
            {data?.Adı}
          </p>

          <p className="sublinks flex justify-between">
            <span>{data?.Ölkəsi}</span>&nbsp;&nbsp;&nbsp;
            <span className="font-bold">{data?.vote + " səslə"}</span>
          </p>
        </section>
      </div>
    </div>
  );
};

export default ProfileList;

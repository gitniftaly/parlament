import Image from "next/image";
import React from "react";

const ProfileList = ({ data }) => {
  return (
    <div className="h-24 flex w-full sm:w-[500px] justify-center items-center ">
      <div
        className="h- flex px-3  mt-3 bg-inherit shadow sm:shadow-md 
                      rounded-lg gap-3 sm:gap-10 items-start w-full border border-gray-300"
      >
        <section className="flex items-center justify-center h-full w-20 rounded-full bg-green-500">
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

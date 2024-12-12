import Image from "next/image";
import React from "react";

const ProfileList = ({ data }) => {
  return (
    <div className="h-24 flex w-full sm:w-[500px] justify-center items-center ">
      <div
        className="h-20 flex px-3  mt-3 bg-inherit shadow sm:shadow-md 
                      rounded-lg gap-3 sm:gap-10 items-start w-full border border-gray-300"
      >
        <section className="flex items-center justify-center h-full w-20 rounded-full bg-green-500">
          <Image
            src={data?.img}
            alt="pic1"
            width="70"
            height="70"
            layout="responsive"
            sizes="(max-width: 500px) 70px, 320px"
            className="rounded-full"
          />
        </section>
        <section className="flex flex-col">
          <p
            className="font-bold font-serif text-italicized truncate
          overflow-ellipsis overflow-hidden whitespace-nowrap sm:max-w-fit max-w-72"
          >
            {data?.Adı}
          </p>
          <p className="text-black ">{data?.İxtisas}</p>
          <p>{data?.Ölkəsi}</p>
        </section>
      </div>
    </div>
  );
};

export default ProfileList;

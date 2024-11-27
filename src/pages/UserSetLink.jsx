"use client";
import Link from "next/link";
import { useContext } from "react";

import { ContextApi } from "@/contextapi/CreateContexApi";

const UserSetLink = () => {
  const { links } = useContext(ContextApi);

  return (
    <>
      {links.name && links.url ? (
        <div
          className=" flex  absolute z-20  w-[350px] mt-2  h-7
           text-white items-center font-serif rounded-sm
             justify-between px-2 bg-black"
        >
          <Link href={links.url}>
            <span className="animate-pulse overflow-ellipsis overflow-hidden">
              {links.name}
            </span>
          </Link>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default UserSetLink;

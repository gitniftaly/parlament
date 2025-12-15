import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const InitiativeGroup = () => {
  return (
    <div className="h-dvh bg-background -mt-2 rounded-xl">
      <div className="p-2 w-full">
        <Link href={"/about"} className="text-lg">
          <IoArrowBackOutline />
        </Link>
      </div>
      Initiative Group comming soon
    </div>
  );
};

export default InitiativeGroup;

import Anouncments from "@/files/Anouncments";
import Commeettees from "@/pages/Commeettees";
import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const page = () => {
  return (
    <div className="flex flex-col w-full bg-background -mt-2 rounded-xl py-5 justify-center">
      <div className="p-2">
        <Link href={"/news"} className="text-lg">
          <IoArrowBackOutline />
        </Link>
      </div>
      <header className="font-bold mx-auto py-2">
        <h1>Informasiya: elanlar bölməsi.</h1>
      </header>
      <Commeettees />
      <Anouncments />
    </div>
  );
};

export default page;

import Container from "@/components/Container";
import Portret from "@/components/reuseblescomp/Portret";
import { counterTeam } from "@/constants/discipline";
import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const page = () => {
  return (
    <Container className="flex bg-background -mt-2 rounded-t-2xl h-dvh w-full flex-col items-center">
      <div className="p-2 w-full">
        <Link href={"/about"} className="text-lg">
          <IoArrowBackOutline />
        </Link>
      </div>
      <header>
        <h1 className="flex mt-2 font-bold font-sans items-center flex-col">
          <p>Azərbaycan Xalq Parlamentinin</p>
          <p>hesablayıcı komissiyası</p>
        </h1>
      </header>
      <div
        className="flex sm:flex-row flex-col sm:w-full sm:grid sm:grid-cols-3 w-[400px] sm:gap-0 gap-1 mb-10 
                    items-center sm:items-start overflow-auto sm:h-[810px]"
      >
        {counterTeam.map((data) => (
          <Portret data={data} key={data.name} />
        ))}
      </div>
    </Container>
  );
};

export default page;

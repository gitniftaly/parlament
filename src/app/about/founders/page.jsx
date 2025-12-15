"use client";

import React from "react";
import useContextApi from "@/contextapi/useContextApi";
import Container from "@/components/Container";
import { bordofdirectors } from "@/constants/discipline";
import Portret from "@/components/reuseblescomp/Portret";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";
const Founders = () => {
  const { lang } = useContextApi();

  // const title = lang

  return (
    <Container className="flex bg-background -mt-2 rounded-t-2xl h-dvh w-full flex-col items-center">
      <div className="p-2 w-full">
        <Link href={"/about"} className="text-lg">
          <IoArrowBackOutline />
        </Link>
      </div>
      <header>
        <h1 className="flex font-bold font-sans items-center flex-col">
          {lang === "az" ? (
            <>
              <p>Azərbaycan Xalq Parlamentinin</p>
              <p>Rəyasət Heyyəti</p>
            </>
          ) : (
            <>
              <p>Azerbaijan Popular Parliament</p>
              <p>Bord of Directors</p>
            </>
          )}
        </h1>
      </header>
      <div
        className="flex sm:flex-row flex-col sm:w-full sm:grid sm:grid-cols-3 w-[400px] sm:gap-0 gap-1 mb-10 
                    items-center sm:items-start overflow-auto sm:h-[810px]"
      >
        {bordofdirectors.map((data) => (
          <Portret data={data} key={data.name} />
        ))}
      </div>
    </Container>
  );
};

export default Founders;

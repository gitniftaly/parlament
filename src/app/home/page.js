"use client";
import Container from "@/components/Container";
import Image from "next/image";
import mammd from "../../../public/mammd.png";
import AzxMemoazn from "@/pages/axpMemAzn";
import AxpMemoEng from "@/pages/AxpMemoEng";
import { ContextApi } from "@/contextapi/CreateContexApi";
import { useContext } from "react";
import Link from "next/link";

const HomeContent = () => {
  const { lang, links } = useContext(ContextApi);

  return (
    <Container
      className="sm:px-4 lg:px-0 flex-grow  bg-background h-dvh w-full 
                          rounded-t-xl -mt-2 overflow-y-scroll"
    >
      <section className="flex justify-center mt-3">
        <Image
          alt="mmad"
          src={mammd}
          height={200}
          width={600}
          className="rounded-lg w-full h-auto"
        />
      </section>
      {links.name !== "" && (
        <Link
          href={links.url}
          className="flex absolute animate-pulse text-white bg-black items-center mt-2 w-[400px] px-2 h-7 border border-gray-400 z-20 rounded-md"
        >
          <span className="max-w-44 hover:max-w-64 overflow-ellipsis overflow-hidden whitespace-nowrap">
            {links.name}
          </span>
        </Link>
      )}
      <div className="hidden sm:flex sm:flex-row p-1 gap-1">
        <div className="rounded-xl shadow-lg border border-gray-200 w-full h-auto">
          <AzxMemoazn />
        </div>
        <div className="rounded-xl shadow-lg border border-gray-200 w-full h-auto">
          <AxpMemoEng />
        </div>
      </div>
      <div className="sm:hidden">
        {lang === "az" ? <AzxMemoazn /> : <AxpMemoEng />}
      </div>
    </Container>
  );
};

export default HomeContent;

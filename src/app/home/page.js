"use client";
import Container from "@/components/Container";
// import Image from "next/image";
// import mammd from "../../../public/mammd.png";
// import AzxMemoazn from "@/pages/axpMemAzn";
// import AxpMemoEng from "@/pages/AxpMemoEng";
// import { ContextApi } from "@/contextapi/CreateContexApi";
// import { useContext } from "react";
import Link from "next/link";
import { useEffect } from "react";
import Video from "next-video";
import vid2 from "/videos/vid.mp4";
import { getItem, setItem } from "@/utils/localStore";
import useContextApi from "@/contextapi/useContextApi";

const HomeContent = () => {
  // const { lang, links } = useContext(ContextApi);

  const { visitorCount, setVisitorCount, VISITOR } = useContextApi();

  useEffect(() => {
    const res = async () => {
      const item = await getItem(VISITOR);
      if (item) {
        let count = item;
        setItem("visitor", ++count);
        setVisitorCount(count);
      } else {
        setItem(VISITOR, 1);
      }
    };
    res();
  }, [VISITOR, setVisitorCount]);

  return (
    <Container
      className="sm:px-4 lg:px-0 flex flex-col  bg-background h-dvh 
                          rounded-t-xl -mt-2 overflow-y-scroll gap-9 items-center"
    >
      <div className="font-bold font-sans sm:text-2xl p-5">
        <header>
          {/* <h1 className="text-orange-900 font-bold gap-4 flex  text-lg">
            Sayıta baxış:
            <span className="text-blue-600">{visitorCount}</span>
          </h1> */}
          <h1>
            Azərbaycan Xalq Parlamentinə seçki həftəsi 23.12.2024 - 29.12.2024
            tarixlərində.
          </h1>
        </header>
      </div>
      <div className="sm:w-[768px] w-[360px]">
        <Link
          href="https://pollforall.com/p3omgynq"
          className="font-bold text-xl sm:text-2xl flex justify-center bg-green-700 text-white animate-pulse p-3"
        >
          Səs vermək üçün bu linki açın
        </Link>
      </div>
      <div className="flex sm:w-[768px] w-[360px]">
        <Video src={vid2} className="" />
      </div>
      {/* <section className="flex justify-center mt-3">
        <Image
          alt="mmad"
          src={mammd}
          height={200}
          width={600}
          className="rounded-lg w-full h-auto"
        />
      </section> */}
      {/* {links.name !== "" && (
        <Link
          href={links.url}
          className="flex absolute animate-pulse text-white bg-black items-center mt-2 w-[400px] px-2 h-7 border border-gray-400 z-20 rounded-md"
        >
          <span className="max-w-44 hover:max-w-64 overflow-ellipsis overflow-hidden whitespace-nowrap">
            {links.name}
          </span>
        </Link>
      )} */}
      {/* <div className="hidden sm:flex sm:flex-row p-1 gap-1">
        <div className="rounded-xl shadow-lg border border-gray-200 w-full h-auto">
          <AzxMemoazn />
        </div>
        <div className="rounded-xl shadow-lg border border-gray-200 w-full h-auto">
          <AxpMemoEng />
        </div>
      </div> */}
      {/* <div className="sm:hidden">
        {lang === "az" ? <AzxMemoazn /> : <AxpMemoEng />}
      </div> */}
    </Container>
  );
};

export default HomeContent;

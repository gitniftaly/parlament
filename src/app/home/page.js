"use client";
import Container from "@/components/Container";
// import Image from "next/image";
// import mammd from "../../../public/mammd.png";
// import AzxMemoazn from "@/pages/axpMemAzn";
// import AxpMemoEng from "@/pages/AxpMemoEng";
// import Link from "next/link";
// import useContextApi from "@/contextapi/useContextApi";
import { useEffect, useState } from "react";
const HomeContent = () => {
  // const { lang, links } = useContextApi();
  const url = "https://pollforall.com/p3omgynq";
  const [iframeSrc, setIframeSrc] = useState("");

  useEffect(() => {
    setIframeSrc(url);
  }, [url]);

  return (
    <Container
      className="sm:px-4 lg:px-0 flex flex-col h-dvh  bg-background  justify-center
                          rounded-t-xl -mt-2 overflow-y-scroll items-center"
    >
      <div className="sm:w-[500px] w-[400px]  sm:[500px] -mt-20 flex flex-col items-center justify-center">
        <h1 className="font-bold mb-5">
          Azxp parlamentinə seçilmiş xalq vəkilləri.
        </h1>
        {iframeSrc && <iframe src={iframeSrc} width="100%" height="700px" />}
      </div>

      {/* <section className="flex m-auto mt-3 sm:w-full sm:h-auto">
        <Image
          alt="mmad"
          src={mammd}
          height={400}
          width={300}
          className="flex rounded-lg w-full h-[100px] sm:h-[200px]"
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
      </div>
      <div className="sm:hidden">
        {lang === "az" ? <AzxMemoazn /> : <AxpMemoEng />}
      </div> */}
    </Container>
  );
};

export default HomeContent;

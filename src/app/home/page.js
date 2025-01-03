"use client";
import Container from "@/components/Container";
// import Image from "next/image";
// import mammd from "../../../public/mammd.png";
import AzxMemoazn from "@/pages/axpMemAzn";
import AxpMemoEng from "@/pages/AxpMemoEng";
// import Link from "next/link";
import useContextApi from "@/contextapi/useContextApi";

const HomeContent = () => {
  const { lang } = useContextApi();

  return (
    <Container
      className="flex flex-col  bg-background  justify-center
    rounded-t-xl -mt-2 overflow-y-scroll items-center"
    >
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
      )}  */}
      <div className="hidden sm:flex sm:flex-row p-1 gap-1">
        <div className="rounded-xl shadow-lg border border-gray-200 w-full h-auto">
          <AzxMemoazn />
        </div>
        <div className="rounded-xl shadow-lg border border-gray-200 w-full h-auto">
          <AxpMemoEng />
        </div>
      </div>
      <div className="sm:hidden flex">
        {lang === "az" ? <AzxMemoazn /> : <AxpMemoEng />}
      </div>
    </Container>
  );
};

export default HomeContent;

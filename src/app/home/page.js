"use client";
import Container from "@/components/Container";
import Image from "next/image";
import mammd from "../../../public/mammd.png";
import AzxMemoazn from "@/pages/axpMemAzn";
import AxpMemoEng from "@/pages/AxpMemoEng";
import { ContextApi } from "@/contextapi/CreateContexApi";
import { useContext } from "react";

const HomeContent = () => {
  const { lang } = useContext(ContextApi);
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

      {lang === "az" ? <AzxMemoazn /> : <AxpMemoEng />}
    </Container>
  );
};

export default HomeContent;

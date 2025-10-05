"use client";
import Container from "@/components/Container";
import React from "react";
import useContextApi from "@/contextapi/useContextApi";
import Link from "next/link";
import { LiaHandPointRight } from "react-icons/lia";

const FirstEleciton = () => {
  const { lang, dep2024 } = useContextApi();
  return (
    <Container
      className="flex flex-col h-auto bg-background rounded-xl -mt-2
                          overflow-y-scroll items-center "
    >
      <h1 className="py-5 text-lg font-bold text-blue-500">First Election!</h1>
      <section className="text-center sm:flex text-blue-700 font-bold text-lg font-serif flex flex-col pb-10">
        <Link href="/pdf.pdf" target="_blank" className="h-10">
          <div className="flex items-center gap-2 border-b border-gray-300 pb-2">
            <span className="py-1 font-bold text-lg">
              {lang === "az" ? "Namizədlər" : "Candidates"}
            </span>
            <LiaHandPointRight />
          </div>
        </Link>

        <div className="flex py-2 h-10">
          <span className="py-1 font-bold text-lg ">
            {lang === "az" ? "Seçilmişlər" : "Elected"}
          </span>
        </div>
        <div className="flex h-[500px] w-auto overflow-y-auto pt-2">
          <ul className="list-none font-normal">
            {dep2024.map((itm, ind) =>
              ind <= 86 ? (
                <li key={ind} className="flex items-start">
                  {ind + 1}.&nbsp;{itm.Adı}
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>
      </section>
    </Container>
  );
};

export default FirstEleciton;

"use client";
import Container from "@/components/Container";
import Image from "next/image";
import React from "react";
import useContextApi from "@/contextapi/useContextApi";

const ThirdEleciton = () => {
  const { lang } = useContextApi();
  return (
    <Container
      className="flex flex-col h-auto pb-10 bg-background rounded-xl -mt-2
                        overflow-y-scroll items-center "
    >
      <h1 className="py-10 text-blue-500 text-lg font-bold">Third Election!</h1>
      <section className="text-center sm:flex gap-2">
        <div>
          <span className="py-1 font-bold text-lg ">
            {lang === "az" ? "Namizədlər" : "Candidates"}
          </span>
          <Image
            src="/elections/elthird.jpg"
            alt="election2"
            width={400}
            height={600}
          />
        </div>
        <div>
          <span className="py-1 font-bold text-lg ">
            {lang === "az" ? "Seçilmişlər" : "Elected"}
          </span>
          <Image
            src="/elections/elthirdfinal.jpg"
            alt="election2"
            width={400}
            height={600}
          />
        </div>
      </section>
    </Container>
  );
};

export default ThirdEleciton;

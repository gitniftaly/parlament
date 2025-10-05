"use client";
import Container from "@/components/Container";
import React from "react";
import useContextApi from "@/contextapi/useContextApi";
import Image from "next/image";

const SecondElection = () => {
  const { lang } = useContextApi();

  return (
    <Container
      className="flex flex-col h-auto pb-10 bg-background rounded-xl -mt-2
                        overflow-y-scroll items-center "
    >
      <h1 className="py-5 text-lg text-blue-500 font-bold">
        {lang === "az" ? "İkinci seçki" : " Second Election"}
      </h1>
      <section className="text-center sm:flex gap-2">
        <div>
          <span className="py-1 font-bold text-lg ">
            {lang === "az" ? "Namizədlər" : "Candidates"}
          </span>
          <Image
            src="/elections/seccandidates.jpg"
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
            src="/elections/secelected.jpg"
            alt="election2"
            width={400}
            height={600}
          />
        </div>
        <div>
          <span className="py-1 font-bold text-lg ">
            {lang === "az" ? "Rotasiya" : "Rotated"}
          </span>
          <Image
            src="/elections/rotatecand.jpg"
            alt="election2"
            width={400}
            height={600}
          />
        </div>
      </section>
    </Container>
  );
};

export default SecondElection;

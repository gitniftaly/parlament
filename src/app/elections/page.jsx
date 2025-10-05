"use client";
import Container from "@/components/Container";
import ElectionView from "@/components/reuseblescomp/ElectionView";
import { electionAz, electionEn } from "@/constants/votesCounter";
import React from "react";
import useContextApi from "@/contextapi/useContextApi";

const Election = () => {
  const { lang } = useContextApi();
  const elect = lang === "az" ? electionAz : electionEn;
  return (
    <Container
      className="flex flex-col h-auto bg-background rounded-xl -mt-2
                       overflow-y-scroll items-center gap-4 pb-10"
    >
      <h1 className="py-10 text-lg text-blue-500 font-bold">
        {lang === "az" ? "Keçirilmiş seçkilər" : " All elections information."}
      </h1>
      {elect.map((itm, ind) => (
        <div key={ind}>
          <ElectionView href={itm.href} text={itm.text} />
        </div>
      ))}
    </Container>
  );
};

export default Election;
